<template>

<div>
  <Header />

  <div class="container-fluid">
    <div class="row justify-content-md-center">
      <div class="col">
        <router-view />
      </div>
    </div>
  </div>

  <Footer />
</div>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import ArticlesServices from '../services/articles.services';

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import ArticleList from '../components/ArticleList.vue';

export default {
  name: 'Home',
  components: {
    Header, Footer, ArticleList
  }
}
</script>
