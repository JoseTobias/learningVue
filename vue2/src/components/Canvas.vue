<template>
  <div id="canvas" v-on:mousemove="updateXY">
    {{ x }} , {{ y }}
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  data() {
      return {
          x: 0,
          y: 0
      }
  },
  methods: {
    updateXY: function(event) {
        this.x = event.offsetX
        this.y = event.offsetY
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#canvas {
    width: 600px;
    padding: 200px 20px;
    text-align: center;
    border: 1px solid #ccc;
}
</style>
