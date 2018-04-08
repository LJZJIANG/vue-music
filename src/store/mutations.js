import * as types from './mutation-types'

const mutations = {
  [types.USER_STATUS](state, data) {
    if (data) {
      state.currentUser = data
      state.isLogin = true
    } else {
      state.currentUser = null
      state.isLogin = false
    }
  },
  [types.SET_SINGER](state,singer){
      state.singer = singer
  }
}

export default mutations