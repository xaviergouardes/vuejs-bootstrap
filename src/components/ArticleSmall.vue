<template>
<div class="row no-gutters">
  <div class="card mb-3 pt-2" >

    <div class="row no-gutters">
      <div class="col-4">
        <img :src="article.url" class="card-img-top" /> 

        <!-- div class="card-img-overlay p-0 m-0 h-25">
          <div class="card-title card-title-opacity p-2" >
            <h5>{{ article.category | capitalizeFirstLetter }} : Article n°{{ article.id }}</h5>
          </div>
        </div -->
      </div>

      <div class="col-8">
        <div class="card-body pr-1 pl-2 py-0">
            <h5 class="card-title">{{ article.category | capitalizeFirstLetter }} : Article n°{{ article.id }} </h5>
            <p class="card-text">{{ article.text }}</p>
            <p class="card-text">
              <small class="text-muted">{{ article.category | capitalizeFirstLetter }} - Last updated 3 mins ago</small>
            </p>
            <router-link :to="{ path: '/article/' + this.article.id }" class="card-link">En savoir plus ...</router-link>
        </div>
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col-12">

        <div class="card-footer text-muted p-1 d-flex flex-row" style="background-color: white ">
          <img src="/asset/bookmark.svg" style="max-width: 25px; width: 20px;">
          <img src="/asset/bookmark-border.svg" style="max-width: 25px; width: 20px;">
          <img src="/asset/baseline-comment-24px.svg" class="ml-auto" style="max-width: 25px; width: 20px;">
        </div>
      </div>
    </div>

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
/*
@import "bootstrap/scss/bootstrap.scss";
.card {
  @include media-breakpoint-up(md) {
    max-width: 700px;
  }
}
*/

.card-title-opacity {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  background: linear-gradient(to bottom, rgb(60, 60, 60), rgba(60,60,60,0.1));
}

</style>
