<template>

  <nav class="navbar navbar-light bg-light navbar-expand-sm ">

    <router-link class="navbar-brand" active-class="active" to="/" >
      <img src="/icons8-puzzle.svg">
    </router-link>

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
