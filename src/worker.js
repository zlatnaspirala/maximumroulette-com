
"use strict";

var cacheVersion = 2;
var staticCacheName = "maxi-version-2";

// eslint-disable-next-line no-unused-vars
var currentCache = {
  offline: "offline-cache" + cacheVersion
};
const offlineUrl = "offline.html";

self.addEventListener("install", function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll([
        "/",
        offlineUrl,
        "index.html",
        "imgs/ua/1.png",
        "imgs/ua/2.png",
        "imgs/ua/3.png",
        "imgs/ua/4.png",
        "imgs/ua/5.png",
        "imgs/ua/6.png",
        "imgs/ua/7.png",
        "imgs/ua/8.png",
      ]);
    })
  );
});

self.addEventListener("fetch", function (event) {

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
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

  if (event.request.mode === "navigate" || (event.request.method === "GET" && event.request.headers.get("accept").includes("text/html"))) {
    event.respondWith(
      // eslint-disable-next-line no-unused-vars
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
