import { createRouter, createWebHashHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LogInView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
