<!-- 
  * full_syntax of two-way binding
  v-bind:value="post.text"
  @input="this.post.text = $event.target.value" 
  * short syntax:
  v-model="post.text"
-->
<template>
  <form class="form" @submit.prevent>
    <h2 class="form-title">Creating post</h2>
    <custom-input v-focus v-model.trim="post.title" placeholder="title" />
    <custom-input v-model.trim="post.body" placeholder="description" />
    <custom-button @click="createPost" class="form-btn">Create</custom-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },

  methods: {
    createPost() {
      this.post.id = Date.now();
      //event creator: accepts - first param event name, second and other params are used to deliver a data.
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
  //deep watch method:
  // watch: {
  //   post: {
  //     handler(newVal) {
  //       console.log('new', newVal);
  //     },
  //     deep: true,
  //   },
  // },
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

.form-btn {
  align-self: flex-end;
}
.form-btn:hover {
  background-color: white;
}
</style>
