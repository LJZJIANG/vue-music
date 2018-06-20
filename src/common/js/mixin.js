import {
  mapGetters
} from 'vuex'
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
      playlist(newVal){
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
