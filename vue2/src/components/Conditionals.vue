<template>
  <div>
    <input type="checkbox" v-model="test">
    <label>Coloca true</label>
    <p v-if="test">Só vai checkbox se o select for ativado</p>
    <p v-show="test">Só vai checkbox se o select for ativado</p>
    <List :itens="[ 1, 2, 3, 4, 5]" v-if="test"/>
  </div>
</template>

<script>
import List from './list.vue'

export default {
  components: {
    List,
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
