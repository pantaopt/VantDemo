import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/HomePage'
import Login from '../components/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'login'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})