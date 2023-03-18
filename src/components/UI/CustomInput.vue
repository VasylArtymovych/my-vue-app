<template>
  <input :value="modelValue" @input="updateInput" class="input" :type="type" />
</template>

<!--The <script setup> syntax provides the ability to express equivalent 
functionality of most existing Options API options except for a few:
* name
* inheritAttrs
to declare these options, use a separate normal block with export default:
-->
<script>
export default {
  name: 'custom-input',
};
</script>

<script setup>
const emit = defineEmits(['update:modelValue']);
const { modelValue } = defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text',
  },
});

const updateInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

// compositionApi without keyword setup:
<!-- <script>
export default {
  name: 'custom-input',
  emits: ['update:modelValue'],

  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: 'text',
    },
  },

  setup(props, { emit }) {
    const updateInput = (event) => {
      emit('update:modelValue', event.target.value);
    };

    return { updateInput };
  },
};
</script> -->

//same code using optionsApi:
<!-- <script>
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
</script> -->

<style scoped>
.input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
