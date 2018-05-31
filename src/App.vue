<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- 将页面存入缓存，页面返回时，不在请求数据 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
var _this;
import MHeader from "components/mHeader/mHeader";
import Tab from "components/tab/tab";
import Player from 'components/player/player'
export default {
  name: "App",
  components: {
    MHeader,
    Tab,
    Player
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
  }
};
</script>

<style>

</style>
