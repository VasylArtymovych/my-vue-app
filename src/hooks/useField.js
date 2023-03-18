import { ref, reactive, watch } from 'vue';

export function useField(field) {
  const value = ref(field.value);
  const valid = ref(true);
  const errors = reactive({});
  const touched = ref(false);

  const not = (val) => !val;
  const blur = () => {
    touched.value = true;
  };

  const validateVal = (val) => {
    valid.value = true;
    Object.keys(field.validators ?? {}).map((name) => {
      const isValid = field.validators[name](val);
      errors[name] = not(isValid);
      if (not(isValid)) {
        valid.value = false;
      }
    });
  };
  //call for first initialization;
  validateVal(value.value);

  // watch for value and call func for any changes;
  watch(value, validateVal);

  return { value, valid, touched, errors, blur };
}
