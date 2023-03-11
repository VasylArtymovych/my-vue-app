<template>
  <div v-if="posts.length > 0">
    <h3>Post's List</h3>
    <ul class="list">
      <PostItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @deletePost="$emit('deletePost', post)"
      />
    </ul>
  </div>
  <h2 v-else style="color: brown">Post's list is empty</h2>
</template>

<script>
import PostItem from './PostItem.vue';

export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },

  components: { PostItem },
};
</script>

<style scoped>
.list {
  list-style-type: square;
  list-style-position: outside;
}
</style>
