<template>
  <NavBar />
  <RouterView />
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar }

}
</script>

<style lang="scss">
  @import url('./assets/style.scss');
</style>