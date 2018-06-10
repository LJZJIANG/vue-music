<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn" @touchstart.prevent="progressTouchStart" @touchmove.prevent="progressTouchMove" @touchend="progressTouchEnd">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { prefixStyle } from "common/js/dom";

const progressBtnWidth = 16;
const transform = prefixStyle("transform");

export default {
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  created() {
    // 定义一个空对象，用户存储某些数据，并在methods中共享
    this.touch = {};
  },
  methods: {
    // 开始触摸
    progressTouchStart(e) {
      // 定义一个布尔变量，表示初始化
      this.touch.initiated = true;
      // 计算拖动的开始位置
      this.touch.startX = e.touches[0].pageX;
      // 计算进度按钮距离左侧位置
      this.touch.left = this.$refs.progress.clientWidth;
    },
    // 开始拖动
    progressTouchMove(e) {
      if (!this.touch.initiated) return;
      //  计算拖动的位置
      const deltaX = e.touches[0].pageX - this.touch.startX;
      //  因为拖动的时候，很可能拖动长度大于进度条总长度，所以此处需要取最小值
      const offsetWidth = Math.min(
        this.$refs.progressBar.clientWidth - progressBtnWidth,
        Math.max(0, this.touch.left + deltaX)
      );
      this._offset(offsetWidth);
      const percent =
        offsetWidth / (this.$refs.progressBar.clientWidth - progressBtnWidth);
      this.$emit("percent", percent);
    },
    // 滑动结束
    progressTouchEnd() {
      this.touch.initiated = false;
      this._triggerPercent();
    },
    // 点击进度条
    progressClick(e) {
      // 获取进度条按钮距离浏览器窗口的距离
      const rect = this.$refs.progressBar.getBoundingClientRect();
      const offsetWidth = e.pageX - rect.left;
      this._offset(offsetWidth);
      this._triggerPercent();
    },
    _triggerPercent() {
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth;
      const percent = this.$refs.progress.clientWidth / barWidth;
      this.$emit("percent", percent);
    },
    _offset(offsetWidth) {
      this.$refs.progress.style.width = `${offsetWidth}px`;
      this.$refs.progressBtn.style[
        transform
      ] = `translate3d(${offsetWidth}px,0,0)`;
    }
  },
  watch: {
    percent(newPersent) {
      if (newPersent >= 0 && !this.touch.initiated) {
        // 计算进度条长度= 总长度-圆球宽度
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth;
        // 计算已播放的长度
        let offsetWidth = newPersent * barWidth;
        this._offset(offsetWidth);
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.progress-bar {
  height: 30px;

  .bar-inner {
    position: relative;
    top: 13px;
    height: 4px;
    background: rgba(0, 0, 0, 0.3);

    .progress {
      position: absolute;
      height: 100%;
      background: $color-theme;
    }

    .progress-btn-wrapper {
      position: absolute;
      left: -8px;
      top: -13px;
      width: 30px;
      height: 30px;

      .progress-btn {
        position: relative;
        top: 7px;
        left: 7px;
        box-sizing: border-box;
        width: 16px;
        height: 16px;
        border: 3px solid $color-text;
        border-radius: 50%;
        background: $color-theme;
      }
    }
  }
}
</style>