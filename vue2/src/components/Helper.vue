<template>
  <div>
    <slot name="h2"></slot>    
    <h1>Helper h1</h1>
    <slot name="p"></slot>
  </div>
</template>

<script>
export default {
  name: 'Helper',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
