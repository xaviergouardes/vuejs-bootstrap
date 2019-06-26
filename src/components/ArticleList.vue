<template>

<ul class="list-group">

  <li class="list-group-item" v-for="article in this.articles" :key="article.id" >
    <ArticleSmall v-bind:article="article"></ArticleSmall>
  </li>

</ul>

</template>

<script>
import ArticleSmall from '../components/ArticleSmall.vue';
import ArticlesServices from '../services/articles.services';

export default {
  name: 'ArticleList',
  components:  {
    ArticleSmall
  },
  data: function () {
    return {
      articles: []
    }
  },
  mounted: function () {
    this.articles = ArticlesServices.getArticles()
  }

}
</script>

<style scoped>
</style>
