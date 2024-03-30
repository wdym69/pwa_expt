// Service worker code

self.addEventListener('fetch', function (event) {
  console.log('fetch event triggered');
  event.respondWith(
  caches.match(event.request).then(function (response) {
  return response || fetch(event.request);
  })
  );
  });

self.addEventListener("sync", function (event) {
  console.log("Sync successful");
  if (event.tag === "syncData") {
    event.waitUntil(syncDataWithServer());
  }
});

self.addEventListener('push', function(event) {
  const options = {
  body: 'This is example of a push notification',
  icon: './assets/images/brand-1.png'
  };
  event.waitUntil(
  self.registration.showNotification('New notification', options)
  );
  });