// Service Worker for Eicher Sure App
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).catch(() => new Response('App is working offline!'))
    );
});
