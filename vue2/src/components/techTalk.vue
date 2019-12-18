<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Conditionals />
    <Event />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import Event from './Event.vue'
import Conditionals from './Conditionals.vue'

export default {
  name: 'tech-talk',
  components: {
    HelloWorld,
    Event,
    Conditionals
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
