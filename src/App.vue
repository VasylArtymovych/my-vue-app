<template>
  <div class="app">
    <form class="form" @submit.prevent>
      <h2>Creating post</h2>
      <input
        v-bind:value="title"
        @input="inputTitle"
        class="input"
        type="text"
        placeholder="title"
      />
      <input
        v-bind:value="text"
        @input="this.text = $event.target.value"
        class="input"
        type="text"
        placeholder="description"
      />
      <button class="btn" @click="createPost">Create</button>
    </form>
    <div class="posts" v-for="post in posts">
      <div><strong>Post title:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', text: 'Some text' },
        { id: 2, title: 'JavaScript 2', text: 'Some text 2' },
        { id: 3, title: 'JavaScript 3', text: 'Some text 3' },
        { id: 4, title: 'JavaScript 4', text: 'Some text 4' },
      ],
      title: '',
      text: '',
    };
  },

  methods: {
    createPost(event) {
      const post = {
        id: new Date(),
        title: this.title,
        text: this.text,
      };

      this.posts.push(post);
      this.title = '';
      this.text = '';
    },

    inputTitle(event) {
      this.title = event.target.value;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.btn {
  align-self: flex-end;
  padding: 10px;
  border: 1px solid teal;
  color: teal;
  background-color: transparent;
}

.posts {
  width: 100%;
  padding: 10px;
  border: 2px solid teal;
  margin-bottom: 10px;
}
</style>
