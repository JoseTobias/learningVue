<template>
  <div id="showGet">
    <input type="text" v-model="search" placeholder="search">
    <h1>All informations from get</h1>
    <div v-for="info in filteredInfo" :key="info.id" class="single-information">
      <router-link :to="'/get/' + info.id"><h2>{{ info.title }}</h2></router-link>
      <article>{{ info.body }}</article>
    </div>
  </div>
</template>

<script>
import Search from '../mixins/search'

export default {
  name: 'Get',
  data() {
    return {
        infos: [],
        search: ''
    }
  },
  methods: {
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
      this.infos = data.body.slice(0, 10)
    })
  },
  computed:  {
  },
  mixins: [Search]
}
</script>

<style scoped>
#showGet {
    margin-top: 60px;
    max-width: 800px;
    text-align: left;
}
.single-information {
    padding: 20px;
    box-sizing: border-box;
    background-color: #eee;
    margin: 20px 0;
}

a {
  color: #152AC7;
  text-decoration: none;
}

a:hover {
  color: #455BF2;
}
</style>
