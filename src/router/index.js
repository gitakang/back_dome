import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import Register from '@/pages/Register.vue'

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
        {
          path: '/store',
          component: () => import('../pages/store/decoration/decoration.vue')
        },
        {
          path: '/shop',
          component: () => import('../pages/shop/all/Allgoods.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
router.beforeEach(function (to, from, next) {
  console.log(sessionStorage.user)
  next()
})
export default router
