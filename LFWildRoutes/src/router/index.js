import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationsView from '@/views/DestinationsView.vue'
import WhoView from '@/views/WhoView.vue'
import LoginView from '@/views/LoginView.vue'
import NewTripView from '@/views/NewTripView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/who',
      name: 'who',
      component: WhoView,
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: DestinationsView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/newtrip',
      name: 'newtrip',
      component: NewTripView,
    },

  ],
})

export default router
