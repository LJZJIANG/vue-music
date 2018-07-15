<template>
  <transition name="list-fade">
    <div class="playlist" v-show="showFlag" @click="hide">
      <div class="list-wrapper" @click.stop>
        <div class="list-header">
          <h1 class="title">
            <i class="icon" :class="iconMode" @click="changePlayMode"></i>
            <span class="text">{{playModeText}}</span>
            <span class="clear" @click.stop="showConfirm">
              <i class="icon-clear"></i>
            </span>
          </h1>
        </div>
        <scroll ref="listContent" :refreshDelay="refreshDelay" :data="sequenceList" class="list-content">
          <transition-group ref="list" name="list" tag="ul">
            <li ref="songItem" :key="item.mid" class="item" v-for="(item,index) in sequenceList" @click="selectItem(item,index)">
              <i class="current" :class="getCurrentIcon(item)"></i>
              <span class="text">{{item.name}}</span>
              <span class="like" @click.stop="toggleFavorite(item)">
                <i class="icon" :class="getFavoriteIcon(item)"></i>
              </span>
              <span @click.stop="deleteOne(item)" class="delete">
                <i class="icon-delete"></i>
              </span>
            </li>
          </transition-group>
        </scroll>
        <div class="list-operate">
          <div class="add" @click="addsong">
            <i class="icon-add"></i>
            <span class="text">添加歌曲到队列</span>
          </div>
        </div>
        <div class="list-close" @click="hide">
          <span>关闭</span>
        </div>
      </div>
      <confirm ref="confirm" @confirm="confirmClear" text="是否清空播放列表" confirmBtnText="清空"></confirm>
      <addsong ref="addsong" @hide="hidePlayList"></addsong>
    </div>
  </transition>
</template>
<script>
import Scroll from "base/scroll/scroll";
import Confirm from "base/confirm/confirm";
import Addsong from "components/add-song/add-song";
import { mapGetters, mapActions } from "vuex";
import { playMode } from "common/js/config";
import { playerMixin } from "common/js/mixin";
export default {
  mixins: [playerMixin],
  data() {
    return {
      showFlag: false,
      refreshDelay: 100
    };
  },
  computed: {
    playModeText() {
      return this.mode === playMode.sequence
        ? "顺序播放"
        : this.mode === playMode.random ? "随机播放" : "单曲循环";
    }
  },
  methods: {
    addsong() {
      this.$refs.addsong.show();
    },
    showConfirm() {
      this.$refs.confirm.show();
    },
    show() {
      this.showFlag = true;
      this.$nextTick(() => {
        this.$refs.listContent.refresh();
        this.scrollToCurrent(this.currentSong);
      });
    },
    hide() {
      this.showFlag = false;
    },
    hidePlayList() {
      this.hide();
    },
    selectItem(item, index) {
      if (this.mode === playMode.random) {
        index = this.playlist.findIndex(song => {
          return song.id === item.id;
        });
      }
      this.setCurrentIndex(index);
      if (!this.playing) {
        this.setPlayingState(true);
      }
      this.scrollToCurrent(item);
    },
    getCurrentIcon(item) {
      if (item.id === this.currentSong.id) {
        return "icon-play";
      }
      return "";
    },
    // 滚动到顶部
    scrollToCurrent(item) {
      const index = this.sequenceList.findIndex(song => {
        return song.id === item.id;
      });
      this.$refs.listContent.scrollToElement(this.$refs.songItem[index]);
    },
    deleteOne(item) {
      this.deleteOneSong(item);
      if (!this.playlist.length) {
        this.hide();
      }
    },
    // 清空所有
    confirmClear() {
      this.deleteAllSong();
    },
    ...mapActions(["deleteOneSong", "deleteAllSong"])
  },
  components: {
    Scroll,
    Confirm,
    Addsong
  }
};
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.playlist {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 200;
  background-color: $color-background-d;

  &.list-fade-enter-active, &.list-fade-leave-active {
    transition: opacity 0.3s;

    .list-wrapper {
      transition: all 0.3s;
    }
  }

  &.list-fade-enter, &.list-fade-leave-to {
    opacity: 0;

    .list-wrapper {
      transform: translate3d(0, 100%, 0);
    }
  }

  &.list-fade-enter, .list-wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: $color-highlight-background;

    .list-header {
      position: relative;
      padding: 20px 30px 10px 20px;

      .title {
        display: flex;
        align-items: center;

        .icon {
          margin-right: 10px;
          font-size: 30px;
          color: $color-theme-d;
        }

        .text {
          flex: 1;
          font-size: $font-size-medium;
          color: $color-text-l;
        }

        .clear {
          extend-click();

          .icon-clear {
            font-size: $font-size-medium;
            color: $color-text-d;
          }
        }
      }
    }

    .list-content {
      max-height: 240px;
      overflow: hidden;

      .item {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 30px 0 20px;
        overflow: hidden;

        &.list-enter-active, &.list-leave-active {
          transition: all 0.1s;
        }

        &.list-enter, &.list-leave-to {
          height: 0;
        }

        .current {
          flex: 0 0 20px;
          width: 20px;
          font-size: $font-size-small;
          color: $color-theme-d;
        }

        .text {
          flex: 1;
          no-wrap();
          font-size: $font-size-medium;
          color: $color-text-d;
        }

        .like {
          extend-click();
          margin-right: 15px;
          font-size: $font-size-small;
          color: $color-theme;

          .icon-favorite {
            color: $color-sub-theme;
          }
        }

        .delete {
          extend-click();
          font-size: $font-size-small;
          color: $color-theme;
        }
      }
    }

    .list-operate {
      width: 140px;
      margin: 20px auto 30px auto;

      .add {
        display: flex;
        align-items: center;
        padding: 8px 16px;
        border: 1px solid $color-text-l;
        border-radius: 100px;
        color: $color-text-l;

        .icon-add {
          margin-right: 5px;
          font-size: $font-size-small-s;
        }

        .text {
          font-size: $font-size-small;
        }
      }
    }

    .list-close {
      text-align: center;
      line-height: 50px;
      background: $color-background;
      font-size: $font-size-medium-x;
      color: $color-text-l;
    }
  }
}
</style>