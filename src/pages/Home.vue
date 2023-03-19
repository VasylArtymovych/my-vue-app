<template>
  <div>
    <h1>Home page</h1>
    <custom-button
      v-for="(_, tab) in tabs"
      @click="currentTab = tab"
      :class="{ active: currentTab === tab }"
      >{{ tab }}</custom-button
    >
    <component :is="tabs[currentTab]" class="tab"></component>
    <!-- <ValidForm /> -->
    <!-- <PracticeForm /> -->
  </div>
</template>

<script>
import ValidForm from '@/components/FormVsValidation.vue';
import PracticeForm from '@/components/PracticeForm.vue';
import { ref } from 'vue';

export default {
  components: { ValidForm, PracticeForm },
  setup() {
    const currentTab = ref('ValidForm');
    const tabs = { PracticeForm, ValidForm };

    return { tabs, currentTab };
  },
};
</script>

<style>
.active {
  border: 2px solid teal !important;
  background-color: aquamarine;
}
</style>
