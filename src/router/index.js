import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Inicio
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/citas',
      name: 'citas',
      component: () => import('../views/CitasView.vue')
    },
    {
      path: '/miscitas',
      name: 'miscitas',
      component: () => import('../views/MisCitasView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/PerfilView.vue')
    },

    
  ]
})

export default router
