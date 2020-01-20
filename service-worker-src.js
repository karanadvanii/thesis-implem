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
          '/article-single.html'
        ]
      );
    })
  );
});

 //runtime cache
 //1. stylesheet
workbox.routing.registerRoute(
    new RegExp('\.css$'),
    workbox.strategies.cacheFirst({
        cacheName: 'stylesheet-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 30, // cache for 30 days
                //purgeOnQuotaError: true
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
                maxAgeSeconds: 60 * 60 * 24 * 30,
                //purgeOnQuotaError: true
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('https://de-cdn-t1.eyo.net/t1-backend/image/upload/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'staffbase-image-cache',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30 //cache the news content for 30mn
        }
    })
);

// 3. cache news articles images
workbox.routing.registerRoute(
    new RegExp('https://de-t1.eyo.net/api/channels/'),
    workbox.strategies.cacheFirst({
        cacheName: 'staffbase-article-cache',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30 //cache the news content for 30mn
        }
    })
);

 // 4. cache news directory result
workbox.routing.registerRoute(
    new RegExp('https://de-t1.eyo.net/api/users/'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'staffbase-directory-cache',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30 //cache the news content for 30mn
        }
    })
);

// 4. cache news directory result
//workbox.routing.registerRoute(
//    new RegExp('(.*)-single.html(.*)'),
//    workbox.strategies.staleWhileRevalidate({
//        cacheName: 'id-cache',
//        cacheExpiration: {
//            maxAgeSeconds: 60 * 60 * 24 * 30 //cache the news content for 30mn
//        }
//    })
//);

const offlinePage = '/offline.html';

workbox.routing.registerRoute(/(.*)-single.html(.*)/,
  async ({event}) => {
    try {
      return await workbox.strategies.staleWhileRevalidate({
          cacheName: 'WAOWAOAOWOWAOO-pages'
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
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30 //cache the news content for 30mn
        }
    })
);

workbox.precaching.precacheAndRoute([]);