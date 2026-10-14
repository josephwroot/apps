/* Papers: a review aid for major papers, organized by topic.
   Content lives in papers.md (format described at the top of that file). This file parses it and
   renders three views: the topic list, a topic with its entries in order, and an entry card whose
   slots are hidden in Quiz mode until tapped. No scheduling, no scores. */
(function () {
  'use strict';

  const FIELD_KEYS = {
    'papers': 'papers', 'paper': 'papers',
    'question': 'question',
    'setting': 'setting', 'model': 'setting',
    'result': 'result', 'results': 'result', 'theorem': 'result',
    'work': 'work', 'what does the work': 'work', 'key assumption': 'work', 'mechanism': 'work',
    'proof': 'proof', 'proof idea': 'proof',
    'matters': 'matters', 'why it matters': 'matters',
    'connections': 'connections', 'related': 'connections',
    'notes': 'notes', 'note': 'notes'
  };
  const FIELD_ORDER = ['papers', 'question', 'setting', 'result', 'work', 'proof', 'matters', 'connections', 'notes'];
  const FIELD_LABELS = {
    papers: 'Papers', question: 'Question', setting: 'Setting', result: 'Result',
    work: 'What does the work', proof: 'Proof idea', matters: 'Why it matters',
    connections: 'Connections', notes: 'Notes'
  };

  let TOPICS = [];
  const $app = document.getElementById('app');

  /* ---------- parsing ---------- */

  function slug(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  }

  // The year of the first paper listed, which is the entry's main reference.
  function yearsOf(text) {
    const first = text.split('\n').find(l => l.trim()) || '';
    const m = /\b(1[89]\d\d|20\d\d)\b/.exec(first);
    return m ? m[1] : '';
  }

  function parse(text) {
    text = text.replace(/\r\n?/g, '\n').replace(/<!--[\s\S]*?-->/g, '');
    const topics = [];
    let topic = null, entry = null, field = null;
    for (const raw of text.split('\n')) {
      const line = raw.replace(/\s+$/, '');
      let m;
      if ((m = /^#\s+(.+)$/.exec(line))) {
        topic = { name: m[1].trim(), slug: slug(m[1]), blurb: [], entries: [] };
        topics.push(topic); entry = null; field = null; continue;
      }
      if ((m = /^##\s+(.+)$/.exec(line))) {
        if (!topic) { topic = { name: 'Untitled', slug: 'untitled', blurb: [], entries: [] }; topics.push(topic); }
        entry = { title: m[1].trim(), slug: slug(m[1]), fields: {}, topic: topic };
        topic.entries.push(entry); field = null; continue;
      }
      if (entry && (m = /^([A-Za-z][A-Za-z ]{0,30}):(?:\s+(.*))?$/.exec(line)) && FIELD_KEYS[m[1].trim().toLowerCase()]) {
        field = FIELD_KEYS[m[1].trim().toLowerCase()];
        entry.fields[field] = entry.fields[field] || [];
        if (m[2]) entry.fields[field].push(m[2]);
        continue;
      }
      if (entry && field) entry.fields[field].push(line);
      else if (topic && !entry) topic.blurb.push(line);
    }
    for (const t of topics) {
      t.blurb = t.blurb.join('\n').trim();
      for (const e of t.entries) {
        for (const k of Object.keys(e.fields)) e.fields[k] = e.fields[k].join('\n').trim();
        e.years = yearsOf(e.fields.papers || '');
        e.search = (e.title + ' ' + (e.fields.papers || '')).toLowerCase();
      }
    }
    return topics;
  }

  /* ---------- rendering text ---------- */

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function findEntry(title) {
    const t = title.trim().toLowerCase(), sl = slug(title);
    for (const tp of TOPICS) for (const e of tp.entries) if (e.title.toLowerCase() === t || e.slug === sl) return e;
    return null;
  }
  const entryHash = e => '#/e/' + e.topic.slug + '/' + e.slug;
  const topicHash = t => '#/t/' + t.slug;

  function inline(s) {
    const math = [];
    s = s.replace(/\$\$[\s\S]+?\$\$|\$[^$\n]+?\$/g, m => { math.push(m); return '\u0000' + (math.length - 1) + '\u0000'; });
    s = escapeHtml(s);
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
    s = s.replace(/\[\[([^\]]+)\]\]/g, (m, t) => {
      const e = findEntry(t);
      return e ? '<a class="xref" href="' + entryHash(e) + '">' + t + '</a>' : t;
    });
    s = s.replace(/\u0000(\d+)\u0000/g, (m, i) => escapeHtml(math[+i]));
    return s;
  }

  function block(text) {
    const paras = text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
    return paras.map(p => {
      const lines = p.split('\n');
      if (lines.every(l => /^-\s+/.test(l))) {
        return '<ul>' + lines.map(l => '<li>' + inline(l.replace(/^-\s+/, '')) + '</li>').join('') + '</ul>';
      }
      if (/^\$\$[\s\S]*\$\$$/.test(p)) return '<div class="math">' + inline(p) + '</div>';
      return '<p>' + inline(lines.join(' ')) + '</p>';
    }).join('');
  }

  function renderMath(el) {
    if (typeof renderMathInElement !== 'function') return;
    try {
      renderMathInElement(el, {
        delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }],
        throwOnError: false
      });
    } catch (_) { /* leave the TeX as text */ }
  }

  /* ---------- mode ---------- */

  const mode = {
    get() { try { return localStorage.getItem('papers-mode') || 'quiz'; } catch (_) { return 'quiz'; } },
    set(m) { try { localStorage.setItem('papers-mode', m); } catch (_) { /* fine */ } }
  };

  /* ---------- views ---------- */

  function renderHome(query) {
    const total = TOPICS.reduce((a, t) => a + t.entries.length, 0);
    $app.innerHTML =
      '<section class="home">' +
      '<p class="lede">' + total + (total === 1 ? ' entry' : ' entries') + ' in ' + TOPICS.length + (TOPICS.length === 1 ? ' topic' : ' topics') + '.</p>' +
      '<input id="q" class="search" type="search" placeholder="Search titles and authors" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">' +
      '<div id="results"></div>' +
      '<ul class="topics">' + TOPICS.map(t =>
        '<li><a href="' + topicHash(t) + '"><span class="t-name">' + escapeHtml(t.name) + '</span><span class="t-count">' + t.entries.length + '</span></a></li>'
      ).join('') + '</ul>' +
      (total ? '<p class="actions"><a class="btn" href="#/random">Random entry</a></p>' : '') +
      '</section>';
    const $q = document.getElementById('q'), $r = document.getElementById('results'), $t = $app.querySelector('.topics');
    const run = () => {
      const q = $q.value.trim().toLowerCase();
      if (!q) { $r.innerHTML = ''; $t.hidden = false; return; }
      const hits = [];
      for (const tp of TOPICS) for (const e of tp.entries) if (e.search.includes(q)) hits.push(e);
      $t.hidden = true;
      $r.innerHTML = hits.length
        ? '<ul class="entries plain">' + hits.map(e => '<li><a href="' + entryHash(e) + '"><span class="e-title">' + escapeHtml(e.title) + '</span><span class="e-years">' + escapeHtml(e.topic.name) + '</span></a></li>').join('') + '</ul>'
        : '<p class="empty">Nothing matches.</p>';
    };
    $q.addEventListener('input', run);
    if (query) { $q.value = query; run(); }
  }

  function renderTopic(t) {
    $app.innerHTML =
      '<nav class="crumbs"><a href="#/">Topics</a></nav>' +
      '<h1 class="topic-title">' + escapeHtml(t.name) + '</h1>' +
      (t.blurb ? '<div class="blurb">' + block(t.blurb) + '</div>' : '') +
      '<ol class="entries">' + t.entries.map(e =>
        '<li><a href="' + entryHash(e) + '"><span class="e-title">' + escapeHtml(e.title) + '</span>' + (e.years ? '<span class="e-years">' + e.years + '</span>' : '') + '</a></li>'
      ).join('') + '</ol>' +
      (t.entries.length > 1 ? '<p class="actions"><a class="btn" href="#/random/' + t.slug + '">Random in this topic</a></p>' : '');
    renderMath($app);
    window.scrollTo(0, 0);
  }

  function renderEntry(e) {
    const t = e.topic, idx = t.entries.indexOf(e);
    const prev = t.entries[idx - 1], next = t.entries[idx + 1];
    const m = mode.get();
    const slots = FIELD_ORDER.filter(k => e.fields[k]).map(k =>
      '<section class="slot' + (m === 'read' ? ' open' : '') + '" data-k="' + k + '">' +
      '<button type="button" class="slot-h" aria-expanded="' + (m === 'read') + '"><span>' + FIELD_LABELS[k] + '</span><span class="chev" aria-hidden="true"></span></button>' +
      '<div class="slot-b">' + block(e.fields[k]) + '</div>' +
      '</section>'
    ).join('');
    $app.innerHTML =
      '<nav class="crumbs"><a href="#/">Topics</a><span class="sep">/</span><a href="' + topicHash(t) + '">' + escapeHtml(t.name) + '</a></nav>' +
      '<h1 class="entry-title">' + escapeHtml(e.title) + '</h1>' +
      '<div class="toolbar">' +
      '<div class="seg" role="group" aria-label="Mode"><button type="button" data-mode="quiz" class="' + (m === 'quiz' ? 'on' : '') + '">Quiz</button><button type="button" data-mode="read" class="' + (m === 'read' ? 'on' : '') + '">Read</button></div>' +
      '<button type="button" class="ghost" id="revealall"></button>' +
      '</div>' +
      '<article class="card">' + slots + '</article>' +
      '<nav class="pager">' +
      (prev ? '<a class="prev" href="' + entryHash(prev) + '"><span class="dir">Previous</span>' + escapeHtml(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a class="next" href="' + entryHash(next) + '"><span class="dir">Next</span>' + escapeHtml(next.title) + '</a>' : '<span></span>') +
      '</nav>';

    const $all = document.getElementById('revealall');
    const sections = Array.prototype.slice.call($app.querySelectorAll('.slot'));
    const refreshAll = () => {
      const anyClosed = sections.some(s => !s.classList.contains('open'));
      $all.textContent = anyClosed ? 'Reveal all' : 'Collapse all';
    };
    const setOpen = (s, open) => { s.classList.toggle('open', open); s.querySelector('.slot-h').setAttribute('aria-expanded', String(open)); };
    sections.forEach(s => s.querySelector('.slot-h').addEventListener('click', () => { setOpen(s, !s.classList.contains('open')); refreshAll(); }));
    $all.addEventListener('click', () => {
      const anyClosed = sections.some(s => !s.classList.contains('open'));
      sections.forEach(s => setOpen(s, anyClosed));
      refreshAll();
    });
    $app.querySelectorAll('.seg button').forEach(b => b.addEventListener('click', () => { mode.set(b.dataset.mode); renderEntry(e); }));
    refreshAll();
    renderMath($app);
    window.scrollTo(0, 0);
  }

  function randomEntry(topicSlug) {
    const pool = [];
    for (const tp of TOPICS) if (!topicSlug || tp.slug === topicSlug) for (const e of tp.entries) pool.push(e);
    if (!pool.length) { location.replace('#/'); return; }
    const current = location.hash;
    let e = pool[Math.floor(Math.random() * pool.length)];
    if (pool.length > 1 && entryHash(e) === current) e = pool[(pool.indexOf(e) + 1) % pool.length];
    location.replace(entryHash(e));
  }

  function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
    if (parts[0] === 't' && parts[1]) { const t = TOPICS.find(x => x.slug === parts[1]); if (t) return renderTopic(t); }
    if (parts[0] === 'e' && parts[1] && parts[2]) {
      const t = TOPICS.find(x => x.slug === parts[1]); const e = t && t.entries.find(x => x.slug === parts[2]);
      if (e) return renderEntry(e);
    }
    if (parts[0] === 'random') return randomEntry(parts[1]);
    if (parts[0] === 'search') return renderHome(parts[1] || '');
    renderHome('');
  }

  /* ---------- load ---------- */

  async function load() {
    try {
      const r = await fetch('papers.md?t=' + Date.now(), { cache: 'no-store' });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      TOPICS = parse(await r.text());
    } catch (err) {
      $app.innerHTML = '<p class="err">Could not load papers.md (' + escapeHtml(String(err.message || err)) + ').</p>';
      return;
    }
    route();
    window.addEventListener('hashchange', route);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { parse: parse, block: block, inline: inline, setTopics: t => { TOPICS = t; } };
  } else {
    load();
  }
})();
