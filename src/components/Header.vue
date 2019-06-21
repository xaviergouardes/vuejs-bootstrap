<template>

  <nav class="navbar navbar-light bg-light navbar-expand-sm ">
    <a class="navbar-brand" href="#">Navbar</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/articles" exactActiveClass="text-white" >Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/sports" exactActiveClass="text-white" >Sports</router-link>
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
