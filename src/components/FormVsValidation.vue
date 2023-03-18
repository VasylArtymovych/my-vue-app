<template lang="">
  <div>
    <pre>
      {{ form }}
    </pre>
    <form class="form" @submit.prevent="submit">
      <h2 class="form-title">Form with validation</h2>

      <div
        class="form-control"
        :class="{ invalid: !form.email.valid && form.email.touched }"
      >
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="form.email.value"
          @blur="form.email.blur"
        />
        <small
          v-if="form.email.errors.required && form.email.touched"
          class="error"
          >Field is required</small
        >
      </div>

      <div
        class="form-control"
        :class="{ invalid: !form.password.valid && form.password.touched }"
      >
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="form.password.value"
          @blur="form.password.blur"
        />
        <small
          v-if="form.password.errors.required && form.password.touched"
          class="error"
          >Field is required</small
        >
        <small
          v-else-if="form.password.errors.minLength && form.password.touched"
          class="error"
          >Password length can't be less thrn 7. length is:
          {{ form.password.value.length }}</small
        >
      </div>

      <button type="submit" class="from-btn" :disabled="!form.valid">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { useForm } from '@/hooks/useForm';

const required = (val) => !!val;
const minLength = (num) => (val) => val.length >= num;

export default {
  setup() {
    const form = useForm({
      email: {
        value: '',
        validators: { required },
      },
      password: {
        value: '',
        validators: { minLength: minLength(7), required },
      },
    });

    const submit = () => {
      console.log(form.email.value);
      console.log(form.password.value);
    };

    return { form, submit };
  },
};
</script>

<style scoped>
.form-control {
  display: flex;
  flex-direction: column;
  width: 500px;
}
.form-control input {
  height: 40px;
  outline: none;
}
.invalid input {
  border: 1px solid red;
}
.error {
  color: red;
}
</style>
