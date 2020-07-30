import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/products/:category',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/product/:id',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/guide',
        component: () => import('../views/Guide.vue')
      },
      {
        path: '/account',
        component: () => import('../views/Account.vue')
      }
    ]
  },
  {
    path: '/signin',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/Orders.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
