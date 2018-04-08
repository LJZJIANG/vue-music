<template>
  <transition name="slide">
      <music-list :songs='songs' :title='title' :bgImage='bgImage'></music-list>
  </transition>
</template>
<script>
import { mapGetters } from "vuex";
import { getSingerDetail } from "api/singer";
import { ERR_OK } from "api/config";
import { createSong } from "common/js/song";
import MusicList  from 'components/music-list/music-list'
export default {
  data() {
    return {
      songs: []
    };
  },
  computed: {
    ...mapGetters(["singer"]),
    title(){
        return this.singer.name
    },
    bgImage(){
        return this.singer.avatar
    }
  },
  created() {
    this._getSingerDetail();
  },
  methods: {
    _getSingerDetail() {
      //   如果不是从歌手列表来的，刷新请求不到数据，因为没有singer id
      if (!this.singer.id) {
        this.$router.push("/singer");
        return;
      }
      getSingerDetail(this.singer.id).then(res => {
        if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
            // console.log(this.songs)
        }
      });
    },
    // 将歌曲数据格式化样式
    _normalizeSongs(list) {
      let ret = [];
      list.forEach(item => {
        let { musicData } = item;
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData));
        }
      });
      return ret;
    }
  },
  components:{
      MusicList
  }
};
</script>

<style lang="stylus" scoped>
 .slide-enter-active, .slide-leave-active
    transition: all 0.3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
