import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/HomePage'
import Login from '../components/LoginPage'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '',
      redirect: 'home'
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    }
  ]
})