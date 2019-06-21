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

</style>
