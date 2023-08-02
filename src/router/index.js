import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Welcome from '@/components/Welcome.vue'
import Dm1 from '../components/DataManagement/Dm1.vue'
import Dm2 from '../components/DataManagement/Dm2.vue'
import Display1 from '../components/display/Display1.vue'
import Display2 from '../components/display/Display2.vue'
import WordsCloud from '../components/display/Charts/wordsCloud.vue'
import BarDelay from '../components/display/Charts/BarDelay.vue'
import Display3Vue from '@/components/display/Display3.vue'
import threeDWorld from '../components/display/Charts/ThreeDWorld.vue'
import DynamicBar from '../components/display/Charts/DynamicBar.vue'
import DynamicLine from '../components/display/Charts/DynamicLine.vue'
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
    component: DynamicLine
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
