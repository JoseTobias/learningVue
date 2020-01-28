<template>
  <section class="single-recepie">
    <h1>{{ recipie.title }}</h1>
    <div>
      <img class="recipie-image" :src="recipie.thumbnail" :alt="recipie.title">
    </div>
    <p>{{ recipie.descriptionText }}</p>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  asyncData ({ params }) {
    return axios.get('http://demo8612249.mockable.io/recipies')
      .then((res) => {
        return { recipie: res.data.find(el => el.id === params.id) }
      })
  }
}
</script>

<style scoped>
.single-recepie {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
}
.recipie-image {
  width: 100%;
}
</style>
