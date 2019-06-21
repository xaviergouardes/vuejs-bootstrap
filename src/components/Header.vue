<template>

  <nav class="navbar navbar-light bg-light navbar-expand-sm ">
    <a class="navbar-brand" href="#">Navbar</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/articles" >Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" active-class="active" to="/sports" >Sports</router-link>
        </li>
      </ul>
  </nav>

</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
