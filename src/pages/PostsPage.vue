<template>
  <div>
    <main-title>POST'S PAGE</main-title>
    <div class="app-btns">
      <!-- <custom-select @change="changeSelect" :options="sortOptions" /> -->
      <custom-select v-model="selectedSort" :options="sortOptions" />
      <custom-input
        v-focus
        type="text"
        v-model="searchQuery"
        id="searchInput"
        placeholder="search..."
      />
      <custom-button
        class="showDialogBtn"
        type="button"
        @click="isVisibleDialog = true"
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
    <div v-intersection="{ loadMorePosts }" class="observer"></div>
  </div>
</template>

<script>
import axios from 'axios';
import Postform from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import CustomDialog from '@/components/UI/CustomDialog.vue';

export default {
  components: {
    Postform,
    PostList,
    CustomDialog,
  },

  data() {
    return {
      posts: [],
      isPosts: false,
      limit: 10,
      page: 1,
      totalPages: 0,
      isVisibleDialog: false,
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
      console.log(post);
      this.posts.push(post);
      this.isVisibleDialog = false;
    },

    deletePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    async fetchPosts() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );
        //pagination:
        this.totalPages = Math.ceil(
          response.headers['x-total-count'] / this.limit
        );
        this.posts = response.data;
      } catch (error) {
        alert(error);
      } finally {
        this.isPosts = true;
      }
    },

    async loadMorePosts() {
      this.page += 1;
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
          {
            params: {
              _limit: this.limit,
              _page: this.page,
            },
          }
        );

        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert(error);
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
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
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
  width: 50%;
}
</style>
