if(!self.define){let e,n={};const i=(i,s)=>(i=new URL(i+".js",s).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let d={};const t=e=>i(e,o),u={module:{uri:o},exports:d,require:t};n[o]=Promise.all(s.map((e=>u[e]||t(e)))).then((e=>(r(...e),d)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"gunmind"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/gunmind/css/app.bbd61217.css",revision:null},{url:"/gunmind/index.html",revision:"98b78d134d7a3119c7d9ee8359155a1b"},{url:"/gunmind/js/app.aadf2c76.js",revision:null},{url:"/gunmind/js/chunk-vendors.87e7dd6a.js",revision:null},{url:"/gunmind/manifest.json",revision:"6b1cf0021da17df67c69e214120c1537"},{url:"/gunmind/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
