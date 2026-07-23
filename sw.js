/* Z-Astro-Calculator service worker — strategia CACHE-FIRST con aggiornamento manuale.
   L'app viene servita SEMPRE dalla cache locale. Il contatto con il server avviene solo:
   1) alla prima visita (download iniziale), 2) quando l'utente preme "Aggiorna" nel footer.
   NOTA: il nome CACHE ora e' FISSO e non va piu' cambiato ad ogni release.
   L'aggiornamento riscarica i FILES dentro la stessa cache su richiesta della pagina. */
const CACHE = 'zac-static-1';

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

/* Aggiornamento su richiesta: la pagina invia {type:'ZAC_UPDATE'},
   il worker riscarica tutti i FILES bypassando la cache HTTP e risponde {type:'ZAC_UPDATED'}. */
self.addEventListener('message', e => {
  if (!e.data || e.data.type !== 'ZAC_UPDATE') return;
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => Promise.all(
        FILES.map(f =>
          fetch(f, { cache: 'reload' })
            .then(res => { if (res && res.ok) return cache.put(f, res); })
            .catch(() => null)
        )
      ))
      .then(() => { if (e.source) e.source.postMessage({ type: 'ZAC_UPDATED' }); })
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;

  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit; // cache-first: nessun contatto di rete se il file c'e'
      // miss (es. prima visita di una pagina non precache-ata): rete, poi salva
      return fetch(req)
        .then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => {
          if (req.mode === 'navigate') {
            return caches.match('./index.html').then(idx => idx || new Response(
              '<!doctype html><meta charset="utf-8"><title>Offline</title>' +
              '<body style="background:#0a0000;color:#d4a0a0;font-family:Georgia,serif;' +
              'display:flex;align-items:center;justify-content:center;height:100vh;text-align:center">' +
              '<p>Offline. Open this page once with a connection, then it will work without one.</p>',
              { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
            ));
          }
        });
    })
  );
});
