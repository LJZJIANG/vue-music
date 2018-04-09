import * as types from './mutation-types'

const mutations = {
  [types.SET_USER_STATE](state, data) {
    if (data) {
      state.currentUser = data
      state.isLogin = true
    } else {
      state.currentUser = null
      state.isLogin = false
    }
  },
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PALYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAY_LIST](state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  }
}

export default mutations
