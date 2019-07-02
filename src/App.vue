<template>
  <router-view />
</template>

<script>

import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style  lang="scss" >
  @import "styles/custom.scss";
</style>
