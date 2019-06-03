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
    "url": "0001.two-sum.html",
    "revision": "e9dc31df89cd1d63df6ccc6ff3f7e65e"
  },
  {
    "url": "0007.reverse-integer.html",
    "revision": "48fcff900f3d32b3ae67667023e84619"
  },
  {
    "url": "0009.palindrome-number.html",
    "revision": "37693d27370c9686316ea0dad7c938ed"
  },
  {
    "url": "0013.roman-to-integer.html",
    "revision": "78bc7efeb5bb23d1f65bc51d5aa67849"
  },
  {
    "url": "0014.longest-common-prefix.html",
    "revision": "baf0ab311deba3d77828a2283de7b120"
  },
  {
    "url": "0020.valid-parentheses.html",
    "revision": "906c5e24aec452dc21c558bf964cf171"
  },
  {
    "url": "0021.merge-two-sorted-lists.html",
    "revision": "51e676751c87ea99bf8c6ef129411473"
  },
  {
    "url": "0026.remove-duplicates-from-sorted-array.html",
    "revision": "50b99d916a2da99d249c0c069863f1ba"
  },
  {
    "url": "0027.remove-element.html",
    "revision": "064844e257eae38ad172027479563576"
  },
  {
    "url": "0028.implement-strstr.html",
    "revision": "3762292f005ffc5f20b9ec5be4798355"
  },
  {
    "url": "0035.search-insert-position.html",
    "revision": "5f3ba064359a210341b49981549a936d"
  },
  {
    "url": "0038.count-and-say.html",
    "revision": "c1921ff6eac4b22f9ff0012be3c5042b"
  },
  {
    "url": "0053.maximum-subarray.html",
    "revision": "3f2677cab2335d73e159f962941dedef"
  },
  {
    "url": "0058.length-of-last-word.html",
    "revision": "78fd9553f2b1814864898a3d21b6ac33"
  },
  {
    "url": "0066.plus-one.html",
    "revision": "d2155b3476e70eea6fa91f0628a615e4"
  },
  {
    "url": "0067.add-binary.html",
    "revision": "e013c9954718420276f1cf912d70988e"
  },
  {
    "url": "0069.sqrtx.html",
    "revision": "1fcf50ff5dd52c705a6778d1f691aa96"
  },
  {
    "url": "0083.remove-duplicates-from-sorted-list.html",
    "revision": "d934c0c95e5719c231de1b32849844ac"
  },
  {
    "url": "0088.merge-sorted-array.html",
    "revision": "3797a80455bf16f632651471fe565b73"
  },
  {
    "url": "0100.same-tree.html",
    "revision": "dd628f5936c69389fcf2cafbb545c9cd"
  },
  {
    "url": "0101.symmetric-tree.html",
    "revision": "52e270db90a5c43adc68c0b97f8c475a"
  },
  {
    "url": "0104.maximum-depth-of-binary-tree.html",
    "revision": "9d8c00c63b7753775bf1dd2436b7cda3"
  },
  {
    "url": "0121.best-time-to-buy-and-sell-stock.html",
    "revision": "144f610925bc70006e3d0dc683a63593"
  },
  {
    "url": "0198.house-robber.html",
    "revision": "14aa692660cde213a5ffc93eb8a9207a"
  },
  {
    "url": "404.html",
    "revision": "57d3770f74510a7138353c6122ca0085"
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
    "url": "assets/js/10.44ea6df9.js",
    "revision": "a56cb1697f19945ab1f4af61516572da"
  },
  {
    "url": "assets/js/11.cb538bfb.js",
    "revision": "adcdd69796cc3d6b73720f10b00be3a2"
  },
  {
    "url": "assets/js/12.3f646990.js",
    "revision": "f7e381a70e57e70eddd758070b3ff475"
  },
  {
    "url": "assets/js/13.8759a9e1.js",
    "revision": "c8b62ee7d62461ba98ee1cba85bd581a"
  },
  {
    "url": "assets/js/14.571f3db5.js",
    "revision": "2eee943e13a53838d893718c2e16be09"
  },
  {
    "url": "assets/js/15.4277cf6d.js",
    "revision": "ac54f7432eaa8a25595ec8d5f2e44540"
  },
  {
    "url": "assets/js/16.598e448a.js",
    "revision": "fbab1da96e4e38ab665a08eb34dbcb22"
  },
  {
    "url": "assets/js/17.477d3aa4.js",
    "revision": "a6028cb1388d79615f2fed9f9525118c"
  },
  {
    "url": "assets/js/18.b3ef58bf.js",
    "revision": "0fc4a52ee1af0c1dfc52b3e47893f976"
  },
  {
    "url": "assets/js/19.c5d808ca.js",
    "revision": "ec21642040c038dc9394286cb9da822f"
  },
  {
    "url": "assets/js/2.527b60e8.js",
    "revision": "04532312154b12cdb05ca019b9018e29"
  },
  {
    "url": "assets/js/20.0f00a325.js",
    "revision": "43493eae4df7154e868885f4b446d932"
  },
  {
    "url": "assets/js/21.5827d547.js",
    "revision": "9b383a9d4793ff34ce167130cc5b9835"
  },
  {
    "url": "assets/js/22.42448765.js",
    "revision": "c9a078af3cc5252c5a2a559de77b8990"
  },
  {
    "url": "assets/js/23.99e68b6e.js",
    "revision": "010cc4db278a2623fd982b5733dc17bf"
  },
  {
    "url": "assets/js/24.3fb91b9f.js",
    "revision": "c608ccd3a3d73aa737fe794364ff2305"
  },
  {
    "url": "assets/js/25.352431db.js",
    "revision": "6bf1d167ceab4a62a6a36efc53e44490"
  },
  {
    "url": "assets/js/26.0c18963c.js",
    "revision": "367708db1b392552b0578d1afd13597d"
  },
  {
    "url": "assets/js/27.11e4d438.js",
    "revision": "247391c000f0e20cb277f3486ee710a9"
  },
  {
    "url": "assets/js/28.047a3efa.js",
    "revision": "e7fd8025ee4ba558b98050acf942b2da"
  },
  {
    "url": "assets/js/29.76ffef98.js",
    "revision": "8dbd64379562d8516e5f9c94b8c9c802"
  },
  {
    "url": "assets/js/3.4c3909ae.js",
    "revision": "b8bb05dc3e72c6c7b7f3d098569f5987"
  },
  {
    "url": "assets/js/30.5cf56cc7.js",
    "revision": "1d0a9bfb91656099c4b144431ffe734d"
  },
  {
    "url": "assets/js/31.21ec317e.js",
    "revision": "bcc754c09037785b8066d40adabd8745"
  },
  {
    "url": "assets/js/32.01ded046.js",
    "revision": "8841b8069e61675f7546e58ff80ecfcf"
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
    "url": "assets/js/6.9d1769b7.js",
    "revision": "b13aab7f79dcbbde6ea3c93bfc6f3ae0"
  },
  {
    "url": "assets/js/7.74a60ee6.js",
    "revision": "a449768ec4305897284c34c7a75efe23"
  },
  {
    "url": "assets/js/8.f47b0731.js",
    "revision": "249a1e7dc769934b70827e29fcd409b9"
  },
  {
    "url": "assets/js/9.9fdd3108.js",
    "revision": "a195cf3551825d077a8ddb40fe9ebe2d"
  },
  {
    "url": "assets/js/app.c0e3898e.js",
    "revision": "0904eb1a8c1edc20c523a6e897677152"
  },
  {
    "url": "index.html",
    "revision": "8f630518985e3e87f1562c185361ff9c"
  },
  {
    "url": "logo.png",
    "revision": "00a9d8b403118ad13dd39ea3be7b944f"
  },
  {
    "url": "Todo.html",
    "revision": "18a6d07040151e77749dddc10402d905"
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
