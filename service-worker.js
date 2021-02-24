/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "854e0e7ab4b56d00206ec5c849e96e24"
  },
  {
    "url": "about.html",
    "revision": "3a8361a44dbce45722654e4f637099ca"
  },
  {
    "url": "assets/css/0.styles.48266c77.css",
    "revision": "6f124ac5000e343edbb1b0aeed792646"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3469428.js",
    "revision": "4bf482e8cbfb089f81bfd7115a545c7e"
  },
  {
    "url": "assets/js/11.fa3340f7.js",
    "revision": "3518b2b6d5b1f01246e586b160c986c3"
  },
  {
    "url": "assets/js/12.18cb97e8.js",
    "revision": "e415285ae95f74287e8f373a4b46fea6"
  },
  {
    "url": "assets/js/13.c6ed3fdf.js",
    "revision": "cd4344f02a35e374f2a7fe9dc206cf02"
  },
  {
    "url": "assets/js/14.5814b7de.js",
    "revision": "e85dcbb12bb07f9a8a9bdfe156561e27"
  },
  {
    "url": "assets/js/15.0e5cf0d4.js",
    "revision": "5d56d4fcb0d05c17b47cd28b2897f2ab"
  },
  {
    "url": "assets/js/16.4a49e114.js",
    "revision": "b5bee99fd0340d031bce2640a3ceb5a6"
  },
  {
    "url": "assets/js/17.ddabcef7.js",
    "revision": "58cf518e879b20f1b4540ee48ec61c65"
  },
  {
    "url": "assets/js/18.1727764c.js",
    "revision": "5fc12759d6dc9cfdd2c75ad6ba83b721"
  },
  {
    "url": "assets/js/19.7179cde7.js",
    "revision": "88443399116adbb94102967e23ec4d34"
  },
  {
    "url": "assets/js/20.2374282d.js",
    "revision": "20a4a8c64936bf7363f73b829b0d3c52"
  },
  {
    "url": "assets/js/21.a9c188b7.js",
    "revision": "7a3151d55accac4113d6dd9979610380"
  },
  {
    "url": "assets/js/3.65fba492.js",
    "revision": "0cb711a00b0011b76410ef4775fa2acb"
  },
  {
    "url": "assets/js/4.c2bc4666.js",
    "revision": "768796bd1703174cabf453369057f318"
  },
  {
    "url": "assets/js/5.ec9815fc.js",
    "revision": "9c589f4e991cb1e1b4ef84233573a345"
  },
  {
    "url": "assets/js/6.d367e71a.js",
    "revision": "8f9f96bcb0628a7f0647c692a72f0451"
  },
  {
    "url": "assets/js/7.37e90eb3.js",
    "revision": "bf846243ef5e0888dd46ab4abb55c4f9"
  },
  {
    "url": "assets/js/8.aeaeea10.js",
    "revision": "a2bae709c2597c1f3b361f40a7f17312"
  },
  {
    "url": "assets/js/9.b0ce26b7.js",
    "revision": "723129f04d5a3af7560922eb9f2e210b"
  },
  {
    "url": "assets/js/app.e58c9c7d.js",
    "revision": "88fb0115c6aa8d04f275cf55f91e988d"
  },
  {
    "url": "assets/js/vendors~docsearch.13c21034.js",
    "revision": "99fca4d6c890c7ef2fac9b69a2f31a85"
  },
  {
    "url": "demo.html",
    "revision": "716387f197f871f0f5e488a3e701d7d2"
  },
  {
    "url": "guide/about.html",
    "revision": "42d1ee14477037d17a00f1ab32553d1c"
  },
  {
    "url": "guide/feedback.html",
    "revision": "ce5c8ee79a9f7f0c5bfa37f5afffe4db"
  },
  {
    "url": "guide/index.html",
    "revision": "b9bf3c6ce6275a7311f54f70f834b14a"
  },
  {
    "url": "guide/webp.html",
    "revision": "6ceba9803c09add9a077b545b179dd05"
  },
  {
    "url": "img/index.gif",
    "revision": "e5b195f9745ee3b93ffef49002acbae6"
  },
  {
    "url": "img/logo.png",
    "revision": "eb3005fefdce0642b3a08d98aae96ce0"
  },
  {
    "url": "img/logo3.png",
    "revision": "595e2676fb8c4f844487f6ca0c4ccf18"
  },
  {
    "url": "img/novel.png",
    "revision": "e24b473891502eccbcd0e662dea9ecda"
  },
  {
    "url": "index.html",
    "revision": "b11e05863e2c2fd4adf7103f4ebbbdbd"
  },
  {
    "url": "releases.html",
    "revision": "1118b888625de9463dd1073089e02d4b"
  },
  {
    "url": "sponsors.html",
    "revision": "5b31dfd78ef4f9c9ee805d5b7965d0bf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
