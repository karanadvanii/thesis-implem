importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

workbox.core.setCacheNameDetails({
    prefix: 'cache',
    precache: 'precache',
    runtime: 'runtime',
  });

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('on-install').then(function(cache) {
      return cache.addAll(
        [
          '/',
          '/css/bootstrap.css',
          '/css/style.css',
          '/script/jquery-1.11.1.min.js',
          '/script/main.js',
          '/script/author.js', 
          '/script/article-single.js',
          '/author.html',
          '/author-single.html',
          '/offline.html',
          '/404.html',
          'files/dummy.pdf',
          'files/dummy.xls',
          'files/dummy.pptx',
          'files/dummy.doc'
        ]
      );
    })
  );
});

workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'stylesheet-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 30, 
            })
        ]
    })
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

workbox.routing.registerRoute(
    new RegExp('\.(png|gif|jpg|jpeg|webp|svg)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
                purgeOnQuotaError: true,
                maxEntries: 100
            })
        ]
    })
);
workbox.routing.registerRoute(
    new RegExp('\.(pdf|xls|pdf|pptx)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'files-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('https://de-cdn-t1.eyo.net/t1-backend/image/upload/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'staffbase-image-cache',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30,
            purgeOnQuotaError: true,
            maxEntries: 100
        }
    })
);

workbox.routing.registerRoute(
    new RegExp('https://de-t1.eyo.net/api/channels/'),
    workbox.strategies.networkFirst({
        cacheName: 'staffbase-article-cache',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30 
        }
    })
);

 // 4. cache news directory result
workbox.routing.registerRoute(
    new RegExp('https://de-t1.eyo.net/api/users/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'staffbase-directory-cache',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30 
        }
    })
);

const offlinePage = '/offline.html';

workbox.routing.registerRoute(/(.*)-single.html(.*)/,
  async ({event}) => {
    try {
      return await workbox.strategies.staleWhileRevalidate({
          cacheName: 'inner-pages'
      }).handle({event});
    } catch (error) {
      return caches.match(offlinePage);
    }
  }
);

workbox.routing.registerRoute(
    new RegExp('https://de-t1.eyo.net/api/posts/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'single-post-cache',
        plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 50,
          maxAgeSeconds: 5 * 60, // 5 minutes
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
      ],
    })
);

// Use a stale-while-revalidate strategy for all other requests.
workbox.routing.setDefaultHandler(
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.precaching.precacheAndRoute([]);