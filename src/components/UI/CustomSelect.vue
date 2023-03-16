<template>
  <div class="select">
    <label for="sortOpts">Posts sort options</label>
    <select id="sortOpts" name="elect-option" @change="changeOption">
      <option value="" disabled selected>Select option</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'custom-select',
  props: {
    modelValue: String,
    options: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped>
.select {
  display: flex;
  flex-direction: column;
}
</style>
