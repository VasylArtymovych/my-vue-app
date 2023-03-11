<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'custom-button',
};
</script>

<style scoped>
.btn {
  padding: 10px;
  border: 1px solid teal;
  color: teal;
  background-color: transparent;
}
</style>
