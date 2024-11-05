import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import productRouter from "./product.jsx"

const routes = [
  {path:'', component: () => import('../pages/MainPage.vue')},
    productRouter
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router