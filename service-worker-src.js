importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'My-awesome-cache',
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
          '/script/main.js'
        ]
      );
    })
  );
});

// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'My-awesome-cache-Stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('https://de-cdn-t1.eyo.net/t1-backend/image/upload/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'My-awesome-author-images',
        cacheExpiration: {
            maxAgeSeconds: 60 * 30 //cache the news content for 30mn
        }
    })
);
//https://de-cdn-t1.eyo.net/t1-backend/image/upload/v1574810374/DShkYjXu50h6FLgS9R2p1p3q4E4QGPu6qOFdltU2RdnOI8cPrVnNXpJ1ix4h66HspOrVMS3JxIKFWPziRJnee1xQgrsblMvoDEVdoqe75lGXNBxkGn3wk83acFAipZXFpGc4zwO8GHNlQ1AFDhT71MLPSe7gMqCryzmgs4AXkRX93ogqWX2lLbSR63R9YCAv/5b98bebb0a09a220f7550415.jpeg

// 2. images
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'My-awesome-cache-Images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true
            })
        ]
    })
);

// 3. cache news articles result
workbox.routing.registerRoute(
    new RegExp('https://de-t1.eyo.net/api/channels/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'My-awesome-cache-news-headline',
        cacheExpiration: {
            maxAgeSeconds: 60 * 30 //cache the news content for 30mn
        }
    })
);
  
workbox.precaching.precacheAndRoute([]);