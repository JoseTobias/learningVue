<template>
  <section class="recipies">
    <recipie
      v-for="recipie in recipies"
      :key="recipie.id"
      :id="recipie.id"
      :thumbnail="recipie.thumbnail"
      :title="recipie.title"
      :previewText="recipie.previewText"
    />
  </section>
</template>

<script>
import axios from 'axios'
import recipie from '@/components/Recepie'
export default {
  components: {
    recipie
  },
  asyncData ({ params }) {
    return axios.get('http://demo8612249.mockable.io/recipies')
      .then((res) => {
        return { recipies: res.data }
      })
  }
}
</script>

<style scoped>
.recipies {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
