<template>
  <b-container>
    <b-row>

      <b-col cols="12" md="9" >
        <b-form-input v-model="root" placeholder="workspace" />
      </b-col>
      <b-col cols="12" md="3" >
        <b-button @click="updateRootNode" variant="info">Change</b-button>

        <b-button
        variant="info"
        @click="resetRootNode" >
        Default
      </b-button>
    </b-col>
  </b-row>
  <b-row>
    <b-col cols="12" md="9" >
      <b-form-input
      v-model="node.name"
      placeholder="Brain name"
      ></b-form-input>
      <b-form-input
      v-model="node.description"
      placeholder="Brain description"
      ></b-form-input>
    </b-col>
    <b-col cols="12" md="3" >
      <b-button
      variant="info"
      @click="save">
      Add Brain
    </b-button>
  </b-col>
</b-row>

<b-tabs content-class="mt-3">

  <b-tab title="Workspaces">
    <p>Workspaces</p>
    <b-list-group>
      <BrainView v-for="brain in Object.values(brains).slice().reverse()" :key="brain['#']" :brain="brain" />
    </b-list-group>
  </b-tab>

  <b-tab v-for="a in actives" :key="a" :title="gunBrains[a].name">
    <b-button @click="toggleActive(a)" size="sm">close</b-button>
    <p>{{gunBrains[a]}}</p>

  </b-tab>
  <!-- <ActivesView /> -->

  <!-- {{Object.values(brains)}} -->
  <!-- <b-row>
  <b-table
  :items="Object.values(brains)"
  selectable
  @row-selected="onRowSelected"
  @event="">
</b-table>

</b-row> -->




</b-tabs>

workspaces boot

</b-container>
</template>

<script>
import BrainView from '@/components/BrainView.vue'
// import ActivesView from '@/components/ActivesView.vue'

export default {
  name: 'HelloWorld',
  components: {
    BrainView,
    // ActivesView
  },
  data(){
    return {
      node:  {},
      brains: {},
      root : this.$store.state.gun.rootNode,

    }
  },
  created(){
    this.listen()
  },
  methods: {
    resetRootNode(){
      this.$store.commit('gun/setRootNode', "test-brains")
    },
    updateRootNode(){
      this.$store.commit('gun/setRootNode', this.root)
      this.brains = {}
    },
    listen(){
      console.log("listen", this.root)
      let app = this
      let gun = this.$store.state.gun.gun
      gun.get(this.root).map().on(
        async function(node,key){app.update(node,key) }
        // let n = JSON.parse(JSON.stringify(node))
        // app.$store.commit('gun/updateBrain', {key:key, node:n})
        //  }
      )
    },
    async update(node,key){
      this.brains[key] = node
      //console.log(this.brains[key].date)

      // let brainArray = []
      // for (const [key, node] of Object.entries(this.brains)) {
      //   console.log(key, node);
      //   node.key = key
      //   brainArray.push(node)
      // }
      // brainArray.sort((a, b) => {
      //   console.log(a.date, b.date)
      //     return b.date - a.date;
      // });
      //       let brainArray = Object.entries(this.brains).map((key, node) => {
      //         node.key = key
      //         return node
      //       })
      // console.log(brainArray)

      this.$store.commit('gun/setGunBrains', this.brains)
      //console.log(this.brains)
      // let brains = JSON.parse(JSON.stringify(this.brains))
      // // console.log(node,key)
      // // async function(node, key)
      // // // store.commit('gun/addGunBrains', {node:node, key: key}
      // // {
      //   //  console.log(node, key)
      //   // let brains = JSON.parse(JSON.stringify(this.brains))
      //   console.log(brains)
      // let n = JSON.parse(JSON.stringify(node['_']['>'])) //Object.assign({},node['_']['>'])
      // n.id = key
      // console.log(n)
      // let index = this.brains.findIndex(x => {x.id == key})
      // console.log(index, this.brains.length)
      // if (index == -1){
      //   this.brains[key] = n
      // }
      //else{
      //   brains[index] = n
      // }
      // this.brains = brains

      // }
    },
    async save(){
      
      let node = { date:Date.now(), name: this.node.name, description: this.node.description}
      await this.$saveNodeToGun(node)
      this.node = {}
    },
    onSelected(r){
      console.log(r)
    },
    toggleActive(id){
      this.$store.commit('gun/toggleActive', id)
    }
  },
  watch:{
    // selectedItem(){
    //   console.log("selected", this.selectedItem)
    // },
    // brains(){
    //   console.log(this.brains)
    //   this.$store.commit('gun/setGunBrains', this.brains)
    // },
    rootNode(){
      this.root = this.rootNode
      this.listen()
    }
  },
  computed: {
    // gunBrains() {
    //   return this.$store.state.gun.gunBrains
    // },
    rootNode(){
      return this.$store.state.gun.rootNode
    },
    actives() {
      return this.$store.state.gun.actives
    },
    gunBrains() {
      return this.$store.state.gun.gunBrains
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
