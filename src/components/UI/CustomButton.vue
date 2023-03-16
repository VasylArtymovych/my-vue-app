<template>
  <button class="btn" :type="type">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'custom-button',
  props: {
    type: {
      type: String,
      default: 'submit',
    },
  },
};
</script>

<style scoped>
.btn {
  position: relative;
  top: 0;
  left: 0;
  padding: 10px;
  border: 1px solid teal;
  border-radius: 7px;
  color: teal;
  cursor: pointer;
  -webkit-box-shadow: 0 3px 0 0 teal;
  -moz-box-shadow: 0 3px 0 0 teal;
  box-shadow: 0 3px 0 0 teal;
  transition: box-shadow 350ms;
}
.btn:hover {
  -webkit-box-shadow: 0 0px 0 0 teal;
  -moz-box-shadow: 0 0px 0 0 teal;
  box-shadow: 0 0px 0 0 teal;
  top: 3px;
  transform: rotateX(5deg) rotateY(10deg) rotateZ(0.5deg);
}
.btn:active {
  -webkit-box-shadow: inset 0 0px 4px 2px teal;
  -moz-box-shadow: inset 0 0px 4px 2px teal;
  box-shadow: inset 0 0px 4px 2px teal;
}
</style>
