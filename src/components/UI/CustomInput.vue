<template lang="">
  <input :value="modelValue" @input="updateInput" class="input" :type="type" />
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: 'text',
    },
  },

  methods: {
    updateInput(event) {
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
