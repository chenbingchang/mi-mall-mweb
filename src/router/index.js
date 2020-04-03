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
        name: 'Home',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'category',
        name: 'Category',
        component: () =>
          import(/* webpackChunkName: "category" */ '@/views/Category.vue'),
      },
      {
        path: 'discover',
        name: 'Discover',
        component: () =>
          import(/* webpackChunkName: "discover" */ '@/views/Discover.vue'),
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () =>
          import(/* webpackChunkName: "cart" */ '@/views/Cart.vue'),
      },
      {
        path: 'user',
        name: 'User',
        component: () =>
          import(/* webpackChunkName: "user" */ '@/views/User.vue'),
      },
    ],
  },
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import(/* webpackChunkName: "search" */ '@/views/Search.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
