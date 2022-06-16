<template>
  <div>

      <b-tab v-for="a in actives" :key="a" :title="gunBrains[a].name">
        <b-button @click="toggleActive(a)" size="sm">remove</b-button>
        <p>{{gunBrains[a]}}</p>

      </b-tab>

    <!-- {{ gunBrains}} -->
    <!-- {{actives}} -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'ActivesView',

  // components: {
  //   HelloWorld
  // },
  created(){
    // this.$gunListen()
  },
  methods:{
    toggleActive(id){
      this.$store.commit('gun/toggleActive', id)
    }
    // onSelected(){
    //   console.log(this.brain['_']['#'], this.brain.name)
    //   this.$store.commit('gun/toggleActive', this.brain['_']['#'])
    // }
  },
  computed: {
    actives() {
      return this.$store.state.gun.actives
    },
    gunBrains() {
      return this.$store.state.gun.gunBrains
    },
  }
}
</script>

<style>

</style>
