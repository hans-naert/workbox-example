importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js',
  );
  
  // Note: Ignore the error that Glitch raises about workbox being undefined.
  workbox.setConfig({
    debug: true,
  });
  
  workbox.precaching.precacheAndRoute([{"revision":"4c00264a8d9b689fa88654d995810fce","url":"index.html"},{"revision":"9ee700fb207b55a7cef7ffa430030c2b","url":"index.js"},{"revision":"8374020915394c778b5ea3b07de5085a","url":"main.css"},{"revision":"6fa52976669ef76dc3abffd6d5329b69","url":"vives logo.png"}]);
  
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