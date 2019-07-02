import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/js/dist/collapse'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap/scss/bootstrap.scss'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
