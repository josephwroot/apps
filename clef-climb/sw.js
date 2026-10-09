// Clef Climb offline cache. The page is fetched from the network when there is one, so updates arrive on the next launch; everything is served from the cache when there is not.
const VERSION = 'clef-climb-d8b454bbcb';
const ASSETS = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-180.png", "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-512-maskable.png", "./fonts/bodoni-moda-latin-600-normal.woff2", "./fonts/bodoni-moda-latin-600-italic.woff2", "./fonts/bodoni-moda-latin-800-italic.woff2", "./fonts/instrument-sans-latin-400-normal.woff2", "./fonts/instrument-sans-latin-500-normal.woff2", "./fonts/instrument-sans-latin-600-normal.woff2", "./fonts/instrument-sans-latin-700-normal.woff2"];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(withTimeout(fetch(req), 4000).then(res => {
      if (res.ok) caches.open(VERSION).then(c => c.put('./index.html', res.clone()));
      return res;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok) caches.open(VERSION).then(c => c.put(req, res.clone()));
    return res;
  })));
});
