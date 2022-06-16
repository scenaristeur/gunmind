<template>
  <b-list-group-item button :variant="actives.includes(id) ? 'info' : 'light'" @click="onSelected">
    <!-- {{actives.includes(id)}} -->
    {{brain.name}} , <small><i>{{new Date(brain.date).toLocaleString()}} </i></small>
    <small><i>{{brain}}</i></small>
    <b-button @click.stop="deleteBrain">Delete</b-button>
  </b-list-group-item>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'BrainView',
  props: {
    brain: Object
  },
  data(){
    return {
      id : null
    }
  },
  // components: {
  //   HelloWorld
  // },
  created(){
    // this.$gunListen()
  },
  methods:{
    onSelected(){
      console.log(this.brain['_']['#'], this.brain.name)
      this.id = this.brain['_']['#']
      this.$store.commit('gun/toggleActive', this.brain['_']['#'])
    },
    deleteBrain(){
      this.$store.commit('gun/deleteBrain', this.brain)
    }
  },
  computed: {
    actives() {
      return this.$store.state.gun.actives
    },
  }
}
</script>

<style>

</style>
