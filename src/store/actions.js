import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

export const setUser = ({commit},data)=>{
    commit(types.SET_USER_STATE,data)
}

function findIndex(list,song) {
    return list.findIndex(item=>{
        return item.id === song.id
    })
}

// 顺序播放
export const selectPlay = ({commit,state},{list,index})=>{
    commit(types.SET_SEQUENCE_LIST,list)
    // 如果当前播放模式为随机播放，则打乱播放顺序
    if (state.mode===playMode.random) {
        let randomList = shuffle(list)
        commit(types.SET_PLAY_LIST,randomList) // 记录当前播放列表
        index =  findIndex(randomList,list[index])
    } else {
        commit(types.SET_PLAY_LIST,list) // 记录当前播放列表
    }
    commit(types.SET_CURRENT_INDEX,index) // 记录当前播放歌曲索引
    commit(types.SET_PALYING_STATE,true) //改变播放状态
    commit(types.SET_FULL_SCREEN,true) // 设置全屏    
}
// 随机播放
export const randomPlay = ({commit},{list})=>{
    commit(types.SET_SEQUENCE_LIST,list)
    commit(types.SET_MODE,playMode.random) //设置播放模式为随机
    // 打乱歌曲列表
    const randomList = shuffle(list)
    commit(types.SET_PALYING_STATE,true) //改变播放状态
    commit(types.SET_FULL_SCREEN,true) // 设置全屏
    commit(types.SET_PLAY_LIST,randomList) // 记录当前播放列表
    commit(types.SET_CURRENT_INDEX,0) // 记录当前播放歌曲索引
}