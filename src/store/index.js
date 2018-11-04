import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nav: [],
    subnav: [],
    headNav: []
  },
  mutations: {
    GETNAV (state, arr) {
      const path = arr.splice(arr.length - 1, 1)
      const navs = arr
      state.nav = navs
      const len = navs.length
      const paths = path[0].split('/')
      for (let i = 0; i < len; i++) {
        if (navs[i].path === path[0]) {
          state.subnav = navs[i].subnav
        }
        for (let j = 0; j < navs[i].subnav.length; j++) {
          if (paths.length === 2) {
            state.headNav = navs[i].subnav[0].headNav
          } else {
            if (navs[i].subnav[j].path === path) {
              state.headNav = navs[i].subnav[j].headNav
            }
          }
        }
      }
    },
    GETSUBNAV (state, path) {
      const {nav} = state
      const len = nav.length
      const paths = path.split('/')
      for (let i = 0; i < len; i++) {
        if (nav[i].path === path) {
          state.subnav = nav[i].subnav
        }
        for (let j = 0; j < nav[i].subnav.length; j++) {
          if (paths.length === 2) {
            state.headNav = nav[i].subnav[0].headNav
          } else {
            if (nav[i].subnav[j].path === path) {
              state.headNav = nav[i].subnav[j].headNav
            }
          }
        }
      }
    }
  },
  actions: {
    getNavs ({commit}, path) {
      axios.get('/static/mock/nav.json').then((res) => {
        const {nav} = res.data.res_body
        nav.push(path)
        commit('GETNAV', nav)
      })
    }
  }
})

export default store
