<template>
  <div class="app">
    <h1>Posts's page</h1>
    <custom-button class="showDialogBtn" @click="showDialog"
      >Create post</custom-button
    >
    <custom-dialog v-model:show="isVisibleDialog">
      <Postform @create="createPost" />
    </custom-dialog>
    <PostList v-bind:posts="posts" @deletePost="deletePost" />
  </div>
</template>

<script>
import Postform from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import CustomDialog from './components/UI/CustomDialog.vue';

export default {
  components: {
    Postform,
    PostList,
    CustomDialog,
  },

  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', text: 'Some text' },
        { id: 2, title: 'JavaScript 2', text: 'Some text 2' },
        { id: 3, title: 'JavaScript 3', text: 'Some text 3' },
        { id: 4, title: 'JavaScript 4', text: 'Some text 4' },
      ],

      isVisibleDialog: false,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.isVisibleDialog = false;
    },

    deletePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    showDialog() {
      this.isVisibleDialog = true;
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

h1 {
  text-align: center;
}

.showDialogBtn {
  display: block;
  margin: 15px 0 15px auto;
}
</style>
