importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.skipWaiting();
workbox.clientsClaim();

workbox.core.setCacheNameDetails({
	prefix: 'cache',
	precache: 'precache',
	runtime: 'runtime',
});

workbox.routing.registerRoute(
	new RegExp('\.css$'),
	workbox.strategies.staleWhileRevalidate({
		cacheName: 'stylesheet-cache',
		plugins: [
			new workbox.expiration.Plugin({
				maxAgeSeconds: 60 * 60 * 24 * 90,
			})
		]
	})
);

workbox.routing.registerRoute(
	new RegExp('https://maxcdn.bootstrapcdn.com/bootstrap/'),
	workbox.strategies.cacheFirst({
		cacheName: 'thirdparty-stylesheet',
		plugins: [
			new workbox.expiration.Plugin({
				maxAgeSeconds: 60 * 60 * 24 * 90,
			})
		]
	})
);

workbox.routing.registerRoute(
	new RegExp('https://fonts.googleapis.com/css'),
	workbox.strategies.cacheFirst({
		cacheName: 'google-fonts',
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
			maxEntries: 50
		}
	})
);

workbox.routing.registerRoute(
	new RegExp('https://cdn-main-de1.staffbase.rocks/t1-backend/image/upload/'),
	workbox.strategies.staleWhileRevalidate({
		cacheName: 'staffbase-image-cache-cdn',
		cacheExpiration: {
			maxAgeSeconds: 60 * 60 * 24 * 30,
			purgeOnQuotaError: true,
			maxEntries: 50,
		}
	})
);

workbox.routing.registerRoute(
	new RegExp('https://de-t1.eyo.net/api/channels/'),
	workbox.strategies.staleWhileRevalidate({
		cacheName: 'staffbase-article-cache',
		cacheExpiration: {
			maxAgeSeconds: 60 * 60 * 24 * 30,
		}
	})
);


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
	async({
		event
	}) => {
		try {
			return await workbox.strategies.networkFirst({
				cacheName: 'inner-pages'
			}).handle({
				event
			});
		} catch (error) {
			return caches.match(offlinePage);
		}
	}
);

workbox.routing.registerRoute(
	new RegExp('https://de-t1.eyo.net/api/posts/'),
	workbox.strategies.networkFirst({
		cacheName: 'single-post-cache',
		plugins: [
			new workbox.expiration.Plugin({
				maxEntries: 50,
				maxAgeSeconds: 60 * 60 * 24 * 30 
			}),
			new workbox.cacheableResponse.Plugin({
				statuses: [0, 200],
			}),
		],
	})
);

workbox.routing.registerRoute(
	/(http[s]?:\/\/)?([^\/\s]+\/)/,
	workbox.strategies.networkOnly({
		plugins: [
			new workbox.backgroundSync.Plugin('requestsQueue', {
				maxRetentionTime: 60 * 60 * 24 * 30 
			})
		]
	}),
	'POST'
);

workbox.precaching.precacheAndRoute([]);
