if (!self.define) {
  let e,
    s = {};
  const n = (n, i) => (
    (n = new URL(n + ".js", i).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, a) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let c = {};
    const r = (e) => n(e, t),
      o = { module: { uri: t }, exports: c, require: r };
    s[t] = Promise.all(i.map((e) => o[e] || r(e))).then((e) => (a(...e), c));
  };
}
define(["./workbox-6a1bf588"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/8eb9IcFE24M7Ho81KqiuP/_buildManifest.js",
          revision: "8332fe01e317e368101043fd70fee366",
        },
        {
          url: "/_next/static/8eb9IcFE24M7Ho81KqiuP/_middlewareManifest.js",
          revision: "fb2823d66b3e778e04a3f681d0d2fb19",
        },
        {
          url: "/_next/static/8eb9IcFE24M7Ho81KqiuP/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/894.884bc9854a9cfe85.js",
          revision: "884bc9854a9cfe85",
        },
        {
          url: "/_next/static/chunks/938-25ca7e699274af86.js",
          revision: "25ca7e699274af86",
        },
        {
          url: "/_next/static/chunks/framework-a87821de553db91d.js",
          revision: "a87821de553db91d",
        },
        {
          url: "/_next/static/chunks/main-982df3de509737de.js",
          revision: "982df3de509737de",
        },
        {
          url: "/_next/static/chunks/pages/_app-926af255845271b4.js",
          revision: "926af255845271b4",
        },
        {
          url: "/_next/static/chunks/pages/_error-815e492bede44f3e.js",
          revision: "815e492bede44f3e",
        },
        {
          url: "/_next/static/chunks/pages/index-36ab4dcf3e837608.js",
          revision: "36ab4dcf3e837608",
        },
        {
          url: "/_next/static/chunks/pages/login-6b50bca547dcb380.js",
          revision: "6b50bca547dcb380",
        },
        {
          url: "/_next/static/chunks/pages/shop-92a1f2251dd3df26.js",
          revision: "92a1f2251dd3df26",
        },
        {
          url: "/_next/static/chunks/pages/shop/%5Bslug%5D-85661bc7b9e3ff60.js",
          revision: "85661bc7b9e3ff60",
        },
        {
          url: "/_next/static/chunks/pages/signup-202ee046ea817166.js",
          revision: "202ee046ea817166",
        },
        {
          url: "/_next/static/chunks/pages/sitemap.xml-7d8161f88e4e8ef7.js",
          revision: "7d8161f88e4e8ef7",
        },
        {
          url: "/_next/static/chunks/pages/user-0f449ea486b834e5.js",
          revision: "0f449ea486b834e5",
        },
        {
          url: "/_next/static/chunks/pages/user/orders-58ebf7b5c8c6a1c8.js",
          revision: "58ebf7b5c8c6a1c8",
        },
        {
          url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
          revision: "99442aec5788bccac9b2f0ead2afdd6b",
        },
        {
          url: "/_next/static/chunks/webpack-95f42e3310b9baf9.js",
          revision: "95f42e3310b9baf9",
        },
        {
          url: "/_next/static/css/738e8f61204d6bba.css",
          revision: "738e8f61204d6bba",
        },
        {
          url: "/_next/static/css/bc00d5fabc8d7c7f.css",
          revision: "bc00d5fabc8d7c7f",
        },
        {
          url: "/_next/static/media/ajax-loader.0b80f665.gif",
          revision: "0b80f665",
        },
        { url: "/_next/static/media/slick.25572f22.eot", revision: "25572f22" },
        {
          url: "/_next/static/media/slick.653a4cbb.woff",
          revision: "653a4cbb",
        },
        { url: "/_next/static/media/slick.6aa1ee46.ttf", revision: "6aa1ee46" },
        { url: "/_next/static/media/slick.f895cfdf.svg", revision: "f895cfdf" },
        {
          url: "/assets/icons/m.png",
          revision: "a3e9a2cf5046e4385857f0bfef28b8c6",
        },
        {
          url: "/icon-192x192.png",
          revision: "f9908a33afca824325e24e7fce8a2399",
        },
        {
          url: "/icon-256x256.png",
          revision: "0773573e5560db1e4d92570d7644eb07",
        },
        {
          url: "/icon-384x384.png",
          revision: "c1d6f00425348b6e7ff9fe2112c09d1b",
        },
        {
          url: "/icon-512x512.png",
          revision: "e8c74efb2975d06cc0b11eec6560df05",
        },
        { url: "/manifest.json", revision: "287247a103fcde0c2880727d8bd14b02" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
