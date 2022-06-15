<template>
  <div class="hello">
    <input v-model="node.name" />
    <button @click="save">Save</button>
    <!-- - {{ brains }} - -->
    <BrainView v-for="brain in brains" :key="brain['#']" :brain="brain" />
  </div>
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
      brains: []
    }
  },
  created(){
    let app = this
    let gun = this.$store.state.gun.gun


    gun.get(this.$store.state.gun.rootNode).map().on(
  async function(node,key){app.update(node,key) }
      // let n = JSON.parse(JSON.stringify(node))
      // app.$store.commit('gun/updateBrain', {key:key, node:n})
      //  }
    )
  },
  methods: {
    async update(node,key){
      // console.log(node,key)
      // async function(node, key)
      // // store.commit('gun/addGunBrains', {node:node, key: key}
      // {
        //  console.log(node, key)
        // let brains = JSON.parse(JSON.stringify(this.brains))
        // console.log(brains)
        let n = JSON.parse(JSON.stringify(node['_']['>'])) //Object.assign({},node['_']['>'])
        n.id = key
        console.log(n)
        let index = this.brains.findIndex(x => {x.id == key})
        console.log(index, this.brains.length)
        if (index == -1){
          this.brains.push(n)
        }
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
    }
  },
  computed: {
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
