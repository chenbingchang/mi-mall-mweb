import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "index" */ '@/views/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home.vue'),
      },
      {
        path: 'category',
        name: 'category',
        component: () =>
          import(/* webpackChunkName: "category" */ '@/views/category.vue'),
      },
      {
        path: 'discover',
        name: 'discover',
        component: () =>
          import(/* webpackChunkName: "discover" */ '@/views/discover.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () =>
          import(/* webpackChunkName: "cart" */ '@/views/cart.vue'),
      },
      {
        path: 'user',
        name: 'user',
        component: () =>
          import(/* webpackChunkName: "user" */ '@/views/user.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
