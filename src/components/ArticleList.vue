<template>

<ul class="list-group">
  <li class="list-group-item">
    <router-link to="/article/001" >Article 001 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <ArticleSmall></ArticleSmall>
  </li>
  <li class="list-group-item">
    <router-link to="/article/003" >Article 003 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <router-link to="/article/004" >Article 004 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <router-link to="/article/005" >Article 005 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <router-link to="/article/006" >Article 006 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <router-link to="/article/007" >Article 007 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <router-link to="/article/008" >Article 008 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <router-link to="/article/009" >Article 009 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <router-link to="/article/010" >Article 010 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <router-link to="/article/011" >Article 011 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <router-link to="/article/012" >Article 012 Lorem posum</router-link>
  </li>
  <li class="list-group-item">
    <router-link to="/article/013" >Article 013 Lorem posum</router-link>
  </li>
</ul>

</template>

<script>
import ArticleSmall from '../components/ArticleSmall.vue';

export default {
  name: 'ArticleList',
  components:  {
    ArticleSmall
  }
}
</script>

<style scoped>
</style>
