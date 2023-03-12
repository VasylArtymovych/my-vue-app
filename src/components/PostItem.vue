<template>
  <li class="list-item">
    <div>
      <p><strong>Post title:</strong> {{ post.title }}</p>
      <p><strong>Description:</strong> {{ post.body }}</p>
    </div>
    <div class="list-item-btn">
      <custom-button @click="$emit('deletePost', post)">DELETE</custom-button>
    </div>
  </li>
</template>

<script>
export default {
  //declare emits option to fast check the events that component emits and see the validation;
  emits: {
    deletePost(payload) {
      return !!(payload.title && payload.body && payload.id);
    },
  },

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

.list-item p {
  word-break: break-all;
}
.list-item-btn {
  margin-left: 5px;
}
/* .list-item::marker {
  font-size: 1rem;
  color: teal;
} */
</style>
