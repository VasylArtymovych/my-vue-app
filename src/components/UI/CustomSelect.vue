<template>
  <div class="select">
    <label for="sortOpts">Posts sort options</label>
    <select @change="changeOption" id="sortOpts" name="Select option">
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
    select: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    changeOption(event) {
      this.$emit('update:select', event.target.value);
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
