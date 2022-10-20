'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/config": "bcc5aaffa5cc4836aec379d4e2a7bd54",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "907870ae448c7b2cbcccbbf561643142",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "3687ae01b3c0b862dd8f54fbb0b384e9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8b254d78ac574c98bde55c0f10a35e5",
".git/logs/refs/heads/master": "e8b254d78ac574c98bde55c0f10a35e5",
".git/logs/refs/remotes/origin/master": "75e77e0d80275902db63adfee1116293",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/01/c4f7a0a93d6aaa7ef00b6d1128930232c3d893": "85812d686b8bf20b2ad2e7b19b71344f",
".git/objects/03/b1b8516731f0dbed185e141530689b56d8a4f0": "23a4c7f4d15cb6b1bfc28411af3ff3ea",
".git/objects/04/0b9b3e534b5cbc1cc386ded4d972dd51a32109": "990b9e3a9062bd091b86c8d696d9ff3d",
".git/objects/04/b592710987f0fd5e99d24faf0ca6c4174c3bbd": "58e9232983284aa44f34bbc05ac62f12",
".git/objects/07/d327823c10b47801a93fa4c54f32bef3825448": "7a3b00ab607cc3e0e6019bbd9af807c3",
".git/objects/13/f3b466fdcabcda2d8822720a732efc2211ce36": "7c9782198f25a7f742b630187553e40f",
".git/objects/14/9cc729761b2e19c719fd653bc2b73021976e7a": "2d6982fe8dd1162d659b0c2a650020cb",
".git/objects/16/7494e6435f38be767aa6ef0582474d82e02fda": "9c073f2c3b9c31009edb64520af31d52",
".git/objects/17/26d40425508cbd7666740a8e23bc70027e4562": "6b62ee23516824f853e95961f66e5d08",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1c/c9155958d3e1f8469257e386f0969398f373fc": "d7b38a7b9ca0847e45234a7a768c7c4d",
".git/objects/1e/46fd8642da12a14ce11f69301a8c19a9c9163b": "e5e5122c795d41084c5730acbf68b240",
".git/objects/24/5ae39017b4674f716457eda2c70ead5605dc17": "d8e6fab8d88445fbb04d6dcb3156b66f",
".git/objects/25/2f2283c7ad710740b3611d8d8503d1641ba321": "fe510999f2999778beb5fff6f9da55bd",
".git/objects/26/ff407a7d093086868113886bc13b02cfd151a7": "d0af884eeb315b0ad3eb1bf82ec070d7",
".git/objects/2b/243a6ebf9cf56c56c6e11562ce89ecbd75c1cc": "fbc4e134e2d3be7e776100c96fbd3ca6",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/5858f04211d461fda5ef7fe88fbd7242261d3a": "c212613dbd65161781e7ead5c84907a5",
".git/objects/32/01c09b4ecc2b65eea2dc86f1fabb26910ce71d": "99d9d26c75c4f2a3dfdb58cd5f6487c6",
".git/objects/32/51241c0bbc67600785e2f51468b545521123d8": "ca022e47e12e14acdc378073d5a16371",
".git/objects/39/0cc54b4c79077ec2b54aea40c8de68b9635443": "2956ff4e6d6eb5581b861d92bf84c703",
".git/objects/3d/3321f5fa91f01c1eb15db8b9d8e12a771349f0": "aad720bf9d144e103abd6c120a48b45e",
".git/objects/3e/d7e750fcfa3a71b5459d220763437d090878f5": "7bdb6e92889ce464aa6b6b5225608928",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/1467870fb6023db48240adaa9c88072834b054": "cd084d05a1b8d68c42ca2ddf01fba85b",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4e/b661a0042fd3460aa6e01975eccc636374f2c3": "ba7850ae5670e0c0575cb7bee72d6295",
".git/objects/59/c282d13b350e6fbc7861820aa2abbab44dcf5f": "186b3d44ad7f46932aeb88ca0ee38b1a",
".git/objects/5c/0ce94e65d602c81f16f41d582734c8d7248c43": "53df5ea5f824a87cadbef749f3ed64c4",
".git/objects/63/47d9feb673140379e60e59ff2cd169d3f85dfe": "ce1500b46e9a0d505983041a2037a4b6",
".git/objects/64/60cea0d32d511c4698bc6e7927e4c3d0747c6c": "6a114e71376818a09273f028d5c14c1f",
".git/objects/75/64739e85a64f6018be2cc62d89d543287f3832": "80c237ff21f9a6c81907ceb6db5575f1",
".git/objects/76/b97e698f59937147b5859d039efb09163cd9cb": "86b9266a822de37050a1eeb518e212e0",
".git/objects/77/5fb471877a301656147448ab25b0f88c79f46d": "45c40c4828b81faf729cea93a0e95047",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/7e758209778678f3440b6e56f4bea645f34d90": "518911ab3b42fe06e07f6f3c66255fe8",
".git/objects/7a/ef644070d7d67c730cb1a44ed77ab13a30c107": "b78fcc655ff931de6ce74a81174688dd",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/16a70c20ebbec4e3a355cfcba52fa0928fd42d": "22944176745241baf54d7a525b6380c8",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/86/ace556c830088d32381d30e6d5a66589062292": "b9923d1fe4d5b3a5ac26f5bbc3172728",
".git/objects/88/56af8d13825d7b765c82859cc8d6cce916674c": "a1fda2e79ccb21696ff95e52651118b5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/90cfb5928e1d66ac31952573e6cbb7bac143f7": "670fc599cd677fdac8dc22c10960ece2",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9c/5de3bdd05ffcf0cadc7832c13412cfdc015a66": "839be6cc902928c6e2d13739e21f2a9c",
".git/objects/9c/d7f1d9c58925eb99e7dc439ffdd9cb8f337ec2": "23821872b9aa2c0be103c2e43a450153",
".git/objects/9e/f1de1b24011da56ea7a4bfb3bed51a4eb96b8e": "1a5752fc761f0514f872372e6d314097",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ab/e4257c2cab0310a0ca0f3257f2bee8aea3cc8c": "f5de86dc6ad608a46ae1a1c61ec9b51e",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b4/0179bad4c0bbd2b1abf65d8d0f341eb4d1326b": "8e24aaa74c9d93c7ba95d1d2e020b30f",
".git/objects/b6/e70e38ca8897478741ae03ca5f2fdb5503a515": "52d1c9ee2dc66358f50085bfe7bc6070",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/201ba7a65cc4d2d0e77639d673f3bdf933075c": "1836a308cae956ea92208012c712577a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/c7224fd0cdcb58c6a82b513c1d258e63c6e967": "995205f271b5871c3673841d0e40e072",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/c3/470dfe28f542fbdba157181dd1b42536617a1e": "e68d0430faa856fbe8ad4754d1fb5a1d",
".git/objects/c6/c609b3d8ab24526aaf10a012acf8f43787cc95": "4ee2b7615572ef24ddbfc120d03ea59d",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/2471f977460ea72781e9d12ea4551a302552b8": "2d2b0d6812f9d351254577fc200facdc",
".git/objects/d2/4419721acae8567412754545be8bbcf246934b": "47814a83322e9da2da183964870b11c8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/48d0b812fafb1cefc4a6956bcae18ee4816476": "88f5d8fa851772fbc42d9062e13ee910",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c780a1f9d5a412289d498cf6fcca2bcf442dc7": "ee5e35a03bd92533e3b840f73dbb6e32",
".git/objects/ec/2feefbae27a7deaedc98ec9cc89e00a6b4bb9c": "e3aa6fd6ec62879f9bdc207b0bf06f11",
".git/objects/ed/7cd7e90abdeceacbc931f0fd85fd206e8072f7": "4355d6986b69b64ffdb27d5d7890dcd4",
".git/objects/ee/09cba767ec04b91ebedb2b3131fa7724f90cdc": "4b5cd95fd4e2faaf024df8b67317e008",
".git/objects/ee/8660be3b318aed911f0507b9f0fbcfe5fd299d": "e82ce9a74bb4ac18c219009f51d3c87d",
".git/objects/f0/850d356babec557d5f6c1532c9bff500a0edf1": "d8e31efd991c784e66e860ee34c0f1a6",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f2/b58db8d8a1c893d5e48627b62939d9672e7fcc": "171b0c1c604144bea66f9d5c5c4dea71",
".git/objects/fe/22118c05f9584b108df9111135e6371670f77d": "4b3dce8edbccb0d8e10ea348dde8aa30",
".git/refs/heads/master": "1fbe92ab5c4d6b8535cb0fc801a38ad1",
".git/refs/remotes/origin/master": "8daa0ba85d28951f45013d7ae27ed57b",
"assets/AssetManifest.json": "c263564db4c196702dd693a52cc759e8",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/fiverr.png": "cbb3927f9308f39d29c171e1905298ee",
"assets/assets/images/mizan.jpg": "b4a3935f1a8e294a4b9fcb70b6a0c3cc",
"assets/assets/images/upwork.png": "ba8bcd50624fa1163020692526548cfe",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8efc3491986725aaf056c25ab9e58ac1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fad50583484aa5b125032132b7e00715",
"/": "fad50583484aa5b125032132b7e00715",
"main.dart.js": "04d61618ae57af6dc0df7c7b4155bee4",
"manifest.json": "7b6c1cb99c7ab9cc578f14efbf3b3532",
"version.json": "bffc1e93dfa1b61938f5e7788e4b7c87"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
