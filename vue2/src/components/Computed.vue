<template>
  <div class="counter">
    <!-- <input type="number" v-model="base"> -->
    <p>{{ base }}</p> 
    <button @click="addA"> Add A </button> 
    <button @click="addB"> Add B </button>
    <p>Base + A = {{ AddToA }} </p>
    <p>Base + B = {{ AddToB }} </p>
  </div>
</template>

<script>
export default {
  name: 'Computed',
  data() {
      return {
          a: 0,
          b: 0,
          base: 10
      }
  },
  methods: {
    addA: function() {
      this.a++
    },
    addB: function() {
      this.b++
      // console.log('AddToA')
    }
  },
  computed: {
    AddToA() {
      // console.log('AddToA')
      return this.a + this.base
      
    },
    AddToB() {
      // console.log('AddToB')
      return this.b + this.base
    }
  }
}
</script>

<style>
.counter {
    margin-bottom: 20px;
}
</style>