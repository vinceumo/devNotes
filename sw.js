var cacheVersion = "pwa-v1";
var filesToCache = [
  "./offline.html",
  "./index.html",
  "./dist/css/screen.min.css",
  "./dist/img/offline.gif"
];
self.addEventListener("install", function(event) {
  event.waitUntil(preLoad());
});

var preLoad = function() {
  //console.log("[PWA Builder] Install Event processing");
  return caches.open(cacheVersion).then(function(cache) {
    //console.log("[PWA Builder] Cached index and offline page during Install");
    return cache.addAll(filesToCache);
  });
};

self.addEventListener("fetch", function(event) {
  //console.log("[PWA Builder] The service worker is serving the asset.");
  event.respondWith(
    checkResponse(event.request).catch(function() {
      return returnFromCache(event.request);
    })
  );
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function(request) {
  return new Promise(function(fulfill, reject) {
    fetch(request).then(function(response) {
      if (response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = function(request) {
  return caches.open(cacheVersion).then(function(cache) {
    return fetch(request).then(function(response) {
      //console.log("[PWA Builder] add page to offline" + response.url);
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function(request) {
  return caches.open(cacheVersion).then(function(cache) {
    return cache.match(request).then(function(matching) {
      if (!matching || matching.status == 404) {
        return cache.match("offline.html");
      } else {
        return matching;
      }
    });
  });
};
