<template>
  <div>
    <h1>Home page</h1>
    <!-- <ValidForm /> -->
    <FormForPractice />
  </div>
</template>

<script>
import ValidForm from '@/components/FormVsValidation.vue';
import FormForPractice from '@/components/FormForPractice.vue';
export default {
  components: { ValidForm, FormForPractice },
};
</script>

<style></style>
