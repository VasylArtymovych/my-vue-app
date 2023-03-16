<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar-btns">
      <custom-button @click="$router.push('/posts')">POSTS</custom-button>
      <custom-button @click="$router.push('/store')"
        >POSTS Store
      </custom-button>
      <custom-button @click="$router.push('/compositionApi')"
        >POSTS compositionApi
      </custom-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 20px;

  background-image: linear-gradient(to right, teal, whitesmoke);
  box-shadow: 0 2px 2px 0 grey;
}

.navbar-btns {
  display: flex;
  gap: 10px;
}
</style>
