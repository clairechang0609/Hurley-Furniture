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
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/products/:category',
        name: 'products',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/guide',
        name: 'guide',
        component: () => import('../views/Guide.vue')
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('../views/Account.vue')
      }
    ]
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/Signin.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'products',
        component: () => import('../views/dashboard/Products.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/dashboard/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue')
      },
      {
        path: 'pictures',
        name: 'pictures',
        component: () => import('../views/dashboard/Pictures.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
