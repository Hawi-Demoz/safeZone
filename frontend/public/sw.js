const CACHE_NAME = 'safezone-cache-v1';
const APP_SHELL = [
  '/',
  '/manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.map((k) => k !== CACHE_NAME && caches.delete(k))))
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  // Network-first for API analyze requests
  if (url.pathname.startsWith('/analyze')) {
    event.respondWith(
      fetch(request).catch(() => new Response(JSON.stringify({
        error: 'Offline: unable to analyze. Use last saved advice.'
      }), { headers: { 'Content-Type': 'application/json' }, status: 503 }))
    );
    return;
  }

  // Cache-first for other same-origin GETs
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((resp) => {
          const respClone = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, respClone));
          return resp;
        }).catch(() => caches.match('/'));
      })
    );
  }
});
