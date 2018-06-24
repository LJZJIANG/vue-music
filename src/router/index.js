import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/recommend/recommend'
import Singer from '@/components/singer/singer'
import Rank from '@/components/rank/rank'
import Search from '@/components/search/search'
import Login from '@/components/login/login'
import Register from '@/components/register/register'
import SingerDetail from '@/components/singer-detail/singer-detail'
import Disc from '@/components/disc/disc'
import TopList from '@/components/top-list/top-list'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: 'login'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      children:[{
        path:':id',
        component:Disc
      }]
      // 路由独享守卫
     /*  beforeEnter: (to, from, next) => {
        console.log(to)
        console.log(from)
        next()
      } */
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank,
      children:[{
        path:':id',
        component:TopList
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '*',
      redirect: 'recommend'
    }
  ]
})
