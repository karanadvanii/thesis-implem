module.exports = {
  "globDirectory": "build/",
  "globPatterns": [
    "**/*.css",
    "index.html",
    "pages/404.html",
    "pages/offline.html",
    "js/animation.js",
    "images/home/*.jpg",
    "images/icon/*.svg",
    "images/*.jpeg",
    "images/*.png"
  ],
  maximumFileSizeToCacheInBytes: 5000000,
  "swSrc": "src/sw.js",
  "swDest": "build/sw.js",
  "globIgnores": [
    "../workbox-config.js"
  ]
};