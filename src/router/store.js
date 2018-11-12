export default [
  {
    path: 'store/decoration/index',
    name: 'Decoration',
    component: () => import('../pages/store/decoration/decoration.vue')
  },
  {
    path: 'store/micro/page',
    name: 'Micro',
    component: () => import('../pages/store/micropage/Micropage.vue')
  }
]
