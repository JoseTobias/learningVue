<template>
  <div id="single">
    <h2>{{ title }}</h2>
    <article>{{ body }}</article>
  </div>
</template>

<script>

export default {
  name: 'SingleGet',
  data() {
    return {
        id: this.$route.params.id,
        title: '',
        body: ''
    }
  },
  methods: {
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data) {
      this.title = data.body.title
      this.body = data.body.body
    })
  }
}
</script>

<style scoped>

</style>
