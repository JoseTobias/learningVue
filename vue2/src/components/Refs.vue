<template>
  <div class="refs">
    <h1>Refs</h1>
    <input type="text" ref="input"/>
    <button @click="readRefs">submit</button>
    <p>Value of input: {{ inp }}</p>
  </div>
</template>

<script>
export default {
  name: 'Refs',
  data() {
    return {
      inp: 'teste'
    }
  },
  methods: {
    readRefs: function() {
        this.inp = this.$refs.input.value
    }
  }
}
</script>

