const cacheName = "v1";
async function impl(e) {
    let cache = await caches.open(cacheName); // Cache megnyitása, async 
    let cacheResponse = await cache.match(e.request); // Lookup 
    if (cacheResponse) // Ha megvan 
        return cacheResponse // Visszadjuk 
    else {
        let networkResponse = await fetch(e.request); // Ha nincs meg, akkor elindítjuk a tényleges hálózati lekérdezést
        cache.put(e.request, networkResponse.clone()) // Eltároljuk 
        return networkResponse; // Visszadjuk 
    }
}
self.addEventListener("fetch", e => e.respondWith(impl(e))); // Eseményre feliratkozás 

// Push esemény kezelése
self.addEventListener("push", e => {
    const message = e.data?.text(); // Üzenet tartalmának lekérése
    if (message) {
        // Itt kezeljük az értesítést
        console.log("Push üzenet érkezett:", message);
    }
}); 