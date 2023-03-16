<template>
  <div>
    <main-title>POST'S PAGE with store</main-title>
    <h2>likes: {{ $store.state.likes }}</h2>
    <h2>doubled likes: {{ $store.getters.doubledLikes }}</h2>
    <div class="like-btns">
      <custom-button @click="$store.commit('incrementLikes')"
        >like</custom-button
      >
      <custom-button @click="$store.commit('decrementLikes')"
        >dislike</custom-button
      >
    </div>
    <div class="app-btns">
      <custom-select v-model="selectedSortOption" :options="sortOptions" />
      <custom-input
        v-focus
        type="text"
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
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
      v-if="!isLoading"
      v-bind:posts="seachedAndSortedPosts"
      @deletePost="deletePost"
    />
    <div v-else>Loading posts...</div>
    <div class="observer"></div>
    <!--pagination-->
    <div class="page-container">
      <div
        v-for="pageNum in totalPages"
        :key="pageNum"
        class="page"
        :class="{
          'page-current': page === pageNum,
        }"
        @click="setPage(pageNum)"
      >
        {{ pageNum }}
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import Postform from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import CustomDialog from '@/components/UI/CustomDialog.vue';
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  components: {
    Postform,
    PostList,
    CustomDialog,
  },

  data() {
    return {
      isVisibleDialog: false,
    };
  },

  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setPosts: 'post/setPosts',
    }),
    ...mapActions({
      fetchPosts: 'post/fetchPosts',
      loadMorePosts: 'post/loadMorePosts',
    }),

    createPost(post) {
      this.setPosts([...this.posts, post]);
      this.isVisibleDialog = false;
    },

    deletePost(post) {
      const filteredPosts = this.posts.filter((p) => p.id !== post.id);
      this.setPosts(filteredPosts);
    },
  },

  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isLoading: (state) => state.post.isLoading,
      limit: (state) => state.post.limit,
      page: (state) => state.post.page,
      totalPages: (state) => state.post.totalPages,
      selectedSortOption: (state) => state.post.selectedSortOption,
      sortOptions: (state) => state.post.sortOptions,
      searchQuery: (state) => state.post.searchQuery,
    }),

    ...mapGetters({
      seachedAndSortedPosts: 'post/seachedAndSortedPosts',
    }),
  },

  mounted() {
    this.fetchPosts();
  },

  //observe to page changes and run function if some hepens;
  watch: {
    //pagination:
    page() {
      this.fetchPosts();
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

/**pagination */
.page-container {
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
}
</style>
