/**
 * vuex 
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isLogin: false,
    currentUser: '小火柴'
  },
  getters: {
    isLogin: state => state.isLogin,
    currentUser:state => state.currentUser
  },
  mutations: {
    userStatus(state, data) {
      if (data) {
        state.currentUser = data
        state.isLogin = true
      } else {
        state.currentUser = null
        state.isLogin = false
      }
    }
  },
  actions: {
    setUser({
      commit
    }, data) {
      commit('userStatus', data)
    }
  }
})
