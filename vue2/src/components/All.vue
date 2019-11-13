<template>
  <div id="app">
    <ul class="links">
        <li><router-link to='/' exact>Initial page (/)</router-link></li>
        <li><router-link to='/get'>get (/get)</router-link></li>
        <li><router-link to='/input'>input (/input)</router-link></li>
    </ul>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Counter />
    <Canvas />
    <a @click.prevent="click" href="google.com">prevent</a>
    <Computed />
    <DinamicCss />
    <Refs />
    <Helper>
      <h2 slot="h2">{{ messageH2 }}</h2>
      <p slot="p">{{ messagep }}</p>
    </Helper>
    <List :itens="[ 1, 2, 3, 4, 5]" teste="ok" />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import List from './list.vue'
import Counter from './Counter.vue'
import Canvas from './Canvas.vue'
import Computed from './Computed.vue'
import DinamicCss from './DinamicCss.vue'
import Refs from './Refs.vue'
import Helper from './Helper.vue'

export default {
  name: 'All',
  components: {
    HelloWorld,
    List,
    Counter,
    Canvas,
    Computed,
    DinamicCss,
    Refs,
    Helper
  },
  methods: {
    click: function() {
      alert('opa')
    }
  },
  data() {
    return {
      messageH2: 'Helper h2',
      messagep: 'Helper p'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.links {
    text-align: left;
}
</style>
