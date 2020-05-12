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
    "revision": "fcb1753d7d987dcbe8ffb1cbb2be514a"
  },
  {
    "url": "about1.html",
    "revision": "4c87534b16001183932d7caf3ccbe2ab"
  },
  {
    "url": "about2.html",
    "revision": "e172fe357eb49dd48ebd47cf52e10e1a"
  },
  {
    "url": "about3.html",
    "revision": "fe71bf210d9461204419518f7448618a"
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
    "url": "assets/js/1.31fe4405.js",
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
    "url": "assets/js/13.73dc1929.js",
    "revision": "2389524ec815b498de18aece34b0bdbc"
  },
  {
    "url": "assets/js/14.6a473dcf.js",
    "revision": "857299a3baba93d8c80d2c22943f7587"
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
    "url": "assets/js/17.501df5cb.js",
    "revision": "9e7eceddbcc9c4751ac0c87c39995c6a"
  },
  {
    "url": "assets/js/18.c4a577c6.js",
    "revision": "dfc940300a9dbba2a2a0841c0a6c7d7a"
  },
  {
    "url": "assets/js/19.f7e8443d.js",
    "revision": "b0a17fa47d21193918c7e1f702481397"
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
    "url": "assets/js/3.d50137cb.js",
    "revision": "7e0a761c55485515c0754659558be9ea"
  },
  {
    "url": "assets/js/4.91ddb18e.js",
    "revision": "7482887ecab99621f0edde335483d7bc"
  },
  {
    "url": "assets/js/5.0d10d3f3.js",
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
    "url": "assets/js/app.50e95c75.js",
    "revision": "c850bab1ed5f446d75828154b15952cf"
  },
  {
    "url": "bg.png",
    "revision": "f7b3101c3f2ae2fb8227d7eec1a0fa38"
  },
  {
    "url": "categories/article/index.html",
    "revision": "663c56b2dfc7e61c16318a3e42e1c9d4"
  },
  {
    "url": "categories/index.html",
    "revision": "fc696e137e4d2c33a48f3324dca57951"
  },
  {
    "url": "categories/tag/index.html",
    "revision": "8e7d80336be1899918df2db8b3dad924"
  },
  {
    "url": "guide/about_me.html",
    "revision": "0da7ba4e6b713f70fb2e64031920dc15"
  },
  {
    "url": "guide/index.html",
    "revision": "cb590a6242df5050852a13d779a88948"
  },
  {
    "url": "index.html",
    "revision": "a86fbfda8bf51454334581419e3a51c2"
  },
  {
    "url": "javascript/index.html",
    "revision": "c0cc970777ed1a37a52eac7f2d9b004d"
  },
  {
    "url": "react/index.html",
    "revision": "5537fb6ce9bb43148e3326119cd812d8"
  },
  {
    "url": "react/react_questions.html",
    "revision": "323cb1ccb9a89caee5071309fda2b0c5"
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
    "revision": "59b488b105a211984379101030e26464"
  },
  {
    "url": "timeline/index.html",
    "revision": "56636d83b45a5eeba070ceed35edf49b"
  },
  {
    "url": "vue/index.html",
    "revision": "30e1b16d2ce96859cf9f6be601bead33"
  },
  {
    "url": "vue/vue_ questions.html",
    "revision": "94e2e44b910e4b00135e999313d6afb1"
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
