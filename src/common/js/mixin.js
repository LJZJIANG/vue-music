import storage from 'good-storage'
import {
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import {
  playMode
} from "common/js/config";
import {
  shuffle
} from "common/js/util";

const IS_AUTO_LOGIN = '__autoLogin__'
const USER_NAME = '__username__'

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

export const checkAutoLogin = {
  mounted() {
    // let autoLogin = localStorage.getItem('autoLogin');
    let autoLogin = storage.get(IS_AUTO_LOGIN, [])
    if (autoLogin && autoLogin === true) {
      // this.$store.dispatch('setUser',localStorage.getItem('username'))
      this.setUser(storage.get(USER_NAME, []));
    }
    if (this.$store.getters.isLogin) {
      this.$router.push('recommend');
    }
  }
}

// 判断是否登录
export const checkIsLogin = {
  mounted() {
    let isLogin = storage.get(USER_NAME, []);
    if (!isLogin || !isLogin.length) {
      this.$router.push('login')
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
      "playing",
      "favoriteList"
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
    getFavoriteIcon(song) {
      if (this.isFavorite(song)) {
        return 'icon-favorite'
      }
      return 'icon-not-favorite'
    },
    toggleFavorite(song) {
      if (this.isFavorite(song)) {
        this.deleteForvorite(song)
      } else {
        this.saveForvorite(song)
      }
    },
    isFavorite(song) {
      let index = this.favoriteList.findIndex((item) => {
        return item.id === song.id
      })
      return index > -1
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
    }),
    ...mapActions(['saveForvorite', 'deleteForvorite'])
  }

}


export const playMixin = {
  data() {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  computed: {
    ...mapGetters(["searchHistory"])
  },
  methods: {
    addQuery(query) {
      this.$refs.searchBox.addQuery(query);
    },
    onQueryChange(query) {
      this.query = query;
    },
    inputBlur() {
      this.$refs.searchBox.blur();
    },
    saveSearch() {
      this.saveSearchs(this.query); // 加入状态管理中
    },
    // 删除缓存
    deleteSearchHistory(item) {
      this.removeOneHistory(item);
    },
    ...mapActions(["saveSearchs", "removeOneHistory"])
  }
}
