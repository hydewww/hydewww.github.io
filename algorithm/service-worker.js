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
    "revision": "c06ea04adce691126a3c550e891e8751"
  },
  {
    "url": "0007.html",
    "revision": "bf52e29d4e6c5cb869050c94a8093d28"
  },
  {
    "url": "0009.html",
    "revision": "69b97a6cac0ca229a10f63bbc9f76ed5"
  },
  {
    "url": "0013.html",
    "revision": "10dd9f70aef75d9e92cbf590d88d5b57"
  },
  {
    "url": "0014.html",
    "revision": "f3207ad8b7cf5918a020fa2ab139dfcf"
  },
  {
    "url": "0020.html",
    "revision": "e8cf0102f6d32dded63d3b461fd9a032"
  },
  {
    "url": "0021.html",
    "revision": "bc94d1863a3a6a2d856e9f2f7d7ae099"
  },
  {
    "url": "0026.html",
    "revision": "e5025a7754a007b600655d4312d3da23"
  },
  {
    "url": "0027.html",
    "revision": "d5ee2cf0d85afd9bfb9489e2893f8358"
  },
  {
    "url": "0028.html",
    "revision": "ba549f797e38f4d7cde91bb5b6787a34"
  },
  {
    "url": "0035.html",
    "revision": "2f7d82ca5496319a22ba4cb5590a0e76"
  },
  {
    "url": "0038.html",
    "revision": "37c952b0a0196ad642ae60a8aa3d232c"
  },
  {
    "url": "0058.html",
    "revision": "97e3811f7104956e524dafe020739b68"
  },
  {
    "url": "0066.html",
    "revision": "3605e1cb8628d0f7020d58d5129b9fda"
  },
  {
    "url": "0067.html",
    "revision": "45ce33da2729eb7782dfb73d35c595c5"
  },
  {
    "url": "0069.html",
    "revision": "aad304f34ffedd91792ec2810059b5fb"
  },
  {
    "url": "0083.html",
    "revision": "5b6db4e2bbd437c37bc1ffb69a03e71d"
  },
  {
    "url": "404.html",
    "revision": "d8e964889e1eb256a3dec8d2a65ffb65"
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
    "url": "assets/js/3.ba76d83b.js",
    "revision": "de5c71e1b730b061f6e757c6f95ff4dd"
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
    "url": "assets/js/app.87b3a591.js",
    "revision": "3490e28488cc477313a2a125916d45b9"
  },
  {
    "url": "index.html",
    "revision": "58edd8be5200ba4196d4efe544c87ba5"
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
