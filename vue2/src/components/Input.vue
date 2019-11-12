<template>
  <div class="hello">
      <input type="text" v-model="message">
      <p>{{ message }}</p>    
      <input type="text" v-model.lazy="name">
      <p>{{ name }}</p> 
      <div id="check">
        <input type="checkbox" value="cat1" v-model="categories">
        <label>Cat1</label>
        <input type="checkbox" value="cat2" v-model="categories">
        <label>Cat2</label>
        <input type="checkbox" value="cat3" v-model="categories">
        <label>Cat3</label>
        <input type="checkbox" value="cat4" v-model="categories">
        <label>Cat4</label>
      </div>


      <ul>
        <li v-for="cat in categories" :key="cat">{{ cat }}</li>
      </ul>

      <select v-model="author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>
      <p>Author: {{ author }}</p>

      <button @click.prevent="post">Post</button>

      <div v-if="submitted">OK</div>

      <Get />
  </div>
</template>

<script>
import Get from './Get.vue'

export default {
  name: 'Input',
  components: {
    Get
  },
  data() {
    return {
      message: '',
      name: '',
      categories: [],
      author: '',
      authors: ["A1", "A2", "A3", "A4"],
      submitted: false
    }
  },
  methods: {
    post: function() {
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.name,
        body: this.message,
        userId: 1
      }).then(function() {
        // console.log(data);
        this.submitted = true;
      })
    }
  }
}
</script>

<style scoped>
#check input {
  display: inline-block;
}
#check label {
  display: inline-block;
}
</style>
