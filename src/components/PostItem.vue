<template>
  <li class="list-item">
    <div>
      <p><strong>Id:</strong> {{ post.id }}</p>
      <p><strong>Post title:</strong> {{ post.title }}</p>
      <p><strong>Description:</strong> {{ post.body }}</p>
    </div>
    <div class="list-item-btn">
      <custom-button @click="$router.push(`/posts/${post.id}`)"
        >OPEN</custom-button
      >
      <custom-button @click="deletPost">DELETE</custom-button>
    </div>
  </li>
</template>

<script setup>
const { post } = defineProps({
  post: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits({
  deletePost(payload) {
    return !!(payload.title && payload.body && payload.id);
  },
});

const deletPost = () => {
  emit('deletePost', post);
};
</script>

// same code without keyword setup:
<!-- <script>
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

  setup({ post }, { emit }) {
    const deletPost = () => {
      emit('deletePost', post);
    };

    return {
      post,
      deletPost,
    };
  },
};
</script> -->

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
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 5px;
}
/* .list-item::marker {
  font-size: 1rem;
  color: teal;
} */
</style>
