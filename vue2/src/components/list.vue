<template>
  <div class="hello">
      <ul>
          <li v-for="item in itens" :key="item">{{ item }}</li>
      </ul>
    
      <Input />
  </div>
</template>

<script>
import Input from './Input.vue'

export default {
  name: 'list',
  props: {
    itens: Array,
    teste: String
  },
  components: {
    Input
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin: 10px 0 0;
}
</style>
