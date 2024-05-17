import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import exam1View from '../views/exam1View.vue'
import exam2View from '../views/exam2View.vue'
import exam3View from '../views/exam3View.vue'
import exam4View from '../views/exam4View.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/exam1',
    name: 'exam1',
    component: exam1View
  },
  {
    path: '/exam2',
    name: 'exam2',
    component: exam2View
  },
  {
    path: '/exam3',
    name: 'exam3',
    component: exam3View
  },{
    path: '/exam4',
    name: 'exam4',
    component: exam4View
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
