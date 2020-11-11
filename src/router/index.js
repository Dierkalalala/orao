import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main
  },
  {
    path: '/tech',
    name: 'Technology',
    component: () => import('../views/Technology')
  },
  {
    path: '/cases',
    name: 'Cases',
    component: () => import('../views/Cases/index.vue')
  },
  {
    path: '/roadmap',
    name: 'Roadmap',
    component: () => import('../views/Roadmap')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
