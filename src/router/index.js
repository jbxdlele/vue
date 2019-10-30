import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movie from '../views/Movie.vue'
import Cinema from '../views/Cinema.vue'
import User from '../views/User.vue'
import Start from '../views/Start.vue'
import Err404 from '../views/Err404.vue'
// import Login from '../views/Login.vue'
import Regist from '../views/Regist.vue'

Vue.use(VueRouter)
// import bus from '../../bus.js'


const routes = [
  // 启动页
  {
    path: '/',
    name: 'start',
    component: Start
  },

  // 主页面 电影页面
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  // 详情页面
  {
    path: '/movie/:id',
    name: 'movie',
    component: Movie
  },
  // 影城信息
  {
    path: '/cinema',
    name: 'cinema',
    component: Cinema,
    meta: {requireAuth: true},
  },

  // 用户页面
  {
    path: '/user',
    name: 'user',
    component: User
  },
  // 登录
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: Login
  // },
  // 注册
  {
    path: '/regist',
    name: 'regist',
    component: Regist
  },

  {
    path: '/download',
    name: 'download',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "download" */ '../views/Download.vue')
  },


  {
    // 404页面
    path: '*',
    name: 'err404',
    component: Err404
  },
]

const router = new VueRouter({
  routes
})

export default router