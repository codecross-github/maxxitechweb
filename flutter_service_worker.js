'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2239c1952ffe859471be728141527adc",
".git/config": "d5fa48bb974baeb2764d9c79c7434380",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "5ef8c598ea015da0b4ef22ec1bd3a69d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a59a16b43c62a6c4d2fab68531512b66",
".git/logs/refs/heads/master": "a59a16b43c62a6c4d2fab68531512b66",
".git/logs/refs/remotes/origin/master": "874405ada9f277775907d7d135c8143b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/2c/83bf828b43d2e0805b2f40a1f17bab56e75511": "8fe5cdc434444b8a65cbb138bf65ec3f",
".git/objects/30/183b0f469eaed18dbf94b30b4e2b26defdc9fc": "0f3cc760a54f026cc4acf74d6c36b1e9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/348c53ac989f91906a738359f5d941800924f1": "d85e6fa365ec0159c6c44d766ee43683",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/4f36d363f517bd63867ff3825440462811f3e3": "51e2ec0ab44b9bf485e56d8fadc088ec",
".git/objects/3d/3305727c85b8c7ce96326f24ae6543a5c66927": "3c6de4fae2588ea719bb2a482e0a33a8",
".git/objects/47/5065cd68b9f2b3a730126b63d1a781b9758ada": "68e7533d30c2935a2119e8482c6eed19",
".git/objects/4a/1407b150b9e33bcd6e6dc73d94182d827a0111": "923ec7eab4f11a1e76d86491bbd63fe7",
".git/objects/4c/4ea5837b4d3670605ab3d811ff16cbfd240f63": "a97f551ce10e8e5d6a4012ed86600428",
".git/objects/4d/e7ba2b95ec3923c4d4e96993002f98e906f71c": "48a7c4018623e6f83bc96cc3334f2cbd",
".git/objects/4e/ed353c6cb23bf885f82844f3500bed3c9fb01f": "7416854505472d31e6d3d29fe364b4c8",
".git/objects/4f/00cd5c5909cad82000972dbddd8a39cbd0e4b8": "73230cfafec57c05e072a33fd1d08e52",
".git/objects/4f/fb02638af67ff7f82b96bcd4f327ae158ef840": "7c656039c22c2b3a60df4c6071a0c7c9",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/f63ceec3cb915a6a0db5d217a26e9bc35c081c": "3cc084b2110c74f2bd5a051f93e7f68c",
".git/objects/5d/ac4f0be54a036aa266cfd05cba11745881d19e": "d284601babe05ef9daaefb5a79415285",
".git/objects/60/a2f015aea1c5dbdadda16defbe88cca30f7a05": "58691623103dd025e928f34c07ba1031",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/69/1e44fefbd5b26254d852ddf325f13e6b4b0d6d": "6eb6da2f226fcf8428c7f310b84d007f",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6d/045f2f32b3ef14ee7ff9ccff7b7ac8490580a5": "aadbbb222e04059ef24d49628ea742bc",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/0d48ebe53b87a2bb7f147a2e36eb7e8fb00018": "819b25fa9738f081f2ef5303f542ed9c",
".git/objects/78/e19cc36d0d5325d637ee61336e376cbf5c1825": "102ac7d49dbb1c730951e4eaf1e5f2b1",
".git/objects/7c/0fb69dd51d91fc38af132dddc57b7aa7776ebc": "64ada25afe460d62bc299c69b0df0a68",
".git/objects/7e/29a1daa467e14bb5adcd873a3dadb08e68252d": "2225d05259df9b92f0536b1a154d4232",
".git/objects/81/35387b376ae0ea0e583461644b0d96f2afb267": "a4a4761fce9222b05877919808b9913d",
".git/objects/83/c325ec5700e02bdc8aa3e1757732ec04db6a32": "7a7b7250af74796fb89e4cc9b28a998c",
".git/objects/85/09de8e8ab4286c15abd0f693683a217075f0bd": "b748c15bbaab75d405dd22c843d71e8c",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/93/f7eee140bb3345aebaf85627bf30de8e52a0a0": "48e3d1742483c96e9241397e67cde01a",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/a1/96583a130a4e474567d49f5dbb039e7fb02f14": "75bd2a293e967723f9dd8d79f18bcf41",
".git/objects/a3/ce082dc56ad02cd02c477d75a37ca19a6eaef5": "4a46cf511b01641c8bb68890e520631f",
".git/objects/a3/ce897a58d30ffb0dc2847cce2ebf40c7fa595e": "4e099a8b32dc1a57ccfd975c43e1fb90",
".git/objects/a9/7418dff3cbe2c5226c924e00e198cfdf481b4a": "9459b38bfdf5f818b2b7fd51e39f9fa3",
".git/objects/ac/62927255d90c399e759e630c58eddf08c28d37": "6bcf0e71fa77d0660d9cf54b3208957c",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/c42dc6969bd05c398633fdbd486d5c834f3ac3": "a78d10883586917bfb1149973437d911",
".git/objects/ca/608b2f7252e099361f5b32d16eac9a2ec4abf0": "608bc03c7ebeae780c9fb7746542ef6c",
".git/objects/cc/29b25ec1a558e0d07b7702662507a320eca232": "9bb25ee514ed368199869541dc9419ff",
".git/objects/cf/161a4ee85874da6f9776743f7cac7adf197a48": "f11423749eeca196dc6cdcf5ec7e4add",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/da/06500384fbf51da11a80ef1e8664e1f3ffe15f": "c3c35043afdaeb7a9bf97dc5d30a9656",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/e0/996729469e8c22addc9e147c91f69848367c7f": "bdce72b498b151f9f168b5b77fb24d3c",
".git/objects/e2/310d25b75526dda7e2bc7d378a46a2627a244a": "cac64ddd85e647172aea295b2896e9ae",
".git/objects/e4/0242075cb80748d32eecd1b62e25282152c0df": "9326e032c02f1ea41341607a345592de",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e9/a10abd79807814a378f9ffc023ba57c29ea5a6": "8171c7ea78b1f3e06087976b58b62242",
".git/objects/ec/12f594fcf5be2572e4d5c292116aa4ced3f3d4": "e5b4ae37d8db20976862f6a94a43762d",
".git/objects/f1/8a2c67e0995b7020ffe7aad4bf9042579664dd": "4ea4d5d1d427cb3dbddbcb21a6c6d2e5",
".git/objects/f3/78a80476099e53ea6c3f2a8b8ea79b5de27c83": "d6deabef28eeef6ca6b0dd12a489f9e3",
".git/objects/f6/7ac35ce2fe20972c370916683fbab83ff455eb": "9e0c5b9a050b796e0d7334a235acee60",
".git/objects/fb/10cdd6df0698217cb6a207240ba91959db3e2c": "dd1ed6b5809690f7f8b325877ca0b509",
".git/objects/fb/79fe7e35d010262d921512e53ad468ce7238f9": "916be54dc5b477d6012646190946157f",
".git/refs/heads/master": "e2321be262bff25a1a8c292f9124dd65",
".git/refs/remotes/origin/master": "e2321be262bff25a1a8c292f9124dd65",
"assets/AssetManifest.json": "ebc123673660d1f2b69ca85a10151a22",
"assets/AssetManifest.smcbin": "315d8d6fdc5e984fcbe3b815ff95dc20",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/back.svg": "0edba5556aeb552e2544617aa3786fed",
"assets/assets/images/calendar.svg": "803817511e7773df6159a54c43ce7514",
"assets/assets/images/complete.svg": "efe5a4a88ecd2326835ef187644612b8",
"assets/assets/images/logo.png": "ecddd18e4eb8683d536de2b37e6e34f5",
"assets/assets/images/time.svg": "0c56eb03d74d8eac28c26e0ef7beb624",
"assets/FontManifest.json": "c3f829e010da3cafa557ca9497182fde",
"assets/fonts/MaterialIcons-Regular.otf": "e2935c6e55b7c5570aad0e5e229c1f09",
"assets/NOTICES": "ac35b57a185f27f4db534bdc028f158b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/timezone/data/latest_all.tzf": "d34414858d4bd4de35c0ef5d94f1d089",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "82c25c9a6c21a0f677b45f44bbef1451",
"firebase-messaging-sw.js": "34607bf53fd5d367639d6494fe1159c4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "3dd5a89d1a22ccd1c97e3a0e84b46ccb",
"icons/Icon-512.png": "dc06b563075b3689545a385243baf044",
"icons/Icon-maskable-192.png": "12e58de2155a614cda720d04c1f80f56",
"icons/Icon-maskable-512.png": "b8bf63734a8f93454480bcc590f55ce9",
"index.html": "23a069dbd403ad49572ebbbadf08bac6",
"/": "23a069dbd403ad49572ebbbadf08bac6",
"loading.gif": "eef28b80715707b445d8d2ae8d0fcf19",
"main.dart.js": "a23aebeef731ddc74fc00c91aa55a191",
"manifest.json": "cb942ca1271bc9eae6591f03dfe177b2",
"version.json": "89642f5ef927eca8fc6b0858971dfe33"};
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
