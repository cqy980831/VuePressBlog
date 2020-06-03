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
    "url": "about.html",
    "revision": "d5aa21504f81037c4acba9727ede1167"
  },
  {
    "url": "about1.html",
    "revision": "a55945ad5970b9a7428dbca2f2cd95ee"
  },
  {
    "url": "about2.html",
    "revision": "6f66f89fd0f172ea3051a7082a0ffa84"
  },
  {
    "url": "about3.html",
    "revision": "f56db08bcc1ccbf200144e48fb970eeb"
  },
  {
    "url": "assets/css/0.styles.14dd4b56.css",
    "revision": "35e7d2a39d40f3a6ce01a0a8017f855b"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "f605197e3f4c7ccb672926c060b6cf14"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.19b156e1.js",
    "revision": "b316bd59da6ef7d0591cb04a7c432dd5"
  },
  {
    "url": "assets/js/10.02f85c94.js",
    "revision": "9128bfd595210235b6145738bf7300e9"
  },
  {
    "url": "assets/js/11.af1f87dc.js",
    "revision": "029cf760cd54ea874b4da9dc7e2fafaf"
  },
  {
    "url": "assets/js/12.237fe453.js",
    "revision": "960b0ae716b9d0bcf173477810e13eac"
  },
  {
    "url": "assets/js/13.7de11db1.js",
    "revision": "5b467ce5d6eb4db9b345c00f1f8f9855"
  },
  {
    "url": "assets/js/14.35d4883a.js",
    "revision": "0c18abced052e875a77403f8870e2e16"
  },
  {
    "url": "assets/js/15.2b3d8f88.js",
    "revision": "37813bd6a1c38f7ed49b2e68692cf220"
  },
  {
    "url": "assets/js/16.426ed51c.js",
    "revision": "7af2d6b5104dff66a7101df34cfbf1e4"
  },
  {
    "url": "assets/js/17.eb37ae90.js",
    "revision": "4c978118dbfaca09cde90622d0919f9a"
  },
  {
    "url": "assets/js/18.4f7086c5.js",
    "revision": "082eeaa30b1304268e90068f1bc92d4a"
  },
  {
    "url": "assets/js/19.2f0c1932.js",
    "revision": "edb3ee085ccfaa443db6b2e514d0cccf"
  },
  {
    "url": "assets/js/20.1c765490.js",
    "revision": "d047a4e3acf31733423972ba9f34cb18"
  },
  {
    "url": "assets/js/21.1178e721.js",
    "revision": "1146da72609d74dd86f5edaf65c62cf0"
  },
  {
    "url": "assets/js/22.8664a68a.js",
    "revision": "f0a57413d5d2ff948dc0809bb8da38c7"
  },
  {
    "url": "assets/js/23.fa856cca.js",
    "revision": "e30e15ec3fed6702c966800a5b0f9651"
  },
  {
    "url": "assets/js/24.81229bd1.js",
    "revision": "d50c743c12551bc363b708200bf51be2"
  },
  {
    "url": "assets/js/25.bfcfdb91.js",
    "revision": "812a155f7bb8d23218d724bbc4fd3469"
  },
  {
    "url": "assets/js/26.b34c0d39.js",
    "revision": "50559d5dce0db880e7b8fa3e46ac2c5e"
  },
  {
    "url": "assets/js/3.3d98817c.js",
    "revision": "7e0a761c55485515c0754659558be9ea"
  },
  {
    "url": "assets/js/4.98cc84da.js",
    "revision": "7482887ecab99621f0edde335483d7bc"
  },
  {
    "url": "assets/js/5.a25ffc4d.js",
    "revision": "93c9da9c660322c4d2556d680cf1df5b"
  },
  {
    "url": "assets/js/6.986dcd48.js",
    "revision": "3521a03bca35db84ad4ccb97e1db5e7f"
  },
  {
    "url": "assets/js/7.9f014a41.js",
    "revision": "230d0c0a9192ff1f3d91a34c7abbba15"
  },
  {
    "url": "assets/js/8.f11cef01.js",
    "revision": "460ea9b1d6f1f6be62b312f8c1fefed7"
  },
  {
    "url": "assets/js/9.ca18e909.js",
    "revision": "70c517e7a616a6e6ba095788fbbe1ef9"
  },
  {
    "url": "assets/js/app.e9a40f56.js",
    "revision": "e342918850fc6df3e0eb4c8d9e280728"
  },
  {
    "url": "bg.png",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/article/index.html",
    "revision": "054c7d9f1e5d0f0333d1b975946e09c6"
  },
  {
    "url": "categories/index.html",
    "revision": "e0bd9da1ab91b5aca9e7b1edd33b9c4d"
  },
  {
    "url": "categories/tag/index.html",
    "revision": "d3dbec066d31f249df31c151717cf4da"
  },
  {
    "url": "guide/about_me.html",
    "revision": "a0cdbf41325c755d2c79d03d67db583b"
  },
  {
    "url": "guide/index.html",
    "revision": "1e83338401373b3aa9ba97c08490f177"
  },
  {
    "url": "index.html",
    "revision": "6c9c244a4f9969ae86426e443c5ab9f9"
  },
  {
    "url": "javascript/JavaScript/index.html",
    "revision": "0253bb94a4449eccf0c6801aa7f085a9"
  },
  {
    "url": "react/index.html",
    "revision": "e4cc52fa1d37c25dbd10c24fc327097a"
  },
  {
    "url": "react/react_questions.html",
    "revision": "b192e3caf1ab11ca5b44d2c28cdbfa4e"
  },
  {
    "url": "redux.png",
    "revision": "c50c501f417ccf029c6bef3184b6071d"
  },
  {
    "url": "setstate.png",
    "revision": "30ac83386b75fa2ab33b4d40cefa5dd4"
  },
  {
    "url": "tag/index.html",
    "revision": "0ac175540257c16df074c2a0b03a2d3a"
  },
  {
    "url": "timeline/index.html",
    "revision": "5cb0d0a8a2db816db6b68945e6c8a313"
  },
  {
    "url": "vue/index.html",
    "revision": "ff3d46ec2563b8bfa267374a60b6d1ed"
  },
  {
    "url": "vue/vue_ questions.html",
    "revision": "810d2d078706093936b1de7e123b2d45"
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
