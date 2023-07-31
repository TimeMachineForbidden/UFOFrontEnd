import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Welcome from '@/components/Welcome.vue'
import Dm1 from '../components/DataManagement/Dm1.vue'
import Dm2 from '../components/DataManagement/Dm2.vue'
import Display1 from '../components/display/Display1.vue'
import Display2 from '../components/display/Display2.vue'
import Display3 from '../components/display/Display3.vue'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    name: 'myhome',
    component: Home,
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome },
      { path: "/dis1", component: Display1 },
      { path: "/dis2", component: Display2 },
      { path: "/dm1", component: Dm1 },
      { path: "/dm2", component: Dm2 },
    ]
  },
  {
    path: '/snack',
    name: 'little thung',
    component: Display3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
