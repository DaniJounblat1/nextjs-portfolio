// Assuming Workbox has been imported in your project
importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"
);

workbox.precaching.precacheAndRoute([
    "/img/dani.png",
    "/img/daniStars.png",
    "/img/jounblat.png",
    "/img/jounblatStars.png",
    "/img/fullsun.gif",
    "/img/earth.gif",
    "/img/satellite.gif",
    "/img/venus.gif",
    "/img/shuttle.gif",
    "/img/mercury.gif",
    "/img/ufo.gif",
    "/img/ss1.jpg",
    "/img/ss3.jpg",
    "/img/ss4.jpg",
    "/img/ss5.jpg"
    // Include other assets and routes as needed
]);

// Setup runtime caching for other assets or requests
workbox.routing.registerRoute(
    new RegExp(".*\\.(?:png|jpg|jpeg|svg|gif)"),
    new workbox.strategies.CacheFirst({
        cacheName: "image-cache",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
            })
        ]
    })
);

// Cache CSS, JS, or other specific file types
workbox.routing.registerRoute(
    new RegExp(".*\\.(?:css|js)"),
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "static-resources"
    })
);

// Cache API calls
workbox.routing.registerRoute(
    new RegExp("/api/"),
    new workbox.strategies.NetworkFirst()
);
