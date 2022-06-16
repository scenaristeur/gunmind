import { createApp } from 'vue'
import App from './App.vue'
//import './registerServiceWorker'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import store from './store'

import Gun from 'gun/gun'
import SEA from 'gun/sea.js'
import 'gun/lib/radix'
import 'gun/lib/radisk'
import 'gun/lib/store'
import 'gun/lib/rindexed'
import 'gun/lib/webrtc'
import 'gun/nts'



let peers = process.env.NODE_ENV != 'development' ? ['http://localhost:8090/gun'] : [
  'https://spogg.herokuapp.com/gun',
  'https://gun-manhattan.herokuapp.com/gun',
  // 'http://gunjs.herokuapp.com/gun/'
]

console.log(process.env.NODE_ENV, "peers", peers)
export const gun = Gun({
  peers: peers,// run gun-starter-app on port 9090,
  localStorage:false
})
console.log(SEA, gun)

import GunPlugin from './plugins/gun-plugin';

const app = createApp(App)
app.use(GunPlugin, {store: store, gun: gun});
app.use(store)
app.use(BootstrapVue3)
.mount('#app')
