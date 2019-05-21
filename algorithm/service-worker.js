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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "0001.html",
    "revision": "dfe08b27b62fdcb77e825d088805fcfc"
  },
  {
    "url": "0007.html",
    "revision": "8f45a2bf95cde5283d3d82dceeabd082"
  },
  {
    "url": "0009.html",
    "revision": "85543aaaf4f34a7bace824df44b44865"
  },
  {
    "url": "0013.html",
    "revision": "aede048e5911b9ae929d0d61cdc2dbf8"
  },
  {
    "url": "0014.html",
    "revision": "e18e0433249870759591f599b7492b13"
  },
  {
    "url": "0020.html",
    "revision": "ed9316b5f99c2485c94d11e2f03e907a"
  },
  {
    "url": "0021.html",
    "revision": "29ac85cfe693c77fe31e5d5a967d5b1c"
  },
  {
    "url": "0026.html",
    "revision": "488e1604fde6f1d4225480bb27d85b47"
  },
  {
    "url": "0027.html",
    "revision": "256fa53b0c3310eaa835c7b9162f644a"
  },
  {
    "url": "0028.html",
    "revision": "cc271ac831bb33c792423d94d59fdf57"
  },
  {
    "url": "0035.html",
    "revision": "f0abc66fa55756f671ad66e389d7e18b"
  },
  {
    "url": "0038.html",
    "revision": "d8e7d555c9cd5091b4199a4ab106208d"
  },
  {
    "url": "0058.html",
    "revision": "c4cf439724f7ea27bd8b229d452116ff"
  },
  {
    "url": "0066.html",
    "revision": "8c8833f11a43728b8e0e7da1289ecb3f"
  },
  {
    "url": "0067.html",
    "revision": "40445936a533337afcdf093936029fd4"
  },
  {
    "url": "0069.html",
    "revision": "e5bd69c72ca5ecfe6fe93d88b41ed26b"
  },
  {
    "url": "0083.html",
    "revision": "1de784c7afd34e301f9431dbdf2ecbfe"
  },
  {
    "url": "404.html",
    "revision": "3a23dd3bdb9da73b662fae57fdd8a1ad"
  },
  {
    "url": "assets/css/0.styles.35f7a6bc.css",
    "revision": "b9eb6e21db8c7f2ff12dd8bfef5c29ae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9af26ff3.js",
    "revision": "2aa8f959f6329d363241d5219e410276"
  },
  {
    "url": "assets/js/11.8e6febb0.js",
    "revision": "d8e07385a1697ebec6934dd2e4ddb561"
  },
  {
    "url": "assets/js/12.4325d8d6.js",
    "revision": "b671bd6c8108394e7238f00d801c4da9"
  },
  {
    "url": "assets/js/13.70b5613b.js",
    "revision": "f441fe7c81da0dff1bbb52dedba15b31"
  },
  {
    "url": "assets/js/14.a7b722e0.js",
    "revision": "d0468a00f933313d366662280d855c33"
  },
  {
    "url": "assets/js/15.a371085e.js",
    "revision": "bef22b63c74f3c5d1d9cd1e226a3468e"
  },
  {
    "url": "assets/js/16.e4a66300.js",
    "revision": "0492a80440200e780322444af1f5b22a"
  },
  {
    "url": "assets/js/17.8bdc48e8.js",
    "revision": "197b9d35e711ec5fa37969d0ac0dc25e"
  },
  {
    "url": "assets/js/18.e485f7e0.js",
    "revision": "84bb0519392f50acfb9ebe548e3e36fb"
  },
  {
    "url": "assets/js/19.e7e26aa7.js",
    "revision": "093e1f52659e0f49a6e2f1512fea4e78"
  },
  {
    "url": "assets/js/2.7cb6fb06.js",
    "revision": "4b8b85169ad2da77109277d164d09fd9"
  },
  {
    "url": "assets/js/20.5a64b2fe.js",
    "revision": "6976f1e77df8834217f81230e09fd9c8"
  },
  {
    "url": "assets/js/21.7630f877.js",
    "revision": "117e545c64a4124962be3d978c9e6988"
  },
  {
    "url": "assets/js/3.7c2f845e.js",
    "revision": "dcb0f4eb5fb79f4c74a5eea10869f58e"
  },
  {
    "url": "assets/js/4.74c0294f.js",
    "revision": "95e01bb6b679746715190c99fecbc447"
  },
  {
    "url": "assets/js/5.c42ac2f7.js",
    "revision": "7446550ecfa0f9e21c329bdbb5caf368"
  },
  {
    "url": "assets/js/6.dc72fab8.js",
    "revision": "a27d1028dac00086b842bf342745a56e"
  },
  {
    "url": "assets/js/7.fe5981be.js",
    "revision": "4baca174ed15c7fe4977170f38e52f0e"
  },
  {
    "url": "assets/js/8.e73c2ccb.js",
    "revision": "ba6c82f062997045d964fbc4496f5ecf"
  },
  {
    "url": "assets/js/9.2825d4f6.js",
    "revision": "1598d416531a9360ba94eabe24a0f4f5"
  },
  {
    "url": "assets/js/app.50a4bdf4.js",
    "revision": "db580584fc3383a9127328f3f9004e56"
  },
  {
    "url": "index.html",
    "revision": "a39aeb92031017671361554b782fce16"
  },
  {
    "url": "logo.png",
    "revision": "00a9d8b403118ad13dd39ea3be7b944f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
