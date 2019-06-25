<template>

<div class="media position-relative">
  <img src="https://via.placeholder.com/75" class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">Media with stretched link</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <router-link to="/article/002" class="stretched-link">En savoir plus ...</router-link>
  </div>
</div>

<!-- div class="card mb-3" >
  <div class="row no-gutters">
    <div class="col-sm-2 ">
      <img src="https://via.placeholder.com/75" class="card-img" style="width: 75px" alt="une image liée à l'article">
    </div>
    <div class="col-sm-10">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div -->

</template>

<script>
export default {
  name: 'ArticleSmall'
}
</script>

<style scoped>

</style>
