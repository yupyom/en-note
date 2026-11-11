#!/usr/bin/env python3
"""読み上げた音声を、サイトで使う「1文＝1ファイル」の形に整えて audio/ に置く。

使い方:
    # _do_not_upload_/mp3/ に音声を置いて実行する（wav / mp3 / m4a など）
    python3 tools/split_audio.py

    # 1つだけ処理するとき / 名前の違うファイルを処理するとき
    python3 tools/split_audio.py _do_not_upload_/mp3/d14.mp3
    python3 tools/split_audio.py "path/to/音声.mp3" --as d14

音声ファイルの名前（_do_not_upload_/tts/sentences_index.tsv の「キー」に合わせる）:
    p12.mp3        単語帳12 の質問と返答（2文を続けて読んだもの → 無音のところで2つに切る）
    p12.mail.mp3   単語帳12 のメール例文（1文）
    d3.mp3         会話3 を通して読んだもの（→ 行ごとに切る）
    m5.mp3         メール5 の本文（切らずに1つのまま）
    c2.mp3         使い分け2 の例文A・B（→ 2つに切る）
    p12.q.mp3 のようにキーそのままの名前なら、その1文として扱う。
    tts/batches/ のバッチ名（p_get.mp3 など、動詞ごとにまとめて読んだもの）にも対応している。

整えた音声は audio/ に入り、data/audio.js（サイトが読む対応表）も作り直される。
ファイルごとに声の大きさが違うときは、聞きやすいようにそろえる（--keep-volume でそのまま）。
必要なもの: ffmpeg

切る場所の決め方:
    無音の長さだけでなく「その行の文字数から見て、音声の長さが自然か」も合わせて判断する。
    行の途中にある短い間（"Let me check. / We have ..." など）で切ってしまうのを防ぐため。
"""
import argparse
import re
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PRIVATE = ROOT / "_do_not_upload_"
TTS = PRIVATE / "tts"
SOURCES = [PRIVATE / "mp3", TTS / "input"]  # 音声を置く場所
AUDIO_DIR = ROOT / "audio"
MANIFEST = ROOT / "data" / "audio.js"
EXTS = {".wav", ".mp3", ".m4a", ".flac", ".ogg", ".aiff", ".aif"}

HEAD_PAD = 0.08   # 切り出す音声の前に残す無音（秒）
TAIL_PAD = 0.22   # 後ろに残す無音（秒）。語尾が切れないよう少し長め
GAP_WEIGHT = 0.5  # 「長い無音で切る」ことをどれだけ重く見るか
TARGET_DB = -22.0  # そろえる音量（平均、dB）。元の音声でいちばん多い大きさ
PEAK_DB = -1.0     # 大きくするときも、いちばん大きい音はここまで


def run(cmd):
    return subprocess.run(cmd, capture_output=True, text=True, check=False)


def duration_of(path):
    r = run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(path)])
    return float(r.stdout.strip())


def volume_of(path, start=None, length=None):
    """音声（またはその一部）の (平均音量, 最大音量)（dB）。測れなければ (None, None)。"""
    cmd = ["ffmpeg", "-hide_banner", "-nostats"]
    if start is not None:
        cmd += ["-ss", f"{start:.3f}", "-t", f"{length:.3f}"]
    r = run(cmd + ["-i", str(path), "-af", "volumedetect", "-f", "null", "-"])
    mean = re.search(r"mean_volume: (-?[\d.]+) dB", r.stderr)
    peak = re.search(r"max_volume: (-?[\d.]+) dB", r.stderr)
    return (float(mean.group(1)), float(peak.group(1))) if mean and peak else (None, None)


def gain_for(mean, peak):
    """音量を TARGET_DB にそろえるための増減（dB）。差が小さいときは触らない。"""
    if mean is None:
        return 0.0
    gain = max(-6.0, min(TARGET_DB - mean, 10.0, PEAK_DB - peak))
    return round(gain, 1) if abs(gain) >= 1.5 else 0.0


def detect_silences(path, noise_db, min_silence):
    r = run(["ffmpeg", "-hide_banner", "-nostats", "-i", str(path),
             "-af", f"silencedetect=noise={noise_db}dB:d={min_silence}", "-f", "null", "-"])
    starts = [float(x) for x in re.findall(r"silence_start: (-?[\d.]+)", r.stderr)]
    ends = [float(x) for x in re.findall(r"silence_end: (-?[\d.]+)", r.stderr)]
    return starts, ends


