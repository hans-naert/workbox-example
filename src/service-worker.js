importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js',
  );
  
  // Note: Ignore the error that Glitch raises about workbox being undefined.
  workbox.setConfig({
    debug: true,
  });
  
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
  
  // Demonstrates using default cache
  workbox.routing.registerRoute(
    new RegExp('.*\\.(?:js)'),
    new workbox.strategies.NetworkFirst(),
  );
  
  // Demonstrates a custom cache name for a route.
  workbox.routing.registerRoute(
    new RegExp('.*\\.(?:png|jpg|jpeg|svg|gif)'),
    new workbox.strategies.CacheFirst({
      cacheName: 'image-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 3,
        }),
      ],
    }),
  );