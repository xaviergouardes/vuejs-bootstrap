<template>
<div class="row no-gutters">
  <div class="card mb-3" >

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
        <div class="card-body pr-1 pl-2 py-0 ">
            <h5 class="card-title">{{ article.category | capitalizeFirstLetter }} : Article n°{{ article.id }} </h5>
            <p class="card-text">{{ article.text }}</p>
            <p class="card-text">
              <small class="text-muted">{{ article.category | capitalizeFirstLetter }} - Last updated 3 mins ago</small>
            </p>
         </div>
      </div>
    </div>

    <div class="row no-gutters">
      <div class="col-12">

        <div class="card-footer text-muted p-1 d-flex flex-row" style="background-color: white ">
          <img src="/asset/bookmark.svg" >
          <img src="/asset/bookmark-border.svg" >
          <img src="/asset/baseline-comment-24px.svg"  >
          <router-link 
            :to="{ path: '/article/' + this.article.id }" 
            class="ml-auto btn btn-outline-primary ">
            Lire
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" id="external">
            <path d="M16 16H2V2h7V0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V9h-2v7zM11 0v2h3.59l-9.83 9.83 1.41 1.41L16 3.41V7h2V0h-7z" 
            transform="translate(1, 1)" 
            fill="currentColor">
            </path>
            </svg>

          </router-link>
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

.card-text {
  margin: 0;
}
.card-title {
  margin: 0;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
}
/*
@import "bootstrap/scss/bootstrap.scss";
.card {
  @include media-breakpoint-up(md) {
    max-width: 700px;
  }
}


.card-title-opacity {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  background: linear-gradient(to bottom, rgb(60, 60, 60), rgba(60,60,60,0.1));
}
*/
</style>
