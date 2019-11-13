
'use strict';

var cacheVersion = 1;
var staticCacheName = 'maxi-version-1';

var currentCache = {
  offline: 'offline-cache' + cacheVersion
};
const offlineUrl = 'offline.html';

self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll([
        "/",
        offlineUrl,
        "index.html",
        "scripts/drop-down.js",
        "scripts/fix.js",
        "scripts/slider.js",
        "scripts/system.js",
        "css/style.css",
        "css/drop-down.css",
        "css/animations.css",
        "css/image-effect.css",
        "css/slider.css",
        "pages/webgl2-part.html",
        "pages/ultimate-anatomy.html",
        "pages/privacy-policy.html",
        "pages/home.html",
        "pages/contact.html",
        "pages/cookies.html",
        "pages/hang-project.html",
        "pages/chat-space.html",
        "imgs/ua/1.png",
        "imgs/ua/2.png",
        "imgs/ua/3.png",
        "imgs/ua/4.png",
        "imgs/ua/5.png",
        "imgs/ua/6.png",
        "imgs/ua/7.png",
        "imgs/ua/8.png",
        "imgs/social/stack.png",
        "imgs/social/git.png",
        "imgs/social/linkedin.png"
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.open(staticCacheName).then(function (cache) {
      // check if the requested URL is inside the dynamic-content-v1
      return cache.match(event.request).then(function (response) {
        // when found, respond with it.
        // when not found: return it as it is after taking a clone
        // and storing it, so next visit to the URL it will be there
        return response || fetch(event.request).then(function (response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );

  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      fetch(event.request.url).catch(error => {
        // Return the offline page
        return caches.match(offlineUrl);
      })
    );
  }
  else {
    // Respond with everything else if we can
    event.respondWith(caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
    );
  }

});
