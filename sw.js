/* Z-Astro-Calculator service worker
   IMPORTANTE: cambiare CACHE a OGNI modifica di un file elencato in FILES,
   altrimenti i visitatori di ritorno continueranno a ricevere la versione vecchia. */
const CACHE = 'zac-v1.5';

const FILES = [
  './',
  './index.html',
  './Z-Astro-Calculator.html',
  './privacy.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png',
  './icon-180.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      // addAll fallisce in blocco se un solo file manca: qui ogni file e' indipendente
      .then(cache => Promise.all(
        FILES.map(f => cache.add(f).catch(() => null))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;

  // solo GET same-origin: tutto il resto passa dritto alla rete
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  // navigazioni: rete per prima, cache come rete di sicurezza.
  // Cosi' una versione nuova arriva subito quando c'e' connessione.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req)
          .then(hit => hit || caches.match('./index.html'))
          .then(hit => hit || new Response(
            '<!doctype html><meta charset="utf-8"><title>Offline</title>' +
            '<body style="background:#0a0000;color:#d4a0a0;font-family:Georgia,serif;' +
            'display:flex;align-items:center;justify-content:center;height:100vh;text-align:center">' +
            '<p>Offline. Open this page once with a connection, then it will work without one.</p>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          ))
        )
    );
    return;
  }

  // risorse statiche: cache per prima, con aggiornamento in background
  e.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
