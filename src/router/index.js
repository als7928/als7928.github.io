import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/gnn',
    name: 'GNN',
    component: () => import('../views/projects/GNN.vue')
  },
  {
    path: '/project/crowdcounting',
    name: 'CrowdCounting',
    component: () => import('../views/projects/CrowdCounting.vue')
  },
  {
    path: '/project/protoprompt',
    name: 'ProtoPrompt',
    component: () => import('../views/projects/ProtoPrompt.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
