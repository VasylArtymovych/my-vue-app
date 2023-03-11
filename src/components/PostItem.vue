<template>
  <li class="list-item">
    <div>
      <div><strong>Post title:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong> {{ post.text }}</div>
    </div>
    <div>
      <custom-button @click="$emit('deletePost', post)">DELETE</custom-button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: 2px solid teal;
  margin-bottom: 10px;
}
/* .list-item::marker {
  font-size: 1rem;
  color: teal;
} */
</style>
