import { createRouter, createWebHashHistory } from 'vue-router'
//import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Baker from '../views/Baker.vue'
import NewOrder from '../views/NewOrder.vue'
import Products from '../views/Products.vue'
import Inventory from '../views/Inventory.vue'
import BakerOrders from '../views/BakerOrders.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
        name: 'products',
        component: Products
      },
      {
        path: '/new_order',
        name: 'newOrder',
        component: NewOrder
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: Baker,
    children: [
      {
        path: '/admin',
        name: 'orders',
        component: BakerOrders
      },
      {
        path: '/admin/inventory',
        name: 'inventory',
        component: Inventory
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
