<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @Query="onQueryChange" @refreshScroll="refreshScroll"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="!query" ref="shortcutWrapper">
      <scroll class="shortcut" ref="shortcut" :refreshDelay="refreshDelay">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li @click="addQuery(item.k)" class="item" v-for="item in hotKey" :key="item.k">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span @click="showConfirm" class="clear">
                <i class="icon-clear"></i>
              </span>
            </h1>
            <search-list @delete="deleteSearchHistory" @select="addQuery" :searches="searchHistory"></search-list>
          </div>
        </div>
      </scroll>
    </div>
    <div class="search-result" v-show="query" ref="searchResult">
      <suggest ref="suggest" :query="query" :showSinger="showSinger" @listScroll="inputBlur" @saveSearch="saveSearch"></suggest>
    </div>
    <confirm ref="confirm" @confirm="removeAllSearch" text="确定要清空所有搜索记录？" confirmBtnText="想好了" cancelBtnText="还是算了"></confirm>
    <router-view></router-view>
  </div>
</template>
<script type="text/ecmascript-6">
import SearchBox from "base/search-box/search-box";
import Scroll from "base/scroll/scroll";
import SearchList from "base/search-list/search-list";
import Confirm from "base/confirm/confirm";
import Suggest from "components/suggest/suggest";
import { getHotKey } from "api/search";
import { checkIsLogin,playListMixin,playMixin } from "common/js/mixin";
import { ERR_OK } from "api/config";
import {mapActions } from "vuex";
export default {
  mixins: [checkIsLogin,playListMixin,playMixin],
  
  data() {
    return {
      hotKey: [],
      showSinger: true,
      isShowConfirm: false
    };
  },
  created() {
    this._getHotKey();
  },
  components: {
    SearchBox,
    Scroll,
    Suggest,
    SearchList,
    Confirm
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? "60px" : "";
      const shortcutWrapper = this.$refs.shortcutWrapper;
      const searchResult = this.$refs.searchResult;

      // 在created中也调用了此方法，此时dom还没有加载，所以需要判断是否存在
      if (shortcutWrapper || searchResult) {
        shortcutWrapper.style.bottom = bottom;
        searchResult.style.bottom = bottom;
      }
      setTimeout(() => {
        this.$refs.shortcut.refresh();
        this.$refs.suggest.refresh();
      }, 1000);
    },
    refreshScroll(){
      setTimeout(() => {
        this.$refs.shortcut.refresh();
      }, 1000);
    },
    showConfirm() {
      this.$refs.confirm.show();
    },
   
    removeAllSearch() {
      this.removeAllHistory();
    },

    _getHotKey() {
      getHotKey().then(res => {
        if (ERR_OK === res.code) {
          this.hotKey = res.data.hotkey.slice(0, 10);
        }
      });
    },
    ...mapActions(["removeAllHistory"])
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';
@import '~common/stylus/mixin';

.search {
  .search-box-wrapper {
    margin: 20px;
  }

  .shortcut-wrapper {
    position: fixed;
    top: 178px;
    bottom: 0;
    width: 100%;

    .shortcut {
      height: 100%;
      overflow: hidden;

      .hot-key {
        margin: 0 20px 20px 20px;

        .title {
          margin-bottom: 20px;
          font-size: $font-size-medium;
          color: $color-text-l;
        }

        .item {
          display: inline-block;
          padding: 5px 10px;
          margin: 0 20px 10px 0;
          border-radius: 6px;
          background: $color-highlight-background;
          font-size: $font-size-medium;
          color: $color-text-d;
        }
      }

      .search-history {
        position: relative;
        margin: 0 20px;

        .title {
          display: flex;
          align-items: center;
          height: 40px;
          font-size: $font-size-medium;
          color: $color-text-l;

          .text {
            flex: 1;
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
    }
  }

  .search-result {
    position: fixed;
    width: 100%;
    top: 178px;
    bottom: 0;
  }
}
</style>