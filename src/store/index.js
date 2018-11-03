import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nav: [],
    subnav: []
  },
  mutations: {
    GETNAV (state, arr) {
      state.nav = arr
    },
    GETSUBNAV (state, arr) {
      console.log(state, arr)
    }
  },
  actions: {
    getNavs ({commit}) {
      axios.get('/static/mock/nav.json').then((res) => {
        console.log(res)
        commit('GETNAV', res.data.res_body.nav)
      })
    }
  }
})

export default store
