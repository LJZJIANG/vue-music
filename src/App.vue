<template>
  <div id="app">
    <m-header @showPop="showPop"></m-header>
    <tab></tab>
    
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
    </router-view>

    <player></player>
    <pop ref="pop"></pop>
  </div>
</template>

<script>
// 将页面存入缓存，页面返回时，不在请求数据
//      <keep-alive include="rank">
//     需求：排行榜==》歌手页面  缓存     搜索==》歌手页面  加载 （详见search、singer文件）
var _this;
import MHeader from "components/mHeader/mHeader";
import Tab from "components/tab/tab";
import Player from "components/player/player";
import Pop from "base/pop/pop";
export default {
  name: "App",
  components: {
    MHeader,
    Tab,
    Player,
    Pop
  },
  created() {
    _this = this;
    var path, query, path_arr;
    document.addEventListener("backbutton", function() {
      alert(111);
      var handled_path = "";
      console.log("path: ", this.$route.path);
      // console.log("query: ", _this.$route.query);
      path = this.$route.path;
      query = this.$route.query;
      switch (path) {
        case "/recommend":
          navigator.app.exitApp();
          break;
        case "/singer":
          navigator.app.exitApp();
          break;
        case "/rank":
          navigator.app.exitApp();
          break;
        case "/login":
          navigator.app.exitApp();
          break;
        case "/register":
          navigator.app.exitApp();
          break;
        case "/search":
          navigator.app.exitApp();
          break;
        case "/Register":
          this.$router.push({ path: "/" });
          break;
        case "/UserInfo":
          this.$router.push({ path: query.parent });
          break;
        default:
          path_arr = path.split("/");
          path_arr.pop();
          for (var i = 0, len = path_arr.length; i < len; ++i) {
            handled_path += path_arr[i] ? `/${path_arr[i]}` : "";
          }
          console.log("handled_path: ", handled_path);
          this.$router.push({ path: handled_path, query: query });
          break;
      }
    });
  },
  methods: {
    showPop() {
      this.$refs.pop.show();
    }
  }
};
</script>

<style>
</style>
