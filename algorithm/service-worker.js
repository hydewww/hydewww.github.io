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
    "revision": "d697aaedf8b6fe8ce46616668c342027"
  },
  {
    "url": "0007.html",
    "revision": "23fddebee22e8056fca596658cf0ff69"
  },
  {
    "url": "0009.html",
    "revision": "0649c1c39c63affaf0d63cc2cb3d17c4"
  },
  {
    "url": "0013.html",
    "revision": "5ada56e658bc19bd596a69e757275c3f"
  },
  {
    "url": "0014.html",
    "revision": "40bc593acdc220428a4466dbd552858d"
  },
  {
    "url": "0020.html",
    "revision": "6b0f7cf4b3883e285c90b6ebfa61c25a"
  },
  {
    "url": "0021.html",
    "revision": "6b5d35b0233c581eb33984ee171651df"
  },
  {
    "url": "0026.html",
    "revision": "d5bc4f82a6dbca6e09506b1a16a58ebb"
  },
  {
    "url": "0027.html",
    "revision": "94bbd9381082e79c26761f78b133ae94"
  },
  {
    "url": "0028.html",
    "revision": "d6d24f09203dbca5c675245708864bc0"
  },
  {
    "url": "0035.html",
    "revision": "75e74ff569c9b81ea0616207535f8bb1"
  },
  {
    "url": "0038.html",
    "revision": "b03492974380814bca30aa757a3bcb42"
  },
  {
    "url": "0053.html",
    "revision": "28d6b6800ba43439a9f37b01f46caf20"
  },
  {
    "url": "0058.html",
    "revision": "e318662bee4e73be04a0f82f190b77dc"
  },
  {
    "url": "0066.html",
    "revision": "debb1eeb7a73ee0ba8c5cd2e9b2faeb7"
  },
  {
    "url": "0067.html",
    "revision": "373a18541c58fb07d4b5f0dfc1694e7b"
  },
  {
    "url": "0069.html",
    "revision": "8091d18659c2c9018ba3fd3c9abd1b3a"
  },
  {
    "url": "0083.html",
    "revision": "8923552034c3661fa1a0feea942ccb1b"
  },
  {
    "url": "0088.html",
    "revision": "27a328eaf4b7d78f1ebc7ca4a8a60ad2"
  },
  {
    "url": "0100.html",
    "revision": "95293f85b209a320fabf97699b59dac6"
  },
  {
    "url": "0121.html",
    "revision": "523f6b12c5ee661e39f3b4c260c6d3b7"
  },
  {
    "url": "0198.html",
    "revision": "5bea89c4116af8f1c77676a5a433f861"
  },
  {
    "url": "404.html",
    "revision": "0efe4fd90c724bb160860b42311063c1"
  },
  {
    "url": "assets/css/0.styles.994818e4.css",
    "revision": "eb5643003e0aac48247cde845505c098"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5b4aea03.js",
    "revision": "7047ecfa199e371027ce09259794fc98"
  },
  {
    "url": "assets/js/11.c721beaa.js",
    "revision": "3a19714242c9b3beb283a4411ba49af9"
  },
  {
    "url": "assets/js/12.c03e3014.js",
    "revision": "1e95febbc0add99c329e85a05ec67d4c"
  },
  {
    "url": "assets/js/13.b8f9cff2.js",
    "revision": "907407903711e5f3a8e158c7a231e7d6"
  },
  {
    "url": "assets/js/14.8a30f463.js",
    "revision": "830a309003b572e2157f7b49ed2b3d89"
  },
  {
    "url": "assets/js/15.3a88522f.js",
    "revision": "cbdf6c082142794ffb039d5f678d7c1f"
  },
  {
    "url": "assets/js/16.b8acb41a.js",
    "revision": "158cc01cd79bf714abd3223b42e63bf3"
  },
  {
    "url": "assets/js/17.c1147671.js",
    "revision": "a6028cb1388d79615f2fed9f9525118c"
  },
  {
    "url": "assets/js/18.015ffc5b.js",
    "revision": "0fc4a52ee1af0c1dfc52b3e47893f976"
  },
  {
    "url": "assets/js/19.d862308c.js",
    "revision": "c8091fc2c5c8558a00b072a1262c2210"
  },
  {
    "url": "assets/js/2.527b60e8.js",
    "revision": "04532312154b12cdb05ca019b9018e29"
  },
  {
    "url": "assets/js/20.8df1f4f8.js",
    "revision": "972e8fe13d8480a7caf8581d20a9f88e"
  },
  {
    "url": "assets/js/21.734d78d0.js",
    "revision": "e889ec37bf735d428e12bb397f6613a6"
  },
  {
    "url": "assets/js/22.1ce0e2f6.js",
    "revision": "e034e5945657ec4762ccd1d36505bfaf"
  },
  {
    "url": "assets/js/23.72742977.js",
    "revision": "d1732365601846fa5bb078c822108764"
  },
  {
    "url": "assets/js/24.4614c9c3.js",
    "revision": "6b047fb1567ac159073067c8eeb851af"
  },
  {
    "url": "assets/js/25.43b0e4e7.js",
    "revision": "fb76302722e1dbe10222eda88413619c"
  },
  {
    "url": "assets/js/26.da5d2c14.js",
    "revision": "dcc83c1ed4278886a1d1dd77fa0f2301"
  },
  {
    "url": "assets/js/27.dad9dfab.js",
    "revision": "131721737978f49357c18a405e0be711"
  },
  {
    "url": "assets/js/28.0f88f2b1.js",
    "revision": "5eb89619439b0397a5a73f252ef219b6"
  },
  {
    "url": "assets/js/29.9f8c8887.js",
    "revision": "9d9034e451d8586c81770d15481c15f6"
  },
  {
    "url": "assets/js/3.4c3909ae.js",
    "revision": "b8bb05dc3e72c6c7b7f3d098569f5987"
  },
  {
    "url": "assets/js/4.2f9c3e26.js",
    "revision": "050ebccaed96960b281738f620b54749"
  },
  {
    "url": "assets/js/5.04fb78a6.js",
    "revision": "45132f6f791b89e9e99999d2eb0fb5c0"
  },
  {
    "url": "assets/js/6.338f1a94.js",
    "revision": "4e88ff77580f9cbccbc81cbb1cb2edbb"
  },
  {
    "url": "assets/js/7.ccacf812.js",
    "revision": "0a00094b386e73a0968eebc8c2e27fa3"
  },
  {
    "url": "assets/js/8.56ec2514.js",
    "revision": "e6e32f20069f058b8b5ad79734ae0b38"
  },
  {
    "url": "assets/js/9.f77af83d.js",
    "revision": "d955e3fc66d603cbe652bcb953e18420"
  },
  {
    "url": "assets/js/app.e111fbfc.js",
    "revision": "e0406da6645ca6b699de25409e93b5b9"
  },
  {
    "url": "index.html",
    "revision": "f17fb7cb4c99739f6c934103483ce7e9"
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
