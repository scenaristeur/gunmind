if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let u={};const c=e=>s(e,o),t={module:{uri:o},exports:u,require:c};n[o]=Promise.all(i.map((e=>t[e]||c(e)))).then((e=>(r(...e),u)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"gunmind"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/gunmind/css/app.1972cf86.css",revision:null},{url:"/gunmind/css/chunk-vendors.4959e411.css",revision:null},{url:"/gunmind/index.html",revision:"c628502c8219f56fad5077be2a6deacc"},{url:"/gunmind/js/app.fc318878.js",revision:null},{url:"/gunmind/js/chunk-vendors.85958136.js",revision:null},{url:"/gunmind/manifest.json",revision:"6b1cf0021da17df67c69e214120c1537"},{url:"/gunmind/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map