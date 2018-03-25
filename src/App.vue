<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <!-- 将页面存入缓存，页面返回时，不在请求数据 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/mHeader/mHeader'
import Tab from 'components/tab/tab'
export default {
  name: 'App',
  components:{
    MHeader,
    Tab
  }
}
</script>

<style>

</style>