def speech_chunks(path, noise_db, min_silence):
    """無音で区切られた「声のかたまり」を [(開始, 終了), ...] で返す。"""
    total = duration_of(path)
    starts, ends = detect_silences(path, noise_db, min_silence)
    if len(ends) < len(starts):
        ends.append(total)  # 最後まで無音のまま終わった場合
    chunks, pos = [], 0.0
    for s, e in zip(starts, ends):
        s = max(s, 0.0)
        if s - pos > 0.03:
            chunks.append((pos, s))
        pos = e
    if total - pos > 0.03:
        chunks.append((pos, total))
    return chunks, total


def weight(text):
    """読み上げにかかる時間の目安。数字や略語は文字数より長く読まれるので多めに数える。"""
    letters = len(re.findall(r"[A-Za-z]", text))
    digits = len(re.findall(r"\d", text))
    pauses = len(re.findall(r"[.,?!;:]", text))
    return letters + digits * 4 + pauses * 2 + 3


def choose_groups(chunks, texts):
    """声のかたまりを、行数ぶんの連続したグループに分ける（いちばん自然な分け方を探す）。"""
    n, k = len(texts), len(chunks)
    durs = [e - s for s, e in chunks]
    gaps = [chunks[i + 1][0] - chunks[i][1] for i in range(k - 1)]  # gaps[i]: かたまり i と i+1 の間
    total_speech = sum(durs)
    weights = [weight(t) for t in texts]
    expected = [w / sum(weights) * total_speech for w in weights]
    prefix = [0.0]
    for d in durs:
        prefix.append(prefix[-1] + d)

    def cost(j, a, b):  # 行 j に かたまり a..b-1 を割り当てたときの不自然さ
        rel = (prefix[b] - prefix[a] - expected[j]) / expected[j]
        inner = sum(min(g, 1.0) for g in gaps[a:b - 1])  # 行の中に長い無音が残るのは不自然
        return rel * rel + GAP_WEIGHT * inner

    INF = float("inf")
    best = [[INF] * (k + 1) for _ in range(n + 1)]
    back = [[0] * (k + 1) for _ in range(n + 1)]
    best[0][0] = 0.0
    for j in range(1, n + 1):
        for b in range(j, k - (n - j) + 1):
            for a in range(j - 1, b):
                if best[j - 1][a] == INF:
                    continue
                c = best[j - 1][a] + cost(j - 1, a, b)
                if c < best[j][b]:
                    best[j][b], back[j][b] = c, a
    groups, b = [], k
    for j in range(n, 0, -1):
        a = back[j][b]
        groups.append((a, b))
        b = a
    groups.reverse()
    return groups, expected, gaps, durs


