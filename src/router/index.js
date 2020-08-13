import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/frontend/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/frontend/Index.vue')
      },
      {
        path: '/products/:category',
        name: 'products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/frontend/Cart.vue')
      },
      {
        path: '/guide',
        name: 'guide',
        component: () => import('../views/frontend/Guide.vue')
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('../views/frontend/Account.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/frontend/Contact.vue')
      }
    ]
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/backend/Signin.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'back-products',
        component: () => import('../views/backend/dashboard/Products.vue')
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../views/backend/dashboard/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'coupons',
        component: () => import('../views/backend/dashboard/Coupons.vue')
      },
      {
        path: 'pictures',
        name: 'pictures',
        component: () => import('../views/backend/dashboard/Pictures.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
