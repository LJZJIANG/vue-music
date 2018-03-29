// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'

import {store} from './store/store'

import './common/fonts/iconfont.css'
import './common/stylus/index.styl'

fastclick.attach(document.body)

Vue.prototype.$axios = axios;
Vue.prototype.$baseURL = 'https://wd3050824950qdrgzu.wilddogio.com/'

Vue.use(VueLazyload,{
  loading:require('common/image/default.png')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
