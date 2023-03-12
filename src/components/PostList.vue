<template>
  <div v-if="posts.length > 0">
    <h3>Post's List</h3>
    <ul class="list">
      <TransitionGroup name="list" tag="ul">
        <PostItem
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @deletePost="$emit('deletePost', post)"
        />
      </TransitionGroup>
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

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
