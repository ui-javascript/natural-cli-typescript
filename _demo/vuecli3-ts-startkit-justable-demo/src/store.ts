import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: '匿名'
  },
  getters: {
    getUsername: state => {
      return state.username
    }
  },
  mutations: {
    setUsername (state, payload) {
      if (payload) {
        state.username = payload
      }
    }
  },
  actions: {
  }
})
