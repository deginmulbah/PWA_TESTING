const staticDev = "dev-coffee-app"

const assert =  [ 
    "/",
    "/index.html",
    "/assert/css/app.css",
    "/assert/js/app.js",
    "/assert/img/coffee-1.jpg",
]

// install service worker
self.addEventListener("install", installEvent =>  { 
     installEvent.waitUntil(  
         caches.open(staticDev).then( 
             cache.addAll(assert)
         )
     )
})
// fetch service worker
self.addEventListener("fetch" , fetchEvent => { 
      fetchEvent.respondWith( 
        caches.match(fetchEvent.request).then(res => { 
            return res || fetchEvent.request
        })
      )
})

