import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/components/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: layout,
    redirect: '/main',
    children: [
      {
        path: '/main',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ '@/views/main/index.vue')
      },
      {
        path: '/registry',
        name: 'registry',
        component: () => import(/* webpackChunkName: "registry" */ '@/views/registry/index.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "cart" */ '@/views/cart/index.vue')
      },
      {
        path: '/favorites',
        name: 'favorites',
        component: () => import(/* webpackChunkName: "favorites" */ '@/views/favorites/index.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import(/* webpackChunkName: "order" */ '@/views/order/index.vue')
      },
      {
        path: '/history',
        name: 'history',
        component: () => import(/* webpackChunkName: "history" */ '@/views/history/index.vue')
      },
      {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "search" */ '@/views/search/index.vue')
      },
      {
        path: '/detail',
        name: 'detail',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "detail" */ '@/views/detail/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
