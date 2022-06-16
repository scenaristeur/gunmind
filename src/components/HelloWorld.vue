<template>
  <v-container>
    <!-- <input v-model="root" placeholder="root Node"/> -->
    <!-- :rules="nameRules"
    :counter="10" -->
    <v-row>
      <v-col cols="12" md="8" >
      <v-text-field
      v-model="root"
      label="Workspace"
      required
      ></v-text-field>
    </v-col>
    <v-col cols="12" md="2" >
      <!-- <button @click="updateRootNode">Change Workspace</button> -->
      <v-btn
      flat
      color="secondary"
      @click="updateRootNode"
      >
      Change Workspace
    </v-btn>
    </v-col>
    <v-col cols="12" md="2">
      <!-- <button @click="resetRootNode">Default Workspace</button> -->
      <v-btn
      flat
      color="secondary"
      @click="resetRootNode"
      >
      Default Workspace
    </v-btn>
    </v-col>
    <br>
    <!-- <input v-model="node.name" /> -->
    <v-text-field
    v-model="node.name"
    :rules="nameRules"
    :counter="10"
    label="Node name"
    required
    ></v-text-field>
    <!-- <button @click="save">Save</button> -->

    <v-btn
    flat
    color="secondary"
    @click="save"
    >
    Add Brain
  </v-btn>

</v-row>
<!-- - {{ brains }} - -->
<BrainView v-for="brain in brains" :key="brain['#']" :brain="brain" />
workspaces

</v-container>
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
      root : this.$store.state.gun.rootNode
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
    }
  },
  watch:{
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
