<template>
    <transition name="fade">
        <div class="pop-container" v-show="showFlag">
            <div class="content">
                <div class="line">
                    <img src="../../common/image/name.png" alt="">
                    <span>姓名:</span>
                    <p>youth</p>
                </div>
                <div class="line">
                    <img src="../../common/image/job.png" alt="">
                    <span>职位:</span>
                    <p>前端攻城狮</p>
                </div>
                <div class="line">
                    <img src="../../common/image/email.png" alt="">
                    <span>邮箱:</span>
                    <p>lovelifelj@qq.com</p>
                </div>
                <div class="line">
                    <img src="../../common/image/github.png" alt="">
                    <span>GitHub:</span>
                    <a href="https://github.com/LJZJIANG" target="_blank">https://github.com/LJZJIANG</a>
                </div>
                <div class="line">
                    <img src="../../common/image/blog.png" alt="">
                    <span>博客:</span>
                    <a href="https://segmentfault.com/u/ljzjiang" target="_blank">https://segmentfault.com/u/ljzjiang</a>
                </div>
                <div class="close-container">
                    <div @click.stop="hide">关闭</div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    show() {
      this.showFlag = true;
    },
    hide() {
      this.showFlag = false;
    }
  }
};
</script>
<style lang="stylus" scoped>
.pop-container {
    position: fixed;
    width: 84%;
    top: 30%;
    left: 8%;
    background: #fff;
    z-index: 999;
    padding: 5px 10px;
    border-radius: 5px;
    color: #888;
    box-sizing: border-box;
    font-size: 14px;

    &.fade-enter-active, &.fade-leave-active {
        transition: all 0.5s;
    }

    &.fade-enter, &.fade-leave-to {
        transform: translate3d(0, -500px, 0);
    }

    &.fade-, .line {
        height: 50px;
        line-height: 50px;
        display: flex;
        border-bottom: 1px solid #76a4bf;
        align-items: center;

        img {
            width: 22px;
            height: 22px;
            margin-right: 5px;
        }

        a {
            width: 75%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .close-container {
        padding: 10px 0;

        div {
            border: 1px solid #FF7375;
            background: #FF7375;
            height: 40px;
            line-height: 40px;
            width: 80%;
            margin: 0 auto;
            border-radius: 40px;
            text-align: center;
            letter-spacing: 5px;
            color: #fff;
        }
    }
}
</style>
