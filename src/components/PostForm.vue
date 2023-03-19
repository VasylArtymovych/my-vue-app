<template>
  <form class="form" @submit.prevent>
    <h2 class="form-title">Creating post</h2>
    <div class="form-controlWrap">
      <custom-input
        v-focus
        v-model.trim="form.title.value"
        placeholder="title"
        :class="{ notValid: !form.title.valid && form.title.touched }"
        @blur="form.title.blur"
      />
      <small
        v-if="form.title.errors.required && form.title.touched"
        class="form-control-error"
        >Title field is required.</small
      >
      <small
        v-else-if="form.title.errors.minLength && form.title.touched"
        class="form-control-error"
        >Title lenght can't be less than 3. Length is:
        {{ form.title.value.length }}</small
      >
    </div>
    <div class="form-controlWrap">
      <custom-input
        v-model.trim="form.body.value"
        placeholder="description"
        :class="{ notValid: !form.body.valid && form.body.touched }"
        @blur="form.body.blur"
      />
      <small
        v-if="form.body.errors.required && form.body.touched"
        class="form-control-error"
        >Description field is required.</small
      >
      <small
        v-else-if="form.body.errors.minLength && form.body.touched"
        class="form-control-error"
        >Description lenght can't be less than 3. Length is:
        {{ form.body.value.length }}</small
      >
    </div>
    <custom-button
      @click="createPost"
      class="form-btn"
      :isDisabled="!form.valid"
      >Create</custom-button
    >
  </form>
</template>

<script>
import { required, minLength } from '@/utils/validators';
import { useForm } from '@/hooks/useForm';
import { computed } from 'vue';

export default {
  name: 'auth-form',
  emits: ['create'],

  setup(_, { emit }) {
    const form = useForm({
      title: { value: '', validators: { required, minLength: minLength(3) } },
      body: { value: '', validators: { required, minLength: minLength(12) } },
    });

    const post = computed(() => {
      const id = Date.now();
      return { id, title: form.title.value, body: form.body.value };
    });

    const createPost = () => {
      emit('create', post.value);
    };

    return { form, createPost };
  },

  // data() {
  //   return {
  //     post: {
  //       title: '',
  //       body: '',
  //     },
  //   };
  // },

  // methods: {
  //   createPost() {
  //     this.post.id = Date.now();
  //     this.$emit('create', this.post);
  //     this.post = {
  //       title: '',
  //       body: '',
  //     };
  //   },
  // },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
  width: 350px;
}

.form-title {
  margin-bottom: 15px;
}

.form-btn {
  align-self: flex-end;
}
.form-btn:hover {
  background-color: white;
}
.form-control-error {
  color: red;
}
</style>
