<template>
  <div>
    <h1>Home page</h1>
    <custom-button
      v-for="(_, tab) in tabs"
      @click="currentTab = tab"
      :class="{ activeTab: currentTab === tab }"
      >{{ tab }}</custom-button
    >
    <transition>
      <KeepAlive>
        <component :is="tabs[currentTab]" class="tab"></component>
      </KeepAlive>
    </transition>
    <!-- <ValidForm /> -->
    <!-- <PracticeForm /> -->
  </div>
</template>

<script>
import ValidForm from "@/components/FormVsValidation.vue";
import PracticeForm from "@/components/PracticeForm.vue";
import { ref } from "vue";

export default {
  components: { ValidForm, PracticeForm },
  setup() {
    const currentTab = ref("ValidForm");
    const tabs = { PracticeForm, ValidForm };

    return { tabs, currentTab };
  },
};
</script>

<style>
/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
} */
.v-enter-from,
.v-enter-to {
  transition: all 0.5s ease 0.5s;
}
.v-leave-from,
.v-leave-to {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
