<template>
  <div class="recommend" ref="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper" ref="sliderWrapper">
          <slider>
            <div v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img @load="loadImage" class="needsclick" :src="item.picUrl">
              </a>
            </div>
          </slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌曲推荐</h1>
          <ul>
            <li @click="selectItem(item)" v-for="(item,index) in discList" class="item" :key="index">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl" alt="">
              </div>
              <div class="text">
                <p class="name" v-html="item.creator.name"></p>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading></loading>
      </div>
    </scroll>
    <div class="tip-container">
      <top-tip ref="topTip">
        <div class="tip-title">
          <span class="text" v-text="info"></span>
        </div>
      </top-tip>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ERR_OK } from "api/config";
import { getRecommend, getDiscList } from "api/recommend";
import Slider from "base/slider/slider";
import Scroll from "base/scroll/scroll";
import Loading from "base/loading/loading";
import { mapGetters, mapMutations } from "vuex";
import { playListMixin } from "common/js/mixin";
import TopTip from "base/top-tip/top-tip";
export default {
  data() {
    return {
      recommends: [],
      discList: [],
      info: "欢迎回来"
    };
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  mixins: [ playListMixin],
  created() {
    this.$nextTick(() => {
      this._getRecommend();
      this._getDiscList();
    });
  },
  mounted() {
    setTimeout(() => {
      this.info = `欢迎回来,${this.currentUser}`;
      this.$refs.topTip.show();
    }, 100);
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? "60px" : "";
      const list = this.$refs.recommend;
      if (list) {
        list.style.bottom = bottom;
        // 调用子组件的refresh方法，刷新
        this.$refs.scroll.refresh();
      }
    },
    selectItem(item) {
      this.$router.push({
        path: `/recommend/${item.dissid}`
      });

      this.setDisc(item);
    },
    // 获取推荐
    _getRecommend() {
      getRecommend().then(res => {
        if (res.code === ERR_OK) {
          // console.log(res.data)
          this.recommends = res.data.slider;
        }
      });
    },
    _getDiscList() {
      getDiscList().then(res => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list;
        }
      });
    },
    loadImage() {
      if (!this.checkloaded) {
        this.checkloaded = true;
        this.$refs.scroll.refresh();
      }
    },
    ...mapMutations({ setUser: "SET_USER_STATE", setDisc: "SET_DISC" })
  },
  components: {
    Slider,
    Scroll,
    Loading,
    TopTip
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';

.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }

    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;

      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;

        .name {
          margin-bottom: 10px;
          color: $color-text;
        }

        .desc {
          color: $color-text-d;
        }
      }
    }
  }

  .tip-container {
    position: fixed;
    top: 400px;
    left: 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
  }
}
</style>