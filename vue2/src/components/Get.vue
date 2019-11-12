<template>
  <div id="showGet">
    <input type="text" v-model="search" placeholder="search">
    <h1>All informations from get</h1>
    <div v-for="info in filteredInfo" :key="info.id" class="single-information">
        <h2>{{ info.title }}</h2>
        <article>{{ info.body }}</article>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Gets',
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
      filteredInfo: function() {
          return this.infos.filter((data) => {
            return data.title.match(this.search)
          })
      }
  }
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
</style>
