'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "f3312d93c4b48a950c5c307fe50221f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "81fd498abcac85d1a28f6b885b85d900",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d8be262c0862be5fb8b847b445794e20",
".git/logs/refs/heads/main": "60842328e836bf7cc4aefeb0caed5d97",
".git/logs/refs/remotes/origin/main": "288b5125fb09892ee8a646ce88b7b0d5",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/16/96c47e0df884afb84bb1a4cfd520672df9828a": "944602173536b651e2ca0de88a69cda7",
".git/objects/20/b89118ba13b72ea2cc27a3fd95576509ce50be": "3d376eecfa3860d0c2e2a4a519eed3b6",
".git/objects/2d/7a89579d9d44fc6f00e88e5d4bb142b09e6ebd": "b651ab731a96496664fc12d342dd647e",
".git/objects/30/0ad213fab517c5a7f01a4deb3d82a02cafba07": "d4b3e064dc786652fc1076784a0a52b8",
".git/objects/30/183b0f469eaed18dbf94b30b4e2b26defdc9fc": "0f3cc760a54f026cc4acf74d6c36b1e9",
".git/objects/34/37391af346f0b140ecd96e19ef2ffa526aa6a6": "4fa51118644b877a7040c61762a8d835",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/4d/7b7eaeba1801cc0ecc95506e2280ed166665e6": "25fbd07bb6f4acdd01c667dc1bc2ff12",
".git/objects/4f/fb02638af67ff7f82b96bcd4f327ae158ef840": "7c656039c22c2b3a60df4c6071a0c7c9",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5b/920774fb8678e122d3cfbfb36e6cd85d2fa242": "b0db66770fd3c615dee4081f869f94fe",
".git/objects/60/a2f015aea1c5dbdadda16defbe88cca30f7a05": "58691623103dd025e928f34c07ba1031",
".git/objects/69/1e44fefbd5b26254d852ddf325f13e6b4b0d6d": "6eb6da2f226fcf8428c7f310b84d007f",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6d/045f2f32b3ef14ee7ff9ccff7b7ac8490580a5": "aadbbb222e04059ef24d49628ea742bc",
".git/objects/74/9993293287fa9d1e8674e8efecc12b5eeb6541": "bd1e98ecfbe7236e698ff5f2c73490d6",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/0d48ebe53b87a2bb7f147a2e36eb7e8fb00018": "819b25fa9738f081f2ef5303f542ed9c",
".git/objects/78/e19cc36d0d5325d637ee61336e376cbf5c1825": "102ac7d49dbb1c730951e4eaf1e5f2b1",
".git/objects/7e/29a1daa467e14bb5adcd873a3dadb08e68252d": "2225d05259df9b92f0536b1a154d4232",
".git/objects/81/35387b376ae0ea0e583461644b0d96f2afb267": "a4a4761fce9222b05877919808b9913d",
".git/objects/87/ee51a94518004417f9f67bcc8366b5692b54b7": "67be1737e49903efb549591221593d99",
".git/objects/8f/066f9330220a4c9a120e30e21df4528d7b896c": "3c3f61e36b72917cdfccc59be48b77fa",
".git/objects/93/f7eee140bb3345aebaf85627bf30de8e52a0a0": "48e3d1742483c96e9241397e67cde01a",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/96583a130a4e474567d49f5dbb039e7fb02f14": "75bd2a293e967723f9dd8d79f18bcf41",
".git/objects/a3/ce082dc56ad02cd02c477d75a37ca19a6eaef5": "4a46cf511b01641c8bb68890e520631f",
".git/objects/b3/751bb20b5072e85e83c5a8c7a0d67580297b95": "86ea147413bfb8b0c232688b8aa8c723",
".git/objects/b5/f5e62d0d227632e495d8f3fe6a469f50ac086f": "3a599cb8d4db3cc611210365decb0fb5",
".git/objects/b7/023ff333621a6c22a2d2937c8415cd3f357b8d": "b0c23f9441c8d928839e7a83c48cc083",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/c7/90fa10e3c7c48061d3cc0d84c8136c74ff3904": "ebbf036ce10ae1baa1f50e77178841e4",
".git/objects/ca/608b2f7252e099361f5b32d16eac9a2ec4abf0": "608bc03c7ebeae780c9fb7746542ef6c",
".git/objects/d2/95fd52d0343565abdbc84abec859772aeafc56": "a046665bf06f113d7ccc40ac085ccfa5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/5b6cd38efa6b8dc0b5e5e785e56e1123fbfde7": "60e4ef03f604b958c8e95ebea3038a74",
".git/objects/da/06500384fbf51da11a80ef1e8664e1f3ffe15f": "c3c35043afdaeb7a9bf97dc5d30a9656",
".git/objects/dd/64428ed0b14fa47dc209ca2354fb1b08c570f2": "9c4187e338ccbbf897bce47e11948eb8",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/996729469e8c22addc9e147c91f69848367c7f": "bdce72b498b151f9f168b5b77fb24d3c",
".git/objects/e2/310d25b75526dda7e2bc7d378a46a2627a244a": "cac64ddd85e647172aea295b2896e9ae",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e7/d67c0643805583f549360627146c6ee133d94e": "8567c80460e58e02e026d4cb39f7e0f7",
".git/objects/e9/a10abd79807814a378f9ffc023ba57c29ea5a6": "8171c7ea78b1f3e06087976b58b62242",
".git/objects/f5/91c38f0709f90f3bc8346f7bfe6b733bdfb260": "50646c4dd3c0b0fba0d568f7cd38ce72",
".git/objects/f8/36c680c204c56b924b446d025afb76c66a05d5": "8718b66f203462ed080b2eba4e58a9c1",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b4f4a2d68a6faced07a4f225fb98e73c41fbdb": "6545ceb7fb0bb07b5b262282d730f652",
".git/refs/heads/main": "8965c51543cc7bc6e34c188db98cbfa4",
".git/refs/remotes/origin/main": "8965c51543cc7bc6e34c188db98cbfa4",
"assets/AssetManifest.bin": "d4a7da3f482e41d920c263d88cbb2482",
"assets/AssetManifest.json": "59b3e781541caa776e73920d41f853a7",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/back.svg": "514105de1f161b7800413c34b4774bdb",
"assets/assets/images/calendar.svg": "b5e828e9e4fca226d8ec72c5e7b209a2",
"assets/assets/images/complete.svg": "7739387ddbf227e3d4a0628df9e7250f",
"assets/assets/images/log.png": "8268ed3ad1dcd7dbc22f158a8e8c0d87",
"assets/assets/images/logo.png": "ecddd18e4eb8683d536de2b37e6e34f5",
"assets/assets/images/time.svg": "e1db4c4db5d29025d1bb4f3a005a9a22",
"assets/FontManifest.json": "c3f829e010da3cafa557ca9497182fde",
"assets/fonts/MaterialIcons-Regular.otf": "bf50c11e27c8856a3b10f75845596cb9",
"assets/NOTICES": "5248b0a4b41ea3d42742dda0d9a3a2dc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/timezone/data/latest_all.tzf": "d34414858d4bd4de35c0ef5d94f1d089",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "82c25c9a6c21a0f677b45f44bbef1451",
"firebase-messaging-sw.js": "b7ace84acd516a229e39571a845ae4a1",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "3dd5a89d1a22ccd1c97e3a0e84b46ccb",
"icons/Icon-512.png": "dc06b563075b3689545a385243baf044",
"icons/Icon-maskable-192.png": "12e58de2155a614cda720d04c1f80f56",
"icons/Icon-maskable-512.png": "b8bf63734a8f93454480bcc590f55ce9",
"index.html": "6d9a892fe7b1216b57b502cd45770c31",
"/": "6d9a892fe7b1216b57b502cd45770c31",
"loading.gif": "eef28b80715707b445d8d2ae8d0fcf19",
"main.dart.js": "ce08891d858fc390cacc181906206f37",
"manifest.json": "cb942ca1271bc9eae6591f03dfe177b2",
"version.json": "2207d6548b17c62c683b56f2a9a16738"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
