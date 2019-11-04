/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.precaching.precacheAndRoute([
  {
    "url": "style/main.css",
    "revision": "786d12fcb84946b7e487e1f3eaa27d26"
  },
  {
    "url": "index.html",
    "revision": "e2554c704010b0931c1bdfd2bfd97dd6"
  },
  {
    "url": "pages/404.html",
    "revision": "1a6cf0261a93d2c998c813d5588856bb"
  },
  {
    "url": "pages/offline.html",
    "revision": "09b9feaee1fbd9d3f27253d24b7911c9"
  },
  {
    "url": "js/animation.js",
    "revision": "8952a6ec2786e6e8d62a7934bc7f1c1f"
  },
  {
    "url": "images/home/business.jpg",
    "revision": "9c3ec8d2a8a188bab9ddc212a64a0c1e"
  },
  {
    "url": "images/icon/icon.svg",
    "revision": "0d077eac3b5028d3543f7e35908d6ecb"
  },
  {
    "url": "images/post1.jpeg",
    "revision": "c67771b73ecbed9ddce0e3bd36c36acb"
  },
  {
    "url": "images/dummy.png",
    "revision": "5488eba0d27621f1b14b988f681b8c84"
  },
  {
    "url": "images/post2.png",
    "revision": "f8990c62247925934bba6a46482b39cd"
  }
]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}   

workbox.routing.registerRoute(
  /(.*)articles(.*)\.(?:png|gif|jpg)/,
  workbox.strategies.cacheFirst({
    cacheName: 'images-cache',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      })
    ]
  })
);

const articleHandler = workbox.strategies.networkFirst({
  cacheName: 'articles-cache',
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 50,
    })
  ]
});

workbox.routing.registerRoute(/(.*)article(.*)\.html/, args => {
  return articleHandler
      .handle(args)
      .then(response => {
        if (!response) {
          return caches.match('pages/offline.html');
        } else if (response.status === 404) {
          return caches.match('pages/404.html');
        }
    return response;
  });
});


const postHandler = workbox.strategies.networkFirst({
  cacheName: 'posts-cache',
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 50,
    })
  ]
});

workbox.routing.registerRoute(/(.*)post(.*)\.html/, args => {
  return postHandler
      .handle(args)
      .then(response => {
        if (!response) {
          return caches.match('pages/offline.html');
        } else if (response.status === 404) {
          return caches.match('pages/404.html');
        }
    return response;
  });
});
