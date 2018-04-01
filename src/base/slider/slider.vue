<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
      <div class="dots">
      <span class="dot" :class="{active: currentPageIndex === index }" v-for="(item, index) in dots"></span>
    </div>
    
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { addClass } from "../../common/js/dom";
export default {
  name: "slider",
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    };
  },
  created() {
    setTimeout(() => {
      this._setSliderWidth();
      this._initDots();
      this._initSlider();
    }, 20);
    if (this.autoPlay) {
      this._play();
    }
    // 监听窗口大小变化
    window.addEventListener("resize", () => {
      if(!this.slider){ // 如果slider还没有初始化
        return
      }
      this._setSliderWidth(true);
      this.slider.refresh(); //调用slider api刷新
    });
  },
  // 页面离开时，清除定时器，释放缓存
  destroyed(){
    clearTimeout(this.timer);
  },
  methods: {
    _setSliderWidth(isResize) {
      this.children = this.$refs.sliderGroup.children;
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth; //获取外出slider的宽度
      for (let i = 0; i < this.children.length; i++) {
        const child = this.children[i];
        child.style.width = sliderWidth + "px";
        width += sliderWidth;
        addClass(child, "slider-item");
      }
      // children.forEach(item => {
      //   console.log(item)
      //   item.style.width = sliderWidth+'px';
      //   width += sliderWidth;
      //   addClass(item,'slider-item');
      // });
      if (this.loop && !isResize) {
        width += sliderWidth * 2;
      }
      this.$refs.sliderGroup.style.width = width + "px";
    },
    // 初始化轮播
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true, //左右滑动
        scrollY: false, // 上下滑动
        momentum: false, //是否开启滑动惯性
        snap: true, //
        snapLoop: this.loop, //是否可以无缝循环轮播
        snapThreshold: 0.3, //手指滑动可切换的阈值
        snapSpeed: 400 //切换的时间
        ,click:true
      });
      this.slider.on("scrollEnd", () => {
        // 监听轮播滚动滚动结束
        let pageIndex = this.slider.getCurrentPage().pageX; // 获取当前页面的index
        if (this.loop) {
          pageIndex -= 1;
        }
        this.currentPageIndex = pageIndex;
        if (this.autoPlay) {
          this._play();
        }
      });
      // 如果是自动轮播，滑动的时候清除定时器
      this.slider.on("beforeScrollStart", () => {
        if (this.autoPlay) {
          clearTimeout(this.timer);
        }
      });
    },
    // 初始化轮播分页器
    _initDots() {
      this.dots = new Array(this.children.length);
    },
    // 自动播放
    _play() {
      let pageIndex = this.currentPageIndex + 1;
      if (this.loop) {
        pageIndex += 1;
      }
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400);
      }, this.interval);
    }
  }
};
</script>



<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable';

.slider {
  min-height: 1px;
  position relative;
  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;

    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;

      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;

    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;

      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
</style>