def split_one(path, label, items, args):
    """1つの音声を items（[(キー, 英文), ...]）の行数に切り分ける。(成功したか, 要確認か, 表示する行) を返す。"""
    log = []
    texts = [t for _, t in items]
    chunks, total = speech_chunks(path, args.noise, args.min_silence)
    log.append(f"\n■ {path.name} → {label}（{len(items)} 行、音声 {total:.1f} 秒、声のかたまり {len(chunks)} 個）")
    if len(chunks) < len(items):
        log.append(f"  ✗ 無音の切れ目が足りません（行数 {len(items)} に対して、かたまり {len(chunks)}）。"
                   f"\n    読み上げたテキストが合っているか確認するか、--min-silence を小さく（例: 0.08）してください。")
        return False, True, log

    groups, expected, gaps, durs = choose_groups(chunks, texts)
    cut_gaps = [gaps[b - 1] for a, b in groups[:-1]]
    kept_gaps = [g for (a, b) in groups for g in gaps[a:b - 1]]
    # 切った無音が、行の中に残した間よりはっきり長ければ、切る場所に迷いはない
    clear = not kept_gaps or max(kept_gaps) < 0.5 * min(cut_gaps or [9])
    warn = False
    AUDIO_DIR.mkdir(exist_ok=True)
    for j, ((a, b), (key, text)) in enumerate(zip(groups, items)):
        start, end = chunks[a][0], chunks[b - 1][1]
        # 余白は、となりの声にかからない範囲でつける
        lo = (chunks[a - 1][1] + start) / 2 if a > 0 else 0.0
        hi = (end + chunks[b][0]) / 2 if b < len(chunks) else total
        s, e = max(lo, start - HEAD_PAD), min(hi, end + TAIL_PAD)
        speech = sum(durs[a:b])
        dev = (speech - expected[j]) / expected[j]
        flag = ""
        if len(items) > 1 and not clear and abs(dev) > 0.45:
            flag, warn = "  ← 長さが目安と大きく違います。聞いて確認してください", True
        out = AUDIO_DIR / (key.replace(".", "_") + ".mp3")
        length = e - s
        src_vol, src_peak = volume_of(path, s, length)
        gain = 0.0 if args.keep_volume else gain_for(src_vol, src_peak)
        # -ss / -t は -i の前に置く。後ろに置くとフェードが「元の音声の先頭から」の時刻で効き、
        # 2行目以降がフェードアウト後の無音になってしまう。
        r = run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
                 "-ss", f"{s:.3f}", "-t", f"{length:.3f}", "-i", str(path),
                 # asetnsamples: 最後の半端なフレームで mp3 の書き出しが失敗することがある（ffmpeg 8）のを避ける
                 "-af", f"volume={gain}dB,afade=t=in:d=0.01,afade=t=out:st={max(length - 0.04, 0):.3f}:d=0.04,asetnsamples=n=1152:p=0",
                 "-ac", "1", "-ar", "44100", "-c:a", "libmp3lame", "-b:a", "96k", str(out)])
        if r.returncode != 0:
            out.unlink(missing_ok=True)  # 途中までの音声を残さない
            log.append(f"  ✗ {out.name} の書き出しに失敗: {r.stderr.strip()[:200]}")
            return False, True, log
        # 書き出した音声に本当に声が入っているかを測って確かめる
        vol, _ = volume_of(out)
        if vol is None or src_vol is None or abs(vol - (src_vol + gain)) > 3 or vol < -40:
            flag = f"  ← 音量が想定と違うか、小さすぎます（元 {src_vol} dB、調整 {gain:+} dB → {vol} dB）。書き出しに失敗している可能性があります"
            warn = True
        note = f"声 {speech:4.1f} 秒 / 目安 {expected[j]:4.1f} 秒" if len(items) > 1 else f"声 {speech:4.1f} 秒"
        shown = "?" if vol is None else f"{vol:.0f}"
        if gain:
            shown += f"（{gain:+.0f}）"
        log.append(f"  {out.name:<14} {s:6.2f}–{e:6.2f} 秒（{note} / {shown} dB）  {text[:60]}{flag}")

    if cut_gaps:
        line = f"  切った無音: {min(cut_gaps):.2f}〜{max(cut_gaps):.2f} 秒"
        if kept_gaps:
            line += f" ／ 行の中に残した無音: 最長 {max(kept_gaps):.2f} 秒"
            if max(kept_gaps) >= min(cut_gaps):
                line += "  ← 切った無音より長い間が行の中にあります。聞いて確認してください"
                warn = True
        log.append(line)
    log.append("  △ 確認をおすすめします" if warn else "  ✓ 問題なさそうです")
    return True, warn, log


def load_index():
    """sentences_index.tsv を [(バッチ, キー, 英文), ...] で返す。"""
    f = TTS / "sentences_index.tsv"
    if not f.exists():
        sys.exit(f"{f.relative_to(ROOT)} がありません。先に python3 tools/build_data.py を実行してください。")
    rows = []
    for row in f.read_text(encoding="utf-8").splitlines()[1:]:
        _, batch, key, _, text = row.split("\t", 4)
        rows.append((batch, key, text))
    return rows


def items_for(name, index, own):
    """音声ファイルの名前から、中に入っているはずの文を決める。own は「その文だけの音声が別にある」キー。"""
    exact = [(k, t) for _, k, t in index if k == name]
    if exact:                                    # p12.mail / p12.q … その1文
        return exact
    by_id = [(k, t) for _, k, t in index if k.rsplit(".", 1)[0] == name and k not in own]
    if by_id:                                    # p12 / d3 / m5 / c2 … その番号の文
        return by_id
    return [(k, t) for b, k, t in index if b == name and k not in own]  # p_get / c_compare … バッチ


