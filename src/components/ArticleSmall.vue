<template>

<div class="card mb-3" >

  <img :src="article.url" class="card-img-top" /> 

  <div class="card-img-overlay p-0 m-0 h-25">
    <div class="card-title card-title-opacity p-2" >
      <h5>{{ article.category | capitalizeFirstLetter }} : Article n°{{ article.id }}</h5>
    </div>
  </div>

  <div class="card-body">
      <!-- h5 class="card-title">{{ article.category | capitalizeFirstLetter }} : Article n°{{ article.id }} </h5 -->
      <p class="card-text">{{ article.text }}</p>
      <p class="card-text">
        <small class="text-muted">{{ article.category | capitalizeFirstLetter }} - Last updated 3 mins ago</small>
      </p>
      <router-link :to="{ path: '/article/' + this.article.id }" class="card-link">En savoir plus ...</router-link>
  </div>

  <div class="card-footer text-muted">
     <img src="/asset/bookmark.svg" style="max-width: 25px; width: 20px;">
    <img src="/asset/bookmark-border.svg" style="max-width: 25px; width: 20px;">
  </div>
  
</div>


</template>

<script>
export default {
  name: 'ArticleSmall',
  props: ['article'],
  filters: {
    capitalizeFirstLetter: function (text) { return text.charAt(0).toUpperCase() + text.slice(1); }
  }
}
</script>

<style scoped lang="scss" >

@import "bootstrap/scss/bootstrap.scss";
.card {
  @include media-breakpoint-up(md) {
    max-width: 700px;
  }
}

.card-title-opacity {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  background: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.1));
}
</style>
