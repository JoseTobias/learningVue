<template>
  <div class="counter">
    <p>Counter: {{result}}</p>
    <!-- v-on: = @ -->
    <button @click="add(1)"> +1 </button> 
    <button @click="add(-1)"> -1 </button>
    <button @dblclick="add(10)"> +10 </button>
    <button @dblclick="add(-10)"> -10 </button>
    <button @click.once="add(1)"> +1 (once) </button> 
  </div>
</template>

<script>
export default {
  name: 'Couter',
  data() {
      return {
          result: 0
      }
  },
  methods: {
    add: function(inc) {
        this.result += inc
    }
  }
}
</script>

<style>
.counter {
    margin-bottom: 20px;
}
</style>