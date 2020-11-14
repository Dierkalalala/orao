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
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../views/Team')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: () => import('../views/Faq')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
