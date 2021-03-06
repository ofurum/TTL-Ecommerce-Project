import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'
import Product from '@/views/Product.vue'
import SingleProduct from '@/views/SingleProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/Product',
    name: 'product',
    component: Product
  },
  {
    path: '/Product/:productId',
    name: 'singleProduct',
    component: SingleProduct
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
