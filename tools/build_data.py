#!/usr/bin/env python3
"""Excel の単語帳を、サイトが読み込む data/data.js に変換する。

使い方:
    python3 tools/build_data.py

Excel を編集したあとにこのスクリプトを実行すると、サイトの内容が更新される。
あわせて、音声づくり用の例文一覧（_do_not_upload_/tts/）も書き出す。
必要なもの: openpyxl (pip install openpyxl)
"""
import json
import sys
from datetime import date
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
PRIVATE = ROOT / "_do_not_upload_"  # リポジトリには入れないフォルダ（.gitignore 済み）
SRC = PRIVATE / "basic_verbs_phrasal_expression_book.xlsx"
TTS = PRIVATE / "tts"
OUT = ROOT / "data" / "data.js"

# 場面フィルター用のグループ。場面名にキーワードが含まれていれば、そのグループに入る。
GROUPS = [
    ("home", "家・暮らし", ["家", "生活", "近所", "趣味", "友人", "修理"]),
    ("shop", "買い物", ["買い物", "配達", "配送", "支払い"]),
    ("food", "飲食店", ["飲食"]),
    ("medical", "病院・薬局", ["病院", "薬局", "医療", "健康", "診察"]),
    ("out", "外出・交通", ["外出", "交通"]),
    ("contact", "連絡・予定", ["連絡", "メール", "電話", "書類", "予約", "予定", "手続き"]),
]


def groups_of(scene):
    found = [gid for gid, _, keys in GROUPS if any(k in scene for k in keys)]
    if not found:
        sys.exit(f"場面「{scene}」がどのグループにも入りません。GROUPS にキーワードを追加してください。")
    return found


def rows(ws, start=5):
    for r in ws.iter_rows(min_row=start, values_only=True):
        if r[0] is not None:
            yield [c.strip() if isinstance(c, str) else c for c in r]


def split_exprs(text):
    return [e.strip() for e in text.split("/") if e.strip()]


def tts_batches(data):
    """音声をつくる単位（バッチ）ごとに、(キー, 話者, 英文) の並びを返す。

    キーはサイト側の音声の識別子（data/audio.js と同じ書き方）。
    """
    batches = {}
    for p in data["phrases"]:
        batches.setdefault(f"p_{p['verb']}", []).extend([
            (f"p{p['id']}.q", "Q", p["q"]),
            (f"p{p['id']}.a", "A", p["a"]),
            (f"p{p['id']}.mail", "Mail", p["mail"]),
        ])
    for d in data["dialogs"]:
        batches[f"d{d['id']:02d}"] = [(f"d{d['id']}.{i}", l["who"], l["en"]) for i, l in enumerate(d["lines"])]
    for m in data["emails"]:
        batches[f"m{m['id']:02d}"] = [(f"m{m['id']}.body", "Mail", m["body"])]
    batches["c_compare"] = [
        item for c in data["compares"]
        for item in ((f"c{c['id']}.a", "A", c["aEx"]), (f"c{c['id']}.b", "B", c["bEx"]))
    ]
    return batches


def write_tts_text(data):
    """音声づくり用の例文一覧を書き出す（1行に1文。行の順番がそのまま音声の順番）。"""
    batches = tts_batches(data)
    out = TTS / "batches"
    out.mkdir(parents=True, exist_ok=True)
    for old in out.glob("*.txt"):
        old.unlink()
    all_lines, index = [], ["行\tバッチ\tキー\t話者\t英文"]
    for name, items in batches.items():
        (out / f"{name}.txt").write_text("\n".join(t for _, _, t in items) + "\n", encoding="utf-8")
        for key, who, text in items:
            all_lines.append(text)
            index.append(f"{len(all_lines)}\t{name}\t{key}\t{who}\t{text}")
    (TTS / "sentences_all.txt").write_text("\n".join(all_lines) + "\n", encoding="utf-8")
    (TTS / "sentences_index.tsv").write_text("\n".join(index) + "\n", encoding="utf-8")
    (TTS / "input").mkdir(exist_ok=True)
    return len(all_lines), len(batches)