def write_manifest():
    """audio/ にある音声ファイルから、サイトが読む対応表 data/audio.js を作り直す。"""
    pat = re.compile(r"^([pdmc]\d+)_(q|a|mail|body|b|\d+)\.mp3$")
    entries = []
    for f in sorted(AUDIO_DIR.glob("*.mp3"), key=lambda f: (f.name[0], int(re.search(r"\d+", f.name).group()), f.name)):
        m = pat.match(f.name)
        if m:
            # ?v=更新時刻 をつけて、作り直した音声がブラウザに残った古いものに負けないようにする
            entries.append(f'  "{m.group(1)}.{m.group(2)}": "audio/{f.name}?v={int(f.stat().st_mtime)}",')
    MANIFEST.write_text(
        "// tools/split_audio.py が audio/ の中身から自動生成したファイル。直接編集しない。\n"
        "// ここにある文は音声ファイルを再生し、ない文は端末の読み上げ機能で再生する。\n"
        "// キー: p12.q=単語帳12の質問 / p12.a=返答 / p12.mail=メール例文 / d3.0=会話3の1行目 /\n"
        "//       m5.body=メール5の本文 / c2.a・c2.b=使い分け2の例文\n"
        "window.PHRASEBOOK_AUDIO = {\n" + "\n".join(entries) + ("\n" if entries else "") + "};\n",
        encoding="utf-8")
    return [re.match(r'\s*"([^"]+)"', e).group(1) for e in entries]


def audio_files(folder):
    return sorted(f for f in folder.iterdir() if f.suffix.lower() in EXTS) if folder.is_dir() else []


def natural(path):
    return [int(x) if x.isdigit() else x for x in re.split(r"(\d+)", path.name)]


def main():
    ap = argparse.ArgumentParser(description="読み上げた音声を、1文ずつの音声ファイルに整えて audio/ に置く。")
    ap.add_argument("audio", nargs="?", help="音声ファイルかフォルダ（省略すると _do_not_upload_/mp3/ と tts/input/ の中をすべて処理）")
    ap.add_argument("--as", dest="name", help="ファイル名の代わりに使う名前（例: d14、p12.mail、p_get）")
    ap.add_argument("--batch", dest="name", help=argparse.SUPPRESS)  # 以前の名前
    ap.add_argument("--keep-volume", action="store_true", help="音量をそろえず、元の大きさのままにする")
    ap.add_argument("--noise", type=float, default=-40, help="これより小さい音を無音とみなす（dB、既定 -40）")
    ap.add_argument("--min-silence", type=float, default=0.12, help="無音とみなす最短の長さ（秒、既定 0.12）")
    args = ap.parse_args()

    target = Path(args.audio) if args.audio else None
    if target and not target.exists():
        sys.exit(f"{target} が見つかりません。")
    single = bool(target and target.is_file())
    if single:
        files = [(target, args.name or target.stem)]
    else:
        folders = [target] if target else SOURCES
        files = [(f, f.stem) for d in folders for f in sorted(audio_files(d), key=natural)]
        if not files:
            sys.exit("音声ファイルがありません。" + " か ".join(f"{d.relative_to(ROOT)}/" for d in SOURCES) + " に置いてください。")

    index = load_index()
    keys = {k for _, k, _ in index}
    # 1文だけの音声（p12.mail.mp3 など）は、まとめ音声（p12.mp3）より優先する。
    # 同じフォルダの中を見て決めるので、1つだけ処理するときも結果は変わらない。
    siblings = [(f, f.stem) for f in audio_files(target.parent)] if single else files
    own = {name for _, name in siblings if name in keys}

    jobs, unknown = [], []
    for path, name in files:
        items = items_for(name, index, own)
        (jobs if items else unknown).append((path, name, items))

    with ThreadPoolExecutor(max_workers=6) as pool:
        results = list(pool.map(lambda j: split_one(j[0], j[1], j[2], args), jobs))

    review, failed = [], []
    for (path, _, _), (ok, warn, log) in zip(jobs, results):
        print("\n".join(log))
        if not ok:
            failed.append(path.name)
        elif warn:
            review.append(path.name)

    registered = set(write_manifest())
    print(f"\n{len(jobs) - len(failed)}/{len(files)} 個の音声を処理しました。"
          f"{MANIFEST.relative_to(ROOT)} に {len(registered)} 件を登録しています。")
    for path, name, _ in unknown:
        print(f"  ✗ {path.name}: 「{name}」に当たる文が sentences_index.tsv にありません。名前を確認するか --as で指定してください。")
    if failed:
        print("  ✗ 失敗: " + ", ".join(failed))
    if review:
        print("  △ 聞いて確認をおすすめ: " + ", ".join(review))
    missing = [k for _, k, _ in index if k not in registered]
    print(f"  例文 {len(index)} 件のうち、音声があるのは {len(index) - len(missing)} 件です。"
          + (f" まだない文: {', '.join(missing[:12])}{' …' if len(missing) > 12 else ''}" if missing else ""))


if __name__ == "__main__":
    main()
