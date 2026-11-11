# 基本動詞のフレーズ帳

get / put / have など 16 の基本動詞でつくる句動詞・定型表現 108 を、日常会話と英文メールの例文で眺めて学ぶための単語帳サイトです。HTML / CSS / JavaScript だけで動き、GitHub Pages にそのまま置けます。

## 画面

| 画面 | 内容 |
| --- | --- |
| ホーム | 今日のフレーズ、動詞・場面からさがす、文型ルール |
| 単語帳 | 108 表現。動詞・場面・頻度・★・キーワードでしぼり込み |
| 単語帳（1件ずつ） | 会話例・メール例・ポイント・関連する会話やメール。左右スワイプで前後へ |
| 会話 | 場面別ミニ会話 22 |
| メール | 英文メール 14（英文のコピーつき） |
| 使い分け | まぎらわしい表現 14 組 |

右上の「和訳」で日本語訳をかくせます（かくしている間は、タップした訳だけ表示）。★ と表示の設定は、見ている端末のブラウザにだけ保存されます。

## 内容を更新する

元データは `_do_not_upload_/basic_verbs_phrasal_expression_book.xlsx` です（`_do_not_upload_/` は公開しないフォルダで、Git の管理からも外しています）。Excel を編集したら、次を実行すると `data/data.js` と音声づくり用の例文一覧が作り直されます。

```bash
python3 tools/build_data.py
```

`openpyxl` が必要です（`pip install openpyxl`）。シート名と列の並びは変えないでください。新しい場面名を追加してエラーが出たときは、`tools/build_data.py` の `GROUPS` にキーワードを足します。

## 音声

音声ファイルがある文はそのファイルを、ない文は端末の読み上げ機能（Web Speech API）で再生します。

### 音声ファイルの作り方

1. `_do_not_upload_/tts/sentences_index.tsv`（行ごとの「キー」と英文の対応表）を見ながら、次の名前で音声をつくり、`_do_not_upload_/mp3/` に置きます（wav / mp3 / m4a など）。

   | ファイル名 | 内容 | 処理 |
   | --- | --- | --- |
   | `p12.mp3` | 単語帳12 の質問と返答を続けて読んだもの | 無音のところで2つに切る |
   | `p12.mail.mp3` | 単語帳12 のメール例文 | 切らずに1つのまま |
   | `d3.mp3` | 会話3 を通して読んだもの（4行） | 行ごとに切る |
   | `m5.mp3` | メール5 の本文 | 切らずに1つのまま |
   | `c2.mp3` | 使い分け2 の例文 A・B | 2つに切る |

   `p12.q.mp3` のようにキーそのままの名前にすると、その1文だけの音声として扱います。動詞ごとにまとめて読む場合は `_do_not_upload_/tts/batches/` のテキスト（`p_get.txt` など）と同じ名前にします。

2. 次を実行すると、1文ずつの音声に整えて `audio/` に入れ、対応表 `data/audio.js` を作り直します（`ffmpeg` が必要です）。

```bash
python3 tools/split_audio.py
```

このとき、前後の余分な無音を詰め、ファイルごとの声の大きさをそろえます（そろえたくないときは `--keep-volume`）。切る場所は、無音の長さと「行の文字数から見た音声の長さ」の両方で決めています。結果の一覧に「確認をおすすめします」と出た音声は、聞いて確かめてください。うまく切れないときは `--min-silence 0.08` や `--noise -35` を試します。

1つだけ作り直すときは `python3 tools/split_audio.py _do_not_upload_/mp3/d14.mp3`、名前の違う音声を使うときは `--as d14` をつけます。

Excel の例文を直したときは、その文の音声も作り直してください（古い音声が残ります）。

## 手元で確認する

```bash
python3 -m http.server 8765
```

ブラウザで <http://localhost:8765/> を開きます（`index.html` を直接開いても動きます）。

## ファイル構成

```
index.html              ページ本体
assets/css/style.css    見た目
assets/js/app.js        画面の組み立てと操作
assets/img/             アイコン
data/data.js            Excel から生成したデータ（直接編集しない）
data/audio.js           音声ファイルの対応表（tools/split_audio.py が生成）
audio/                  1文ずつの音声（tools/split_audio.py が生成）
tools/build_data.py     Excel → data/data.js と例文一覧の変換
tools/split_audio.py    読み上げた音声 → 1文ずつに整えて audio/ へ
_do_not_upload_/        公開しないもの（元の Excel、音声の元データ、例文一覧）
```
