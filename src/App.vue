<template>
  <div class="app">
    <h1 v-bind:title="message">Posts's page</h1>
    <div class="app-btns">
      <custom-select v-model:select="selectedSort" :options="sortOptions" />
      <custom-input
        type="text"
        v-model="searchQuery"
        id="searchInput"
        placeholder="search..."
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
    <div ref="observer" class="observer"></div>
    <!--pagination-->
    <!-- <div class="page-container">
      <div
        v-for="pageNum in totalPages"
        :key="pageNum"
        class="page"
        :class="{
          'page-current': page === pageNum,
        }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </div>
    </div> -->
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
      message: "Post's page created: 11.03.2023 by V.Artymovych",
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
    //pagination:
    // changePage(currentPage) {
    //   this.page = currentPage;
    // },
  },

  mounted() {
    this.fetchPosts();

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = function (entries, observer) {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback.bind(this), options);
    observer.observe(this.$refs.observer);
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
  //observe to page changes and run function if some hepens;
  watch: {
    //pagination:
    // page() {
    //   this.fetchPosts();
    // },
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

.observer {
  height: 10px;
  background-color: aquamarine;
}
/**pagination */
/* .page-container {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 15px 0 0 0;
}

.page {
  padding: 5px 10px;
  border: 1px solid teal;
  border-radius: 5px;
  cursor: pointer;
}

.page-current {
  border: 2px solid teal;
  background: whitesmoke;
} */
</style>
