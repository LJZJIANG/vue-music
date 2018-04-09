 import {
   playMode
 } from 'common/js/config'
 const state = {
   isLogin: false,
   currentUser: '小火柴',
   singer: {},
   //  播放器所需状态
   playing: false,
   fullScreen: false,
   playlist: [], //播放列表
   sequenceList: [], //顺序列表
   mode: playMode.sequence, //播放模式  默认顺序播放
   currentIndex: -1, //当前播放歌曲索引
 }

 export default state
