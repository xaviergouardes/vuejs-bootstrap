<template>

<div class="card mb-3" >
 
  <div class="card-header image-de-fond">Header</div> 

  <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <router-link to="/article/002" class="card-link">En savoir plus ...</router-link>
  </div>

  <div class="card-footer text-muted">
     <img src="/asset/bookmark.svg" style="max-width: 25px; width: 20px;">
    <img src="/asset/bookmark-border.svg" style="max-width: 25px; width: 20px;">
  </div>
  
</div>


</template>

<script>
export default {
  name: 'ArticleSmall'
}
</script>

<style scoped>
.image-de-fond {
  background: url('http://placeimg.com/250/125');
  height: 100px;
}
</style>
