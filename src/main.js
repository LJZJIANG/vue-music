// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'

import store from './store'

import './common/stylus/index.styl'
// 用于移动端调试
// import Vconsole from 'vconsole'
fastclick.attach(document.body)

Vue.prototype.$axios = axios;
Vue.prototype.$baseURL = 'https://wd3050824950qdrgzu.wilddogio.com/'

// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
Vue.config.productionTip = false

// 全局守卫
/* router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next();
}) */
/* router.afterEach((to, from) => {
  console.log(to)
  console.log(from)
}) */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
