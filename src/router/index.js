import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Rank from '@/components/rank/rank'
import Search from '@/components/search/search'
import Login from '@/components/login/login'
import Register from '@/components/register/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'login'
    },
    {
      path:'/recommend',
      name:'recommend',
      component:Recommend
    },
    {
      path:'/singer',
      name:'singer',
      component:Singer
    },
    {
      path:'/rank',
      name:'rank',
      component:Rank
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/register',
      name:'register',
      component:Register
    },
    {
      path:'/search',
      name:'search',
      component:Search
    },
    {
      path:'*',
      redirect:'recommend'
    }
  ]
})
