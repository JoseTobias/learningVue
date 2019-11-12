<template>
  <div class="counter">
    <h2>Exemplo 1</h2>
    <div @click="available = !available" :class="{available: available}">
        <span>Dinamic</span>
    </div>
    <h2>Exemplo 2</h2>
    <button @click="nearby = !nearby">Change nearby</button>
    <button @click="available = !available">Change available</button>
    <div :class="compClass">
        <span>Dinamic</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DinamicCss',
  data() {
    return {
      available: false,
      nearby: false
    }
  },
  computed: {
    compClass: function () {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
}
</script>

<style>
span {
    background-color: red;
    color: white;
}
.nearby span::after {
    content: 'nearby'
}
.available span {
    background-color: blue;
}
</style>