/* 基本動詞のフレーズ帳 — 画面の組み立てと操作。データは data/data.js（Excel から生成）。 */
(() => {
  'use strict';

  const D = window.PHRASEBOOK;
  const AUDIO = window.PHRASEBOOK_AUDIO || {};
  const app = document.getElementById('app');
  const SITE = '基本動詞のフレーズ帳';

  // ───────────── 小道具 ─────────────

  const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ESC[c]);
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem('phrasebook.' + key);
        return v == null ? fallback : JSON.parse(v);
      } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem('phrasebook.' + key, JSON.stringify(value)); } catch { /* 保存できなくても表示は続ける */ }
    },
  };

  const ICON = {
    speaker: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z"/><path d="M15.5 9.2a4 4 0 0 1 0 5.6M18 6.8a7.4 7.4 0 0 1 0 10.4"/></svg>',
    star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3.8 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z"/></svg>',
    play: '<svg class="i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 6v12l9.5-6z"/></svg><svg class="i-stop" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="1.5"/></svg>',
    copy: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8.5" y="8.5" width="11" height="11" rx="2"/><path d="M15.5 8.5v-2a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 6-6 6 6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9.5 6 6 6-6 6"/></svg>',
    shuffle: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h3.5c5 0 4 10 9 10H20M4 17h3.5c1.3 0 2.2-.7 3-1.7M20 7h-3.5c-1.3 0-2.2.7-3 1.7"/><path d="m17.5 4.5 2.5 2.5-2.5 2.5M17.5 14.500 20 17l-2.5 2.5"/></svg>',
  };

  // ───────────── データの索引 ─────────────

  const byId = (list) => new Map(list.map((x) => [x.id, x]));
  const phraseById = byId(D.phrases);
  const dialogById = byId(D.dialogs);
  const emailById = byId(D.emails);
  const compareById = byId(D.compares);
  const phraseByExpr = new Map(D.phrases.map((p) => [p.expr.toLowerCase(), p]));
  const groupLabel = new Map(D.groups.map((g) => [g.id, g.label]));

  /** 「get back to + 人」「make sure to」のような表記からも単語帳の表現を引く。 */
  function findPhrase(name) {
    const key = name.toLowerCase().replace(/\s*\+\s*人$/, '').trim();
    return phraseByExpr.get(key) || phraseByExpr.get(key.replace(/\s+to$/, '')) || null;
  }
  const splitNames = (s) => s.split('/').map((x) => x.trim()).filter(Boolean);

  const related = new Map(D.phrases.map((p) => [p.id, { dialogs: [], emails: [], compares: [] }]));
  for (const d of D.dialogs) for (const e of d.exprs) { const p = findPhrase(e); if (p) related.get(p.id).dialogs.push(d); }
  for (const m of D.emails) for (const e of m.exprs) { const p = findPhrase(e); if (p) related.get(p.id).emails.push(m); }
  for (const c of D.compares) {
    for (const e of [...splitNames(c.a), ...splitNames(c.b)]) {
      const p = findPhrase(e);
      if (p && !related.get(p.id).compares.includes(c)) related.get(p.id).compares.push(c);
    }
  }

  // ───────────── 例文中の表現に印をつける ─────────────

  const FORMS = {
    get: 'get|gets|got|gotten|getting', put: 'put|puts|putting', have: 'have|has|had|having',
    take: 'take|takes|took|taken|taking', go: 'go|goes|went|gone|going', come: 'come|comes|came|coming',
    look: 'look|looks|looked|looking', turn: 'turn|turns|turned|turning', bring: 'bring|brings|brought|bringing',
    pick: 'pick|picks|picked|picking', give: 'give|gives|gave|given|giving', run: 'run|runs|ran|running',
    keep: 'keep|keeps|kept|keeping', set: 'set|sets|setting', make: 'make|makes|made|making',
    work: 'work|works|worked|working',
  };
  // 語の並びでは拾えない構文は個別に指定する。
  const SPECIAL = {
    'have something done': "\\b(?:have|has|had|having)\\s+(?:the|my|your|our|a|an|this|that|it)\\b(?:\\s+[\\w'’-]+){0,3}?\\s+\\w+(?:ed|en|wn)\\b",
  };
  const GAP = "((?:\\s+[\\w'’-]+){0,4}?)\\s+"; // put ⟨the new shelf⟩ together のように間に入る語

  const patternCache = new Map();
  function exprPattern(expr) {
    const key = expr.toLowerCase().replace(/\s*\+\s*人$/, '').trim();
    if (patternCache.has(key)) return patternCache.get(key);
    let src;
    if (SPECIAL[key]) {
      src = SPECIAL[key];
    } else {
      const [verb, ...rest] = key.split(/\s+/);
      const forms = FORMS[verb] || `${reEsc(verb)}(?:s|es|ed|ing)?`;
      src = rest.length
        // get along ⟨well⟩ with のように、表現の途中に well が入る形も拾う
        ? `\\b(${forms})\\b${GAP}(${rest.map(reEsc).join('(?:\\s+well)?\\s+')})\\b`
        : `\\b(?:${forms})\\b`;
    }
    patternCache.set(key, src);
    return src;
  }

  /** text の中で exprs に当たる部分を <mark> で囲んだ HTML を返す。 */
  function mark(text, exprs) {
    const ranges = [];
    for (const e of exprs) {
      const re = new RegExp(exprPattern(e), 'gi');
      let m;
      while ((m = re.exec(text))) {
        const start = m.index, end = start + m[0].length;
        if (m[3] !== undefined && m[2]) {
          ranges.push([start, start + m[1].length], [end - m[3].length, end]);
        } else {
          ranges.push([start, end]);
        }
        if (!m[0].length) re.lastIndex++;
      }
    }
    if (!ranges.length) return esc(text);
    ranges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let html = '', pos = 0;
    for (const [s, e] of ranges) {
      if (e <= pos) continue;
      const from = Math.max(s, pos);
      html += esc(text.slice(pos, from)) + '<mark>' + esc(text.slice(from, e)) + '</mark>';
      pos = e;
    }
    return html + esc(text.slice(pos));
  }

  // ───────────── 設定・お気に入り ─────────────

  const favs = new Set(store.get('favs', []));
  const settings = { showJa: store.get('showJa', true), slow: store.get('slow', false) };

  function applyJa() {
    document.body.classList.toggle('hide-ja', !settings.showJa);
    const btn = document.getElementById('jaToggle');
    btn.setAttribute('aria-pressed', String(settings.showJa));
    document.getElementById('jaToggleState').textContent = settings.showJa ? '表示' : 'かくす';
  }

  // ───────────── 音声（登録済みの音声ファイル → なければ端末の読み上げ） ─────────────

  const hasTTS = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  if (!hasTTS && !Object.keys(AUDIO).length) document.body.classList.add('no-audio');

  function pickVoice() {
    const voices = speechSynthesis.getVoices();
    const us = voices.filter((v) => /^en[-_]US/i.test(v.lang));
    return us.find((v) => /Samantha|Google US English|Ava|Allison|Jenny|Aria/i.test(v.name))
      || us[0] || voices.find((v) => /^en/i.test(v.lang)) || null;
  }
  if (hasTTS) speechSynthesis.getVoices(); // 一部の端末は最初の呼び出しで一覧の読み込みを始める

  const player = {
    token: 0,
    audio: null,
    stop() {
      this.token++;
      if (this.audio) { this.audio.onended = this.audio.onerror = null; this.audio.pause(); }
      if (hasTTS) speechSynthesis.cancel();
      document.querySelectorAll('.is-speaking').forEach((el) => el.classList.remove('is-speaking'));
      document.querySelectorAll('.is-playing').forEach((el) => el.classList.remove('is-playing'));
    },
    /** items: [{key, text, el}] を順に再生。もう一度押すと止まる。 */
    play(items, btn) {
      const wasPlaying = btn && btn.classList.contains('is-playing');
      this.stop();
      if (wasPlaying || !items.length) return;
      const token = this.token;
      if (btn) btn.classList.add('is-playing');
      const done = () => { if (token === this.token && btn) btn.classList.remove('is-playing'); };
      const begin = (it) => { if (token === this.token && it.el) it.el.classList.add('is-speaking'); };
      const finish = (it) => { if (it.el) it.el.classList.remove('is-speaking'); };

      const allTTS = items.every((it) => !AUDIO[it.key]);
      if (allTTS) {
        if (!hasTTS) return done();
        // 読み上げは押した瞬間にまとめて予約する（iOS は操作の直後でないと再生を始めない）。
        const voice = pickVoice();
        items.forEach((it, i) => {
          const u = new SpeechSynthesisUtterance(it.text);
          u.lang = 'en-US';
          if (voice) u.voice = voice;
          u.rate = settings.slow ? 0.78 : 0.98;
          u.onstart = () => begin(it);
          u.onend = u.onerror = () => { finish(it); if (i === items.length - 1) done(); };
          speechSynthesis.speak(u);
        });
        return;
      }
      const step = (i) => {
        if (token !== this.token) return;
        if (i >= items.length) return done();
        const it = items[i];
        const next = () => { finish(it); step(i + 1); };
        begin(it);
        if (AUDIO[it.key]) {
          // 同じ <audio> を使い回す（iOS は、操作のあとに新しく作った要素の自動再生を止めるため）
          const a = this.audio || (this.audio = new Audio());
          a.onended = () => { finish(it); setTimeout(() => step(i + 1), 320); }; // 行と行のあいだに一拍おく
          a.onerror = next;
          a.src = AUDIO[it.key];
          a.defaultPlaybackRate = a.playbackRate = settings.slow ? 0.85 : 1;
          a.play().catch(() => { if (token === this.token) next(); });
        } else if (hasTTS) {
          const u = new SpeechSynthesisUtterance(it.text);
          u.lang = 'en-US';
          const voice = pickVoice();
          if (voice) u.voice = voice;
          u.rate = settings.slow ? 0.78 : 0.98;
          u.onend = u.onerror = next;
          speechSynthesis.speak(u);
        } else next();
      };
      step(0);
    },
  };

  /** "p12.q" などのキーから読み上げる文を引く。 */
  function sayText(key) {
    const [head, part] = key.split('.');
    const id = Number(head.slice(1));
    switch (head[0]) {
      case 'p': return phraseById.get(id)?.[part];
      case 'd': return dialogById.get(id)?.lines[Number(part)]?.en;
      case 'm': return emailById.get(id)?.body;
      case 'c': { const c = compareById.get(id); return c && (part === 'a' ? c.aEx : c.bEx); }
      default: return undefined;
    }
  }
  function playKeys(keys, btn) {
    const items = keys
      .map((key) => ({ key, text: sayText(key), el: document.querySelector(`[data-line="${key}"]`) }))
      .filter((it) => it.text);
    player.play(items, btn);
  }
  const playAllKeys = (id) => {
    if (id[0] === 'p') return [`${id}.q`, `${id}.a`];
    const d = dialogById.get(Number(id.slice(1)));
    return d ? d.lines.map((_, i) => `${id}.${i}`) : [];
  };

  // ───────────── 部品 ─────────────

  const spk = (key, label = 'この文を聞く') =>
    `<button class="spk" type="button" data-say="${key}" aria-label="${label}">${ICON.speaker}</button>`;

  const favBtn = (id) =>
    `<button class="fav" type="button" data-fav="${id}" aria-pressed="${favs.has(id)}" aria-label="★ をつける">${ICON.star}</button>`;

  const tags = (p) => `
    <p class="tags">
      <span class="tag freq-${p.freq.toLowerCase()}">${p.freq === 'A' ? 'A 最優先' : 'B 応用'}</span>
      <span class="tag">${esc(p.kind)}</span>
      <span class="tag tag-scene">${esc(p.scene)}</span>
    </p>`;

  const qaBlock = (p) => `
    <div class="qa">
      <div class="line" data-line="p${p.id}.q">
        <span class="who" aria-label="質問">Q</span>
        <div class="say"><p class="en" lang="en">${mark(p.q, [p.expr])}</p><p class="ja">${esc(p.qJa)}</p></div>
        ${spk(`p${p.id}.q`)}
      </div>
      <div class="line" data-line="p${p.id}.a">
        <span class="who who-a" aria-label="返答">A</span>
        <div class="say"><p class="en" lang="en">${mark(p.a, [p.expr])}</p><p class="ja">${esc(p.aJa)}</p></div>
        ${spk(`p${p.id}.a`)}
      </div>
    </div>`;

  const phraseCard = (p) => `
    <article class="card phrase" id="p${p.id}">
      <header class="phrase-head">
        <a class="phrase-title" href="#/p/${p.id}">
          <h3 lang="en">${esc(p.expr)}</h3>
          <p class="meaning">${esc(p.meaning)}</p>
        </a>
        ${favBtn(p.id)}
      </header>
      ${qaBlock(p)}
      <footer class="card-foot">
        ${tags(p)}
        <a class="more" href="#/p/${p.id}">くわしく ›</a>
      </footer>
    </article>`;

  const exprChips = (exprs) => exprs.map((e) => {
    const p = findPhrase(e);
    return p
      ? `<a class="chip chip-link" lang="en" href="#/p/${p.id}">${esc(e)}</a>`
      : `<span class="chip chip-plain" lang="en">${esc(e)}</span>`;
  }).join('');

  function dialogCard(d) {
    const speakers = [...new Set(d.lines.map((l) => l.who))];
    const rows = d.lines.map((l, i) => {
      const side = speakers.indexOf(l.who) % 2 ? 'right' : 'left';
      return `
        <div class="turn turn-${side}" data-line="d${d.id}.${i}">
          <div class="bubble">
            <span class="bubble-who" lang="en">${esc(l.who)}</span>
            <p class="en" lang="en">${mark(l.en, d.exprs)}</p>
            <p class="ja">${esc(l.ja)}</p>
          </div>
          ${spk(`d${d.id}.${i}`)}
        </div>`;
    }).join('');
    return `
      <article class="card dialog" id="d${d.id}">
        <header class="item-head">
          <div>
            <p class="tags"><span class="tag tag-scene">${esc(d.scene)}</span></p>
            <h3>${esc(d.title)}</h3>
          </div>
        </header>
        <div class="chat">${rows}</div>
        <footer class="exprs"><span class="exprs-label">出てくる表現</span>${exprChips(d.exprs)}</footer>
        <div class="actions">
          <button class="btn btn-play" type="button" data-play="d${d.id}">${ICON.play}<span>通して聞く</span></button>
        </div>
      </article>`;
  }

  // 本文は1段落で入っているので、挨拶のあとで改行して読みやすくする。
  const mailBody = (s) => s.replace(/^((?:Hello|Hi|Dear)[^,.]{0,30},)\s+/, '$1\n');
  const mailJa = (s) => s.replace(/^(こんにちは。|お世話になっております。)\s*/, '$1\n');

  const emailCard = (m) => `
    <article class="card email" id="m${m.id}">
      <header class="item-head">
        <div>
          <p class="tags"><span class="tag tag-scene">${esc(m.scene)}</span></p>
          <h3>${esc(m.purpose)}</h3>
        </div>
      </header>
      <div class="mail" data-line="m${m.id}.body">
        <p class="mail-subject" lang="en"><span class="mail-label">Subject</span>${esc(m.subject)}</p>
        <p class="en mail-body" lang="en">${mark(mailBody(m.body), m.exprs)}</p>
        <p class="ja mail-ja">${esc(mailJa(m.ja))}</p>
      </div>
      <p class="note"><span class="note-label">使いどころ</span>${esc(m.tip)}</p>
      <footer class="exprs"><span class="exprs-label">主な表現</span>${exprChips(m.exprs)}</footer>
      <div class="actions">
        <button class="btn btn-play" type="button" data-say="m${m.id}.body">${ICON.play}<span>聞く</span></button>
        <button class="btn" type="button" data-copy="${m.id}">${ICON.copy}<span>英文をコピー</span></button>
      </div>
    </article>`;

  function compareCard(c) {
    const side = (name, mean, ex, ja, key) => `
      <div class="vs-side" data-line="${key}">
        <h3 lang="en">${esc(name)}</h3>
        <p class="meaning">${esc(mean)}</p>
        <div class="vs-ex">
          <div class="say"><p class="en" lang="en">${mark(ex, splitNames(name))}</p>${ja ? `<p class="ja">${esc(ja)}</p>` : ''}</div>
          ${spk(key)}
        </div>
      </div>`;
    const links = [...splitNames(c.a), ...splitNames(c.b)];
    return `
      <article class="card compare" id="c${c.id}">
        <div class="vs">
          ${side(c.a, c.aMean, c.aEx, c.aExJa, `c${c.id}.a`)}
          <span class="vs-mark" aria-hidden="true">vs</span>
          ${side(c.b, c.bMean, c.bEx, c.bExJa, `c${c.id}.b`)}
        </div>
        <p class="note"><span class="note-label">ポイント</span>${esc(c.point)}</p>
        <footer class="exprs"><span class="exprs-label">単語帳で見る</span>${exprChips(links)}</footer>
      </article>`;
  }

  const chip = (attrs, label, pressed, count) =>
    `<button class="chip chip-filter" type="button" ${attrs} aria-pressed="${pressed}">${label}${count == null ? '' : `<span class="chip-n">${count}</span>`}</button>`;

  const pageHead = (title, lead) => `
    <header class="page-head"><h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}</header>`;

  // ───────────── ホーム ─────────────

  let todayPicks = null;
  function pickToday(random) {
    const list = D.phrases.filter((p) => p.freq === 'A');
    // 日付から決めるので、同じ日は同じ3つ。「入れ替える」を押すとランダム。
    let seed = random ? Math.floor(Math.random() * 1e9) : Math.floor(Date.now() / 864e5 + 0.375) * 2654435761;
    const rand = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const pool = [...list], picks = [];
    while (picks.length < 3 && pool.length) picks.push(pool.splice(Math.floor(rand() * pool.length), 1)[0]);
    todayPicks = picks.map((p) => p.id);
  }

  function renderHome() {
    if (!todayPicks) pickToday(false);
    const groupCount = (gid) => D.phrases.filter((p) => p.groups.includes(gid)).length;
    app.innerHTML = `
      <section class="hero">
        <p class="hero-kicker" lang="en">get / put / have …</p>
        <h1>基本動詞のフレーズ帳</h1>
        <p class="lead">やさしい動詞に前置詞や副詞をつけるだけで、言えることがぐっと増えます。家・買い物・飲食店・病院・薬局・メールの例文を、眺めながら少しずつ。</p>
      </section>

      <section class="block">
        <div class="block-head">
          <h2>今日のフレーズ</h2>
          <button class="btn btn-ghost" type="button" data-shuffle>${ICON.shuffle}<span>入れ替える</span></button>
        </div>
        <div class="grid" id="today">${todayPicks.map((id) => phraseCard(phraseById.get(id))).join('')}</div>
      </section>

      <section class="block">
        <div class="block-head"><h2>動詞からさがす</h2><a class="block-link" href="#/phrases">すべて ${D.phrases.length} ›</a></div>
        <div class="verb-grid">
          ${D.verbs.map((v) => `<a class="verb-tile" href="#/phrases?verb=${v.v}"><span class="verb-name" lang="en">${v.v}</span><span class="verb-n">${v.n}</span></a>`).join('')}
        </div>
      </section>

      <section class="block">
        <div class="block-head"><h2>場面からさがす</h2></div>
        <div class="scene-grid">
          ${D.groups.map((g) => `<a class="scene-tile" href="#/phrases?g=${g.id}"><span>${esc(g.label)}</span><span class="verb-n">${groupCount(g.id)}</span></a>`).join('')}
        </div>
      </section>

      <section class="block">
        <div class="block-head"><h2>まとめて読む</h2></div>
        <div class="shelf">
          <a class="shelf-item" href="#/dialogs"><span class="shelf-n">${D.dialogs.length}</span><span class="shelf-t">場面別ミニ会話</span><span class="shelf-d">質問と自然な受け答えを4行で</span></a>
          <a class="shelf-item" href="#/emails"><span class="shelf-n">${D.emails.length}</span><span class="shelf-t">英文メール</span><span class="shelf-d">そのまま応用できる短い文面</span></a>
          <a class="shelf-item" href="#/compare"><span class="shelf-n">${D.compares.length}</span><span class="shelf-t">使い分け</span><span class="shelf-d">まぎらわしい表現を並べて確認</span></a>
          <a class="shelf-item" href="#/phrases?fav=1"><span class="shelf-n shelf-star">${ICON.star}</span><span class="shelf-t">★ をつけた表現</span><span class="shelf-d" id="favCount">${favs.size ? `${favs.size} 件` : '気になる表現に ★ をつけると、ここから見返せます'}</span></a>
        </div>
      </section>

      <section class="block">
        <details class="rules">
          <summary>最初に知っておくと便利な文型ルール</summary>
          <dl>${D.rules.map((r) => `<div><dt>${esc(r.k)}</dt><dd>${esc(r.v)}</dd></div>`).join('')}</dl>
        </details>
      </section>

      <section class="block settings">
        <div class="setting audio-only">
          <span>読み上げの速さ</span>
          <div class="seg" role="group" aria-label="読み上げの速さ">
            <button type="button" data-rate="normal" aria-pressed="${!settings.slow}">ふつう</button>
            <button type="button" data-rate="slow" aria-pressed="${settings.slow}">ゆっくり</button>
          </div>
        </div>
        <p class="fine audio-only">音声ファイルを用意していない文は、お使いの端末の読み上げ機能で再生します。端末によって声や聞こえ方が変わります。</p>
        <p class="fine">★ と表示の設定は、この端末のブラウザにだけ保存されます。｜ 更新日 ${esc(D.built)}</p>
      </section>`;
  }

  // ───────────── 単語帳（一覧） ─────────────

  let listContext = store.get('listContext', null); // 詳細ページの「前へ／次へ」で使う並び

  function filterPhrases(f) {
    const q = f.q.trim().toLowerCase();
    return D.phrases.filter((p) =>
      (!f.verb || p.verb === f.verb)
      && (!f.g || p.groups.includes(f.g))
      && (!f.freq || p.freq === f.freq)
      && (!f.fav || favs.has(p.id))
      && (!q || [p.expr, p.meaning, p.q, p.a, p.mail, p.qJa, p.aJa, p.mailJa, p.note, p.scene].some((s) => s.toLowerCase().includes(q))));
  }

  function renderPhrases(params) {
    const f = {
      verb: FORMS[params.get('verb')] ? params.get('verb') : '',
      g: groupLabel.has(params.get('g')) ? params.get('g') : '',
      freq: ['A', 'B'].includes(params.get('freq')) ? params.get('freq') : '',
      fav: params.get('fav') === '1',
      q: params.get('q') || '',
    };

    app.innerHTML = `
      ${pageHead('単語帳', `16の基本動詞でつくる ${D.phrases.length} 表現。質問と返答のセットで確認できます。`)}
      <div class="filters">
        <label class="search">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></svg>
          <input type="search" id="q" placeholder="表現・意味・例文をさがす" value="${esc(f.q)}" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" aria-label="表現・意味・例文をさがす">
        </label>
        <div class="chips" role="group" aria-label="動詞でしぼる">
          ${chip('data-f="verb" data-v=""', 'すべて', false)}
          ${D.verbs.map((v) => chip(`data-f="verb" data-v="${v.v}" lang="en"`, v.v, false, v.n)).join('')}
        </div>
        <div class="chips" role="group" aria-label="場面でしぼる">
          ${chip('data-f="g" data-v=""', 'すべての場面', false)}
          ${D.groups.map((g) => chip(`data-f="g" data-v="${g.id}"`, esc(g.label), false)).join('')}
        </div>
        <div class="chips chips-wrap" role="group" aria-label="そのほかの条件">
          ${chip('data-f="freq" data-v="A"', 'A 最優先', false)}
          ${chip('data-f="freq" data-v="B"', 'B 応用', false)}
          ${chip('data-f="fav" data-v="1"', '★ のみ', false)}
          <span class="count" id="count" aria-live="polite"></span>
        </div>
      </div>
      <div id="results"></div>`;

    const results = document.getElementById('results');
    const update = (syncUrl) => {
      app.querySelectorAll('.chip-filter').forEach((b) => {
        const key = b.dataset.f, val = b.dataset.v;
        b.setAttribute('aria-pressed', String(key === 'fav' ? f.fav : f[key] === val));
      });
      const list = filterPhrases(f);
      document.getElementById('count').textContent = `${list.length} 件`;
      listContext = list.map((p) => p.id);
      store.set('listContext', listContext);

      if (!list.length) {
        results.innerHTML = `<p class="empty">${f.fav && !favs.size ? 'まだ ★ をつけた表現がありません。気になる表現の ★ を押すと、ここに集まります。' : '条件に合う表現が見つかりませんでした。'}</p>`;
      } else if (f.verb) {
        results.innerHTML = `<div class="grid">${list.map(phraseCard).join('')}</div>`;
      } else {
        // 動詞ごとに見出しをつけて並べる
        results.innerHTML = D.verbs.map((v) => {
          const items = list.filter((p) => p.verb === v.v);
          return items.length ? `
            <section class="verb-section">
              <h2 class="verb-heading"><span lang="en">${v.v}</span><span class="verb-n">${items.length}</span></h2>
              <div class="grid">${items.map(phraseCard).join('')}</div>
            </section>` : '';
        }).join('');
      }

      if (syncUrl) {
        const qs = new URLSearchParams();
        if (f.verb) qs.set('verb', f.verb);
        if (f.g) qs.set('g', f.g);
        if (f.freq) qs.set('freq', f.freq);
        if (f.fav) qs.set('fav', '1');
        if (f.q.trim()) qs.set('q', f.q.trim());
        const s = qs.toString();
        history.replaceState(history.state, '', '#/phrases' + (s ? '?' + s : ''));
      }
    };
    update(false);

    app.querySelector('.filters').addEventListener('click', (e) => {
      const b = e.target.closest('.chip-filter');
      if (!b) return;
      const key = b.dataset.f, val = b.dataset.v;
      if (key === 'fav') f.fav = !f.fav;
      else f[key] = f[key] === val ? '' : val;
      player.stop();
      update(true);
    });
    let timer;
    document.getElementById('q').addEventListener('input', (e) => {
      f.q = e.target.value;
      clearTimeout(timer);
      timer = setTimeout(() => update(true), 120);
    });
    // 選択中の動詞チップが見える位置まで横スクロール
    const active = app.querySelector('.chip-filter[data-f="verb"][aria-pressed="true"]');
    if (active && active.dataset.v) active.scrollIntoView({ block: 'nearest', inline: 'center' });
  }

  // ───────────── 単語帳（1件ずつ） ─────────────

  function renderPhrase(id) {
    const p = phraseById.get(id);
    if (!p) return renderHome();
    const ctx = listContext && listContext.includes(id) ? listContext : D.phrases.map((x) => x.id);
    const i = ctx.indexOf(id);
    const prev = phraseById.get(ctx[i - 1]), next = phraseById.get(ctx[i + 1]);
    const rel = related.get(id);
    const relLinks = [
      ...rel.dialogs.map((d) => `<a class="rel" href="#/dialogs?id=${d.id}"><span class="rel-kind">会話</span>${esc(d.title)}</a>`),
      ...rel.emails.map((m) => `<a class="rel" href="#/emails?id=${m.id}"><span class="rel-kind">メール</span>${esc(m.purpose)}</a>`),
      ...rel.compares.map((c) => `<a class="rel" href="#/compare?id=${c.id}"><span class="rel-kind">使い分け</span><span lang="en">${esc(c.a)}</span> と <span lang="en">${esc(c.b)}</span></a>`),
    ].join('');
    const navBtn = (q, dir) => q
      ? `<a class="pager-btn pager-${dir}" href="#/p/${q.id}" data-replace aria-label="${dir === 'prev' ? '前の表現' : '次の表現'}: ${esc(q.expr)}">${dir === 'prev' ? ICON.prev : ''}<span lang="en">${esc(q.expr)}</span>${dir === 'next' ? ICON.next : ''}</a>`
      : `<span class="pager-btn pager-${dir} is-empty"></span>`;

    app.innerHTML = `
      <div class="detail" data-prev="${prev ? prev.id : ''}" data-next="${next ? next.id : ''}">
        <div class="detail-top">
          <a class="back" href="#/phrases" data-back>${ICON.prev}<span>単語帳</span></a>
          <span class="detail-pos">${i + 1} / ${ctx.length}</span>
        </div>
        <article class="card detail-card">
          <header class="phrase-head">
            <div class="phrase-title">
              <a class="verb-pill" lang="en" href="#/phrases?verb=${p.verb}">${esc(p.verb)}</a>
              <h1 lang="en">${esc(p.expr)}</h1>
              <p class="meaning">${esc(p.meaning)}</p>
            </div>
            ${favBtn(p.id)}
          </header>
          ${tags(p)}

          <section class="sec">
            <div class="sec-head"><h2>会話で</h2><button class="btn btn-play btn-small" type="button" data-play="p${p.id}">${ICON.play}<span>通して聞く</span></button></div>
            ${qaBlock(p)}
          </section>

          <section class="sec">
            <div class="sec-head"><h2>メールで</h2></div>
            <div class="qa"><div class="line" data-line="p${p.id}.mail">
              <div class="say"><p class="en" lang="en">${mark(p.mail, [p.expr])}</p><p class="ja">${esc(p.mailJa)}</p></div>
              ${spk(`p${p.id}.mail`)}
            </div></div>
          </section>

          <section class="sec">
            <p class="note"><span class="note-label">ポイント</span>${esc(p.note)}</p>
          </section>

          ${relLinks ? `<section class="sec"><div class="sec-head"><h2>この表現が出てくるところ</h2></div><div class="rels">${relLinks}</div></section>` : ''}
        </article>
        <nav class="pager" aria-label="前後の表現">${navBtn(prev, 'prev')}${navBtn(next, 'next')}</nav>
        <p class="fine swipe-hint">左右にスワイプしても前後の表現へ移れます。</p>
      </div>`;
  }

  // ───────────── 会話・メール・使い分け ─────────────

  function renderCollection({ title, lead, items, card, params, base }) {
    const groups = D.groups.filter((g) => items.some((x) => x.groups && x.groups.includes(g.id)));
    const g = groups.some((x) => x.id === params.get('g')) ? params.get('g') : '';
    const list = g ? items.filter((x) => x.groups.includes(g)) : items;
    app.innerHTML = `
      ${pageHead(title, lead)}
      ${groups.length ? `<div class="filters"><div class="chips" role="group" aria-label="場面でしぼる">
        <a class="chip chip-filter" href="#/${base}" data-replace aria-pressed="${!g}">すべて<span class="chip-n">${items.length}</span></a>
        ${groups.map((x) => `<a class="chip chip-filter" href="#/${base}?g=${x.id}" data-replace aria-pressed="${g === x.id}">${esc(x.label)}<span class="chip-n">${items.filter((it) => it.groups.includes(x.id)).length}</span></a>`).join('')}
      </div></div>` : ''}
      <div class="grid grid-wide">${list.map(card).join('')}</div>`;
  }

  const renderDialogs = (params) => renderCollection({
    title: '場面別ミニ会話', base: 'dialogs', items: D.dialogs, card: dialogCard, params,
    lead: '家・買い物・飲食店・病院・薬局などの短いやりとり。声に出して、両方の役を読んでみてください。',
  });
  const renderEmails = (params) => renderCollection({
    title: '英文メール', base: 'emails', items: D.emails, card: emailCard, params,
    lead: '件名・本文・和訳のセット。自分の事情に置き換えて、そのまま使えます。',
  });
  const renderCompare = (params) => renderCollection({
    title: '使い分け', base: 'compare', items: D.compares, card: compareCard, params,
    lead: '似た表現を並べて見ると、会話で迷う時間が減ります。',
  });

  // ───────────── 画面の切り替え ─────────────

  const ROUTES = {
    '': { tab: 'home', title: '', render: () => renderHome() },
    phrases: { tab: 'phrases', title: '単語帳', render: (r) => renderPhrases(r.params) },
    p: { tab: 'phrases', title: '', render: (r) => renderPhrase(Number(r.parts[1])) },
    dialogs: { tab: 'dialogs', title: '場面別ミニ会話', render: (r) => renderDialogs(r.params), prefix: 'd' },
    emails: { tab: 'emails', title: '英文メール', render: (r) => renderEmails(r.params), prefix: 'm' },
    compare: { tab: 'compare', title: '使い分け', render: (r) => renderCompare(r.params), prefix: 'c' },
  };

  function parseHash() {
    const [path, qs = ''] = location.hash.replace(/^#\/?/, '').split('?');
    return { parts: path.split('/').filter(Boolean), params: new URLSearchParams(qs) };
  }

  /** 画面を描く。戻り値は「個別の項目へ飛ぶ」ときの飛び先の要素。 */
  function render() {
    player.stop();
    const r = parseHash();
    const route = ROUTES[r.parts[0] || ''] || ROUTES[''];
    route.render(r);
    const phrase = route === ROUTES.p && phraseById.get(Number(r.parts[1]));
    document.title = (phrase ? `${phrase.expr}｜` : route.title ? `${route.title}｜` : '') + SITE;
    document.querySelectorAll('[data-tab]').forEach((a) => {
      if (a.dataset.tab === route.tab) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    const target = route.prefix && r.params.get('id') && document.getElementById(route.prefix + r.params.get('id'));
    return target || null;
  }

  // 戻る／進むで元のスクロール位置に戻すため、画面ごとに位置を覚えておく
  history.scrollRestoration = 'manual';
  const scrollMem = new Map();
  let navKey = history.state && history.state.k ? history.state.k : Date.now();
  if (!history.state || !history.state.k) history.replaceState({ k: navKey }, '');

  function show(target, restoreY) {
    if (target) {
      target.scrollIntoView({ block: 'start' });
      target.classList.add('is-target');
      setTimeout(() => target.classList.remove('is-target'), 1600);
    } else {
      window.scrollTo(0, restoreY || 0);
    }
  }

  function go(href, replace) {
    if (replace) {
      history.replaceState(history.state, '', href);
    } else {
      scrollMem.set(navKey, window.scrollY);
      navKey = Date.now() + Math.random();
      history.pushState({ k: navKey }, '', href);
    }
    show(render(), 0);
  }

  window.addEventListener('popstate', (e) => {
    scrollMem.set(navKey, window.scrollY);
    const known = e.state && e.state.k;
    navKey = known || Date.now() + Math.random();
    if (!known) history.replaceState({ k: navKey }, '');
    const target = render();
    if (known && scrollMem.has(navKey)) show(null, scrollMem.get(navKey));
    else show(target, 0);
  });

  // ───────────── 操作 ─────────────

  document.addEventListener('click', (e) => {
    const t = e.target;

    const link = t.closest('a[href^="#/"]');
    if (link) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button) return;
      e.preventDefault();
      // 一覧から来たのなら「単語帳」へ戻るリンクは履歴を戻る（スクロール位置を保つため）
      if (link.hasAttribute('data-back') && cameFromList) { history.back(); return; }
      if (link.hasAttribute('data-replace')) {
        const keepY = link.classList.contains('chip-filter') ? window.scrollY : 0;
        go(link.getAttribute('href'), true);
        if (keepY) window.scrollTo(0, Math.min(keepY, document.documentElement.scrollHeight));
      } else {
        cameFromList = parseHash().parts[0] === 'phrases';
        go(link.getAttribute('href'));
      }
      return;
    }

    const say = t.closest('[data-say]');
    if (say) return playKeys([say.dataset.say], say);

    const playAll = t.closest('[data-play]');
    if (playAll) return playKeys(playAllKeys(playAll.dataset.play), playAll);

    const fav = t.closest('[data-fav]');
    if (fav) {
      const id = Number(fav.dataset.fav);
      if (favs.has(id)) favs.delete(id); else favs.add(id);
      store.set('favs', [...favs]);
      document.querySelectorAll(`[data-fav="${id}"]`).forEach((b) => b.setAttribute('aria-pressed', String(favs.has(id))));
      const n = document.getElementById('favCount');
      if (n && favs.size) n.textContent = `${favs.size} 件`;
      return;
    }

    const copy = t.closest('[data-copy]');
    if (copy) {
      const m = emailById.get(Number(copy.dataset.copy));
      const text = `Subject: ${m.subject}\n\n${mailBody(m.body)}`;
      const label = copy.querySelector('span');
      const done = (ok) => {
        label.textContent = ok ? 'コピーしました' : 'コピーできませんでした';
        setTimeout(() => { label.textContent = '英文をコピー'; }, 1800);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => done(true), () => done(false));
      else done(false);
      return;
    }

    if (t.closest('[data-shuffle]')) {
      pickToday(true);
      player.stop();
      document.getElementById('today').innerHTML = todayPicks.map((id) => phraseCard(phraseById.get(id))).join('');
      return;
    }

    const rate = t.closest('[data-rate]');
    if (rate) {
      settings.slow = rate.dataset.rate === 'slow';
      store.set('slow', settings.slow);
      document.querySelectorAll('[data-rate]').forEach((b) => b.setAttribute('aria-pressed', String((b.dataset.rate === 'slow') === settings.slow)));
      return;
    }

    if (t.closest('#jaToggle')) {
      settings.showJa = !settings.showJa;
      store.set('showJa', settings.showJa);
      document.querySelectorAll('.ja.is-shown').forEach((el) => el.classList.remove('is-shown'));
      applyJa();
      return;
    }

    // 和訳をかくしているときは、タップした訳だけ表示する
    const ja = t.closest('.ja');
    if (ja && !settings.showJa) ja.classList.toggle('is-shown');
  });

  let cameFromList = false;

  // 1件ずつの画面: 左右キーとスワイプで前後へ
  function stepDetail(dir) {
    const el = app.querySelector('.detail');
    const id = el && el.dataset[dir];
    if (id) go(`#/p/${id}`, true);
  }
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('input, textarea') || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowLeft') stepDetail('prev');
    if (e.key === 'ArrowRight') stepDetail('next');
  });
  let touch = null;
  app.addEventListener('touchstart', (e) => {
    touch = e.touches.length === 1 && app.querySelector('.detail')
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : null;
  }, { passive: true });
  app.addEventListener('touchend', (e) => {
    if (!touch) return;
    const dx = e.changedTouches[0].clientX - touch.x, dy = e.changedTouches[0].clientY - touch.y;
    touch = null;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 2) stepDetail(dx < 0 ? 'next' : 'prev');
  }, { passive: true });

  applyJa();
  show(render(), 0);
})();
