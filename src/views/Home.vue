<template>
  <div class="home">
    <header class="header">
      <div
        class="download-app"
        v-show="isShowDownloadApp"
      >
        <img
          class="download-app__img"
          src="@/assets/imgs/download-app.png"
        />
        <span
          class="download-app__close"
          @click="closeDownloadApp"
        ></span>
      </div>
      <div class="search">
        <div class="search__left">
          <img
            class="search__left__img"
            src="@assets/imgs/icon.png"
            alt="小米图标"
          >
        </div>
        <div class="search__middle">
          <div class="search__middle__icon-wrap">
            <i class="search__middle__icon iconfont icon-search"></i>
          </div>
          搜索商品名称
        </div>
        <div class="search__right">
          <i class="search__right__icon iconfont icon-user"></i>
        </div>
      </div>
      <div class="nav">
        <ul
          class="nav__shrink"
          v-show="!isShowAllCategory"
        >
          <li class="nav__shrink__item is-active">推荐</li>
          <li class="nav__shrink__item">手机</li>
          <li class="nav__shrink__item">智能</li>
          <li class="nav__shrink__item">电视</li>
          <li class="nav__shrink__item">笔记本</li>
          <li class="nav__shrink__item">家电</li>
          <li class="nav__shrink__item">生活周边</li>
          <li class="nav__shrink__item--extra"></li>
        </ul>
        <div
          class="nav__spread"
          v-show="isShowAllCategory"
        >
          <div class="nav__spread__title">全部</div>
        </div>
        <div
          class="nav__show-all"
          @click="isShowAllCategory = !isShowAllCategory"
        >
          <i
            class="nav__show-all__icon iconfont icon-up"
            :class="{'is-show-all': isShowAllCategory}"
          ></i>
        </div>
      </div>
    </header>
    <section
      class="content"
      :class="{'show-download-app': isShowDownloadApp}"
    >内容4</section>
  </div>
</template>

<script>
// @ is an alias to /src
import { HOME_APP_TIP } from '@common/js/constants'

export default {
  name: 'Home',
  data () {
    return {
      isShowDownloadApp: true, // 是否显示下载APP提示
      isShowAllCategory: false, // 显示所有一级分类
    }
  },
  methods: {
    /**
     * 初始化数据
     */
    initData () {
      const appTip = localStorage.getItem(HOME_APP_TIP)
      console.log(appTip)
      if (appTip) {
        this.isShowDownloadApp = appTip
      }
    },
    /**
     * 关闭下载APP提示
     */
    closeDownloadApp () {
      this.isShowDownloadApp = false
      localStorage.setItem(HOME_APP_TIP, false)
    },
  },
  created () {
    this.initData()
  },
}
</script>

<style lang="scss">
.home {
  position: absolute;
  top: 0;
  bottom: px2rem(52);
  width: 100%;
  background: #fff;

  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: $main-color2;
  }

  .download-app {
    position: relative;
    height: px2rem(50);
    font-size: 0;

    &__img {
      @include full-wh;
    }

    &__close {
      position: absolute;
      left: 0;
      top: 0;
      width: px2rem(50);
      height: px2rem(50);
    }
  }

  .search {
    @include flex(flex-start, center);
    height: px2rem(42);

    &__left,
    &__right {
      @include flex();
      width: px2rem(50);
      height: px2rem(30);
    }

    &__left__img {
      width: px2rem(24);
    }

    &__right__icon {
      font-size: px2rem(20);
      color: #999;
    }

    &__middle {
      flex-grow: 1;
      @include flex(flex-start);
      height: px2rem(30);
      border: 1px solid #e5e5e5;
      border-radius: px2rem(2);
      box-shadow: 0 0 1px #aaa;
      background: #fff;
      font-size: px2rem(15);
      color: rgba(0,0,0,.3);

      &__icon {
        font-size: px2rem(16);

        &-wrap {
          @include flex();
          width: px2rem(30);
          height: px2rem(30);
        }
      }
    }
  }

  .nav {
    position: relative;

    &__shrink {
      overflow-x: auto;
      white-space: nowrap;
      font-size: 0;

      // 隐藏滚动条
      &::-webkit-scrollbar {
        height: 0;
        background: transparent;
      }

      &__item {
        display: inline-block;
        box-sizing: border-box;
        border-bottom: px2rem(2) solid transparent;
        margin: 0 px2rem(12.5);
        font-size: px2rem(13);
        line-height: px2rem(27);
        color: #747474;

        &.is-active {
          color: $main-color;
          border-bottom-color: $main-color;
        }

        &--extra {
          display: inline-block;
          width: px2rem(38);
        }
      }
    }

    &__spread {
      padding: 0 px2rem(12.5);

      &__title {
        padding-top: px2rem(12.5);
        height: px2rem(16);
        vertical-align: bottom;
        font-size: px2rem(14);
        line-height: px2rem(27);
        color: #3c3c3c;
      }
    }

    &__show-all {
      position: absolute;
      right: 0;
      top: 0;
      width: px2rem(34);
      height: 100%;
      background: $main-color2;
      text-align: center;
      font-size: 0;
      box-shadow: -15px 0 15px 0 #f2f2f2;

      &__icon {
        display: inline-block;
        font-size: px2rem(13);
        line-height: px2rem(27);
        color: #747474;
        transform-origin: center;
        transform: rotate(180deg);
        transition: transform .2s linear;

        &.is-show-all {
          transform: rotate(360deg);
        }
      }
    }
  }

  .content {
    position: absolute;
    top: px2rem(70);
    bottom: 0;
    width: 100%;
    background: blue;

    &.show-download-app {
      top: px2rem(121);
    }
  }
}
</style>
