<template>
  <div class="m-header">
    <div class="icon" @click="showUserInfo"></div>
    <h1 class="text" @click="showUserInfo">{{getUser}}</h1>
    <router-link tag="div" to="/user" class="mine"><i class="icon-mine"></i></router-link>
  </div>
</template>

<script>
  export default {
    computed:{
      getUser(){
        return this.$store.getters.currentUser
      },
      isLogin(){
        return this.$store.getters.isLogin
      }
    },
    methods:{
      showUserInfo(){
        this.$emit('showPop')
      }
      /* jump(){
        this.$router.push('/mybutton')
      } */
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../common/stylus/variable'
  @import '../../common/stylus/mixin'

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 6px
      width: 30px
      height: 32px
      margin-right: 9px
      bg-image('logo')
      background-size: 30px 32px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
    .mine
      position: absolute
      top: 0
      right: 0
      .icon-mine
        display: block
        padding: 12px
        font-size: 20px
        color: $color-theme
</style>
