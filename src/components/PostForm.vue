<template>
  <form class="form" @submit.prevent>
    <h2 class="form-title">Creating post</h2>
    <custom-input v-focus v-model.trim="post.title" placeholder="title" />
    <custom-input v-model.trim="post.body" placeholder="description" />
    <custom-button @click="createPost" class="form-btn">Create</custom-button>
  </form>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'auth-form',
  emits: ['create'],

  setup(_, { emit }) {
    const post = reactive({
      title: '',
      body: '',
    });

    const createPost = () => {
      post.id = Date.now();
      emit('create', post);
    };

    return { post, createPost };
  },
  // data() {
  //   return {
  //     post: {
  //       title: '',
  //       body: '',
  //     },
  //   };
  // },

  // methods: {
  //   createPost() {
  //     this.post.id = Date.now();
  //     this.$emit('create', this.post);
  //     this.post = {
  //       title: '',
  //       body: '',
  //     };
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
