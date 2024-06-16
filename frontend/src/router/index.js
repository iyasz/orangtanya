import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/users/home.vue')
    },
    {
      path: '/auth/login',
      name: 'auth.login',
      component: () => import('../views/auth/login.vue')
    },
    {
      path: '/auth/register',
      name: 'auth.register',
      component: () => import('../views/auth/register.vue')
    },
  ]
})

export default router
