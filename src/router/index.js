import { createRouter, createWebHistory } from 'vue-router'
import ConnectView from '../views/ConnectView.vue';

const routes = [
  {
    path: '/',
    name: 'connect',
    component: ConnectView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
