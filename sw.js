if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return d;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.4bdf5ddc.css",revision:"e7055036ee90e582dc920f075c0a6601"},{url:"assets/index.5d1da5f5.js",revision:"8a68cd7d179f7de68d315a8637fb1c13"},{url:"assets/vendor.82dfa2f2.js",revision:"b17eb22f8850ff34fcb20190854aa7a0"},{url:"index.html",revision:"ab06b7165116037746b9a3b72cd3fac5"},{url:"img/icons/pwa-192x192.png",revision:"4445f0fcfd3662737f8f0a1f3955d9ea"},{url:"img/icons/pwa-512x512.png",revision:"a32c06818d2c379d4e82d59effdb58bd"},{url:"manifest.webmanifest",revision:"7245d58737947b448384bdfc5875e85d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
