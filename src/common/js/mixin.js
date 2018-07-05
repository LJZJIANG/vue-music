import {
  mapGetters,
  mapMutations
} from 'vuex'
import {
  playMode
} from "common/js/config";
import { shuffle } from "common/js/util";
export const playListMixin = {
  computed: {
    ...mapGetters(['playlist'])
  },
  created() {
    this.handlePlaylist(this.playlist)
  },
  // 离开缓存组件时触发
  activated() {
    //   console.log(this.playlist)
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist(newVal) {
      this.handlePlaylist(this.playlist)
    }
  },
  methods: {
    handlePlaylist() {
      throw new Error('组件中必须声明handlePlaylist方法')

    }
  }
}

export const checkIsLogin = {
  mounted() {
    let autoLogin = localStorage.getItem('autoLogin');
    if (autoLogin) {
      // this.$store.dispatch('setUser',localStorage.getItem('username'))
      this.setUser(localStorage.getItem('username'));
    }
    if (this.$store.getters.isLogin) {
      this.$router.push('recommend');
    }
  }
}

export const playerMixin = {
  computed: {
    iconMode() {
      return this.mode === playMode.sequence ?
        "icon-sequence" :
        this.mode === playMode.loop ? "icon-loop" : "icon-random";
    },
    ...mapGetters([
      "sequenceList",
      "playlist",
      "mode",
      "currentSong",
      "playing"
    ])
  },
  methods: {
    // 切换播放模式
    changePlayMode() {
      const mode = (this.mode + 1) % 3;
      this.setPlayMode(mode);
      let list = null;
      if (mode === playMode.random) {
        // 随机播放
        list = shuffle(this.sequenceList);
      } else {
        // 顺序播放
        list = this.sequenceList;
      }
      this.resetCurrentIndex(list);
      this.setPlayList(list);
    },
    resetCurrentIndex(list) {
      // 获取相同id的第一个元素的索引
      let index = list.findIndex(item => {
        return item.id === this.currentSong.id;
      });
      this.setCurrentIndex(index);
    },
    ...mapMutations({
      setCurrentIndex: "SET_CURRENT_INDEX",
      setPlayMode: "SET_MODE",
      setPlayList: "SET_PLAY_LIST",
      setPlayingState: "SET_PALYING_STATE"
    })
  }

}
