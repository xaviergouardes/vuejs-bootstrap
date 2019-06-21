<template>
    <nav class='nav'>
      <ul class='menu'>
        <router-link to="/articles" exactActiveClass="text-white" >Accueil</router-link>
        <router-link to="/sports" exactActiveClass="text-white" >Sports</router-link>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'MenuNav'
}
</script>

<style scoped>
</style>
