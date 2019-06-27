<template>

<ul class="list-group">

  <li class="list-group-item" v-for="article in articlesByCategory" :key="article.id" >
    <ArticleSmall v-bind:article="article"></ArticleSmall>
  </li>

</ul>

</template>

<script>
import ArticleSmall from '../components/ArticleSmall.vue';
import ArticlesServices from '../services/articles.services';

export default {
  name: 'ArticleList',
  props: ['category'],
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
  },
  computed: {
    articlesByCategory: function()  {
      return this.articles.filter( (article) => { return (article.category === this.category); })
     }
  }

}
</script>

<style scoped>
</style>
