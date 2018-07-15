import Vue from 'vue'
import Router from 'vue-router'

/*
  路由懒加载  按需加载，解决首页加载资源过多
 */
const Recommend = resolve => {
  import ('@/components/recommend/recommend').then(module => {
    resolve(module)
  })
}
const Singer = resolve => {
  import ('@/components/singer/singer').then(module => {
    resolve(module)
  })
}
const Rank = resolve => {
  import ('@/components/rank/rank').then(module => {
    resolve(module)
  })
}
const Search = resolve => {
  import ('@/components/search/search').then(module => {
    resolve(module)
  })
}
const Login = resolve => {
  import ('@/components/login/login').then(module => {
    resolve(module)
  })
}
const Register = resolve => {
  import ('@/components/register/register').then(module => {
    resolve(module)
  })
}
const SingerDetail = resolve => {
  import ('@/components/singer-detail/singer-detail').then(module => {
    resolve(module)
  })
}
const Disc = resolve => {
  import ('@/components/disc/disc').then(module => {
    resolve(module)
  })
}
const TopList = resolve => {
  import ('@/components/top-list/top-list').then(module => {
    resolve(module)
  })
}
const UserCenter = resolve => {
  import ('@/components/user-center/user-center').then(module => {
    resolve(module)
  })
}
const MyButton = resolve => {
  import ('@/components/mybutton/mybutton').then(module => {
    resolve(module)
  })
}
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
      children: [{
        path: ':id',
        component: Disc
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
      children: [{
        path: ':id',
        component: TopList
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
      component: Search,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
    {
      path: '/user',
      component: UserCenter
    },
    {
      path: '*',
      redirect: 'recommend'
    }, {
      path: '/mybutton',
      component: MyButton

    }
  ]
})
