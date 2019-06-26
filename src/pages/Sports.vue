<template>
  <div>
    <Header />
    <ArticleSport />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ArticleSport from '../components/ArticleSport.vue';


export default {
  name: 'Home',
  components: {
    Header, Footer, ArticleSport
  }
}
</script>
