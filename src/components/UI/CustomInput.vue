<template lang="">
  <input :value="modelValue" @input="updateInput" class="input" />
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    // value: [String, Number],
    modelValue: [String, Number],
  },

  methods: {
    updateInput(event) {
      // this.$emit('update:value', event.target.value);
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
