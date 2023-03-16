<template>
  <h1 :title="titleText" class="title">
    <span class="title-text">
      <slot></slot>
    </span>
  </h1>
</template>

<script>
export default {
  name: 'main-title',
  props: {
    titleText: {
      type: String,
      default: "Post's page created: 11.03.2023 by V.Artymovych",
    },
  },
};
</script>

<style scoped>
.title {
  width: 100%;
  font-size: 2em;
  font-weight: 700;
}

.title-text {
  background-color: teal;
  background-image: linear-gradient(
    45deg,
    #ca4246 0%,
    #ca4246 20%,
    #e16541 20%,
    #e16541 40%,
    #f18f43 40%,
    #f18f43 60%,
    #8b9862 60%,
    #8b9862 80%,
    #476098 80%,
    #476098 100%
  );
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  animation: rainbow-text 1000ms linear infinite;
}

@keyframes rainbow-text {
  0% {
    background-image: linear-gradient(
      45deg,
      #ca4246 0%,
      #ca4246 20%,
      #e16541 20%,
      #e16541 40%,
      #f18f43 40%,
      #f18f43 60%,
      #8b9862 60%,
      #8b9862 80%,
      #476098 80%,
      #476098 100%
    );
  }
  20% {
    background-image: linear-gradient(
      45deg,
      #476098 0%,
      #476098 20%,
      #ca4246 20%,
      #ca4246 40%,
      #e16541 40%,
      #e16541 60%,
      #f18f43 60%,
      #f18f43 80%,
      #8b9862 80%,
      #8b9862 100%
    );
  }
  40% {
    background-image: linear-gradient(
      45deg,
      #8b9862 0%,
      #8b9862 20%,
      #476098 20%,
      #476098 40%,
      #ca4246 40%,
      #ca4246 60%,
      #e16541 60%,
      #e16541 80%,
      #f18f43 80%,
      #f18f43 100%
    );
  }
  60% {
    background-image: linear-gradient(
      45deg,
      #f18f43 0%,
      #f18f43 20%,
      #8b9862 20%,
      #8b9862 40%,
      #476098 40%,
      #476098 60%,
      #ca4246 60%,
      #ca4246 80%,
      #e16541 80%,
      #e16541 100%
    );
  }
  80% {
    background-image: linear-gradient(
      45deg,
      #e16541 0%,
      #e16541 20%,
      #f18f43 20%,
      #f18f43 40%,
      #8b9862 40%,
      #8b9862 60%,
      #476098 60%,
      #476098 80%,
      #ca4246 80%,
      #ca4246 100%
    );
  }
  100% {
    background-image: linear-gradient(
      45deg,
      #ca4246 0%,
      #ca4246 20%,
      #e16541 20%,
      #e16541 40%,
      #f18f43 40%,
      #f18f43 60%,
      #8b9862 60%,
      #8b9862 80%,
      #476098 80%,
      #476098 100%
    );
  }
}
</style>
