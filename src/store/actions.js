import * as types from './mutation-types'

export const setUser = ({commit},data)=>{
    commit(types.SET_USER_STATE,data)
}

export const selectPlay = ({commit,state},{list,index})=>{
    commit(types.SET_PALYING_STATE,true) //改变播放状态
    commit(types.SET_FULL_SCREEN,true) // 设置全屏
    commit(types.SET_PLAY_LIST,list) // 记录当前播放列表
    commit(types.SET_CURRENT_INDEX,index) // 记录当前播放歌曲索引
}