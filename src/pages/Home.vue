<template>

<div>
  <Header />
  <router-view />
  <Footer />
</div>


<!--
  <div>
    <Header />
    <div id="main">
      <router-view />
      <MenuNav />
      <Aside />
    </div>
    <Footer />
  </div>
  -->

</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'

import MenuNav from '../components/MenuNav.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Aside from '../components/Aside.vue';

export default {
  name: 'Home',
  components: {
    Header, MenuNav, Footer, Aside
  }
}
</script>
