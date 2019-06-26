<template>
  <!-- div>
      <article>
        <h1>Détail de l'Article {{ $route.params.idArticle }} / {{ idArticle }}</h1>
      </article>
  </div -->

<article class="card mb-3" >
 
  <div class="card-header" :style="'background-image: url(' + article.url + '); height: 100px;'"></div> 

  <div class="card-body">
      <h5 class="card-title"> Article n°{{ article.id }} </h5>
      <p class="card-text">{{ article.text }}</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <!-- router-link :to="{ path: '/article/' + this.article.id }" class="card-link">En savoir plus ...</router-link -->
  </div>

  <div class="card-footer text-muted">
     <img src="/asset/bookmark.svg" style="max-width: 25px; width: 20px;">
    <img src="/asset/bookmark-border.svg" style="max-width: 25px; width: 20px;">
  </div>
  
</article>

</template>

<script>
import ArticlesServices from '../services/articles.services';

export default {
  name: 'Article',
  props: ['idArticle'],
  data: function() {
    return {
      article: {}
    }
  },
  mounted: function() {
    this.article = ArticlesServices.getArticlesById(this.idArticle)
  }
}
</script>

<style scoped>

</style>
