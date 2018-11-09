import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
// 用户系统的路由
import user from './user'
// 店铺装修栏的路由
import store from './store'
// 商品栏的路由
import shop from './shop'
// 订单栏的路由
import order from './order'
// 客户栏的路由
import customer from './customer'
// 数据栏的路由
import data from './data'
// 设置栏的路由
import set from './set'
// 资产栏的路由
import property from './property'
// 营销栏的路由
import marketing from './marketing'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/overview',
      component: Home,
      children: [
        {
          path: '/overview',
          component: () => import('../pages/overviwe/Overview.vue')
        },
        ...store,
        ...shop,
        ...order,
        ...customer,
        ...data,
        ...set,
        ...property,
        ...marketing
      ]
    },
    // 用户系统的路由
    ...user
  ]
})
router.beforeEach(function (to, from, next) {
  next()
})
export default router
