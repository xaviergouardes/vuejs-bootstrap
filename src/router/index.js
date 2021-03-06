import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Article from '../components/Article.vue'
import ArticleList from '../components/ArticleList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/articles/sport' },
    { path: '/',
      component: Home,
      children: [
        {
          path: 'articles/:category',
          component: ArticleList,
          props: true
        },
        {
          path: 'article/:idArticle',
          component: Article,
          props: true
      }]
    }
  ]
})
