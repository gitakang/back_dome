import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nav: [],
    subnav: [],
    headNav: [],
    title: ''
  },
  mutations: {
    GETNAV (state, arr) {
      const path = arr.splice(arr.length - 1, 1)
      const navs = arr
      state.nav = navs
      const len = navs.length
      const paths = path[0].split('/')
      console.log(paths[1])
      for (let i = 0; i < len; i++) {
        if (navs[i].path.indexOf(paths[1]) > 0) {
          state.subnav = navs[i].subnav
          state.headNav = navs[i].subnav[0].headnav
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
      console.log(paths)

      for (let i = 0; i < len; i++) {
        if (nav[i].path.indexOf(paths[1]) > 0) {
          state.subnav = nav[i].subnav
          state.title = nav[i].info
        }
        for (let j = 0; j < nav[i].subnav.length; j++) {
          if (path === nav[i].shubnav[j].path) {
            state.headNav = nav[i].subnav[j].headNav
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
