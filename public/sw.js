/**
 * Offline cache for lessons, practice test, and static assets.
 * Pages are cached on visit; core routes are precached on install.
 * Next.js hashed assets use network-first so deploys are not stuck on stale JS.
 */
const CORE_CACHE = "pull-core-v2";
const PAGE_CACHE = "pull-pages-v2";
const LESSON_CACHE = "pull-lessons-v2";

const CORE_URLS = [
  "/",
  "/lessons",
  "/slides",
  "/practice-test",
  "/certification",
  "/manifest.webmanifest",
  "/images/luffer.png",
  "/images/rigging/softner.png",
  "/images/rigging/block.png",
  "/images/rigging/pile-shackle.png",
  "/images/rigging/hooks.png",
  "/images/rigging/chain.png",
  "/images/rigging/bridle.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CORE_CACHE).then((cache) =>
      Promise.allSettled(
        CORE_URLS.map((url) =>
          cache.add(new Request(url, { credentials: "same-origin" })),
        ),
      ),
    ),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter(
            (k) =>
              k.startsWith("pull-") &&
              ![CORE_CACHE, PAGE_CACHE, LESSON_CACHE].includes(k),
          )
          .map((k) => caches.delete(k)),
      ),
    ),
  );
  self.clients.claim();
});

async function cachePut(request, response) {
  if (!response || response.status !== 200 || response.type === "opaque") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // Never permanently cache Next.js build assets — they change every deploy.
  if (url.pathname.startsWith("/_next/")) return;
  const cacheName = url.pathname.includes("/slides") ? LESSON_CACHE : PAGE_CACHE;
  const cache = await caches.open(cacheName);
  await cache.put(request, response.clone());
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Always take network for app shell JS/CSS so env-inlined bundles update.
  if (url.pathname.startsWith("/_next/")) {
    event.respondWith(
      fetch(request).catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        return Response.error();
      }),
    );
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          event.waitUntil(cachePut(request, response));
          return response;
        })
        .catch(async () => {
          const cached =
            (await caches.match(request)) ||
            (await caches.open(LESSON_CACHE).then((c) => c.match(request))) ||
            (await caches.open(PAGE_CACHE).then((c) => c.match(request))) ||
            (await caches.open(CORE_CACHE).then((c) => c.match("/")));
          if (cached) return cached;
          return new Response(
            "Offline — open a cached lesson or practice test first while online.",
            {
              status: 503,
              headers: { "Content-Type": "text/plain" },
            },
          );
        }),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (url.pathname.endsWith(".json")) {
          event.waitUntil(cachePut(request, response));
        }
        return response;
      });
    }),
  );
});
