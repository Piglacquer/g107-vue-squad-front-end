import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/squad',
      name: 'group',
      component: () => import('./views/Group.vue')
    },
    {
      path: '/individual/:id',
      name: 'individual',
      component: () => import('./views/Individual.vue')
    }
  ]
})
