if(!self.define){let n,e={};const s=(s,i)=>(s=new URL(s+".js",i).href,e[s]||new Promise((e=>{if("document"in self){const n=document.createElement("script");n.src=s,n.onload=e,document.head.appendChild(n)}else n=s,importScripts(s),e()})).then((()=>{let n=e[s];if(!n)throw new Error(`Module ${s} didn’t register its module`);return n})));self.define=(i,r)=>{const o=n||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let u={};const l=n=>s(n,o),t={module:{uri:o},exports:u,require:l};e[o]=Promise.all(i.map((n=>t[n]||l(n)))).then((n=>(r(...n),u)))}}define(["./workbox-2d118ab0"],(function(n){"use strict";n.setCacheNameDetails({prefix:"gunmind"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/gunmind/css/app.870e4cfd.css",revision:null},{url:"/gunmind/css/chunk-vendors.ff816611.css",revision:null},{url:"/gunmind/index.html",revision:"62a299094c7b18f34a11e75155e8817a"},{url:"/gunmind/js/app.18a8d404.js",revision:null},{url:"/gunmind/js/chunk-vendors.83855560.js",revision:null},{url:"/gunmind/js/webfontloader.39088d4e.js",revision:null},{url:"/gunmind/manifest.json",revision:"6b1cf0021da17df67c69e214120c1537"},{url:"/gunmind/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
