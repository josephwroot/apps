// Papers offline cache. The shell (page, script, KaTeX, icons) is served from the cache once installed
// and refreshed in the background; papers.md is fetched from the network when there is one, so new
// entries show up on the next launch, and served from the cache when there is not.
const VERSION = 'papers-v1';
const SHELL = [
  './', './index.html', './app.js', './manifest.webmanifest',
  './katex/katex.min.js', './katex/auto-render.min.js', './katex/katex.min.css',
  './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-512-maskable.png',
  './katex/fonts/KaTeX_AMS-Regular.woff2', './katex/fonts/KaTeX_Caligraphic-Bold.woff2', './katex/fonts/KaTeX_Caligraphic-Regular.woff2', './katex/fonts/KaTeX_Fraktur-Bold.woff2', './katex/fonts/KaTeX_Fraktur-Regular.woff2', './katex/fonts/KaTeX_Main-Bold.woff2', './katex/fonts/KaTeX_Main-BoldItalic.woff2', './katex/fonts/KaTeX_Main-Italic.woff2', './katex/fonts/KaTeX_Main-Regular.woff2', './katex/fonts/KaTeX_Math-BoldItalic.woff2', './katex/fonts/KaTeX_Math-Italic.woff2', './katex/fonts/KaTeX_SansSerif-Bold.woff2', './katex/fonts/KaTeX_SansSerif-Italic.woff2', './katex/fonts/KaTeX_SansSerif-Regular.woff2', './katex/fonts/KaTeX_Script-Regular.woff2', './katex/fonts/KaTeX_Size1-Regular.woff2', './katex/fonts/KaTeX_Size2-Regular.woff2', './katex/fonts/KaTeX_Size3-Regular.woff2', './katex/fonts/KaTeX_Size4-Regular.woff2', './katex/fonts/KaTeX_Typewriter-Regular.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // The content file: network first, cache as fallback. The query string is a cache-buster, so
  // store it under a fixed key.
  if (url.pathname.endsWith('/papers.md')) {
    const key = './papers.md';
    e.respondWith(withTimeout(fetch(req), 6000).then(res => {
      if (res.ok) caches.open(VERSION).then(c => c.put(key, res.clone()));
      return res;
    }).catch(() => caches.match(key).then(hit => hit || Response.error())));
    return;
  }

  // Navigations: network first with a short timeout, then the cached page.
  if (req.mode === 'navigate') {
    e.respondWith(withTimeout(fetch(req), 4000).then(res => {
      if (res.ok) caches.open(VERSION).then(c => c.put('./index.html', res.clone()));
      return res;
    }).catch(() => caches.match('./index.html')));
    return;
  }

  // Everything else (script, styles, fonts, icons): cache first, refreshed in the background.
  e.respondWith(caches.match(req).then(hit => {
    const refresh = fetch(req).then(res => {
      if (res.ok) caches.open(VERSION).then(c => c.put(req, res.clone()));
      return res;
    });
    return hit || refresh;
  }));
});
