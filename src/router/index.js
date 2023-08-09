import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Welcome from '@/components/Welcome.vue'
import Dm1 from '../components/DataManagement/Dm1.vue'
import Dm2 from '../components/DataManagement/Dm2.vue'
import Display1 from '../components/display/Display1.vue'
import Display1p2 from '../components/display/Display1p2.vue'
import Display2 from '../components/display/Display2.vue'
import Display2P2 from '../components/display/Display2P2.vue'
import Display2P3 from '../components/display/Display2P3.vue'
import Display3 from '../components/display/Display3.vue'
import Display3P2 from '../components/display/Display3P2.vue'
import Display4 from '../components/display/Display4.vue'
import Display5 from '../components/display/Display5.vue'
import Display6 from '../components/display/Display6.vue'
import Display6P2 from '../components/display/Display6p2.vue'
import WordsCloud from '../components/display/Charts/wordsCloud.vue'
import Pie from '../components/display/Charts/Pie.vue'
import Display3Vue from '@/components/display/Display3.vue'
import threeDWorld from '../components/display/Charts/ThreeDWorld.vue'
import DynamicBar from '../components/display/Charts/DynamicBar.vue'
import DynamicLine from '../components/display/Charts/DynamicLine.vue'
import GLScatter from '../components/display/Charts/GLScatter.vue'
import IfImages from '../components/Dynamic/IfImages.vue'
import SunBurst from '../components/display/Charts/SunBurst.vue'
import Glow from '../components/Border/Glow.vue'
import Login from '../components/DataManagement/Login.vue'
import funnel from '../components/display/Charts/funnel.vue'
import mixBarLine from '@/components/display/Charts/mixBarLine.vue'
const routes = [
  {
    path: '/',
    redirect: '/welcome'
  },

  {
    path: '/home',
    name: 'myhome',
    component: Home,
    redirect: '/dis1',
    children: [
      { path: "/dis1p2", component: Display1 },
      { path: "/dis1", component: Display1p2 },
      { path: "/dis2", component: Display2 },
      { path: "/dis2p2", component: Display2P2 },
      { path: "/dis2p3", component: Display2P3 },
      { path: "/dis3", component: Display3 },
      { path: "/dis3p2", component: Display3P2 },
      { path: "/dis4", component: Display4 },
      { path: "/dis5", component: Display5 },
      { path: "/dis6", component: Display6 },
      { path: "/dis6p2", component: Display6P2 },
      { path: "/dm1", component: Dm1 },
      { path: "/dm2", component: Dm2 },
    ]
  },
  {
    path: '/snack',
    name: 'little thung',
    component: mixBarLine
  },
  {
    path: '/welcome',
    name: 'mywel',
    component: Welcome
  },
  {
    path: '/login',
    name: 'mylog',
    component: Login
  },
  {
    path: '/dyn',
    name: 'mydyn',
    component: IfImages
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    if (to.path === '/dm2') {
      let token = localStorage.getItem('Authorization');
      console.log(token + 'token aaaa')
      if (token === null || token === '') {
        next('/login');
      } else {
        next();
      }
    }
    else {
      next();
    }
  }
});
export default router
