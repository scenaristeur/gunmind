import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

import Gun from 'gun/gun'
import SEA from 'gun/sea.js'
import 'gun/lib/radix'
import 'gun/lib/radisk'
import 'gun/lib/store'
import 'gun/lib/rindexed'
import 'gun/lib/webrtc'
import 'gun/nts'


export const gun = Gun({
  peers: [
    // 'https://spogg.herokuapp.com/gun',
    'http://localhost:8090/gun',
    // 'https://gun-manhattan.herokuapp.com/gun',
    // 'http://gunjs.herokuapp.com/gun/'*/
  ],// run gun-starter-app on port 9090,
    localStorage:false
  })
  console.log(SEA, gun)

  import GunPlugin from './plugins/gun-plugin';

  const app = createApp(App)
  app.use(GunPlugin, {store: store, gun: gun});
  app.use(store).mount('#app')
