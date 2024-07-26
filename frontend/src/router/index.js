import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/authStores'
import error404 from '@/components/atoms/errors/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/client/home.vue')
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
    {
      path: '/mid',
      name: 'mid',
      component: () => import('../views/client/mid.vue'),
      meta: {
        requiredAuth: true
      }
    },
    {
      path: '/404',
      name: 'error.404',
      component: error404
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error.404',
      component: error404
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const authStore = await useAuthStore()

  if (to.meta.requiredAuth && !authStore.currentUser) {
    next({ name: 'error.404', params: { pathMatch: to.path.split('/').slice(1) }, query: to.query, hash: to.hash });
  } else {
    next();
  }
})

export default router
