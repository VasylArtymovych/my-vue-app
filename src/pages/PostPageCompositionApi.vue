<template>
  <div>
    <main-title>POST'S PAGE</main-title>
    <div class="app-btns">
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
      v-if="!isLoading"
      v-bind:posts="sortedAndSearchedPosts"
      @deletePost="deletePost"
    />
    <div v-else>Loading posts...</div>
    <!-- <div v-intersection="{ loadMorePosts }" class="observer"></div> -->
  </div>
</template>

<script>
import Postform from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import CustomDialog from '@/components/UI/CustomDialog.vue';
import { usePosts, useSortedPosts, useSortedAndSearchedPosts } from '@/hooks';

export default {
  components: {
    Postform,
    PostList,
    CustomDialog,
  },

  data() {
    return {
      isVisibleDialog: false,
      sortOptions: [
        { value: 'title', name: 'sort by title' },
        { value: 'body', name: 'sort by text' },
      ],
    };
  },

  setup(props) {
    const { posts, isLoading, page, totalPages } = usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      isLoading,
      page,
      totalPages,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
    };
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
