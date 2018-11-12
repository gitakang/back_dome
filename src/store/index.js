import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nav: [],
    subnav: [],
    headNav: [],
    title: '',
    c_nav: []
  },
  actions: {
    getNavs ({commit}, path) {
      axios.get('/static/mock/nav.json').then((res) => {
        const {nav} = res.data.res_body
        console.log(nav)
        nav.push(path)
        commit('GETNAV', nav)
      })
    }
  },
  mutations: {
    GETNAV (state, arr) {
      let path = arr.splice(arr.length - 1, 1)[0]
      let pathArr = path.split('')
      let copyNav = JSON.parse(JSON.stringify(arr))
      state.c_nav = JSON.parse(JSON.stringify(arr))
      state.nav = JSON.parse(JSON.stringify(arr))
      let _index = []
      for (let k = 0; k < pathArr.length; k++) {
        if (pathArr[k] === '/') { _index.push(k) }
      }
      if (_index[2] === undefined) {
        state.nav[0].active = true
        state.title = ''
        state.subnav = []
        state.headNav = []
        console.log(state.nav)
      }
      // let path = arr.splice(arr.length - 1, 1)[0]
      // const navs = arr.concat()
      // state.c_nav = arr.concat()
      // state.nav = navs
      // let copyNav = arr.concat()
      // console.log(copyNav)
      // const len = navs.length
      // let copyNav = path.split('')
      // let _index = []
      // for (let k = 0; k < arr1.length; k++) {
      //   if (arr1[k] === '/') { _index.push(k) }
      // }
      // if (_index[2] === undefined) {
      //   copyNav[0].active = true
      //   state.title = copyNav[0].info
      //   state.subnav = copyNav[0].subnav
      //   state.headNav = []
      // } else {
      //   let str = path.substring(0, _index[2])
      //   for (let i = 0; i < len; i++) {
      //     for (let j = 0; j < copyNav[i].subnav.length; j++) {
      //       if (copyNav[i].subnav[j].path.indexOf(str) === 0) {
      //         copyNav[i].active = true
      //         copyNav[i].subnav[j].active = true
      //         state.subnav = copyNav[i].subnav
      //         state.title = copyNav[i].info
      //         state.headNav = copyNav[i].subnav[j].headnav
      //       }
      //     }
      //   }
      // }
    },
    GETSUBNAV (state, path) {
      console.log(state.c_nav)
      let copyNav = state.c_nav.concat()
      state.nav = copyNav
      let {nav} = state
      const len = nav.length
      const pathArr = path.split('')
      let newArr = []
      for (let k = 0; k < pathArr.length; k++) {
        if (pathArr[k] === '/') { newArr.push(k) }
      }
      if (newArr[2] === undefined) {
        nav[0].active = true
        state.title = nav[0].info
        state.subnav = nav[0].subnav
        state.headNav = []
      } else {
        let str = path.substring(0, newArr[2])
        for (let i = 0; i < len; i++) {
          for (let j = 0; j < nav[i].subnav.length; j++) {
            if (nav[i].subnav[j].path.indexOf(str) === 0) {
              console.log(333)
              nav[i].active = true
              console.log(nav[i].active)
              nav[i].subnav[j].active = true
              state.subnav = nav[i].subnav
              state.title = nav[i].info
              state.headNav = nav[i].subnav[j].headnav
            }
          }
        }
      }
    }
  }
})

export default store
