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
    "revision": "60b2cc6d78105af93a55aadb7c7a4c99"
  },
  {
    "url": "0007.html",
    "revision": "49d4d147d6d4037a56617ac2a482be06"
  },
  {
    "url": "0009.html",
    "revision": "a8b52b9a6b087ad1c207c2eba5138731"
  },
  {
    "url": "0013.html",
    "revision": "1d6fdaf70241fe038af0f52f192d1ed6"
  },
  {
    "url": "0014.html",
    "revision": "9e37fded7ff700abbb3efd724d46e2a6"
  },
  {
    "url": "0020.html",
    "revision": "c9be394860747ceed69cbf4362a74a39"
  },
  {
    "url": "0021.html",
    "revision": "8c8606dd35a0398cb9f07c6d65bf1b87"
  },
  {
    "url": "0026.html",
    "revision": "580f23bd81f0b652f1b4e00aee2bb4ea"
  },
  {
    "url": "0027.html",
    "revision": "a502e85ce478963f10285249384e8523"
  },
  {
    "url": "0028.html",
    "revision": "83089a943127589d0dff7ed5ba742923"
  },
  {
    "url": "0035.html",
    "revision": "1b22e191fb8d53904ffd19d8d644a473"
  },
  {
    "url": "0038.html",
    "revision": "160e9f02acd88c13c4cbc80aa8deca07"
  },
  {
    "url": "0058.html",
    "revision": "5c718507795ba821449d23dbb826e48f"
  },
  {
    "url": "0066.html",
    "revision": "56c800f16b9d3915a351863893ac8695"
  },
  {
    "url": "0067.html",
    "revision": "d8e5b0ecbcfa05b4e0759fe550e00148"
  },
  {
    "url": "0069.html",
    "revision": "8b5b43905ef12785524efd6f8762270b"
  },
  {
    "url": "0083.html",
    "revision": "4db8832135f090597312801259f5a006"
  },
  {
    "url": "0088.html",
    "revision": "9708b7d3bc683ed1a3ff19d5c71006fb"
  },
  {
    "url": "0100.html",
    "revision": "28f1f597307222c316b9c3510c59a733"
  },
  {
    "url": "404.html",
    "revision": "bb776e9ffed7ceb6d1f3d4311a260b1d"
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
    "url": "assets/js/10.42faa383.js",
    "revision": "0cbebd69b332039a52938139b8a49d64"
  },
  {
    "url": "assets/js/11.d7d708a5.js",
    "revision": "e0c4f74728a299fbebb14bfcae64c55d"
  },
  {
    "url": "assets/js/12.3afc4ef0.js",
    "revision": "f17c79f10e132f37a6304a74aa47392c"
  },
  {
    "url": "assets/js/13.e5428550.js",
    "revision": "d1c6858b615a95bbbfecf56fa20f631e"
  },
  {
    "url": "assets/js/14.d8cbfd36.js",
    "revision": "ae64c9bf625ee03ff1835f45d1ebef05"
  },
  {
    "url": "assets/js/15.5505ed8c.js",
    "revision": "be6644304bd840ae46e2c8d1956574f6"
  },
  {
    "url": "assets/js/16.12776d61.js",
    "revision": "e57af3d050a8c21f4b567957ca22c0b9"
  },
  {
    "url": "assets/js/17.d42b4649.js",
    "revision": "b33ea3f1c8e87d07233e82d1e5a681af"
  },
  {
    "url": "assets/js/18.5fa74a6b.js",
    "revision": "85cede027062dbad30c0d1033a2d4bcf"
  },
  {
    "url": "assets/js/19.9448a802.js",
    "revision": "8833964f4a13f90c1340b59e56ee9929"
  },
  {
    "url": "assets/js/2.3bbb2e06.js",
    "revision": "834f2da9e05519a1b3157907543f6cf1"
  },
  {
    "url": "assets/js/20.36cbdebc.js",
    "revision": "f3088c24ee610237d0d76f5a0a6f5f9c"
  },
  {
    "url": "assets/js/21.cf5d70db.js",
    "revision": "3bb20c70c3c62685738dc432c19baffb"
  },
  {
    "url": "assets/js/22.8e66cf30.js",
    "revision": "0df01cfd23b22db680173ea8a92d65f0"
  },
  {
    "url": "assets/js/23.ce67d2df.js",
    "revision": "30250cf808b672ab6e6f9ff2e7584c13"
  },
  {
    "url": "assets/js/3.e2c6a27b.js",
    "revision": "9ea8362f76b591223f763c1a4747be1c"
  },
  {
    "url": "assets/js/4.01d60cc7.js",
    "revision": "cd23bd1f54d8d7c9a96a583a11433a0a"
  },
  {
    "url": "assets/js/5.4366a430.js",
    "revision": "89d0327df5f5b945bea877be55c9ec7a"
  },
  {
    "url": "assets/js/6.6005dd8c.js",
    "revision": "e4b4bee1f841854b6badea3e45dcc680"
  },
  {
    "url": "assets/js/7.8f9e4f2d.js",
    "revision": "f65877677673d03d1fbf108e7915836e"
  },
  {
    "url": "assets/js/8.e9324a3f.js",
    "revision": "01cd84156fd40bb863f0db4c6e3d6f9d"
  },
  {
    "url": "assets/js/9.74dfe1bd.js",
    "revision": "42d56a3b22aee7e75e5b52d4f83f38a0"
  },
  {
    "url": "assets/js/app.94d02861.js",
    "revision": "c9a2f69fa0b9de97608c10a6373b9dd3"
  },
  {
    "url": "index.html",
    "revision": "41150e4a8f3ee61ed79f7dd58a67e914"
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
