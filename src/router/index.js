import Vue from 'vue'
import Router from 'vue-router'

import ProductList from '../components/products/ProductList'
import OrderList from '../components/orders/OrderList'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
      {
        name: 'first',
        path: '/',
        redirect: '/products/'
      },
      {
        name: 'products',
        path: '/products/',
        component: ProductList
      },
      {
        name: 'orders',
        path: '/orders/',
        component: OrderList
      }
    ]
  })

export default router