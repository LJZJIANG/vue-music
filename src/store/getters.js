export const isLogin = state => state.isLogin
export const currentUser = state => state.currentUser
export const singer = state => state.singer
export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playlist = state => state.playlist
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex
// 返回当前播放歌曲 如果没有，则返回空对象
export const currentSong = state => {
  return state.playlist[state.currentIndex] || {}
}
