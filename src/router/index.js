import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Sports from '../pages/Sports.vue'
import Article from '../components/Article.vue'
import ArticleList from '../components/ArticleList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/articles' },
    { path: '/',
      component: Home,
      children: [
        {
          path: 'articles',
          component: ArticleList
        },
        {
          path: 'article/:id',
          component: Article
      }]
    },
    { path: '/sports', name: 'Sports', component: Sports }
  ]
})
