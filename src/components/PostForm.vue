<!-- 
  * full_syntax of two-way binding
  v-bind:value="post.text"
  @input="this.post.text = $event.target.value" 
  * short syntax:
  v-model="post.text"
-->
<template lang="">
  <form class="form" @submit.prevent>
    <h2 class="form-title">Creating post</h2>
    <custom-input v-model.trim="post.title" type="text" placeholder="title" />
    <custom-input
      v-model.trim="post.text"
      type="text"
      placeholder="description"
    />
    <custom-button @click="createPost" style="align-self: flex-end"
      >Create</custom-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        text: '',
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      //event creator: accepts - first param event name, second and other data to deliver.
      this.$emit('create', this.post);
      this.post = {
        title: '',
        text: '',
      };
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.form-title {
  margin-bottom: 15px;
}
</style>
