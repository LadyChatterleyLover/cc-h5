import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('../views/preview/preview.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/template.vue')
    }
  ]
})

export default router
