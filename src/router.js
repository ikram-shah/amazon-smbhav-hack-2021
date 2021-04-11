import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ScanQR from './views/ScanQR.vue'
import Store from './views/Store.vue'
import Stores from './views/Stores.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/scanQR',
      name: 'scanQR',
      component: ScanQR
    },
    {
      path: '/store/:id',
      name: 'store',
      component: Store
    },
    {
      path: '/stores',
      name: 'stores',
      component: Stores
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
