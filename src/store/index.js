import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    num: 123,
    nav: []
  },
  mutations: {
    add (state) {
      state.num += 1
    },
    less (state) {
      state.num--
    },
    GETNAV (state, arr) {
      state.nav = arr
    }
  },
  actions: {
    getNavs ({commit}) {
      axios.get('/static/mock/nav.json').then((res) => {
        commit('GETNAV', res.data.res_body.nav)
      })
    }
  }
})

export default store
