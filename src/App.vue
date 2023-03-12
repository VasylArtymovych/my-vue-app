<template>
  <div class="app">
    <h1>Posts's page</h1>
    <div class="app-btns">
      <custom-select v-model:select="selectedSort" :options="sortOptions" />
      <custom-input
        v-model="searchQuery"
        id="searchInput"
        placeholder="search post by title"
      />
      <custom-button class="showDialogBtn" @click="showDialog"
        >Create post</custom-button
      >
    </div>
    <custom-dialog v-model:show="isVisibleDialog">
      <Postform @create="createPost" />
    </custom-dialog>
    <PostList
      v-if="isPosts"
      v-bind:posts="seachedAndSortedPosts"
      @deletePost="deletePost"
    />
    <div v-else>Loading posts...</div>
  </div>
</template>

<script>
import axios from 'axios';
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
      posts: [],
      isVisibleDialog: false,
      isPosts: false,
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        { value: 'title', name: 'sort by title' },
        { value: 'body', name: 'sort by text' },
      ],
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

    async fetchPosts() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        );
        this.posts = response.data;
      } catch (error) {
        alert(error);
      } finally {
        this.isPosts = true;
      }
    },
  },

  mounted() {
    this.fetchPosts();
  },
  // return sorted array of posts (memoizated function)
  computed: {
    sortedPosts() {
      return this.selectedSort !== ''
        ? [...this.posts].sort((p1, p2) =>
            p1[this.selectedSort].localeCompare(p2[this.selectedSort])
          )
        : this.posts;
    },

    seachedAndSortedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.includes(this.searchQuery)
      );
    },
  },
  // second option to watch for changes of selectedSort key and sort posts:
  // watch: {
  //   selectedSort(newVal) {
  //     this.posts.sort((p1, p2) => p1[newVal].localeCompare(p2[newVal]));
  //   },
  // },
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
.app-btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0 15px auto;
}
.showDialogBtn {
  display: block;
  /* margin: 15px 0 15px auto; */
}

#searchInput {
  /* display: block; */
  width: 50%;
}
</style>
