import * as types from './mutation-types'
import {
  playMode
} from 'common/js/config'
import {
  shuffle
} from 'common/js/util'
import {
  saveSearch,
  removeOneSearch,
  removeAllSearch,
  savePlayHistory
} from 'common/js/cache'
export const setUser = ({
  commit
}, data) => {
  commit(types.SET_USER_STATE, data)
}

function findIndex(list, song) {
  return list.findIndex(item => {
    return item.id === song.id
  })
}

// 顺序播放
export const selectPlay = ({
  commit,
  state
}, {
  list,
  index
}) => {
  commit(types.SET_SEQUENCE_LIST, list)
  // 如果当前播放模式为随机播放，则打乱播放顺序
  if (state.mode === playMode.random) {
    let randomList = shuffle(list)
    commit(types.SET_PLAY_LIST, randomList) // 记录当前播放列表
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAY_LIST, list) // 记录当前播放列表
  }
  commit(types.SET_CURRENT_INDEX, index) // 记录当前播放歌曲索引
  commit(types.SET_PALYING_STATE, true) //改变播放状态
  commit(types.SET_FULL_SCREEN, true) // 设置全屏    
}
// 随机播放
export const randomPlay = ({
  commit
}, {
  list
}) => {
  commit(types.SET_SEQUENCE_LIST, list)
  commit(types.SET_MODE, playMode.random) //设置播放模式为随机
  // 打乱歌曲列表
  const randomList = shuffle(list)
  commit(types.SET_PALYING_STATE, true) //改变播放状态
  commit(types.SET_FULL_SCREEN, true) // 设置全屏
  commit(types.SET_PLAY_LIST, randomList) // 记录当前播放列表
  commit(types.SET_CURRENT_INDEX, 0) // 记录当前播放歌曲索引
}

// 插入歌曲
export const insertSong = ({
  commit,
  state
}, song) => {
  let playlist = state.playlist.slice();
  let sequencelist = state.sequenceList.slice();
  let currentIndex = state.currentIndex;
  // 记录当前播放的歌曲
  let currentSong = playlist[currentIndex]

  let fpindex = findIndex(playlist, song);
  // 往歌曲列表中插入歌曲
  currentIndex++
  playlist.splice(currentIndex, 0, song);
  if (fpindex > -1) {
    //   删除playlist中相同的song
    //   如果插入歌曲的位置
    if (currentIndex > fpindex) { // [1,2,3,4,5,-->2]
      playlist.splice(fpindex, 1);
      currentIndex--
    } else {
      playlist.splice(fpindex + 1, 1); // [1,->2,2,3,4,5]
    }
  }

  let currentSIndex = findIndex(sequencelist, currentSong) + 1;
  let fsIndex = findIndex(sequencelist, song);
  // 插入这首歌到当前索引位置
  sequencelist.splice(currentSIndex, 0, song);
  if (fsIndex > -1) {
    //   删除playlist中相同的song
    //   如果插入歌曲的位置
    if (currentSIndex > fsIndex) { // [1,2,3,4,5,-->2]
      sequencelist.splice(fsIndex, 1);
      currentSIndex--
    } else {
      playlist.splice(fsIndex + 1, 1); // [1,->2,2,3,4,5]
    }
  }
  commit(types.SET_PLAY_LIST, playlist)
  commit(types.SET_SEQUENCE_LIST, sequencelist)
  commit(types.SET_CURRENT_INDEX, currentIndex) // 记录当前播放歌曲索引
  commit(types.SET_PALYING_STATE, true) //改变播放状态
  commit(types.SET_FULL_SCREEN, true) // 设置全屏 
}

export const saveSearchs = ({
  commit
}, searchs) => {
  commit(types.SET_SEARCH_HISTORY, saveSearch(searchs))
}

// 删除某个缓存

export const removeOneHistory = ({
  commit
}, query) => {
  commit(types.SET_SEARCH_HISTORY, removeOneSearch(query))
}
export const removeAllHistory = ({
  commit
}) => {
  commit(types.SET_SEARCH_HISTORY, removeAllSearch())
}

// 删除播放列表中一首歌
export const deleteOneSong = ({
  commit,
  state
}, song) => {
  let playlist = state.playlist.slice();
  let sequencelist = state.sequenceList.slice()
  let currentindex = state.currentIndex;
  const pIndex = findIndex(playlist, song)
  const sIndex = findIndex(sequencelist, song);
  playlist.splice(pIndex, 1);
  sequencelist.splice(sIndex, 1)

  if (sIndex < currentindex || currentindex === playlist.length) {
    currentindex--
  }

  const playstate = playlist.length > 0
  commit(types.SET_PALYING_STATE, playstate)
  commit(types.SET_PLAY_LIST, playlist)
  commit(types.SET_SEQUENCE_LIST, sequencelist)
  commit(types.SET_CURRENT_INDEX, currentindex)
}

// 删除所有歌曲
export const deleteAllSong = ({
  commit
}) => {
  commit(types.SET_PALYING_STATE, false)
  commit(types.SET_PLAY_LIST, [])
  commit(types.SET_SEQUENCE_LIST, [])
  commit(types.SET_CURRENT_INDEX, -1)
}

export const savePlay = ({
  commit
}, song) => {
  commit(types.SET_PLAY_HISTORY, savePlayHistory(song))
}
