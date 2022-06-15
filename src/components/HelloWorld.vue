<template>
  <div class="hello">
    <input v-model="node.name" />
    <button @click="save">Save</button>
    - {{ brains }} -
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
      (node, key) =>
      // store.commit('gun/addGunBrains', {node:node, key: key}
      {console.log(node, key)
      app.brains.push(node)}

  )
},
methods: {
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
