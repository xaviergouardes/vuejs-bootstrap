<template>

  <nav class="navbar navbar-light bg-light navbar-expand-sm fixed-top">

    <router-link class="navbar-brand" active-class="active" to="/" >
      <img src="/asset/logo-brand.svg" class="logo-brand">
      <span>Le Journal</span>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link  class="nav-link" 
                          active-class="active" 
                          to="/articles/voyage" 
                          data-toggle="collapse" 
                          data-target=".navbar-collapse.show">Voyage</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" 
                          active-class="active" 
                          to="/articles/sport"
                          data-toggle="collapse" 
                          data-target=".navbar-collapse.show" >Sports</router-link>
          </li>
        </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.logo-brand {
  width: 50px;height: 50px;
}
</style>
