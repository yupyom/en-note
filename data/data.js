// tools/build_data.py が Excel から自動生成したファイル。直接編集しない。
window.PHRASEBOOK = {
 "built": "2026-11-12",
 "groups": [
  {
   "id": "home",
   "label": "家・暮らし"
  },
  {
   "id": "shop",
   "label": "買い物"
  },
  {
   "id": "food",
   "label": "飲食店"
  },
  {
   "id": "medical",
   "label": "病院・薬局"
  },
  {
   "id": "out",
   "label": "外出・交通"
  },
  {
   "id": "contact",
   "label": "連絡・予定"
  }
 ],
 "verbs": [
  {
   "v": "get",
   "n": 15
  },
  {
   "v": "put",
   "n": 10
  },
  {
   "v": "have",
   "n": 9
  },
  {
   "v": "take",
   "n": 9
  },
  {
   "v": "go",
   "n": 8
  },
  {
   "v": "come",
   "n": 8
  },
  {
   "v": "look",
   "n": 8
  },
  {
   "v": "turn",
   "n": 7
  },
  {
   "v": "bring",
   "n": 5
  },
  {
   "v": "pick",
   "n": 4
  },
  {
   "v": "give",
   "n": 5
  },
  {
   "v": "run",
   "n": 4
  },
  {
   "v": "keep",
   "n": 4
  },
  {
   "v": "set",
   "n": 4
  },
  {
   "v": "make",
   "n": 5
  },
  {
   "v": "work",
   "n": 3
  }
 ],
 "phrases": [
  {
   "id": 1,
   "verb": "get",
   "expr": "get up",
   "meaning": "起きる",
   "scene": "家・朝",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "What time do you usually get up?",
   "a": "Around seven. How about you?",
   "qJa": "普段は何時に起きますか。",
   "aJa": "7時ごろです。あなたは？",
   "mail": "I usually get up early, so a morning call is fine.",
   "mailJa": "普段早起きなので、朝の電話でも大丈夫です。",
   "note": "get up は起床。stand up は立ち上がる。"
  },
  {
   "id": 2,
   "verb": "get",
   "expr": "get back",
   "meaning": "戻る・帰る",
   "scene": "家・外出",
   "groups": [
    "home",
    "out"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "When will you get back?",
   "a": "Probably around six.",
   "qJa": "いつ戻りますか。",
   "aJa": "おそらく6時ごろです。",
   "mail": "I'll get back home by six and check the package.",
   "mailJa": "6時までに帰宅して荷物を確認します。",
   "note": "帰宅するなら get back home / get home。"
  },
  {
   "id": 3,
   "verb": "get",
   "expr": "get back to",
   "meaning": "（人に）返事する",
   "scene": "連絡・メール",
   "groups": [
    "contact"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can you get back to me this afternoon?",
   "a": "Of course. I'll check and let you know.",
   "qJa": "今日の午後に返事をもらえますか。",
   "aJa": "もちろん。確認してお知らせします。",
   "mail": "I'll get back to you as soon as I have an update.",
   "mailJa": "進展があり次第、お返事します。",
   "note": "get back to 人。get back だけでは返信の意味が明確でない。"
  },
  {
   "id": 4,
   "verb": "get",
   "expr": "get in",
   "meaning": "（車などに）乗る・中に入る",
   "scene": "外出・交通",
   "groups": [
    "out"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can I get in here?",
   "a": "Yes, the door is unlocked.",
   "qJa": "ここから入れますか。",
   "aJa": "はい、鍵は開いています。",
   "mail": "Please use the side entrance to get in after six.",
   "mailJa": "6時以降は横の入口からお入りください。",
   "note": "車や小型乗り物に乗る場合にも使う。"
  },
  {
   "id": 5,
   "verb": "get",
   "expr": "get out of",
   "meaning": "（車などから）降りる・出る",
   "scene": "外出・交通",
   "groups": [
    "out"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Should we get out of the car here?",
   "a": "Yes, this is the right entrance.",
   "qJa": "ここで車を降りた方がいいですか。",
   "aJa": "はい、ここが正面入口です。",
   "mail": "Please get out of the taxi at the main entrance.",
   "mailJa": "タクシーは正面入口でお降りください。",
   "note": "get out of + 車・部屋など。"
  },
  {
   "id": 6,
   "verb": "get",
   "expr": "get on",
   "meaning": "（バス・電車などに）乗る",
   "scene": "交通",
   "groups": [
    "out"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Is this where we get on the bus?",
   "a": "Yes, at this stop.",
   "qJa": "ここからバスに乗るのですか。",
   "aJa": "はい、この停留所です。",
   "mail": "You can get on the shuttle bus outside the station.",
   "mailJa": "駅の外からシャトルバスに乗れます。",
   "note": "バス・電車・飛行機などは get on。"
  },
  {
   "id": 7,
   "verb": "get",
   "expr": "get off",
   "meaning": "（バス・電車などを）降りる",
   "scene": "交通",
   "groups": [
    "out"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Where should I get off?",
   "a": "At the next stop.",
   "qJa": "どこで降りればよいですか。",
   "aJa": "次の停留所です。",
   "mail": "Please get off at Central Station and walk five minutes.",
   "mailJa": "中央駅で降りて徒歩5分です。",
   "note": "get off at + 駅・停留所。"
  },
  {
   "id": 8,
   "verb": "get",
   "expr": "get along with",
   "meaning": "（人と）うまくやる",
   "scene": "家族・近所",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Do you get along with your neighbors?",
   "a": "Yes, they're very friendly.",
   "qJa": "ご近所とうまくやっていますか。",
   "aJa": "はい、とても親切です。",
   "mail": "I get along well with the new team members.",
   "mailJa": "新しいチームの人たちとうまくやっています。",
   "note": "get along well with と well を入れることも多い。"
  },
  {
   "id": 9,
   "verb": "get",
   "expr": "get over",
   "meaning": "（病気・問題を）乗り越える",
   "scene": "健康・生活",
   "groups": [
    "home",
    "medical"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Have you gotten over your cold?",
   "a": "Almost. I just have a cough now.",
   "qJa": "風邪は治りましたか。",
   "aJa": "ほぼ。あとは咳だけです。",
   "mail": "I'm still getting over a cold, so I'd prefer a phone call.",
   "mailJa": "まだ風邪から回復途中なので、電話でお願いしたいです。",
   "note": "米語 gotten、英語 got の違いあり。診断・治療を表す語ではない。"
  },
  {
   "id": 10,
   "verb": "get",
   "expr": "get through",
   "meaning": "（電話が）つながる・乗り切る",
   "scene": "電話・病院",
   "groups": [
    "medical",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Did you get through to the clinic?",
   "a": "Not yet. The line is busy.",
   "qJa": "クリニックに電話はつながりましたか。",
   "aJa": "まだです。話し中です。",
   "mail": "I couldn't get through by phone, so I'm writing instead.",
   "mailJa": "電話がつながらなかったので、メールしています。",
   "note": "電話は get through to + 相手。"
  },
  {
   "id": 11,
   "verb": "get",
   "expr": "get by",
   "meaning": "なんとかやっていく",
   "scene": "生活",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can you get by without a car?",
   "a": "Yes, the buses are convenient.",
   "qJa": "車なしでも生活できますか。",
   "aJa": "はい、バスが便利です。",
   "mail": "I can get by with the information you sent. Thanks.",
   "mailJa": "送っていただいた情報で何とかなりそうです。ありがとう。",
   "note": "get by on + 収入、get by with + 手元のもの。"
  },
  {
   "id": 12,
   "verb": "get",
   "expr": "get rid of",
   "meaning": "捨てる・取り除く",
   "scene": "家・片づけ",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Should we get rid of this old chair?",
   "a": "Yes, no one uses it anymore.",
   "qJa": "この古い椅子は処分しましょうか。",
   "aJa": "はい、もう誰も使っていません。",
   "mail": "Could you tell me how to get rid of the packaging?",
   "mailJa": "梱包材の処分方法を教えていただけますか。",
   "note": "get rid of + もの。少し強めに不要物扱いする表現。"
  },
  {
   "id": 13,
   "verb": "get",
   "expr": "get together",
   "meaning": "集まる",
   "scene": "家族・友人",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Shall we get together this weekend?",
   "a": "Saturday afternoon works for me.",
   "qJa": "今週末に集まりませんか。",
   "aJa": "土曜の午後なら大丈夫です。",
   "mail": "It would be nice to get together sometime next month.",
   "mailJa": "来月どこかで集まれたらうれしいです。",
   "note": "相手は with 人、日時は on Saturday など。"
  },
  {
   "id": 14,
   "verb": "get",
   "expr": "get around to",
   "meaning": "ようやく〜に着手する",
   "scene": "家・連絡",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Did you get around to fixing the shelf?",
   "a": "Not yet. I'll do it tomorrow.",
   "qJa": "棚の修理は手をつけましたか。",
   "aJa": "まだです。明日やります。",
   "mail": "I finally got around to reviewing the documents.",
   "mailJa": "ようやく書類の確認に取りかかれました。",
   "note": "get around to + 名詞/動名詞（doing）。"
  },
  {
   "id": 15,
   "verb": "get",
   "expr": "get in touch with",
   "meaning": "（人に）連絡を取る",
   "scene": "連絡・医療",
   "groups": [
    "medical",
    "contact"
   ],
   "kind": "定型表現",
   "freq": "B",
   "q": "How can I get in touch with the pharmacist?",
   "a": "You can call this number.",
   "qJa": "薬剤師にどう連絡できますか。",
   "aJa": "この番号に電話できます。",
   "mail": "Please get in touch with us if you have any questions.",
   "mailJa": "ご質問があればご連絡ください。",
   "note": "get in touch with 人。句動詞というより定型表現。"
  },
  {
   "id": 16,
   "verb": "put",
   "expr": "put on",
   "meaning": "着る・身につける",
   "scene": "家・服装",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Should I put on a jacket?",
   "a": "Yes, it's cold outside.",
   "qJa": "上着を着た方がいいですか。",
   "aJa": "はい、外は寒いです。",
   "mail": "Please put on comfortable shoes for the visit.",
   "mailJa": "来訪時は歩きやすい靴をお履きください。",
   "note": "put it on / put on a jacket。代名詞は真ん中。"
  },
  {
   "id": 17,
   "verb": "put",
   "expr": "put off",
   "meaning": "延期する",
   "scene": "予定・病院",
   "groups": [
    "medical",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Could we put off the appointment until Friday?",
   "a": "Yes, Friday is available.",
   "qJa": "予約を金曜日まで延期できますか。",
   "aJa": "はい、金曜は空いています。",
   "mail": "Could we put off our meeting until next week?",
   "mailJa": "会議を来週に延期できますか。",
   "note": "put off + 名詞/動名詞。put it off が自然。"
  },
  {
   "id": 18,
   "verb": "put",
   "expr": "put away",
   "meaning": "片づける",
   "scene": "家・食後",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can you put away the dishes?",
   "a": "Sure, after I dry them.",
   "qJa": "食器を片づけてもらえますか。",
   "aJa": "ええ、乾かしてから。",
   "mail": "Please put away any personal items before the inspection.",
   "mailJa": "点検前に私物を片づけてください。",
   "note": "put them away の語順。"
  },
  {
   "id": 19,
   "verb": "put",
   "expr": "put back",
   "meaning": "元の場所に戻す",
   "scene": "家・買い物",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Where should I put this book back?",
   "a": "On the top shelf, please.",
   "qJa": "この本はどこへ戻せばいいですか。",
   "aJa": "上の棚にお願いします。",
   "mail": "Please put the key back in the lockbox after use.",
   "mailJa": "使用後は鍵をキーボックスに戻してください。",
   "note": "put it back が自然。"
  },
  {
   "id": 20,
   "verb": "put",
   "expr": "put down",
   "meaning": "置く・書き留める",
   "scene": "家・連絡",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can I put my bag down here?",
   "a": "Yes, that's fine.",
   "qJa": "ここにかばんを置いてもいいですか。",
   "aJa": "はい、どうぞ。",
   "mail": "I've put down your phone number for the delivery.",
   "mailJa": "配送用に電話番号を控えました。",
   "note": "put it down。意味は文脈で変わる。"
  },
  {
   "id": 21,
   "verb": "put",
   "expr": "put up with",
   "meaning": "我慢する",
   "scene": "家・近所",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can you put up with the noise for another hour?",
   "a": "I think so, but please keep it down.",
   "qJa": "あと1時間、音を我慢できますか。",
   "aJa": "大丈夫だと思いますが、静かにしてください。",
   "mail": "We appreciate your putting up with the temporary noise.",
   "mailJa": "一時的な騒音をご容赦いただき、感謝いたします。",
   "note": "put up with + 名詞/動名詞。会話では苦情にも使う。"
  },
  {
   "id": 22,
   "verb": "put",
   "expr": "put together",
   "meaning": "組み立てる・まとめる",
   "scene": "家・買い物",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Did you put the new shelf together?",
   "a": "Yes, it took about an hour.",
   "qJa": "新しい棚は組み立てましたか。",
   "aJa": "はい、1時間ほどかかりました。",
   "mail": "I've put together a short list of the items we need.",
   "mailJa": "必要な品物の簡単なリストをまとめました。",
   "note": "put it together が自然。"
  },
  {
   "id": 23,
   "verb": "put",
   "expr": "put out",
   "meaning": "（ごみを）出す・（火を）消す",
   "scene": "家・ごみ",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Have you put out the trash?",
   "a": "Not yet. I'll do it now.",
   "qJa": "ごみは出しましたか。",
   "aJa": "まだです。今やります。",
   "mail": "Please put out the recycling before eight tomorrow.",
   "mailJa": "明朝8時までに資源ごみを出してください。",
   "note": "put out the trash は主に米語。英語では put the bins out など。"
  },
  {
   "id": 24,
   "verb": "put",
   "expr": "put aside",
   "meaning": "取っておく・脇に置く",
   "scene": "買い物・生活",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Could you put this item aside for me?",
   "a": "Yes, until closing time.",
   "qJa": "これを取り置きしてもらえますか。",
   "aJa": "はい、閉店までなら。",
   "mail": "Could you put aside one in my size until Friday?",
   "mailJa": "金曜日まで私のサイズを1点取り置きできますか。",
   "note": "put it aside。お金や時間を確保する意味もある。"
  },
  {
   "id": 25,
   "verb": "put",
   "expr": "put through",
   "meaning": "（電話を）つなぐ",
   "scene": "電話・病院",
   "groups": [
    "medical",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Could you put me through to reception?",
   "a": "Certainly. One moment.",
   "qJa": "受付につないでもらえますか。",
   "aJa": "かしこまりました。少々お待ちください。",
   "mail": "If possible, please put me through to the billing department.",
   "mailJa": "可能でしたら会計担当につないでください。",
   "note": "put 人 through to + 部署。やや丁寧な電話表現。"
  },
  {
   "id": 26,
   "verb": "have",
   "expr": "have on",
   "meaning": "身につけている",
   "scene": "家・服装",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Do you have a sweater on?",
   "a": "Yes, but I'm still cold.",
   "qJa": "セーターを着ていますか。",
   "aJa": "はい、でもまだ寒いです。",
   "mail": "I'll have a dark coat on so you can recognize me.",
   "mailJa": "目印に濃い色のコートを着ています。",
   "note": "have + 衣服 + on。put on は着る動作、have on は状態。"
  },
  {
   "id": 27,
   "verb": "have",
   "expr": "have over",
   "meaning": "（人を家に）招く",
   "scene": "家・来客",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Are you having anyone over tonight?",
   "a": "Just a couple of friends.",
   "qJa": "今夜は誰か家に招くのですか。",
   "aJa": "友人を2人ほど。",
   "mail": "We're having a few relatives over on Sunday.",
   "mailJa": "日曜日は親戚を何人か家に招きます。",
   "note": "have 人 over。カジュアルな自宅招待。"
  },
  {
   "id": 28,
   "verb": "have",
   "expr": "have back",
   "meaning": "返してもらう・戻ってくる",
   "scene": "家・貸し借り",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Could I have my umbrella back?",
   "a": "Of course. Here it is.",
   "qJa": "傘を返してもらえますか。",
   "aJa": "もちろん。どうぞ。",
   "mail": "Could I have the borrowed charger back this week?",
   "mailJa": "貸している充電器を今週返してもらえますか。",
   "note": "have + もの + back。"
  },
  {
   "id": 29,
   "verb": "have",
   "expr": "have to",
   "meaning": "〜しなければならない",
   "scene": "家・病院",
   "groups": [
    "home",
    "medical"
   ],
   "kind": "定型表現",
   "freq": "A",
   "q": "Do I have to book an appointment?",
   "a": "Yes, please call in advance.",
   "qJa": "予約をしなければなりませんか。",
   "aJa": "はい、事前にお電話ください。",
   "mail": "I have to change my appointment due to another commitment.",
   "mailJa": "別の予定のため予約を変更しなければなりません。",
   "note": "have to は助動詞的表現。厳密には句動詞ではない。"
  },
  {
   "id": 30,
   "verb": "have",
   "expr": "have a look at",
   "meaning": "ちょっと見る・確認する",
   "scene": "家・買い物",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "定型表現",
   "freq": "A",
   "q": "Could you have a look at this receipt?",
   "a": "Sure. What's wrong with it?",
   "qJa": "このレシートを見ていただけますか。",
   "aJa": "もちろん。どうしましたか。",
   "mail": "Could you have a look at the attached photo?",
   "mailJa": "添付の写真をご確認いただけますか。",
   "note": "比較的カジュアル。米語では take a look at もよく使う。"
  },
  {
   "id": 31,
   "verb": "have",
   "expr": "have trouble with",
   "meaning": "〜に困っている",
   "scene": "家・機器",
   "groups": [
    "home"
   ],
   "kind": "定型表現",
   "freq": "A",
   "q": "Are you having trouble with the Wi-Fi?",
   "a": "Yes, it keeps disconnecting.",
   "qJa": "Wi-Fiの調子が悪いのですか。",
   "aJa": "はい、何度も切れます。",
   "mail": "I'm having trouble with the payment page.",
   "mailJa": "決済ページで問題が起きています。",
   "note": "have trouble with + 名詞 / have trouble doing。"
  },
  {
   "id": 32,
   "verb": "have",
   "expr": "have in stock",
   "meaning": "在庫がある",
   "scene": "買い物・薬局",
   "groups": [
    "shop",
    "medical"
   ],
   "kind": "定型表現",
   "freq": "A",
   "q": "Do you have this size in stock?",
   "a": "Yes, we have two left.",
   "qJa": "このサイズの在庫はありますか。",
   "aJa": "はい、残り2点あります。",
   "mail": "Do you have this product in stock at your store?",
   "mailJa": "そちらのお店にこの商品の在庫はありますか。",
   "note": "do you have ... in stock? は店で便利。"
  },
  {
   "id": 33,
   "verb": "have",
   "expr": "have something done",
   "meaning": "〜をしてもらう",
   "scene": "家・修理",
   "groups": [
    "home"
   ],
   "kind": "構文",
   "freq": "B",
   "q": "Did you have the lock replaced?",
   "a": "Yes, the technician came yesterday.",
   "qJa": "鍵を交換してもらいましたか。",
   "aJa": "はい、昨日業者が来ました。",
   "mail": "I'd like to have the air conditioner checked.",
   "mailJa": "エアコンを点検してもらいたいです。",
   "note": "have + 目的語 + 過去分詞。依頼・手配の構文。"
  },
  {
   "id": 34,
   "verb": "have",
   "expr": "have a seat",
   "meaning": "席に座る",
   "scene": "飲食店・病院",
   "groups": [
    "food",
    "medical"
   ],
   "kind": "定型表現",
   "freq": "A",
   "q": "May I sit here?",
   "a": "Of course. Please have a seat.",
   "qJa": "ここに座ってもいいですか。",
   "aJa": "もちろん。どうぞお掛けください。",
   "mail": "Please have a seat in the waiting area when you arrive.",
   "mailJa": "到着されたら待合スペースでお掛けになってください。",
   "note": "座る動作を促す定型表現。句動詞ではない。"
  },
  {
   "id": 35,
   "verb": "take",
   "expr": "take off",
   "meaning": "脱ぐ・外す",
   "scene": "家・病院",
   "groups": [
    "home",
    "medical"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Should I take off my shoes?",
   "a": "Yes, please leave them by the door.",
   "qJa": "靴を脱いだ方がいいですか。",
   "aJa": "はい、玄関に置いてください。",
   "mail": "Please take off any metal accessories before the scan.",
   "mailJa": "検査前に金属製アクセサリーを外してください。",
   "note": "take them off。飛行機が離陸する意味もある。"
  },
  {
   "id": 36,
   "verb": "take",
   "expr": "take out",
   "meaning": "取り出す・持ち帰る",
   "scene": "家・飲食店",
   "groups": [
    "home",
    "food"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can I take this meal out?",
   "a": "Yes, we can pack it for you.",
   "qJa": "この料理を持ち帰れますか。",
   "aJa": "はい、お包みできます。",
   "mail": "I'd like to take out two portions for dinner.",
   "mailJa": "夕食用に2人前を持ち帰りたいです。",
   "note": "米語は takeout/to go、英語は takeaway が一般的。"
  },
  {
   "id": 37,
   "verb": "take",
   "expr": "take back",
   "meaning": "返品する・返す",
   "scene": "買い物",
   "groups": [
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can I take this back without a receipt?",
   "a": "I'm sorry, we need proof of purchase.",
   "qJa": "レシートなしで返品できますか。",
   "aJa": "申し訳ありません、購入証明が必要です。",
   "mail": "I'd like to take back the item because it arrived damaged.",
   "mailJa": "商品が破損して届いたため返品したいです。",
   "note": "return のほうがメールでは少し明確で丁寧。"
  },
  {
   "id": 38,
   "verb": "take",
   "expr": "take care of",
   "meaning": "世話をする・対応する",
   "scene": "家・サービス",
   "groups": [
    "home"
   ],
   "kind": "定型表現",
   "freq": "A",
   "q": "Can you take care of the plants while I'm away?",
   "a": "Of course. How often should I water them?",
   "qJa": "留守中に植物の世話をしてもらえますか。",
   "aJa": "もちろん。水やりの頻度は？",
   "mail": "I'll take care of the payment this afternoon.",
   "mailJa": "本日午後、支払いを済ませます。",
   "note": "take care of + 人・もの・仕事。"
  },
  {
   "id": 39,
   "verb": "take",
   "expr": "take over",
   "meaning": "引き継ぐ・代わる",
   "scene": "家庭・仕事",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can you take over for a minute?",
   "a": "Sure. I'll watch the stove.",
   "qJa": "少し代わってもらえますか。",
   "aJa": "もちろん。コンロを見ておきます。",
   "mail": "My colleague will take over while I'm away.",
   "mailJa": "不在の間は同僚が引き継ぎます。",
   "note": "take over (from 人)、take over for 人。"
  },
  {
   "id": 40,
   "verb": "take",
   "expr": "take up",
   "meaning": "始める・場所を取る",
   "scene": "趣味・家",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Are you thinking of taking up walking?",
   "a": "Yes, I want some gentle exercise.",
   "qJa": "ウォーキングを始めようと思っていますか。",
   "aJa": "はい、軽い運動をしたくて。",
   "mail": "I'm planning to take up swimming next month.",
   "mailJa": "来月から水泳を始める予定です。",
   "note": "take up + 趣味・活動。場所を占める意味も。"
  },
  {
   "id": 41,
   "verb": "take",
   "expr": "take down",
   "meaning": "書き留める・取り外す",
   "scene": "連絡・家",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Could you take down this number?",
   "a": "Certainly. Go ahead.",
   "qJa": "この番号を書き留めてもらえますか。",
   "aJa": "もちろん。どうぞ。",
   "mail": "I've taken down the details of your request.",
   "mailJa": "ご依頼の詳細を控えました。",
   "note": "take it down。壁から外す意味もある。"
  },
  {
   "id": 42,
   "verb": "take",
   "expr": "take apart",
   "meaning": "分解する",
   "scene": "家・修理",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Do we need to take this chair apart?",
   "a": "Yes, it won't fit through the door.",
   "qJa": "この椅子は分解する必要がありますか。",
   "aJa": "はい、ドアを通りません。",
   "mail": "We may need to take apart the old desk before collection.",
   "mailJa": "回収前に古い机を分解する必要があるかもしれません。",
   "note": "take it apart。再組立ては put it back together。"
  },
  {
   "id": 43,
   "verb": "take",
   "expr": "take after",
   "meaning": "（親族に）似ている",
   "scene": "家族",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Who does your daughter take after?",
   "a": "She takes after her grandfather.",
   "qJa": "娘さんは誰に似ていますか。",
   "aJa": "祖父に似ています。",
   "mail": "He really takes after his mother in the way he talks.",
   "mailJa": "彼は話し方が本当にお母さんに似ています。",
   "note": "血縁者の特徴・性格の類似を指すことが多い。"
  },
  {
   "id": 44,
   "verb": "go",
   "expr": "go out",
   "meaning": "外出する・外食する",
   "scene": "家・飲食",
   "groups": [
    "home",
    "food"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Do you want to go out for dinner?",
   "a": "Yes, somewhere nearby would be nice.",
   "qJa": "夕食に出かけませんか。",
   "aJa": "はい、近場がいいですね。",
   "mail": "We're planning to go out for dinner after the event.",
   "mailJa": "イベント後に夕食を食べに出かける予定です。",
   "note": "go out for dinner は外食。go out with 人 は交際の意味もある。"
  },
  {
   "id": 45,
   "verb": "go",
   "expr": "go on",
   "meaning": "続く・起こる",
   "scene": "家・生活",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "What's going on in the kitchen?",
   "a": "I'm just fixing a loose handle.",
   "qJa": "台所で何が起きているのですか。",
   "aJa": "緩んだ取っ手を直しているだけです。",
   "mail": "Please let me know if the problem goes on.",
   "mailJa": "問題が続くようでしたらお知らせください。",
   "note": "What's going on? は「どうしたの？」にもなる。"
  },
  {
   "id": 46,
   "verb": "go",
   "expr": "go over",
   "meaning": "見直す・一緒に確認する",
   "scene": "書類・病院",
   "groups": [
    "medical",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Could we go over the instructions once more?",
   "a": "Certainly. Let's start with the first step.",
   "qJa": "説明をもう一度確認できますか。",
   "aJa": "もちろん。最初から始めましょう。",
   "mail": "Could we go over the treatment instructions by phone?",
   "mailJa": "電話で治療についての説明を確認できますか。",
   "note": "go over + 書類・手順など。専門的判断は医療者へ。"
  },
  {
   "id": 47,
   "verb": "go",
   "expr": "go through",
   "meaning": "詳しく確認する・経験する",
   "scene": "書類・買い物",
   "groups": [
    "shop",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Have you gone through the return policy?",
   "a": "Yes, I have one question about the deadline.",
   "qJa": "返品規約は確認しましたか。",
   "aJa": "はい、期限についてひとつ質問があります。",
   "mail": "I'll go through the attached documents tonight.",
   "mailJa": "今夜、添付書類を詳しく確認します。",
   "note": "go through + 書類/手続き。経験する意味もある。"
  },
  {
   "id": 48,
   "verb": "go",
   "expr": "go back",
   "meaning": "戻る",
   "scene": "家・買い物",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Should we go back to the store?",
   "a": "Yes, I forgot my wallet there.",
   "qJa": "お店に戻りましょうか。",
   "aJa": "はい、財布を忘れました。",
   "mail": "I may need to go back to the store with the receipt.",
   "mailJa": "レシートを持ってお店に戻る必要があるかもしれません。",
   "note": "go back to + 場所。"
  },
  {
   "id": 49,
   "verb": "go",
   "expr": "go ahead",
   "meaning": "どうぞ進めて・遠慮なく",
   "scene": "連絡・予約",
   "groups": [
    "contact"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "May I open the window?",
   "a": "Yes, go ahead.",
   "qJa": "窓を開けてもいいですか。",
   "aJa": "はい、どうぞ。",
   "mail": "Please go ahead with the reservation for two people.",
   "mailJa": "2名で予約を進めてください。",
   "note": "go ahead with + 予定・作業。"
  },
  {
   "id": 50,
   "verb": "go",
   "expr": "go with",
   "meaning": "（ものに）合う・選ぶ",
   "scene": "買い物・飲食店",
   "groups": [
    "shop",
    "food"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Which sauce goes with this dish?",
   "a": "The lemon sauce works well.",
   "qJa": "この料理にはどのソースが合いますか。",
   "aJa": "レモンソースがよく合います。",
   "mail": "Let's go with the earlier delivery option.",
   "mailJa": "早い方の配送方法にしましょう。",
   "note": "go with は「合う」と「〜を選ぶ」の両方。"
  },
  {
   "id": 51,
   "verb": "go",
   "expr": "go off",
   "meaning": "（アラームが）鳴る",
   "scene": "家・生活",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Did the alarm go off at six?",
   "a": "Yes, but I slept through it.",
   "qJa": "アラームは6時に鳴りましたか。",
   "aJa": "はい、でも気づかず寝ていました。",
   "mail": "The smoke alarm went off twice last night.",
   "mailJa": "昨夜、煙感知器が2回鳴りました。",
   "note": "go off には機器が作動する意味。食べ物が傷む（主に英語）も。"
  },
  {
   "id": 52,
   "verb": "come",
   "expr": "come back",
   "meaning": "帰ってくる",
   "scene": "家・外出",
   "groups": [
    "home",
    "out"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "When are you coming back?",
   "a": "On Sunday evening.",
   "qJa": "いつ帰ってくるのですか。",
   "aJa": "日曜の夜です。",
   "mail": "I'll come back to the office on Monday.",
   "mailJa": "月曜日に職場へ戻ります。",
   "note": "come は話し手・聞き手のいる場所へ近づく視点。"
  },
  {
   "id": 53,
   "verb": "come",
   "expr": "come in",
   "meaning": "入る",
   "scene": "家・病院",
   "groups": [
    "home",
    "medical"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "May I come in?",
   "a": "Yes, please come in.",
   "qJa": "入ってもいいですか。",
   "aJa": "はい、どうぞお入りください。",
   "mail": "When you arrive, please come in through the front door.",
   "mailJa": "到着したら正面のドアからお入りください。",
   "note": "come in は「こちらへ入る」。"
  },
  {
   "id": 54,
   "verb": "come",
   "expr": "come over",
   "meaning": "（家などに）遊びに来る",
   "scene": "家・来客",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Would you like to come over on Saturday?",
   "a": "I'd love to. What time?",
   "qJa": "土曜日に家に来ませんか。",
   "aJa": "ぜひ。何時がよいですか。",
   "mail": "Feel free to come over after lunch.",
   "mailJa": "昼食後に気軽にいらしてください。",
   "note": "招く側が come over と言うのは自然。"
  },
  {
   "id": 55,
   "verb": "come",
   "expr": "come up",
   "meaning": "（問題・用事が）生じる",
   "scene": "予定・生活",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Is everything okay with tomorrow's plan?",
   "a": "Something came up, so I may be late.",
   "qJa": "明日の予定は大丈夫ですか。",
   "aJa": "用事ができて、遅れるかもしれません。",
   "mail": "Something has come up, and I need to change the time.",
   "mailJa": "急用が入り、時間を変更する必要があります。",
   "note": "Something came up. は理由を詳しく言わずに説明できる。"
  },
  {
   "id": 56,
   "verb": "come",
   "expr": "come up with",
   "meaning": "考えつく・提案する",
   "scene": "家・企画",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can you come up with another idea?",
   "a": "How about ordering it online?",
   "qJa": "別の案を考えられますか。",
   "aJa": "ネット注文はどうですか。",
   "mail": "We've come up with a simpler delivery plan.",
   "mailJa": "より簡単な配送案を考えました。",
   "note": "come up with + 案・解決策。"
  },
  {
   "id": 57,
   "verb": "come",
   "expr": "come across",
   "meaning": "偶然見つける",
   "scene": "家・買い物",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Where did you find that old photo?",
   "a": "I came across it while cleaning.",
   "qJa": "その古い写真、どこで見つけたのですか。",
   "aJa": "掃除中に偶然見つけました。",
   "mail": "I came across your product while looking for a gift.",
   "mailJa": "贈り物を探しているときに御社の商品を見つけました。",
   "note": "come across + 人/物。偶然の出会い。"
  },
  {
   "id": 58,
   "verb": "come",
   "expr": "come down with",
   "meaning": "（病気に）かかる",
   "scene": "健康・病院",
   "groups": [
    "medical"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Are you feeling okay?",
   "a": "I think I'm coming down with a cold.",
   "qJa": "体調は大丈夫ですか。",
   "aJa": "風邪をひきかけているようです。",
   "mail": "I think I've come down with a cold, so I'd like to reschedule.",
   "mailJa": "風邪をひいたようなので、予定を変更したいです。",
   "note": "症状の自己描写。医療的な診断表現ではない。"
  },
  {
   "id": 59,
   "verb": "come",
   "expr": "come along",
   "meaning": "一緒に来る・同行する",
   "scene": "外出・病院",
   "groups": [
    "medical",
    "out"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can someone come along to the appointment?",
   "a": "Yes, one family member may accompany you.",
   "qJa": "診察に誰かが付き添ってもいいですか。",
   "aJa": "はい、ご家族1名なら同伴できます。",
   "mail": "My sister will come along to help with the paperwork.",
   "mailJa": "書類の手続きを手伝うため、姉が同行します。",
   "note": "come along with 人 も使う。"
  },
  {
   "id": 60,
   "verb": "look",
   "expr": "look for",
   "meaning": "探す",
   "scene": "家・買い物",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Are you looking for anything in particular?",
   "a": "Yes, a small gift for a friend.",
   "qJa": "何かお探しですか。",
   "aJa": "はい、友人への小さな贈り物です。",
   "mail": "I'm looking for a replacement part for this lamp.",
   "mailJa": "このランプの交換部品を探しています。",
   "note": "look for = 探す、find = 見つける。"
  },
  {
   "id": 61,
   "verb": "look",
   "expr": "look after",
   "meaning": "世話をする・管理する",
   "scene": "家・健康",
   "groups": [
    "home",
    "medical"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Could you look after the cat this weekend?",
   "a": "Yes, I'd be happy to.",
   "qJa": "今週末、猫の世話をお願いできますか。",
   "aJa": "ええ、喜んで。",
   "mail": "Could someone look after the garden while we're away?",
   "mailJa": "留守の間、庭の世話をお願いできますか。",
   "note": "look after は主に英語でよく使う。米語では take care of も自然。"
  },
  {
   "id": 62,
   "verb": "look",
   "expr": "look up",
   "meaning": "調べる",
   "scene": "家・情報",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can you look up the opening hours?",
   "a": "Sure, I'll check the website.",
   "qJa": "営業時間を調べてもらえますか。",
   "aJa": "もちろん、サイトを確認します。",
   "mail": "I looked up the store hours before writing to you.",
   "mailJa": "ご連絡する前にお店の営業時間を調べました。",
   "note": "look it up。辞書・サイトなどで情報を探す。"
  },
  {
   "id": 63,
   "verb": "look",
   "expr": "look into",
   "meaning": "詳しく調べる・確認する",
   "scene": "買い物・問い合わせ",
   "groups": [
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Could you look into the missing delivery?",
   "a": "Yes, I'll contact the courier.",
   "qJa": "未着の配送について調べてもらえますか。",
   "aJa": "はい、配送会社に確認します。",
   "mail": "Could you please look into the duplicate charge?",
   "mailJa": "二重請求についてご確認いただけますか。",
   "note": "苦情・問い合わせのメールで非常に便利。"
  },
  {
   "id": 64,
   "verb": "look",
   "expr": "look forward to",
   "meaning": "〜を楽しみにする",
   "scene": "メール・予約",
   "groups": [
    "contact"
   ],
   "kind": "定型表現",
   "freq": "A",
   "q": "Are you looking forward to the trip?",
   "a": "Yes, very much.",
   "qJa": "旅行を楽しみにしていますか。",
   "aJa": "はい、とても。",
   "mail": "I look forward to hearing from you.",
   "mailJa": "ご返信をお待ちしております。",
   "note": "to は前置詞。look forward to hearing（× hear）。"
  },
  {
   "id": 65,
   "verb": "look",
   "expr": "look out for",
   "meaning": "注意して見る・見逃さないようにする",
   "scene": "買い物・生活",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Could you look out for my package?",
   "a": "Sure, I'll let you know when it arrives.",
   "qJa": "荷物が届くか見ていてもらえますか。",
   "aJa": "ええ、届いたら知らせます。",
   "mail": "Please look out for an email with your confirmation number.",
   "mailJa": "確認番号が記載されたメールをご確認ください。",
   "note": "「危険に注意」と「見つけたら知らせる」の両方。"
  },
  {
   "id": 66,
   "verb": "look",
   "expr": "look over",
   "meaning": "ざっと目を通す",
   "scene": "メール・書類",
   "groups": [
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Could you look over this form?",
   "a": "Yes, I can check it now.",
   "qJa": "この書類にざっと目を通してもらえますか。",
   "aJa": "はい、今確認します。",
   "mail": "Could you look over the attached estimate?",
   "mailJa": "添付の見積書をご確認いただけますか。",
   "note": "look over は概要確認、look into は詳しい調査。"
  },
  {
   "id": 67,
   "verb": "look",
   "expr": "look around",
   "meaning": "見て回る",
   "scene": "買い物・家",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Would you like some help?",
   "a": "Thanks, I'm just looking around.",
   "qJa": "何かお手伝いしましょうか。",
   "aJa": "ありがとう、見て回っているだけです。",
   "mail": "I'd like to look around the showroom before deciding.",
   "mailJa": "決める前にショールームを見て回りたいです。",
   "note": "I'm just looking. も店内で定番。"
  },
  {
   "id": 68,
   "verb": "turn",
   "expr": "turn on",
   "meaning": "（電源・水を）つける",
   "scene": "家・機器",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Could you turn on the light?",
   "a": "Sure. Is that bright enough?",
   "qJa": "明かりをつけてもらえますか。",
   "aJa": "もちろん。これで十分明るいですか。",
   "mail": "Please turn on the device before the call.",
   "mailJa": "通話前に機器の電源を入れてください。",
   "note": "turn it on。代名詞は on の前。"
  },
  {
   "id": 69,
   "verb": "turn",
   "expr": "turn off",
   "meaning": "（電源・水を）切る",
   "scene": "家・機器",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Did you turn off the stove?",
   "a": "Yes, I checked twice.",
   "qJa": "コンロの火は消しましたか。",
   "aJa": "はい、2回確認しました。",
   "mail": "Please turn off the heater when you leave.",
   "mailJa": "お帰りの際は暖房を切ってください。",
   "note": "turn it off。「興味を失わせる」の意味もある。"
  },
  {
   "id": 70,
   "verb": "turn",
   "expr": "turn up",
   "meaning": "音量・温度を上げる",
   "scene": "家・機器",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Could you turn up the volume a little?",
   "a": "Of course. How's this?",
   "qJa": "音量を少し上げてもらえますか。",
   "aJa": "もちろん。これでどうですか。",
   "mail": "Could you turn up the heating before our arrival?",
   "mailJa": "到着前に暖房を少し強めてもらえますか。",
   "note": "turn up = 上げる、現れる（人が来る）も。"
  },
  {
   "id": 71,
   "verb": "turn",
   "expr": "turn down",
   "meaning": "音量を下げる・断る",
   "scene": "家・連絡",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can you turn down the TV?",
   "a": "Sorry, I'll lower it now.",
   "qJa": "テレビの音量を下げてもらえますか。",
   "aJa": "ごめんなさい、今下げます。",
   "mail": "I'm afraid I have to turn down the invitation this time.",
   "mailJa": "残念ですが、今回はご招待をお断りしなければなりません。",
   "note": "turn down + 誘い は断る意味。"
  },
  {
   "id": 72,
   "verb": "turn",
   "expr": "turn into",
   "meaning": "〜に変わる",
   "scene": "家・料理",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can we turn this room into a guest room?",
   "a": "Yes, with a sofa bed.",
   "qJa": "この部屋を客間にできますか。",
   "aJa": "はい、ソファベッドがあれば。",
   "mail": "We'd like to turn the spare room into a small office.",
   "mailJa": "空き部屋を小さな書斎にしたいと考えています。",
   "note": "turn A into B = AをBに変える。"
  },
  {
   "id": 73,
   "verb": "turn",
   "expr": "turn out",
   "meaning": "結果として〜になる",
   "scene": "生活・予約",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "How did the repair turn out?",
   "a": "Better than expected.",
   "qJa": "修理はどうなりましたか。",
   "aJa": "予想以上にうまくいきました。",
   "mail": "The delivery turned out to be earlier than expected.",
   "mailJa": "配送は予想より早い結果となりました。",
   "note": "It turned out that ... もよく使う。"
  },
  {
   "id": 74,
   "verb": "turn",
   "expr": "turn around",
   "meaning": "向きを変える・改善する",
   "scene": "家・外出",
   "groups": [
    "home",
    "out"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Should we turn around?",
   "a": "Yes, we passed the entrance.",
   "qJa": "引き返した方がいいですか。",
   "aJa": "はい、入口を通り過ぎました。",
   "mail": "The company managed to turn around the delayed shipment.",
   "mailJa": "会社は遅れていた発送を立て直すことができました。",
   "note": "道を戻る意味、状況改善の意味も。"
  },
  {
   "id": 75,
   "verb": "bring",
   "expr": "bring back",
   "meaning": "持って戻る・返す",
   "scene": "家・買い物",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Could you bring back some milk?",
   "a": "Sure. Anything else?",
   "qJa": "牛乳を買って帰ってもらえますか。",
   "aJa": "もちろん。他には？",
   "mail": "Could you bring back the signed form tomorrow?",
   "mailJa": "署名済みの用紙を明日お持ちいただけますか。",
   "note": "bring はこちらへ持って来る、take は向こうへ持って行く。"
  },
  {
   "id": 76,
   "verb": "bring",
   "expr": "bring up",
   "meaning": "話題に出す",
   "scene": "家族・診察",
   "groups": [
    "home",
    "medical"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Should I bring up the side effects with the doctor?",
   "a": "Yes, it's worth asking.",
   "qJa": "副作用について医師に話した方がいいですか。",
   "aJa": "はい、聞く価値があります。",
   "mail": "I'd like to bring up one question about the instructions.",
   "mailJa": "説明について一点質問したいことがあります。",
   "note": "気になることを「話題にする」。"
  },
  {
   "id": 77,
   "verb": "bring",
   "expr": "bring along",
   "meaning": "持参する・同行させる",
   "scene": "病院・外出",
   "groups": [
    "medical",
    "out"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Do I need to bring along my medication list?",
   "a": "Yes, please bring it to the appointment.",
   "qJa": "服薬リストを持って行く必要がありますか。",
   "aJa": "はい、診察にお持ちください。",
   "mail": "Please bring along any documents you received.",
   "mailJa": "受け取った書類をお持ちください。",
   "note": "bring it along。bring with you とほぼ同じ。"
  },
  {
   "id": 78,
   "verb": "bring",
   "expr": "bring in",
   "meaning": "持ち込む・導入する",
   "scene": "買い物・修理",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can I bring in the faulty kettle?",
   "a": "Yes, along with the receipt.",
   "qJa": "故障した電気ケトルを持ち込めますか。",
   "aJa": "はい、レシートと一緒にお願いします。",
   "mail": "Could I bring in the device for inspection tomorrow?",
   "mailJa": "明日、点検のため機器を持ち込んでもよいですか。",
   "note": "bring in + 物/人。文脈により「導入する」。"
  },
  {
   "id": 79,
   "verb": "bring",
   "expr": "bring forward",
   "meaning": "予定を前倒しする",
   "scene": "予約・医療",
   "groups": [
    "medical",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can we bring forward the appointment?",
   "a": "Yes, we have an earlier slot.",
   "qJa": "予約を前倒しできますか。",
   "aJa": "はい、早い時間に空きがあります。",
   "mail": "Could you bring forward the delivery by one day?",
   "mailJa": "配送を1日前倒ししていただけますか。",
   "note": "主に英語。米語では move up がわかりやすい。"
  },
  {
   "id": 80,
   "verb": "pick",
   "expr": "pick up",
   "meaning": "受け取る・迎えに行く",
   "scene": "買い物・薬局",
   "groups": [
    "shop",
    "medical"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can I pick up my prescription today?",
   "a": "Yes, after three o'clock.",
   "qJa": "今日、処方薬を受け取れますか。",
   "aJa": "はい、3時以降なら。",
   "mail": "I'd like to pick up my order at the store tomorrow.",
   "mailJa": "明日、店頭で注文品を受け取りたいです。",
   "note": "pick it up。迎えに行く、拾うなどにも使う。"
  },
  {
   "id": 81,
   "verb": "pick",
   "expr": "pick out",
   "meaning": "選び出す",
   "scene": "買い物",
   "groups": [
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Have you picked out a birthday card?",
   "a": "Yes, this one looks nice.",
   "qJa": "誕生日カードは選びましたか。",
   "aJa": "はい、これがよさそうです。",
   "mail": "I've picked out three options for your review.",
   "mailJa": "ご検討用に3つの候補を選びました。",
   "note": "pick out + 特定の物を選ぶ。"
  },
  {
   "id": 82,
   "verb": "pick",
   "expr": "pick up on",
   "meaning": "気づく・察する",
   "scene": "家・連絡",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Did you pick up on what she meant?",
   "a": "I think she wants a quieter room.",
   "qJa": "彼女の言いたいことに気づきましたか。",
   "aJa": "もっと静かな部屋を希望しているのだと思います。",
   "mail": "Thank you for picking up on that mistake in the address.",
   "mailJa": "住所の間違いに気づいてくださり、ありがとうございます。",
   "note": "pick up on + 合図・間違い・気持ち。"
  },
  {
   "id": 83,
   "verb": "pick",
   "expr": "pick at",
   "meaning": "（食事を）少しずつつつく",
   "scene": "飲食店・健康",
   "groups": [
    "food",
    "medical"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Is the food okay?",
   "a": "Yes, I'm just not hungry, so I'm picking at it.",
   "qJa": "お食事は大丈夫ですか。",
   "aJa": "はい、食欲がなくて少しずつ食べています。",
   "mail": "I only picked at my lunch because I wasn't feeling well.",
   "mailJa": "体調がよくなかったため昼食は少ししか食べませんでした。",
   "note": "pick at one's food = あまり食が進まない様子。"
  },
  {
   "id": 84,
   "verb": "give",
   "expr": "give back",
   "meaning": "返す",
   "scene": "家・買い物",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can you give me back my pen?",
   "a": "Of course, here you go.",
   "qJa": "ペンを返してもらえますか。",
   "aJa": "もちろん、どうぞ。",
   "mail": "I'll give back the borrowed equipment on Friday.",
   "mailJa": "借りた機器は金曜日に返します。",
   "note": "give it back。返却は return とも言える。"
  },
  {
   "id": 85,
   "verb": "give",
   "expr": "give away",
   "meaning": "無料で譲る",
   "scene": "家・片づけ",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Are you going to give away these books?",
   "a": "Yes, to the local library.",
   "qJa": "これらの本は譲るのですか。",
   "aJa": "はい、地元の図書館に。",
   "mail": "We're planning to give away the unused chairs.",
   "mailJa": "使っていない椅子を無料で譲る予定です。",
   "note": "give them away。秘密を漏らす意味もある。"
  },
  {
   "id": 86,
   "verb": "give",
   "expr": "give out",
   "meaning": "配る・手渡す",
   "scene": "病院・受付",
   "groups": [
    "medical"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Do you give out forms at reception?",
   "a": "Yes, just ask at the desk.",
   "qJa": "受付で用紙を配っていますか。",
   "aJa": "はい、窓口にお尋ねください。",
   "mail": "We will give out the information sheets on arrival.",
   "mailJa": "ご到着時に案内用紙をお配りします。",
   "note": "give out + 書類・資料。消耗する意味もある。"
  },
  {
   "id": 87,
   "verb": "give",
   "expr": "give up",
   "meaning": "諦める・やめる",
   "scene": "生活・健康",
   "groups": [
    "home",
    "medical"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Did you give up trying to fix it?",
   "a": "No, I'll try one more time.",
   "qJa": "直すのを諦めたのですか。",
   "aJa": "いいえ、もう一度試します。",
   "mail": "I don't want to give up on getting this issue resolved.",
   "mailJa": "この問題の解決を諦めたくありません。",
   "note": "give up + doing、give up on + 名詞/doing。"
  },
  {
   "id": 88,
   "verb": "give",
   "expr": "give in",
   "meaning": "譲歩する",
   "scene": "家族・交渉",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Did the shop give in and offer a replacement?",
   "a": "Yes, after checking the photos.",
   "qJa": "お店は譲歩して交換品を出してくれましたか。",
   "aJa": "はい、写真確認後に。",
   "mail": "We appreciate your flexibility, but we cannot give in on the safety requirement.",
   "mailJa": "柔軟なご対応に感謝しますが、安全要件については譲れません。",
   "note": "give in to + 要求・圧力。やや対立を含む。"
  },
  {
   "id": 89,
   "verb": "run",
   "expr": "run out of",
   "meaning": "〜を使い切る・切らす",
   "scene": "家・薬局",
   "groups": [
    "home",
    "medical"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Have we run out of milk?",
   "a": "Almost. There's only a little left.",
   "qJa": "牛乳は切れましたか。",
   "aJa": "もう少しで。少しだけ残っています。",
   "mail": "I'm about to run out of my regular medication. How can I request a refill?",
   "mailJa": "いつもの薬がなくなりそうです。再処方はどう依頼できますか。",
   "note": "run out of + もの。薬の補充は処方・薬局の手続きに従う。"
  },
  {
   "id": 90,
   "verb": "run",
   "expr": "run into",
   "meaning": "偶然出会う・問題に遭遇する",
   "scene": "買い物・生活",
   "groups": [
    "home",
    "shop"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Did you run into any problems at checkout?",
   "a": "No, the payment went through.",
   "qJa": "会計で何か問題がありましたか。",
   "aJa": "いいえ、決済できました。",
   "mail": "We ran into a problem with the delivery address.",
   "mailJa": "配送先住所で問題が発生しました。",
   "note": "run into + 人/問題。人には「ばったり会う」。"
  },
  {
   "id": 91,
   "verb": "run",
   "expr": "run by",
   "meaning": "（案を人に）確認してもらう",
   "scene": "家・メール",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can I run this idea by you?",
   "a": "Sure, tell me about it.",
   "qJa": "この案をあなたに相談してもいいですか。",
   "aJa": "もちろん、聞かせてください。",
   "mail": "Could I run the revised schedule by you first?",
   "mailJa": "先に修正版の日程を確認していただけますか。",
   "note": "run something by someone = 相談・確認する。"
  },
  {
   "id": 92,
   "verb": "run",
   "expr": "run through",
   "meaning": "手早く一通り確認する",
   "scene": "病院・書類",
   "groups": [
    "medical",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Could you run through the steps again?",
   "a": "Of course. First, fill in this form.",
   "qJa": "手順をもう一度一通り説明してもらえますか。",
   "aJa": "もちろん。まずこの用紙に記入してください。",
   "mail": "Could we run through the procedure once more by phone?",
   "mailJa": "電話で手順をもう一度一通り確認できますか。",
   "note": "run through + 手順・リスト。"
  },
  {
   "id": 93,
   "verb": "keep",
   "expr": "keep on",
   "meaning": "続ける",
   "scene": "家・生活",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Why does the light keep on flashing?",
   "a": "I'm not sure. Let's check the manual.",
   "qJa": "なぜランプが点滅し続けるのですか。",
   "aJa": "わかりません。説明書を確認しましょう。",
   "mail": "The device keeps on making a clicking sound.",
   "mailJa": "機器からカチカチ音が出続けています。",
   "note": "keep on + doing。keep doing でも自然。"
  },
  {
   "id": 94,
   "verb": "keep",
   "expr": "keep up with",
   "meaning": "〜についていく",
   "scene": "家・情報",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can you keep up with the instructions?",
   "a": "Yes, if we go a little slower.",
   "qJa": "説明についていけますか。",
   "aJa": "もう少しゆっくりなら。",
   "mail": "It's hard to keep up with all the schedule changes.",
   "mailJa": "日程変更が多く、把握し続けるのが大変です。",
   "note": "keep up with + 変化・人・情報。"
  },
  {
   "id": 95,
   "verb": "keep",
   "expr": "keep an eye on",
   "meaning": "見守る・注意して見る",
   "scene": "家・健康",
   "groups": [
    "home",
    "medical"
   ],
   "kind": "定型表現",
   "freq": "A",
   "q": "Could you keep an eye on the soup?",
   "a": "Sure, I'll turn down the heat if needed.",
   "qJa": "スープを見ていてもらえますか。",
   "aJa": "もちろん。必要なら火を弱めます。",
   "mail": "Please keep an eye on the tracking updates.",
   "mailJa": "配送状況の更新をご確認ください。",
   "note": "watch と似るが、継続して気を配るニュアンス。"
  },
  {
   "id": 96,
   "verb": "keep",
   "expr": "keep in touch",
   "meaning": "連絡を取り合う",
   "scene": "友人・メール",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "定型表現",
   "freq": "A",
   "q": "Will we keep in touch after you move?",
   "a": "Of course. I'll send you my new address.",
   "qJa": "引っ越した後も連絡を取り合えますか。",
   "aJa": "もちろん。新住所を送ります。",
   "mail": "I hope we can keep in touch.",
   "mailJa": "これからも連絡を取り合えたらうれしいです。",
   "note": "keep in touch with + 人。"
  },
  {
   "id": 97,
   "verb": "set",
   "expr": "set up",
   "meaning": "設置する・準備する",
   "scene": "家・機器",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Can you help me set up the router?",
   "a": "Sure, let's follow the instructions.",
   "qJa": "ルーターの設定を手伝ってもらえますか。",
   "aJa": "もちろん。説明書に従いましょう。",
   "mail": "Could you set up a short phone appointment?",
   "mailJa": "短い電話相談の予約を設定していただけますか。",
   "note": "set it up。予約や会議を設定する意味も。"
  },
  {
   "id": 98,
   "verb": "set",
   "expr": "set aside",
   "meaning": "（時間・お金を）取っておく",
   "scene": "生活・予定",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can we set aside some time to talk?",
   "a": "Yes, how about Sunday afternoon?",
   "qJa": "話す時間を少し取れますか。",
   "aJa": "はい、日曜の午後はどうですか。",
   "mail": "I've set aside Friday morning for the inspection.",
   "mailJa": "点検のため金曜の午前を空けてあります。",
   "note": "set aside + 時間・お金・物。"
  },
  {
   "id": 99,
   "verb": "set",
   "expr": "set off",
   "meaning": "出発する・作動させる",
   "scene": "外出・家",
   "groups": [
    "home",
    "out"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "What time should we set off?",
   "a": "Around eight, before traffic gets heavy.",
   "qJa": "何時に出発しましょうか。",
   "aJa": "渋滞前の8時ごろです。",
   "mail": "We'll set off early to arrive before the appointment.",
   "mailJa": "予約時間に間に合うよう早めに出発します。",
   "note": "主に英語で出発の意味。警報を鳴らす意味も。"
  },
  {
   "id": 100,
   "verb": "set",
   "expr": "set back",
   "meaning": "遅らせる・妨げる",
   "scene": "修理・予定",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Did the missing part set back the repair?",
   "a": "Yes, by two days.",
   "qJa": "部品が足りず修理が遅れましたか。",
   "aJa": "はい、2日ほど。",
   "mail": "The shipment delay has set back the installation.",
   "mailJa": "発送の遅れで設置が延期になりました。",
   "note": "set something back + 期間。"
  },
  {
   "id": 101,
   "verb": "make",
   "expr": "make up",
   "meaning": "仲直りする・作り話をする",
   "scene": "家族・生活",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Did you two make up after the argument?",
   "a": "Yes, we talked it through.",
   "qJa": "口論のあと仲直りしましたか。",
   "aJa": "はい、話し合いました。",
   "mail": "I'm glad we could make up after the misunderstanding.",
   "mailJa": "誤解のあと仲直りできてうれしいです。",
   "note": "make up は化粧する・作り上げるなど多義。"
  },
  {
   "id": 102,
   "verb": "make",
   "expr": "make sure",
   "meaning": "必ず確認する",
   "scene": "買い物・病院",
   "groups": [
    "shop",
    "medical"
   ],
   "kind": "定型表現",
   "freq": "A",
   "q": "Can you make sure the door is locked?",
   "a": "Yes, I'll check before leaving.",
   "qJa": "ドアに鍵がかかっているか確認してもらえますか。",
   "aJa": "はい、出る前に確認します。",
   "mail": "Please make sure the address is correct before shipping.",
   "mailJa": "発送前に住所が正しいかご確認ください。",
   "note": "make sure (that) + 文 / make sure to + 動詞。"
  },
  {
   "id": 103,
   "verb": "make",
   "expr": "make out",
   "meaning": "聞き取る・見分ける",
   "scene": "電話・生活",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can you make out what the announcer is saying?",
   "a": "Not really. It's too noisy.",
   "qJa": "アナウンスが聞き取れますか。",
   "aJa": "あまり。騒がしすぎます。",
   "mail": "I couldn't make out the number in the voicemail.",
   "mailJa": "留守番電話の番号が聞き取れませんでした。",
   "note": "can't make out ... は音声・文字の判別に便利。"
  },
  {
   "id": 104,
   "verb": "make",
   "expr": "make do with",
   "meaning": "手元のもので間に合わせる",
   "scene": "家・生活",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can we make do with one pan?",
   "a": "Yes, we'll cook the vegetables first.",
   "qJa": "フライパン1つで間に合わせられますか。",
   "aJa": "はい、先に野菜を調理します。",
   "mail": "We can make do with the chairs already in the room.",
   "mailJa": "部屋にある椅子で間に合わせられます。",
   "note": "make do with + 手持ちのもの。"
  },
  {
   "id": 105,
   "verb": "make",
   "expr": "make up for",
   "meaning": "埋め合わせる",
   "scene": "買い物・約束",
   "groups": [
    "shop"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can you make up for the delay somehow?",
   "a": "We can offer free shipping.",
   "qJa": "遅れを何かで埋め合わせてもらえますか。",
   "aJa": "送料無料にできます。",
   "mail": "We'd like to make up for the inconvenience with a replacement.",
   "mailJa": "ご不便のお詫びとして交換品をご用意したいと考えています。",
   "note": "make up for + 遅れ・損失・迷惑。"
  },
  {
   "id": 106,
   "verb": "work",
   "expr": "work out",
   "meaning": "うまくいく・解決する",
   "scene": "予定・生活",
   "groups": [
    "home",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Did the new schedule work out?",
   "a": "Yes, it's much easier now.",
   "qJa": "新しい日程でうまくいきましたか。",
   "aJa": "はい、ずっと楽になりました。",
   "mail": "I hope the revised arrangement works out for everyone.",
   "mailJa": "変更後の手配が皆さんにとってうまくいくことを願っています。",
   "note": "work out は運動する、計算で求める意味もある。"
  },
  {
   "id": 107,
   "verb": "work",
   "expr": "work on",
   "meaning": "〜に取り組む・修理する",
   "scene": "家・サービス",
   "groups": [
    "home"
   ],
   "kind": "句動詞",
   "freq": "A",
   "q": "Are you still working on the washing machine?",
   "a": "Yes, I need another ten minutes.",
   "qJa": "洗濯機の修理はまだしていますか。",
   "aJa": "はい、あと10分必要です。",
   "mail": "We're working on resolving the payment issue.",
   "mailJa": "支払いの問題解決に取り組んでいます。",
   "note": "work on + 課題・機器・プロジェクト。"
  },
  {
   "id": 108,
   "verb": "work",
   "expr": "work through",
   "meaning": "順番に対処する",
   "scene": "手続き・病院",
   "groups": [
    "medical",
    "contact"
   ],
   "kind": "句動詞",
   "freq": "B",
   "q": "Can we work through the form together?",
   "a": "Certainly. Let's start at the top.",
   "qJa": "この用紙を一緒に順番に確認できますか。",
   "aJa": "もちろん。上から始めましょう。",
   "mail": "Could we work through the remaining questions by email?",
   "mailJa": "残りの質問をメールで順に確認できますか。",
   "note": "work through + 問題・書類。"
  }
 ],
 "dialogs": [
  {
   "id": 1,
   "scene": "家・朝",
   "groups": [
    "home"
   ],
   "title": "朝の支度",
   "lines": [
    {
     "who": "A",
     "whoJa": "A",
     "en": "Have you gotten up already?",
     "ja": "もう起きたの？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Yes. Could you put away the clean dishes?",
     "ja": "うん。きれいな食器を片づけてもらえる？"
    },
    {
     "who": "A",
     "whoJa": "A",
     "en": "Sure. By the way, have we run out of coffee?",
     "ja": "もちろん。ところでコーヒーは切れた？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Almost. I'll pick some up later.",
     "ja": "もう少しで。あとで買ってくるよ。"
    }
   ],
   "exprs": [
    "get up",
    "put away",
    "run out of",
    "pick up"
   ]
  },
  {
   "id": 2,
   "scene": "家・外出",
   "groups": [
    "home",
    "out"
   ],
   "title": "出かける前の確認",
   "lines": [
    {
     "who": "A",
     "whoJa": "A",
     "en": "What time will you get back?",
     "ja": "何時ごろ帰ってくる？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Around six. Did you turn off the heater?",
     "ja": "6時ごろ。暖房は消した？"
    },
    {
     "who": "A",
     "whoJa": "A",
     "en": "Yes. I'll put out the trash before I leave.",
     "ja": "うん。出る前にごみも出しておく。"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Great, thanks.",
     "ja": "助かる、ありがとう。"
    }
   ],
   "exprs": [
    "get back",
    "turn off",
    "put out"
   ]
  },
  {
   "id": 3,
   "scene": "家・片づけ",
   "groups": [
    "home"
   ],
   "title": "探し物",
   "lines": [
    {
     "who": "A",
     "whoJa": "A",
     "en": "Have you come across my reading glasses?",
     "ja": "私の老眼鏡、どこかで見かけた？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "I think I put them back on the desk.",
     "ja": "机の上に戻したと思うよ。"
    },
    {
     "who": "A",
     "whoJa": "A",
     "en": "I'll look around there.",
     "ja": "その辺りを探してみる。"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Let me know if you can't find them.",
     "ja": "見つからなかったら教えて。"
    }
   ],
   "exprs": [
    "come across",
    "put back",
    "look around"
   ]
  },
  {
   "id": 4,
   "scene": "家・修理",
   "groups": [
    "home"
   ],
   "title": "家具の組み立て",
   "lines": [
    {
     "who": "A",
     "whoJa": "A",
     "en": "Did you manage to put the shelf together?",
     "ja": "棚は組み立てられた？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Almost, but I need to take one part apart.",
     "ja": "ほぼ。でも一か所分解し直さなきゃ。"
    },
    {
     "who": "A",
     "whoJa": "A",
     "en": "Shall I help you set it up?",
     "ja": "設置を手伝おうか？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Yes, please. That would be great.",
     "ja": "ぜひ。助かるよ。"
    }
   ],
   "exprs": [
    "put together",
    "take apart",
    "set up"
   ]
  },
  {
   "id": 5,
   "scene": "家・近所",
   "groups": [
    "home"
   ],
   "title": "騒音についてお願いする",
   "lines": [
    {
     "who": "A",
     "whoJa": "A",
     "en": "Sorry to bother you. Could you turn down the music a little?",
     "ja": "お邪魔してすみません。音楽を少し小さくしてもらえますか？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Of course. Is it disturbing you?",
     "ja": "もちろん。ご迷惑でしたか？"
    },
    {
     "who": "A",
     "whoJa": "A",
     "en": "A little. Thank you for understanding.",
     "ja": "少しだけ。ご理解ありがとうございます。"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "No problem. I'll keep it down.",
     "ja": "大丈夫です。静かにします。"
    }
   ],
   "exprs": [
    "turn down",
    "keep it down"
   ]
  },
  {
   "id": 6,
   "scene": "買い物",
   "groups": [
    "shop"
   ],
   "title": "スーパーで商品を探す",
   "lines": [
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "Are you looking for anything in particular?",
     "ja": "何かお探しですか？"
    },
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "Yes, do you have this brand of tea in stock?",
     "ja": "はい、この銘柄のお茶の在庫はありますか？"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "Let me look it up. Yes, it's on aisle four.",
     "ja": "確認しますね。はい、4番通路です。"
    },
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "Thanks. I'll go and pick some up.",
     "ja": "ありがとう。取ってきます。"
    }
   ],
   "exprs": [
    "look for",
    "have in stock",
    "look up",
    "pick up"
   ]
  },
  {
   "id": 7,
   "scene": "買い物",
   "groups": [
    "shop"
   ],
   "title": "服を選ぶ",
   "lines": [
    {
     "who": "A",
     "whoJa": "A",
     "en": "Have you picked out a jacket yet?",
     "ja": "もう上着を選んだ？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Not yet. Which color goes with these trousers?",
     "ja": "まだ。このズボンには何色が合うかな？"
    },
    {
     "who": "A",
     "whoJa": "A",
     "en": "I think the navy one works well.",
     "ja": "紺がよく合うと思う。"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Okay, I'll go with navy.",
     "ja": "じゃあ紺にする。"
    }
   ],
   "exprs": [
    "pick out",
    "go with"
   ]
  },
  {
   "id": 8,
   "scene": "買い物",
   "groups": [
    "shop"
   ],
   "title": "商品の返品",
   "lines": [
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "I'd like to take this back. The zipper is broken.",
     "ja": "これを返品したいのですが。ファスナーが壊れています。"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "I'm sorry. Do you have the receipt?",
     "ja": "申し訳ありません。レシートはお持ちですか？"
    },
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "Yes, here it is.",
     "ja": "はい、こちらです。"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "Thank you. I'll look into a replacement.",
     "ja": "ありがとうございます。交換可能か確認します。"
    }
   ],
   "exprs": [
    "take back",
    "look into"
   ]
  },
  {
   "id": 9,
   "scene": "買い物",
   "groups": [
    "shop"
   ],
   "title": "会計時のトラブル",
   "lines": [
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "I think I've been charged twice.",
     "ja": "二重に請求されていると思います。"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "I'm sorry. Let's go through the receipt.",
     "ja": "申し訳ありません。レシートを確認しましょう。"
    },
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "The same item appears on two lines.",
     "ja": "同じ品物が2行あります。"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "You're right. I'll take care of the correction.",
     "ja": "おっしゃるとおりです。訂正いたします。"
    }
   ],
   "exprs": [
    "go through",
    "take care of"
   ]
  },
  {
   "id": 10,
   "scene": "飲食店",
   "groups": [
    "food"
   ],
   "title": "入店・席への案内",
   "lines": [
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "Good evening. Please come in. Do you have a reservation?",
     "ja": "こんばんは。どうぞお入りください。ご予約はありますか？"
    },
    {
     "who": "Guest",
     "whoJa": "客",
     "en": "Yes, for two, under the name Tanaka.",
     "ja": "はい、タナカの名前で2名です。"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "I found it. Please come this way and have a seat.",
     "ja": "確認できました。こちらへどうぞ、お掛けください。"
    },
    {
     "who": "Guest",
     "whoJa": "客",
     "en": "Thank you. Could we sit near the window?",
     "ja": "ありがとう。窓際の席に座れますか？"
    }
   ],
   "exprs": [
    "come in",
    "have a seat"
   ]
  },
  {
   "id": 11,
   "scene": "飲食店",
   "groups": [
    "food"
   ],
   "title": "注文を決める",
   "lines": [
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "Are you ready to order?",
     "ja": "ご注文はお決まりですか？"
    },
    {
     "who": "Guest",
     "whoJa": "客",
     "en": "Almost. Which side dish goes with the fish?",
     "ja": "もう少しです。魚にはどの付け合わせが合いますか？"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "The roasted vegetables are popular.",
     "ja": "焼き野菜が人気です。"
    },
    {
     "who": "Guest",
     "whoJa": "客",
     "en": "Sounds good. I'll go with those.",
     "ja": "よさそうですね。それにします。"
    }
   ],
   "exprs": [
    "go with"
   ]
  },
  {
   "id": 12,
   "scene": "飲食店",
   "groups": [
    "food"
   ],
   "title": "料理を持ち帰る",
   "lines": [
    {
     "who": "Guest",
     "whoJa": "客",
     "en": "Could I order two sandwiches to take out?",
     "ja": "サンドイッチを2つ、持ち帰りで注文できますか？"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "Of course. Would you like sauce with them?",
     "ja": "もちろんです。ソースはおつけしますか？"
    },
    {
     "who": "Guest",
     "whoJa": "客",
     "en": "Yes, please. Could you put the sauce aside?",
     "ja": "お願いします。ソースは別にしてもらえますか？"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "Certainly. I'll pack it separately.",
     "ja": "かしこまりました。別にお包みします。"
    }
   ],
   "exprs": [
    "take out",
    "put aside"
   ]
  },
  {
   "id": 13,
   "scene": "飲食店",
   "groups": [
    "food"
   ],
   "title": "食材について確認する",
   "lines": [
    {
     "who": "Guest",
     "whoJa": "客",
     "en": "Could I bring up one question about the ingredients?",
     "ja": "材料についてひとつ質問してもいいですか？"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "Certainly. What would you like to know?",
     "ja": "もちろんです。何をお知りになりたいですか？"
    },
    {
     "who": "Guest",
     "whoJa": "客",
     "en": "Could you check whether this dish contains nuts?",
     "ja": "この料理にナッツが含まれるか確認できますか？"
    },
    {
     "who": "Staff",
     "whoJa": "店員",
     "en": "I'll ask the kitchen and get back to you.",
     "ja": "調理場に確認してお答えします。"
    }
   ],
   "exprs": [
    "bring up",
    "get back to"
   ]
  },
  {
   "id": 14,
   "scene": "病院",
   "groups": [
    "medical"
   ],
   "title": "予約の変更",
   "lines": [
    {
     "who": "Patient",
     "whoJa": "患者",
     "en": "Could I put off my appointment until Friday?",
     "ja": "予約を金曜日に延期できますか？"
    },
    {
     "who": "Receptionist",
     "whoJa": "受付",
     "en": "Let me check. We have an opening at ten.",
     "ja": "確認します。10時なら空きがあります。"
    },
    {
     "who": "Patient",
     "whoJa": "患者",
     "en": "That works. Could you go over the new time once more?",
     "ja": "大丈夫です。新しい時間をもう一度確認してもらえますか？"
    },
    {
     "who": "Receptionist",
     "whoJa": "受付",
     "en": "Of course. Friday at 10 a.m.",
     "ja": "もちろん。金曜日の午前10時です。"
    }
   ],
   "exprs": [
    "put off",
    "go over"
   ]
  },
  {
   "id": 15,
   "scene": "病院",
   "groups": [
    "medical"
   ],
   "title": "診察前の受付",
   "lines": [
    {
     "who": "Receptionist",
     "whoJa": "受付",
     "en": "Good morning. Please come in and have a seat.",
     "ja": "おはようございます。お入りになってお掛けください。"
    },
    {
     "who": "Patient",
     "whoJa": "患者",
     "en": "Thank you. Do I have to fill in this form?",
     "ja": "ありがとう。この用紙に記入する必要がありますか？"
    },
    {
     "who": "Receptionist",
     "whoJa": "受付",
     "en": "Yes, and please bring along your medication list.",
     "ja": "はい。服薬リストもお持ちください。"
    },
    {
     "who": "Patient",
     "whoJa": "患者",
     "en": "I have it here.",
     "ja": "ここに持っています。"
    }
   ],
   "exprs": [
    "come in",
    "have a seat",
    "have to",
    "bring along"
   ]
  },
  {
   "id": 16,
   "scene": "病院",
   "groups": [
    "medical"
   ],
   "title": "電話がつながらない",
   "lines": [
    {
     "who": "A",
     "whoJa": "A",
     "en": "Did you get through to the clinic?",
     "ja": "クリニックに電話がつながった？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Not yet. I'll try once more.",
     "ja": "まだ。もう一度かけてみる。"
    },
    {
     "who": "A",
     "whoJa": "A",
     "en": "If you can't get through, could you send an email?",
     "ja": "つながらなければメールしてもらえる？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Yes, and I'll ask them to get back to me.",
     "ja": "うん。返事をお願いしてみる。"
    }
   ],
   "exprs": [
    "get through",
    "get back to"
   ]
  },
  {
   "id": 17,
   "scene": "薬局",
   "groups": [
    "medical"
   ],
   "title": "処方薬の受け取り",
   "lines": [
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "Can I pick up my prescription today?",
     "ja": "今日、処方薬を受け取れますか？"
    },
    {
     "who": "Pharmacist",
     "whoJa": "薬剤師",
     "en": "Let me check. It's ready after three.",
     "ja": "確認します。3時以降にご用意できます。"
    },
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "Great. I've almost run out of my usual medication.",
     "ja": "助かります。いつもの薬がもう少しでなくなるので。"
    },
    {
     "who": "Pharmacist",
     "whoJa": "薬剤師",
     "en": "Please bring along your prescription details when you come.",
     "ja": "来店時に処方に関する情報をお持ちください。"
    }
   ],
   "exprs": [
    "pick up",
    "run out of",
    "bring along"
   ]
  },
  {
   "id": 18,
   "scene": "薬局",
   "groups": [
    "medical"
   ],
   "title": "薬の説明を確認する",
   "lines": [
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "Could we go over the instructions once more?",
     "ja": "使い方の説明をもう一度確認できますか？"
    },
    {
     "who": "Pharmacist",
     "whoJa": "薬剤師",
     "en": "Of course. Which part would you like to check?",
     "ja": "もちろんです。どの部分が気になりますか？"
    },
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "I'm having trouble with the printed directions.",
     "ja": "印刷された説明がわかりにくくて。"
    },
    {
     "who": "Pharmacist",
     "whoJa": "薬剤師",
     "en": "Let's work through them together.",
     "ja": "一緒に順番に確認しましょう。"
    }
   ],
   "exprs": [
    "go over",
    "have trouble with",
    "work through"
   ]
  },
  {
   "id": 19,
   "scene": "配達",
   "groups": [
    "shop"
   ],
   "title": "荷物の受け取り",
   "lines": [
    {
     "who": "A",
     "whoJa": "A",
     "en": "Could you keep an eye on the delivery updates?",
     "ja": "配送状況を確認しておいてもらえる？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Sure. It should arrive this afternoon.",
     "ja": "もちろん。今日の午後に届くはず。"
    },
    {
     "who": "A",
     "whoJa": "A",
     "en": "I'll be out. Could you bring the parcel in?",
     "ja": "外出するので、荷物を中に入れてもらえる？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "No problem. I'll put it aside for you.",
     "ja": "いいよ。取り置いておくね。"
    }
   ],
   "exprs": [
    "keep an eye on",
    "bring in",
    "put aside"
   ]
  },
  {
   "id": 20,
   "scene": "家・来客",
   "groups": [
    "home"
   ],
   "title": "夕食への招待",
   "lines": [
    {
     "who": "A",
     "whoJa": "A",
     "en": "Would you like to come over for dinner on Sunday?",
     "ja": "日曜日、夕食に家へ来ない？"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "I'd love to. Should I bring anything along?",
     "ja": "ぜひ。何か持っていった方がいい？"
    },
    {
     "who": "A",
     "whoJa": "A",
     "en": "No need. We've already put together a menu.",
     "ja": "大丈夫。もう献立を考えたから。"
    },
    {
     "who": "B",
     "whoJa": "B",
     "en": "Great. I'll see you at six.",
     "ja": "わかった。6時にね。"
    }
   ],
   "exprs": [
    "come over",
    "bring along",
    "put together"
   ]
  },
  {
   "id": 21,
   "scene": "交通",
   "groups": [
    "out"
   ],
   "title": "バスの乗り降り",
   "lines": [
    {
     "who": "Traveler",
     "whoJa": "旅行者",
     "en": "Is this where we get on the bus to the museum?",
     "ja": "博物館行きのバスはここから乗りますか？"
    },
    {
     "who": "Local",
     "whoJa": "地元の人",
     "en": "Yes, but you need the number twelve.",
     "ja": "はい、でも12番のバスです。"
    },
    {
     "who": "Traveler",
     "whoJa": "旅行者",
     "en": "And where should we get off?",
     "ja": "どこで降りればいいですか？"
    },
    {
     "who": "Local",
     "whoJa": "地元の人",
     "en": "At the third stop after the bridge.",
     "ja": "橋を渡って3つ目の停留所です。"
    }
   ],
   "exprs": [
    "get on",
    "get off"
   ]
  },
  {
   "id": 22,
   "scene": "修理",
   "groups": [
    "home"
   ],
   "title": "修理の遅れを確認する",
   "lines": [
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "How is the repair coming along?",
     "ja": "修理はどこまで進んでいますか？"
    },
    {
     "who": "Technician",
     "whoJa": "技術者",
     "en": "We're still working on it. A missing part set us back.",
     "ja": "まだ作業中です。部品不足で遅れています。"
    },
    {
     "who": "Customer",
     "whoJa": "客",
     "en": "I see. When do you think it will be ready?",
     "ja": "なるほど。いつごろ終わりそうですか？"
    },
    {
     "who": "Technician",
     "whoJa": "技術者",
     "en": "I'll get back to you by tomorrow.",
     "ja": "明日までにご連絡します。"
    }
   ],
   "exprs": [
    "come along",
    "work on",
    "set back",
    "get back to"
   ]
  }
 ],
 "emails": [
  {
   "id": 1,
   "scene": "配達",
   "groups": [
    "shop"
   ],
   "purpose": "未着商品の問い合わせ",
   "subject": "Question about a missing delivery",
   "body": "Hello, I'm writing because my order has not arrived yet. Could you please look into the delivery status? I have gone through the tracking information, but it has not changed for several days. I look forward to hearing from you.",
   "ja": "こんにちは。注文品がまだ届いていないため、ご連絡しています。配送状況をお調べいただけますか。追跡情報は確認しましたが、数日間更新がありません。ご返信をお待ちしております。",
   "exprs": [
    "look into",
    "go through",
    "look forward to"
   ],
   "tip": "丁寧な問い合わせ"
  },
  {
   "id": 2,
   "scene": "買い物",
   "groups": [
    "shop"
   ],
   "purpose": "商品の返品・交換依頼",
   "subject": "Request for a replacement item",
   "body": "Hello, I'd like to return an item that arrived damaged. I've put together photos of the problem and attached them here. Could you let me know how to send the item back? Thank you for your help.",
   "ja": "こんにちは。破損して届いた商品を返品したいです。問題部分の写真をまとめ、添付しました。商品の返送方法を教えていただけますか。よろしくお願いいたします。",
   "exprs": [
    "put together",
    "send back"
   ],
   "tip": "return は店舗対応で明確"
  },
  {
   "id": 3,
   "scene": "買い物",
   "groups": [
    "shop"
   ],
   "purpose": "在庫の問い合わせ",
   "subject": "Product availability inquiry",
   "body": "Hello, I'm looking for this product in a medium size. Do you have it in stock? If so, could you put one aside for me until Friday? Thank you in advance.",
   "ja": "こんにちは。この商品のMサイズを探しています。在庫はありますか。ありましたら、金曜日まで1点取り置きをお願いできますか。よろしくお願いいたします。",
   "exprs": [
    "look for",
    "have in stock",
    "put aside"
   ],
   "tip": "店頭・通販どちらにも使える"
  },
  {
   "id": 4,
   "scene": "飲食店",
   "groups": [
    "food"
   ],
   "purpose": "レストランの予約確認",
   "subject": "Reservation confirmation",
   "body": "Hello, I'd like to make sure our reservation for two on Friday at 7 p.m. is confirmed. Could you please get back to me with the details? Thank you.",
   "ja": "こんにちは。金曜日午後7時、2名の予約が確定しているか確認したいです。詳細をご返信いただけますか。ありがとうございます。",
   "exprs": [
    "make sure",
    "get back to"
   ],
   "tip": "予約済みかの確認文。新規予約ではない"
  },
  {
   "id": 5,
   "scene": "飲食店",
   "groups": [
    "food"
   ],
   "purpose": "予約変更の依頼",
   "subject": "Request to change reservation time",
   "body": "Hello, something has come up, and I need to change our reservation time. Would it be possible to put it off until 8 p.m. on Saturday? I'm sorry for the inconvenience and look forward to your reply.",
   "ja": "こんにちは。急用ができ、予約時間を変更する必要があります。土曜日午後8時まで遅らせることは可能でしょうか。ご迷惑をおかけして申し訳ありません。ご返信をお待ちしております。",
   "exprs": [
    "come up",
    "put off",
    "look forward to"
   ],
   "tip": "延期ではなく時刻変更の意図を文脈で明確に"
  },
  {
   "id": 6,
   "scene": "病院",
   "groups": [
    "medical"
   ],
   "purpose": "診察日時の変更",
   "subject": "Appointment rescheduling request",
   "body": "Hello, I won't be able to make my appointment on Tuesday. Could we put it off until later in the week? If an earlier appointment becomes available, please let me know as well. Thank you.",
   "ja": "こんにちは。火曜日の診察予約に伺えなくなりました。週後半に延期できますか。また、早い時間帯に空きが出ましたらお知らせください。よろしくお願いいたします。",
   "exprs": [
    "put off",
    "let me know"
   ],
   "tip": "予約の変更依頼"
  },
  {
   "id": 7,
   "scene": "病院",
   "groups": [
    "medical"
   ],
   "purpose": "診察前に必要な物の確認",
   "subject": "Question about appointment preparation",
   "body": "Hello, I have an appointment next Monday. Do I have to fill in any forms before I arrive? Also, should I bring along my current medication list? Thank you for your guidance.",
   "ja": "こんにちは。来週月曜日に診察予約があります。来院前に記入すべき書類はありますか。また、現在の服薬リストを持参した方がよいでしょうか。ご案内ありがとうございます。",
   "exprs": [
    "have to",
    "bring along"
   ],
   "tip": "医療的な判断ではなく持ち物の確認"
  },
  {
   "id": 8,
   "scene": "薬局",
   "groups": [
    "medical"
   ],
   "purpose": "処方薬の受取手続き",
   "subject": "Prescription pickup inquiry",
   "body": "Hello, I'd like to pick up my prescribed medication this week. Could you let me know when it will be ready? I may run out of my current supply soon, so I'd appreciate a reply when convenient.",
   "ja": "こんにちは。今週、処方薬を受け取りたいです。いつ準備が整うか教えていただけますか。手元の薬がもうすぐなくなる可能性があるため、ご都合のよいときにご返信いただけると助かります。",
   "exprs": [
    "pick up",
    "run out of",
    "let me know"
   ],
   "tip": "薬局・処方元への手続きを前提とする"
  },
  {
   "id": 9,
   "scene": "薬局",
   "groups": [
    "medical"
   ],
   "purpose": "薬の説明を再確認",
   "subject": "Request to clarify medication instructions",
   "body": "Hello, I'm having trouble with part of the written instructions. Could someone go over them with me by phone? Please let me know a suitable time. Thank you.",
   "ja": "こんにちは。書面の説明の一部でわかりにくいところがあり、ご連絡しています。電話で一緒に説明を確認していただけますか。都合のよい時間を教えてください。ありがとうございます。",
   "exprs": [
    "have trouble with",
    "go over",
    "let me know"
   ],
   "tip": "薬の服用判断は薬剤師に確認"
  },
  {
   "id": 10,
   "scene": "家・修理",
   "groups": [
    "home"
   ],
   "purpose": "家電の点検依頼",
   "subject": "Request for an appliance inspection",
   "body": "Hello, I'm having trouble with my washing machine. It keeps on making an unusual noise. Could you arrange for someone to have a look at it? I'm available on Thursday afternoon.",
   "ja": "こんにちは。洗濯機の調子が悪く、異音が続いています。どなたかに点検していただく手配は可能でしょうか。木曜日の午後なら対応できます。",
   "exprs": [
    "have trouble with",
    "keep on",
    "have a look at"
   ],
   "tip": "修理業者への相談"
  },
  {
   "id": 11,
   "scene": "支払い",
   "groups": [
    "shop"
   ],
   "purpose": "二重請求について",
   "subject": "Question about a duplicate charge",
   "body": "Hello, I ran into a problem with my recent payment. The same amount appears to have been charged twice. Could you please look into this issue and get back to me? I've attached the receipt for reference.",
   "ja": "こんにちは。先日の支払いに問題がありました。同じ金額が二重に請求されているようです。ご確認のうえご返信いただけますか。参考としてレシートを添付しました。",
   "exprs": [
    "run into",
    "look into",
    "get back to"
   ],
   "tip": "appears to で断定を避ける"
  },
  {
   "id": 12,
   "scene": "家・来客",
   "groups": [
    "home"
   ],
   "purpose": "知人を自宅に招待",
   "subject": "Dinner invitation",
   "body": "Hello, we'd love to have you over for dinner next Sunday. We're planning to get together around six. You don't need to bring anything along. Just let me know if you can make it!",
   "ja": "こんにちは。次の日曜日、ぜひ夕食にいらしてください。6時ごろ集まる予定です。何も持ってこなくて大丈夫です。来られるかだけ教えてくださいね。",
   "exprs": [
    "have over",
    "get together",
    "bring along"
   ],
   "tip": "親しい相手への自然なメール"
  },
  {
   "id": 13,
   "scene": "連絡",
   "groups": [
    "contact"
   ],
   "purpose": "返事が遅れたとき",
   "subject": "Sorry for the delayed reply",
   "body": "Hello, sorry I didn't get back to you sooner. Something came up at home, but I've now gone through the information you sent. I'll get back to you with a decision by Friday.",
   "ja": "こんにちは。お返事が遅くなりすみません。家で急用ができましたが、いただいた情報は確認しました。金曜日までに結論をご連絡します。",
   "exprs": [
    "get back to",
    "come up",
    "go through"
   ],
   "tip": "返信が遅れた理由は詳細を書かなくてもよい"
  },
  {
   "id": 14,
   "scene": "配送",
   "groups": [
    "shop"
   ],
   "purpose": "荷物の受取日変更",
   "subject": "Request to move delivery date",
   "body": "Hello, could you bring forward the delivery by one day, if possible? I'll be away on the original delivery date. Please let me know whether the change can be arranged. Thank you.",
   "ja": "こんにちは。可能であれば配送を1日前倒ししていただけますか。当初の配送日は不在にしています。変更可能かどうかお知らせください。ありがとうございます。",
   "exprs": [
    "bring forward",
    "let me know"
   ],
   "tip": "bring forward は主に英国英語。米語なら move up"
  }
 ],
 "compares": [
  {
   "id": 1,
   "a": "get back",
   "b": "get back to + 人",
   "aMean": "帰る・戻る",
   "bMean": "（人に）返事する",
   "aEx": "When will you get back?",
   "bEx": "I will get back to you tomorrow.",
   "aExJa": "いつ戻りますか。",
   "bExJa": "明日、お返事します。",
   "point": "「戻る」と「返信する」を区別。"
  },
  {
   "id": 2,
   "a": "put on",
   "b": "have on",
   "aMean": "身につける動作",
   "bMean": "身につけている状態",
   "aEx": "Put on a coat.",
   "bEx": "I have a coat on.",
   "aExJa": "コートを着てください。",
   "bExJa": "コートを着ています。",
   "point": "put on は着る瞬間、have on は着ている状態。"
  },
  {
   "id": 3,
   "a": "get in / get out of",
   "b": "get on / get off",
   "aMean": "車・タクシーなど",
   "bMean": "バス・電車など",
   "aEx": "Get in the taxi.",
   "bEx": "Get on the train.",
   "aExJa": "タクシーに乗ってください。",
   "bExJa": "電車に乗ってください。",
   "point": "乗り物の種類により使い分ける。"
  },
  {
   "id": 4,
   "a": "look for",
   "b": "look up",
   "aMean": "探す（物・人）",
   "bMean": "情報を調べる",
   "aEx": "I am looking for my keys.",
   "bEx": "I looked up the store hours.",
   "aExJa": "鍵を探しています。",
   "bExJa": "お店の営業時間を調べました。",
   "point": "look for = 物を探す、look up = データを検索。"
  },
  {
   "id": 5,
   "a": "look into",
   "b": "look over",
   "aMean": "詳しく調査する",
   "bMean": "ざっと確認する",
   "aEx": "Please look into the charge.",
   "bEx": "Please look over the estimate.",
   "aExJa": "この請求について調べてください。",
   "bExJa": "見積書に目を通してください。",
   "point": "問い合わせと書類の確認で重宝する。"
  },
  {
   "id": 6,
   "a": "go over",
   "b": "go through",
   "aMean": "一緒に確認・説明する",
   "bMean": "順を追って確認する",
   "aEx": "Could we go over the instructions?",
   "bEx": "I went through all the documents.",
   "aExJa": "説明を一緒に確認できますか。",
   "bExJa": "書類にひと通り目を通しました。",
   "point": "近い意味だが、go through は一通り目を通す場合にも。"
  },
  {
   "id": 7,
   "a": "put off",
   "b": "bring forward",
   "aMean": "延期・先送り",
   "bMean": "前倒し",
   "aEx": "Could we put off the appointment?",
   "bEx": "Could we bring forward the appointment?",
   "aExJa": "予約を延期できますか。",
   "bExJa": "予約を前倒しできますか。",
   "point": "bring forward は英国寄り。米語なら move up。"
  },
  {
   "id": 8,
   "a": "come down with",
   "b": "get over",
   "aMean": "病気にかかり始める",
   "bMean": "病気から回復する",
   "aEx": "I am coming down with a cold.",
   "bEx": "I am getting over a cold.",
   "aExJa": "風邪をひきかけています。",
   "bExJa": "風邪が治りかけています。",
   "point": "症状の経過の違い。"
  },
  {
   "id": 9,
   "a": "pick up",
   "b": "take out",
   "aMean": "受け取る・迎える",
   "bMean": "料理を持ち帰る・取り出す",
   "aEx": "I will pick up my prescription.",
   "bEx": "Can I take this meal out?",
   "aExJa": "処方薬を受け取りに行きます。",
   "bExJa": "この料理を持ち帰れますか。",
   "point": "pick up は受取、take out は持ち帰り注文など。"
  },
  {
   "id": 10,
   "a": "look after",
   "b": "take care of",
   "aMean": "世話をする",
   "bMean": "世話をする・仕事を処理する",
   "aEx": "Could you look after the cat?",
   "bEx": "I will take care of the payment.",
   "aExJa": "猫の世話をお願いできますか。",
   "bExJa": "支払いは私が済ませておきます。",
   "point": "take care of は仕事の処理にも便利。"
  },
  {
   "id": 11,
   "a": "bring back",
   "b": "take back",
   "aMean": "こちらへ持ち帰る",
   "bMean": "元の場所・店へ返す",
   "aEx": "Can you bring back some milk?",
   "bEx": "I would like to take this back.",
   "aExJa": "牛乳を買って帰ってもらえますか。",
   "bExJa": "これを返品したいのですが。",
   "point": "bring / take の方向感覚に注目。"
  },
  {
   "id": 12,
   "a": "have to",
   "b": "make sure to",
   "aMean": "義務・必要",
   "bMean": "忘れずに確実にする",
   "aEx": "I have to call the clinic.",
   "bEx": "Make sure to bring your ID.",
   "aExJa": "クリニックに電話しなければなりません。",
   "bExJa": "身分証を忘れずに持ってきてください。",
   "point": "後者は注意・確認のニュアンスが中心。"
  },
  {
   "id": 13,
   "a": "run out of",
   "b": "get rid of",
   "aMean": "使い切ってなくなる",
   "bMean": "不要物を処分する",
   "aEx": "We ran out of coffee.",
   "bEx": "We should get rid of this chair.",
   "aExJa": "コーヒーを切らしてしまいました。",
   "bExJa": "この椅子は処分したほうがいいですね。",
   "point": "「なくなる」と「なくす」の違い。"
  },
  {
   "id": 14,
   "a": "come over",
   "b": "have over",
   "aMean": "家へ訪問する",
   "bMean": "家に人を招く",
   "aEx": "Would you like to come over?",
   "bEx": "We are having friends over.",
   "aExJa": "家に来ませんか。",
   "bExJa": "友人を家に招く予定です。",
   "point": "訪問する側と招待する側の表現。"
  }
 ],
 "rules": [
  {
   "k": "句動詞",
   "v": "基本動詞に副詞や前置詞を合わせた表現。例: put off, get back to, run out of。"
  },
  {
   "k": "代名詞の位置",
   "v": "put it on / turn it off / pick it up が基本（put on it は不自然）。"
  },
  {
   "k": "前置詞の後",
   "v": "look forward to hearing from you（to の後は名詞・動名詞）。"
  },
  {
   "k": "have の扱い",
   "v": "have to / have a look at など、句動詞以外の便利な定型表現・構文も区別して収録。"
  },
  {
   "k": "医療場面",
   "v": "診察や薬局の例文は、予約・受取・説明確認のための英語。服薬判断は専門家に相談。"
  },
  {
   "k": "日本語訳",
   "v": "自然な会話になるよう意訳を含む。丸暗記より場面の中で使えることを優先。"
  },
  {
   "k": "表記の違い",
   "v": "bring forward などは英国寄り。必要に応じてニュアンス欄で補足。"
  }
 ]
};
