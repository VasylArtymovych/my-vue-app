import { reactive, computed } from 'vue';
import { useField } from '@/hooks';

export function useForm(init = {}) {
  const form = reactive({});
  const validKey = 'valid';

  for (const [key, value] of Object.entries(init)) {
    form[key] = useField(value);
  }

  const withoutValid = (key) => key !== validKey;

  //check wheather all fields are valid and set the valid key for form,
  //if any one validation is false, than set the false as value.
  form[validKey] = computed(() => {
    return Object.keys(form)
      .filter(withoutValid)
      .reduce((acc, key) => {
        //if previos check return false than for rest of cheks return false otherwise reassign value;
        if (acc === false) {
          return acc;
        }
        acc = form[key].valid;
        return acc;
      }, true);
  });

  return form;
}
