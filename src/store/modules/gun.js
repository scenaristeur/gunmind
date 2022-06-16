// import Vue from 'vue'

const state = () => ({
  rootNode: "test-brains",
  gunBrains : [],
  gun: null,
  actives: []
})

const mutations = {
  setGun(state, g){
    state.gun = g
  },
  updateBrain(state,g){
    state.gunBrains[g.key] =  g.node
    console.log(state.gunBrains)
  },
  toggleActive(state,b){
    //  console.log(b)
    state.actives.includes(b) ? state.actives = state.actives.filter(a => {return a!=b}) : state.actives.push(b)
    //  console.log(state.actives)
  },
  setGunBrains(state, b){
    //  console.log(b)
    state.gunBrains = b
  },
  // async addGunBrains(state, b){
  // //  console.log(b)
  //   const index = state.gunBrains.findIndex(object => object.key == b.key);
  //   //console.log(index)
  //   if (index === -1) {
  //     let br = Object.assign({},b.node)
  //     br.key = b.key
  //      state.gunBrains.push(br)
  //     // await Vue.prototype.$gun.get(b.key).open(async (doc) => {
  //     //   console.log("doc",b.key,  doc)
  //     //   doc.key = b.key
  //     //   await state.gunBrains.push(doc)
  //     // })
  //
  //   }
  //   console.log(state.gunBrains)
  //
  //
  // },
  setRootNode(state,r){
    state.rootNode = r
  }
  // setPod(state, p){
  //   console.log("pod",p)
  //   state.pod = p
  // },
  // updateDoc(state, newDoc) {
  //   state.doc = newDoc
  //   //render(newDoc)
  // },

}

const actions = {
  // async newDoc(context){
  //   let doc = Automerge.init()
  //   context.commit('setDoc', doc)
  // },
  // addItem(context, text) {
  //   console.log(context.state.doc)
  //   let newDoc = Automerge.change(context.state.doc, doc => {
  //     if (!doc.items) doc.items = []
  //     doc.items.push({ text, done: false })
  //   })
  //   context.commit('updateDoc', newDoc)
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
