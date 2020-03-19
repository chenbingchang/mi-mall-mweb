import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () =>
      import(/* webpackChunkName: "index" */ '@/views/Index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'category',
        name: 'category',
        component: () =>
          import(/* webpackChunkName: "category" */ '@/views/Category.vue'),
      },
      {
        path: 'discover',
        name: 'discover',
        component: () =>
          import(/* webpackChunkName: "discover" */ '@/views/Discover.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () =>
          import(/* webpackChunkName: "cart" */ '@/views/Cart.vue'),
      },
      {
        path: 'user',
        name: 'user',
        component: () =>
          import(/* webpackChunkName: "user" */ '@/views/User.vue'),
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
