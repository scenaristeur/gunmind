<template>
  <b-container>
    <b-row>
      <b-col cols="12" md="8" >
        <b-form-input v-model="root" />
      </b-col>
      <b-col cols="12" md="2" >
        <b-button @click="updateRootNode" variant="info">Change Workspace</b-button>
      </b-col>
      <b-col cols="12" md="2">
        <b-button
        variant="info"
        @click="resetRootNode" >
        Default Workspace
      </b-button>
    </b-col>
  </b-row>
  <b-row>
    <b-col cols="12" md="8" >
      <b-form-input
      v-model="node.name"
      placeholder="Node name"
      ></b-form-input>
    </b-col>
    <b-col cols="12" md="2" >
      <b-button
      variant="info"
      @click="save">
      Add Brain
    </b-button>
  </b-col>
</b-row>

<!-- {{Object.values(brains)}} -->
<b-row>s
  <b-table
  :items="Object.values(brains)"
  selectable
  @row-selected="onRowSelected">
</b-table>

</b-row>

<BrainView v-for="brain in brains" :key="brain['#']" :brain="brain" />


workspaces boot

</b-container>
</template>

<script>
import BrainView from '@/components/BrainView.vue'

export default {
  name: 'HelloWorld',
  components: {
    BrainView
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
      let node = { date:Date.now(), name: this.node.name}
      await this.$saveNodeToGun(node)
      this.node = {}
    },
    onRowSelected(r){
      console.log(r)
    }
  },
  watch:{
    // selectedItem(){
    //   console.log("selected", this.selectedItem)
    // },
    gunBrains(){
      console.log(this.gunBrains)
    },
    rootNode(){
      this.root = this.rootNode
      this.listen()
    }
  },
  computed: {
    gunBrains() {
      return this.$store.state.gun.gunBrains
    },
    rootNode(){
      return this.$store.state.gun.rootNode
    }
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
