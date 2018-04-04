<template>
  <div class="singer" ref="singer">
    <listview :data='singerList'></listview>
  </div>
</template>

<script>
import { getSingerList } from "api/singer";
import { ERR_OK } from "api/config";
import Singer from "common/js/singer";
import Listview from "base/listview/listview";
const HOT_NAME = "热门";
const HOT_SINGER_LEN = 10;
const OTHER_NAME= '其他';
import {testMixin} from 'common/js/mixin'
export default {
  data() {
    return {
      singerList: []
    };
  },
  mixins:[testMixin],
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singerList =this. __normalizeSinger(res.data.list)
          // console.log(this.__normalizeSinger(res.data.list));
        }
      });
    },
    // 将歌手数据转换成想要的结构
    __normalizeSinger(list) {
      // 定义map对象，存储热门歌手和其他歌手信息
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      };

      list.forEach((item, index) => {
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(
            new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            })
          );
        }

        let key = item.Findex;
        if (!key.match(/[a-zA-Z]/)) {
          key = OTHER_NAME;
        }        
        // 如果map中map[key]没有对应的,则添加
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          };
        }

        map[key].items.push(
          new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          })
        );
      });
      // 为了得到有序列表，我们需要处理 map
      let ret = [];
      let hot = [];
      let other = [];//存储title为数字之类的歌手
      for (const key in map) {
        let val = map[key];
        if (val.title === HOT_NAME) {
          hot.push(val);
        } else if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val);
        }else{
          other.push(val);
        }
      }

      // 将数组 按照a-z  A-Z 的顺序排列
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      // 将两个数组拼接
      return hot.concat(ret,other);
    }
  },
  components:{
    Listview
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
  .social-share{
    position fixed
    width 100%
    bottom 0
    left 0
  }
}
</style>
