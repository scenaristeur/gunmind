(function(){var e={1661:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=1661,e.exports=t},5794:function(e,t,o){"use strict";var n=o(9242),r=o(3396);function i(e,t,o,n,i,a){const s=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(s)}var a=o(7139);const s=e=>((0,r.dD)("data-v-2cd49385"),e=e(),(0,r.Cn)(),e),l=(0,r.Uk)("Change"),u=(0,r.Uk)(" Default "),c=(0,r.Uk)(" Add Brain "),d=s((()=>(0,r._)("p",null,"Workspaces",-1))),g=(0,r.Uk)("close"),f=(0,r.Uk)(" workspaces boot ");function p(e,t,o,n,i,s){const p=(0,r.up)("b-form-input"),m=(0,r.up)("b-col"),b=(0,r.up)("b-button"),h=(0,r.up)("b-row"),v=(0,r.up)("BrainView"),w=(0,r.up)("b-list-group"),_=(0,r.up)("b-tab"),k=(0,r.up)("b-tabs"),y=(0,r.up)("b-container");return(0,r.wg)(),(0,r.j4)(y,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,{cols:"12",md:"9"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:i.root,"onUpdate:modelValue":t[0]||(t[0]=e=>i.root=e),placeholder:"workspace"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(m,{cols:"12",md:"3"},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{onClick:s.updateRootNode,variant:"info"},{default:(0,r.w5)((()=>[l])),_:1},8,["onClick"]),(0,r.Wm)(b,{variant:"info",onClick:s.resetRootNode},{default:(0,r.w5)((()=>[u])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,{cols:"12",md:"9"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{modelValue:i.node.name,"onUpdate:modelValue":t[1]||(t[1]=e=>i.node.name=e),placeholder:"Node name"},null,8,["modelValue"])])),_:1}),(0,r.Wm)(m,{cols:"12",md:"3"},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{variant:"info",onClick:s.save},{default:(0,r.w5)((()=>[c])),_:1},8,["onClick"])])),_:1})])),_:1}),(0,r.Wm)(k,{"content-class":"mt-3"},{default:(0,r.w5)((()=>[(0,r.Wm)(_,{title:"Workspaces"},{default:(0,r.w5)((()=>[d,(0,r.Wm)(w,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(Object.values(i.brains).slice().reverse(),(e=>((0,r.wg)(),(0,r.j4)(v,{key:e["#"],brain:e},null,8,["brain"])))),128))])),_:1})])),_:1}),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.actives,(e=>((0,r.wg)(),(0,r.j4)(_,{key:e,title:s.gunBrains[e].name},{default:(0,r.w5)((()=>[(0,r.Wm)(b,{onClick:t=>s.toggleActive(e),size:"sm"},{default:(0,r.w5)((()=>[g])),_:2},1032,["onClick"]),(0,r._)("p",null,(0,a.zw)(s.gunBrains[e]),1)])),_:2},1032,["title"])))),128))])),_:1}),f])),_:1})}o(6699);const m=(0,r.Uk)("Delete");function b(e,t,o,n,i,s){const l=(0,r.up)("b-button"),u=(0,r.up)("b-list-group-item");return(0,r.wg)(),(0,r.j4)(u,{button:"",variant:s.actives.includes(i.id)?"info":"light",onClick:s.onSelected},{default:(0,r.w5)((()=>[(0,r.Uk)((0,a.zw)(o.brain.name)+" , ",1),(0,r._)("small",null,[(0,r._)("i",null,(0,a.zw)(new Date(o.brain.date).toLocaleString()),1)]),(0,r._)("small",null,[(0,r._)("i",null,(0,a.zw)(o.brain),1)]),(0,r.Wm)(l,{onClick:s.deleteBrain},{default:(0,r.w5)((()=>[m])),_:1},8,["onClick"])])),_:1},8,["variant","onClick"])}var h={name:"BrainView",props:{brain:Object},data(){return{id:null}},created(){},methods:{onSelected(){console.log(this.brain["_"]["#"],this.brain.name),this.id=this.brain["_"]["#"],this.$store.commit("gun/toggleActive",this.brain["_"]["#"])},deleteBrain(){this.$store.commit("gun/deleteBrain",this.brain)}},computed:{actives(){return this.$store.state.gun.actives}}},v=o(89);const w=(0,v.Z)(h,[["render",b]]);var _=w,k={name:"HelloWorld",components:{BrainView:_},data(){return{node:{},brains:{},root:this.$store.state.gun.rootNode}},created(){this.listen()},methods:{resetRootNode(){this.$store.commit("gun/setRootNode","test-brains")},updateRootNode(){this.$store.commit("gun/setRootNode",this.root),this.brains={}},listen(){console.log("listen",this.root);let e=this,t=this.$store.state.gun.gun;t.get(this.root).map().on((async function(t,o){e.update(t,o)}))},async update(e,t){this.brains[t]=e,this.$store.commit("gun/setGunBrains",this.brains)},async save(){let e={date:Date.now(),name:this.node.name};await this.$saveNodeToGun(e),this.node={}},onSelected(e){console.log(e)},toggleActive(e){this.$store.commit("gun/toggleActive",e)}},watch:{rootNode(){this.root=this.rootNode,this.listen()}},computed:{rootNode(){return this.$store.state.gun.rootNode},actives(){return this.$store.state.gun.actives},gunBrains(){return this.$store.state.gun.gunBrains}}};const y=(0,v.Z)(k,[["render",p],["__scopeId","data-v-2cd49385"]]);var N=y,B={name:"App",components:{HelloWorld:N},created(){}};const W=(0,v.Z)(B,[["render",i]]);var O=W,j=o(936),$=o(65);const C=()=>({rootNode:"test-brains",gunBrains:[],gun:null,actives:[]}),P={setGun(e,t){e.gun=t},updateBrain(e,t){e.gunBrains[t.key]=t.node,console.log(e.gunBrains)},toggleActive(e,t){e.actives.includes(t)?e.actives=e.actives.filter((e=>e!=t)):e.actives.push(t)},setGunBrains(e,t){e.gunBrains=t},deleteBrain(e,t){console.log(t),e.gun.get(t["_"]).set(null)},setRootNode(e,t){e.rootNode=t}},S={};var U={namespaced:!0,state:C,actions:S,mutations:P},V=(0,$.MT)({state:{},getters:{},mutations:{},actions:{},modules:{gun:U}}),G=o(9220),T=o.n(G),D=o(2032),x=o.n(D);o(531),o(8822),o(3266),o(2223),o(9665),o(9225);const A={install(e,t={}){let o=t.store,n=t.gun;async function r(e){let t=[];var o=e._["#"];return console.log("soul",o),e.map().once((e=>{t.push(e)})),t}o.commit("gun/setGun",n),e.config.globalProperties.$gunListen=async function(){console.log("Map",await n.get(o.state.gun.rootNode).map()),await n.get(o.state.gun.rootNode).map().on(((e,t)=>o.commit("gun/addGunBrains",{node:e,key:t})))},e.config.globalProperties.$saveBrainToGun=async function(){let e=n.get(o.state.gun.rootNode).get(o.state.core.brain.key).get("nodes");for await(const t of o.state.core.nodes)delete t["@context"],console.error("must not be used , use store.rootNode",t.id,t),e.set(t)},e.config.globalProperties.$saveNodeToGun=async function(e){console.log(o.state.gun.rootNode);let t=n.get(o.state.gun.rootNode);t.set(e)},e.config.globalProperties.$gunSet=async function(e){console.log(o.state.gun.rootNode,e),n.get(o.state.gun.rootNode).set(e)},e.config.globalProperties.$gunExplore=async function(){let e=o.state.gun.rootNode;console.log(e),console.log("build gun._.graph");let t=n.get(e);console.log("Gun Node",t);let i=await r(t);return console.log("graph",i),n.get(e).open((e=>{console.log("doc",e)})),i},e.config.globalProperties.$saveToGun=async function(e){console.log("brain",o.state.gun.brain);let t=o.state.gun.brain.name;console.log(e,e.value,e.triple);let r=e.triple.object;delete r.__ob__,delete r.__threeObj;let i=n.get(t).set(r),a=e.triple.subject;delete a.__ob__,delete a.__threeObj;let s=e.triple.edge.label;a[s]=i,console.log(a),n.get(t).set(a)}}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(A);var R=A;let M=["https://spogg.herokuapp.com/gun","https://gun-manhattan.herokuapp.com/gun"];console.log("production","ppers",M);const z=T()({peers:M,localStorage:!1});console.log(x(),z);const H=(0,n.ri)(O);H.use(R,{store:V,gun:z}),H.use(V),H.use(j.ZP).mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],i=e[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],s=n[1],l=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var c=l(o)}for(t&&t(n);u<a.length;u++)i=a[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},n=self["webpackChunkgunmind"]=self["webpackChunkgunmind"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5794)}));n=o.O(n)})();
//# sourceMappingURL=app.fc318878.js.map