self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("App-relógio-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "golenzinho.png",
                "golemzáo.png"
            ])
        })
    )
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});