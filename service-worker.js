self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("todo-store").then(cache => {
      return cache.addAll([
        "/",
        "/todo.html",
        "/manifest.json",
        "/service-worker.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
