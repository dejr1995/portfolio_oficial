// sw.js

const CACHE_NAME = 'my-cache';

const urlsToCache = [
  '/',
  '/index.html', // Asegúrate de agregar rutas a todas tus páginas y recursos estáticos aquí
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
  console.log("Service Worker instalado");
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si se encuentra en caché, devuelve la respuesta en caché
        if (response) {
          return response;
        }

        // Si no está en caché, realiza la solicitud de red
        return fetch(event.request);
      })
  );
  console.log('Service Worker interceptó una solicitud:', event.request.url);
});
