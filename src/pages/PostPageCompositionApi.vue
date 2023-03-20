<template>
  <div>
    <main-title>POST'S PAGE compositionApi</main-title>
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
      <Postform @create="cretePostAndCloseDialog" />
    </custom-dialog>
    <PostList
      v-if="!isLoading"
      v-bind:posts="sortedAndSearchedPosts"
      @deletePost="deletePost"
    />
    <div v-else>Loading posts...</div>
    <div class="observer"></div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Postform from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import CustomDialog from "@/components/UI/CustomDialog.vue";
import { usePosts, useSortedPosts, useSortedAndSearchedPosts } from "@/hooks";

const isVisibleDialog = ref(false);
const sortOptions = reactive([
  { value: "title", name: "sort by title" },
  { value: "body", name: "sort by text" },
]);

const { posts, isLoading, createPost, deletePost } = usePosts(10);
const { selectedSort, sortedPosts } = useSortedPosts(posts);
const { searchQuery, sortedAndSearchedPosts } =
  useSortedAndSearchedPosts(sortedPosts);

const cretePostAndCloseDialog = (post) => {
  createPost(post);
  isVisibleDialog.value = false;
};
</script>

/** same code only without keyword (stage) setup */
<!-- <script>
import { ref, reactive } from 'vue';
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

  setup() {
    const isVisibleDialog = ref(false);
    const sortOptions = reactive([
      { value: 'title', name: 'sort by title' },
      { value: 'body', name: 'sort by text' },
    ]);
    const { posts, isLoading, page, totalPages, createPost, deletePost } =
      usePosts(10);
    const { selectedSort, sortedPosts } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    const cretePostAndCloseDialog = (post) => {
      createPost(post);
      isVisibleDialog.value = false;
    };

    return {
      isVisibleDialog,
      sortOptions,
      posts,
      isLoading,
      page,
      totalPages,
      createPost,
      deletePost,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
      cretePostAndCloseDialog,
    };
  },
};
</script> -->

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
