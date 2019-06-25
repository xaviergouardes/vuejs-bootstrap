<template>
  <div>
    <Header />
    <ArticleSport />
    <Footer />
  </div>
</template>

<script>
import MenuNav from '../components/MenuNav.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ArticleSport from '../components/ArticleSport.vue';
import Aside from '../components/Aside.vue';

export default {
  name: 'Home',
  components: {
    Header, MenuNav, Footer, ArticleSport, Aside
  }
}
</script>
