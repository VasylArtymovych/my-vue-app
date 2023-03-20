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
    <pre>{{ todoId }}: {{ data }}</pre>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect, computed } from "vue";
const val = ref("yerim");
const checked = ref(false);
const names = ref([]);
const obj = ref({ count: 0 });
const count = computed(() => obj.value.count);
const input = ref(null);
const inputRef = (el) => {
  // console.log(el);
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
  todoId.value++;
};

const todoId = ref(1);
const data = ref(null);

watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  console.log("firstEffect", checked.value);
  data.value = await response.json();
});

const unwatch = watchEffect(
  // [() => obj.value.count, checked],
  // ([newZ, newY]) => {
  //   console.log(newZ, newY);
  // },
  // { immediate: true }
  () => {
    console.log(checked.value);
  }
);
console.log(unwatch);
// setTimeout(() => {
//   unwatch();
// }, 3000);
</script>

<style scoped>
.form {
  margin: 0 0 20px 0;
}
</style>
