<template>
  <div>
    <Counter />
    <Canvas />
    <a @click.prevent="click" href="google.com">prevent</a>
  </div>
</template>

<script>
import Counter from './Counter.vue'
import Canvas from './Canvas.vue'

export default {
  components: {
    Counter,
    Canvas,
  },
  data() {
    return {
        test: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
