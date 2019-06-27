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
html {
  font-size: 62.5%
}

body {
  padding-top: 76px; /* Pour que le navbar fixed ne cache pas le contenu */
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) { 
   html {
     font-size: 52.5%
   }
 }

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) and (max-width: 767.98px) { 
   html {
     font-size: 62.5%
   }
 }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) { 
   html {
     font-size: 82.5%
   }
 }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) { 
   html {
     font-size: 100%
   }
 }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { 
   html {
     font-size: 150.5%
   }
 }
</style>
