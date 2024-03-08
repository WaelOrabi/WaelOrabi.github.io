'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "4fd8177bb594a2dea92595197a2222b5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "27dbfaf3da0e19424aa94afac79ec007",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eac3ef53e02d12d21c1d15c80ba65c8a",
".git/logs/refs/heads/main": "04398a3c2b92f05cb167b710e08204fc",
".git/logs/refs/remotes/origin/main": "24b9e554958a1efe565ef931ca827240",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "bd6f798fe3e3942c14dc558521f59ca4",
".git/objects/0a/d0a2c23efb38d3cc5cc71938305f7820c08e3f": "a1c386f50af1cbd0e91f5899bd051335",
".git/objects/0b/1e4dd993e2d41282a677634f77b1399154356f": "824653fcd9aaacaf492d46d8e44f37d2",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "970c7b604262ccb20ec82f39104e9cfb",
".git/objects/17/83722478436405f1f5c53b0569fdccd80e6647": "003288f1f38929a4299e228e7f7e6042",
".git/objects/1d/9b2b0e1a74b94c7fc9b22cd879650d32acd905": "697802dee3abe8bc319cf598c7c8ec14",
".git/objects/1f/db9a7612b841f6be51f3e478ff8a936ee28299": "68e139fc0a6cb0b5994d95dbf11193dc",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "6358728b0f5f1027eeb127e5833b5abb",
".git/objects/29/dff7c2b5cf2615f634f0e5597fa652cd60d636": "be6a3547b222f2b7a83498b9ebf19826",
".git/objects/2c/156e5bb102c593baa3051960148925c4a620b3": "af61f7920cb541a55ea8d8a8188821bb",
".git/objects/2c/38e06a3ff8f8a739ca71a7dec6eef812165ba3": "a061b30c8a4c5f2003433e25be69ffd1",
".git/objects/40/96020cad5932c34d323c61d76b12d5c39ab429": "eb95dbf893363c4c5d35810eb128635a",
".git/objects/43/d7a284a1f64ebd10f41895705418d52bf6d020": "d336905a6f31fa6ddd7f26adb42336f2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/47/2b6fb4d18a0261920840dc546348743ef097db": "9f5bf9ebe2686a1cd0fd9e97e7e5aa33",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "9fb736ffb37b61e228f0403ed08e43ba",
".git/objects/4b/c065436ef84a24675e6ddc69cdd9fd34aca209": "6513845fb12b770c4861ba8bd12a5531",
".git/objects/52/3c9ba88f34dad7e978eb2e8159c1235f4b70af": "c5835ca14b62b6c20b94ab986756aa4f",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "98dc92399f0c19aa26b49bce570be57e",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "426ccef613faa4fdaa7fe1ebbfb0334a",
".git/objects/6d/3943600d8e5d7e990b5ba06a834ee3e589fa01": "7f6fc1cf7409f895ad4f15b4fc8148ce",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "d591a779859e5269a502d81064617f75",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "26aff0b4be772e8bf4e3aa148cef22bc",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "2a7e1a5ee4e80fd645045d866db32950",
".git/objects/74/27394724457529611446d38d27be5eb95b3bad": "96be058f7f55b535803064ddd99cffe8",
".git/objects/7c/aae7460c2c59820f23b38b4f68035878cdd2f6": "b477261a7582b01e5d08b63fe5d10d8b",
".git/objects/7d/64a9598c73f405785e8d1c8cebf9bc6ecf0f1c": "cd43fc1d3c25dc60e4198de5d59ea654",
".git/objects/82/822690aca94fd159442575cde96acefd65e0c1": "9dab1ef5c51e2c0b83d8d9ccf1762360",
".git/objects/84/0fe8a5f52a23829ddc8495c295690aa369151d": "b0a1c434e173f6ae3c4e751bea3456d9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8b/a6115c61fa64c76b454c6554a1f49d73f24578": "840c98cbf5c514ba584ada49bb52445f",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "33e4a65da1eb6977f9801e90ddbf3289",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "501d5ab5716c2ed4f4e1e47221629c14",
".git/objects/9b/e309a7e8e2b778c0524be58da37474a0d28443": "3e1c0a07fa2b834a7d6643060f38e136",
".git/objects/a5/cdfe7e7fcdb49f9d4ce1872badbee40e074701": "04ebc9b2fb44135f40733e8e4ed5141c",
".git/objects/a5/eced0ab1e3f84d43539516e02e108395a2c31b": "18a2017f13bb1c19e242e33cbc250521",
".git/objects/ab/39e746ab681938c55d19b8ac56f3ad5aa907f5": "503eaf20236bcaab595f329ccf348e3f",
".git/objects/ae/05cbd15a019b18cce75a6cc05bf022019e5794": "750a7db32829566cc8b6e0a4e576a2e7",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "0b78a2619a6aaf413ef84aef7ca14492",
".git/objects/b0/01e257e0cacdff3e405955f5175693ad451777": "26840afe76c5a98dbf8be0a44bf6ab51",
".git/objects/b2/d0f7ab222f23568aa95a2c159eb4ebe790a411": "c706a91c901550d7a911496a4837873b",
".git/objects/b3/9a432fa2c723557f702748d43756a45f0d3981": "d4f9b45db75ed80e9b0e2ef14828e153",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "3d929b619b43ce0cdaec16ed67513540",
".git/objects/b5/ab36a979f1217f500c60776a93dac977d86cfd": "12e17814f346019edf6fbe1bdebc9667",
".git/objects/b5/af92c3843d8a52624c7cdeed06bb20973a99f9": "3db7c47d8d6723995937c2e49d5d0829",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/c4/1c5139624d90b07cbc2243a3aaabc0dd77491a": "db01bde004c5a93e3031658bdc23680f",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "f2069cc735619c31824182a9254d47e5",
".git/objects/c8/28b74175214c0dc71ac71a385d6261d2012c2c": "347943b2231a200b5c904e4fe3872f9b",
".git/objects/c9/543458560f3095039fbd6a92726c0faf0dc438": "d707ce0b2c1a6bc574deeb87a81e75d5",
".git/objects/cc/980952f7623e79e5e6f18d3f8859ff88ad67f6": "531e5fc34b94bb05b66d407e74e78cdd",
".git/objects/d3/a765a0b43331a6c88f8b24df0cfea22c8d3ec9": "41f7f8c8aae4a25bf04e5deb7fbf1b1c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "1020ea7c17300eba0f2921dfe6fff24e",
".git/objects/d7/5aece88d2d63a8b8b999c349a14df9a3099c3a": "2768a732951ad1c43b09ad3845ab9a78",
".git/objects/d9/0b3c0cb088bce8c93ed9de73f9983c3901fb8b": "d20259402886b3038e52f8a22dfa9fbe",
".git/objects/dd/bd1ef43500bd4512b98823c4e58d208e4185b7": "745b7d770261a3709fb524722edd8cdb",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "534f3183d78a0e2c26089d1cf390b6ce",
".git/objects/e1/a8244f308133c16f67a3113b396f2ba84873dc": "d962df6049a410f88bbb9d8fac6648c1",
".git/objects/e4/75ed337931c52c439fc9c78c473f5cb53223ee": "5876a95e5f8331e14e398844fa842489",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "6078dfba0d9dfa654b1e692f5dc30d82",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d13d543bd63eb7dc360abee9ae50c375",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/objects/f7/34242e96eed03ce0021ecb58a741b4fd332b78": "a2586608cfc14c22260deeadda5b9e79",
".git/objects/f8/0402b40da1c072b110a1c515592c98f063e442": "d9818cac07df17da80082274a6a4cfa0",
".git/objects/fc/1ed02050fc663aee1df6481649d25e295e2201": "7ab6bdac2cfa53e5e67e239185bd2e16",
".git/objects/fd/703d1f36b3ab7ec34deeb0dcf04e867db75265": "6d8e61ce02ce27fa93ae907d7483f97a",
".git/refs/heads/main": "76e0af02b13ad1d96f975961d71bcd23",
".git/refs/remotes/origin/main": "76e0af02b13ad1d96f975961d71bcd23",
"assets/AssetManifest.bin": "c444db5f5254be928a272e940bb0bf5f",
"assets/AssetManifest.bin.json": "7265ae4ef0712c2edd95e19ad908ffbe",
"assets/AssetManifest.json": "964e16a6082202b1a3958680e245930a",
"assets/assets/icons/Documents.svg": "0d66436fde3818811c82319665ef91fd",
"assets/assets/icons/doc_file.svg": "c6c3abe38f2b4e22ab33399b26966b1f",
"assets/assets/icons/drop_box.svg": "d427e188a7aee4612446d0e9d26e76f1",
"assets/assets/icons/excle_file.svg": "9986607c30659e3d222f9908141884f9",
"assets/assets/icons/Figma_file.svg": "90224db6835092a278153e0f60e8c203",
"assets/assets/icons/folder.svg": "8c11f522cd36f0cbd9c02eb2b689cbb9",
"assets/assets/icons/google_drive.svg": "a4cd4325c28cee54264a4942fcf6ef48",
"assets/assets/icons/logo.svg": "6194acb4fae31a2a2ee26ff61d8c644e",
"assets/assets/icons/media.svg": "e790cb1d2138f7a9d1b404abf8346eb1",
"assets/assets/icons/media_file.svg": "5b8f2b094278f5d9378bca249cf80fc1",
"assets/assets/icons/menu_dashbord.svg": "5e8d164243b3e28c22a8a5e35719c96e",
"assets/assets/icons/menu_doc.svg": "c5a576281e34f54d9e041410d002443c",
"assets/assets/icons/menu_notification.svg": "f49436dd0acd00dc43ab287c7ac3ff4f",
"assets/assets/icons/menu_profile.svg": "134c2274ffaca9441fe7523b2f476608",
"assets/assets/icons/menu_setting.svg": "32ab0402dc07a66d078c758ddb0aa798",
"assets/assets/icons/menu_store.svg": "45f31f1388616a22053ea6a99ed5904a",
"assets/assets/icons/menu_task.svg": "fa731cbcb073759bd82c699331ef7e93",
"assets/assets/icons/menu_tran.svg": "acdaeac5ea677c4a479a1d656ea3d5c1",
"assets/assets/icons/one_drive.svg": "0b0ca635ef35ec9beebb18aaf20cd5d9",
"assets/assets/icons/pdf_file.svg": "4ea6d2b9e631ee54164987b57fa240c7",
"assets/assets/icons/Search.svg": "82ad5e39b306dc6a42809cbeef651e64",
"assets/assets/icons/sound_file.svg": "d346e8558ced623138787011e0ca7e88",
"assets/assets/icons/unknown.svg": "2fc91e195e7a0d6279c01552403c3b89",
"assets/assets/icons/xd_file.svg": "fd95a4cd96e6c7251ebeac76b7b7c8b9",
"assets/assets/images/logo.png": "5315be9d0a7602fb12a0ad4c2e3006e9",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0183f25db9acc4dc4f1506694a3ebc95",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "775bf3c20b4c4f403bc470668227c418",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2f73737789c13fd7e400209378cacd22",
"/": "2f73737789c13fd7e400209378cacd22",
"main.dart.js": "a85114c9d139eaf232bb077889b16cd7",
"manifest.json": "eb0967c213ff3e1cc1170c85fc8b5515",
"version.json": "e9eb58db72d407be27e9fa052224c304"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
