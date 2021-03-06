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
  },
  [types.SET_DISC](state, disc) {
    state.disc = disc
  },
  [types.SET_TOP_LIST](state, toplist) {
    state.toplist = toplist
  },
  [types.SET_SEARCH_HISTORY](state, searchs) {
    state.searchHistory = searchs
  },
  [types.SET_PLAY_HISTORY](state, history) {
    state.playHistory = history
  },
  [types.SET_FAVORITE_LIST](state, list) {
    state.favoriteList = list
  }
}

export default mutations
