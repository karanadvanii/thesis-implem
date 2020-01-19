importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'cache',
    precache: 'precache',
    runtime: 'runtime',
  });

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/css/bootstrap.css',
          '/css/style.css',
          '/script/jquery-1.11.1.min.js',
          '/script/main.js',
          '/script/author.js',          
          '/author.html'
        ]
      );
    })
  );
});

// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.networkFirst({
        cacheName: 'stylesheet-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 30, // cache for 30 days
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);

// 2. images
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('https://de-cdn-t1.eyo.net/t1-backend/image/upload/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'staffbase-image-cache',
        cacheExpiration: {
            maxAgeSeconds: 60 * 30 //cache the news content for 30mn
        }
    })
);

// 3. cache news articles result
workbox.routing.registerRoute(
    new RegExp('https://de-t1.eyo.net/api/channels/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'staffbase-article-cache',
        cacheExpiration: {
            maxAgeSeconds: 60 * 30 //cache the news content for 30mn
        }
    })
);

// 3. cache news articles result
workbox.routing.registerRoute(
    new RegExp('https://de-t1.eyo.net/api/users/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'staffbase-directory-cache',
        cacheExpiration: {
            maxAgeSeconds: 60 * 30 //cache the news content for 30mn
        }
    })
);

workbox.precaching.precacheAndRoute([]);