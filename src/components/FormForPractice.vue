<template>
  <div>
    <form action="" class="form" @submit.prevent>
      <div class="form_control">
        <input type="checkbox" :value="val" @change="changeCh" />
        <p>{{ val }}</p>
        <input
          type="checkbox"
          value="Jeck"
          :checked="checked"
          @change="chengeChecked"
        />
        <p>{{ checked }}</p>
        <input type="checkbox" value="Jack" v-model="names" :ref="inputRef" />
      </div>
      <h2>{{ names }}</h2>
      <button @click="changeCount">send</button>
    </form>
    <button @click="changeCount">+</button>
    <p>Text: {{ count }}</p>
    <pre>{{ input }}</pre>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
const val = ref('yerim');
const checked = ref(false);
const names = ref([]);
const obj = ref({ count: 0 });
const count = computed(() => obj.value.count);
const input = ref(null);
const inputRef = (el) => {
  console.log(el);
};
const chengeChecked = () => {
  checked.value = !checked.value;
};
const changeCh = (e) => {
  if (e.target.checked) {
    names.value.push(e.target.value);
  } else {
    const indx = names.value.indexOf(e.target.value);
    names.value.splice(indx, 1);
  }
};

const changeCount = () => {
  obj.value.count++;
};

watch([() => obj.value.count, checked], ([newZ, newY]) => {
  console.log(newZ, newY);
});
</script>

<style scoped>
.form {
  margin: 0 0 20px 0;
}
</style>
