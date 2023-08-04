import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Welcome from '@/components/Welcome.vue'
import Dm1 from '../components/DataManagement/Dm1.vue'
import Dm2 from '../components/DataManagement/Dm2.vue'
import Display1 from '../components/display/Display1.vue'
import Display2 from '../components/display/Display2.vue'
import Display2P3 from '../components/display/Display2P3.vue'
import Display3 from '../components/display/Display3.vue'
import Display3P2 from '../components/display/Display3P2.vue'
import Display4 from '../components/display/Display4.vue'
import Display5 from '../components/display/Display5.vue'
import WordsCloud from '../components/display/Charts/wordsCloud.vue'
import Pie from '../components/display/Charts/Pie.vue'
import Display3Vue from '@/components/display/Display3.vue'
import threeDWorld from '../components/display/Charts/ThreeDWorld.vue'
import DynamicBar from '../components/display/Charts/DynamicBar.vue'
import DynamicLine from '../components/display/Charts/DynamicLine.vue'
import GLScatter from '../components/display/Charts/GLScatter.vue'
import SunBurst from '../components/display/Charts/SunBurst.vue'
import Glow from '../components/Border/Glow.vue'
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
      { path: "/dis2p3", component: Display2P3 },
      { path: "/dis3", component: Display3 },
      { path: "/dis3p2", component: Display3P2 },
      { path: "/dis4", component: Display4 },
      { path: "/dis5", component: Display5 },
      { path: "/dm1", component: Dm1 },
      { path: "/dm2", component: Dm2 },
    ]
  },
  {
    path: '/snack',
    name: 'little thung',
    component: Glow
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
