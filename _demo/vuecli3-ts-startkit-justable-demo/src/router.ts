import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      redirect: { name: 'circular' },
      component: () => import(/* webpackChunkName: "index" */ './views/Home.vue'),
      children: [
        {
          path: '/color/red',
          name: 'red',
          component: () => import(/* webpackChunkName: "red" */ './views/colors/red.vue')
        },
        {
          path: '/color/blue',
          name: 'blue',
          component: () => import(/* webpackChunkName: "blue" */ './views/colors/blue.vue')
        },
        {
          path: '/shape/circular',
          name: 'circular',
          component: () => import(/* webpackChunkName: "circular" */ './views/shape/circular.vue')
        },
        {
          path: '/shape/square',
          name: 'square',
          component: () => import(/* webpackChunkName: "square" */ './views/shape/square.vue')
        }
      ]
    }
  ]
})
