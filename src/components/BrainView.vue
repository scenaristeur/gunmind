<template>
  <div>
    b : {{brain}}
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'BrainView',
  props: {
    brain: Object
  },
  // components: {
  //   HelloWorld
  // },
  created(){
    // this.$gunListen()
  }
}
</script>

<style>

</style>