def main():
    wb = openpyxl.load_workbook(SRC, data_only=True)

    phrases, verbs = [], {}
    for r in rows(wb["単語帳108"]):
        no, verb, expr, meaning, scene, kind, q, a, qa_ja, mail, mail_ja, note, _status, freq = r[:14]
        ja = qa_ja.split("／")
        if len(ja) != 2:
            sys.exit(f"No.{no}: 会話の日本語訳は「質問／返答」の形にしてください: {qa_ja}")
        verbs[verb] = verbs.get(verb, 0) + 1
        phrases.append({
            "id": int(no), "verb": verb, "expr": expr, "meaning": meaning,
            "scene": scene, "groups": groups_of(scene), "kind": kind,
            "freq": freq.split("｜")[0],
            "q": q, "a": a, "qJa": ja[0], "aJa": ja[1],
            "mail": mail, "mailJa": mail_ja, "note": note,
        })

    dialogs = []
    for no, scene, title, en, ja, exprs in (r[:6] for r in rows(wb["場面別会話22"])):
        en_lines, ja_lines = en.split("\n"), ja.split("\n")
        if len(en_lines) != len(ja_lines):
            sys.exit(f"会話 No.{no}: 英語と日本語の行数が一致しません。")
        lines = []
        for e, j in zip(en_lines, ja_lines):
            who, _, text = e.partition(": ")
            who_ja, _, text_ja = j.partition(": ")
            lines.append({"who": who, "whoJa": who_ja, "en": text, "ja": text_ja})
        dialogs.append({"id": int(no), "scene": scene, "groups": groups_of(scene),
                        "title": title, "lines": lines, "exprs": split_exprs(exprs)})

    emails = []
    for no, scene, purpose, subject, body, ja, exprs, tip in (r[:8] for r in rows(wb["英文メール14"])):
        emails.append({"id": int(no), "scene": scene, "groups": groups_of(scene),
                       "purpose": purpose, "subject": subject, "body": body, "ja": ja,
                       "exprs": split_exprs(exprs), "tip": tip})

    compares = []
    for no, a, b, a_mean, b_mean, ex, ex_ja, point in (r[:8] for r in rows(wb["使い分け"])):
        ex_lines, ja_lines = ex.split("\n"), (ex_ja or "").split("\n")
        if len(ex_lines) != 2 or len(ja_lines) != 2:
            sys.exit(f"使い分け No.{no}: 例文とその日本語訳は、それぞれ A / B の2行にしてください。")
        compares.append({"id": int(no), "a": a, "b": b, "aMean": a_mean, "bMean": b_mean,
                         "aEx": ex_lines[0], "bEx": ex_lines[1],
                         "aExJa": ja_lines[0], "bExJa": ja_lines[1], "point": point})

    # 「使い方」シートの文型ルール（見出しの次の行から、シート一覧の手前まで）
    rules, in_rules = [], False
    for r in wb["使い方"].iter_rows(values_only=True):
        cells = [c for c in r if c is not None]
        if not cells:
            continue
        if isinstance(cells[0], str) and cells[0].startswith("最初に知っておくと"):
            in_rules = True
            continue
        if in_rules:
            if len(cells) < 2:
                break
            rules.append({"k": cells[0], "v": cells[1]})

    data = {
        "built": date.today().isoformat(),
        "groups": [{"id": gid, "label": label} for gid, label, _ in GROUPS],
        "verbs": [{"v": v, "n": n} for v, n in verbs.items()],
        "phrases": phrases, "dialogs": dialogs, "emails": emails,
        "compares": compares, "rules": rules,
    }
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(
        "// tools/build_data.py が Excel から自動生成したファイル。直接編集しない。\n"
        "window.PHRASEBOOK = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8",
    )
    print(f"{OUT.relative_to(ROOT)}: 表現 {len(phrases)} / 会話 {len(dialogs)} / "
          f"メール {len(emails)} / 使い分け {len(compares)} / ルール {len(rules)}")
    n_lines, n_batches = write_tts_text(data)
    print(f"{TTS.relative_to(ROOT)}/: 例文 {n_lines} 行 / バッチ {n_batches} 個")


if __name__ == "__main__":
    main()
