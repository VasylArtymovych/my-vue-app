<template>
  <div v-if="show" class="dialog" @click.stop="hideDialog">
    <div class="dialog-content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-dialog',

  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    hideDialog() {
      this.$emit('update:show', false);
    },
  },
};
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
}

.dialog-content {
  min-width: 350px;
  min-height: 70px;
  padding: 20px;
  margin: auto;
  background: whitesmoke;
  border-radius: 15px;
}
</style>
