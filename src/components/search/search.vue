<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @Query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="!query">
      <scroll class="shortcut">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li @click="addQuery(item.k)" class="item" v-for="item in hotKey">
                <span>{{item.k}}</span>
              </li>
            </ul>
          </div>
          <!-- <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span @click="showConfirm" class="clear">
                <i class="icon-clear"></i>
              </span>
            </h1>
            <search-list @delete="deleteSearchHistory" @select="addQuery" :searches="searchHistory"></search-list>
          </div> -->
        </div>
      </scroll>
    </div>
    <div class="search-result" v-show="query" ref="searchResult">
      <suggest ref="suggest" :query="query" :showSinger="showSinger"></suggest>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import SearchBox from "base/search-box/search-box";
import Scroll from "base/scroll/scroll";
import Suggest from "components/suggest/suggest";
import { getHotKey } from "api/search";
import { ERR_OK } from "api/config";
export default {
  data() {
    return {
      hotKey: [],
      query: "",
      showSinger: true
    };
  },
  created() {
    this._getHotKey();
  },
  components: {
    SearchBox,
    Scroll,
    Suggest
  },
  methods: {
    addQuery(query) {
      this.$refs.searchBox.addQuery(query);
    },
    onQueryChange(query) {
      this.query = query;
    },
    _getHotKey() {
      getHotKey().then(res => {
        if (ERR_OK === res.code) {
          this.hotKey = res.data.hotkey.slice(0, 10);
        }
      });
    }
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