<template>
  <router-view />
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
body {
  padding-top: 76px; /* Pour que le navbar fixed ne cache pas le contenu */
}

</style>
