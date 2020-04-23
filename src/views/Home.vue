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
        <div
          class="search__middle"
          @click="$router.push({ name: 'Search' })"
        >
          <div class="search__middle__icon-wrap">
            <i class="search__middle__icon iconfont icon-search"></i>
          </div>
          搜索商品名称
        </div>
        <div
          class="search__right"
          @click="$router.push({name: 'User'})"
        >
          <i class="search__right__icon iconfont icon-user"></i>
        </div>
      </div>
      <div class="nav">
        <ul
          class="nav__shrink"
          v-show="!isShowAllCategory"
          ref="navShrink"
        >
          <li
            v-for="item in categoryList"
            :key="item.id"
            class="nav__shrink__item"
            :class="{'is-active': activeCategory === item.id}"
            :ref="item.id"
            @click="chgCategory(item.id)"
          >{{item.name}}</li>
          <!-- 占位，否则最后一个会被，显示全部按钮挡住 -->
          <li class="nav__shrink__item--extra"></li>
        </ul>
        <div
          class="nav__spread"
          v-show="isShowAllCategory"
        >
          <div class="nav__spread__title">全部</div>
          <ul class="nav__spread__list">
            <li
              v-for="item in categoryList"
              :key="item.id"
              class="nav__spread__list__item"
              :class="{'is-active': activeCategory === item.id}"
              @click="activeCategory = item.id"
            >{{item.name}}</li>
          </ul>
        </div>
        <div
          class="nav__show-all"
          @click="toggleShowNavAll"
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
    >
      <div
        class="content__mask"
        v-show="isShowAllCategory"
      ></div>
      <div class="body">1111</div>
      <div class="body">22222</div>
      <div class="body">33333</div>
    </section>
    <div style="width: 1px; height: 100%; position: absolute; left: 50%; top: 0; background-color: red;"></div>
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
      activeCategory: 'recommend', // 激活的分类
      categoryList: [
        { name: '推荐', id: 'recommend' },
        { name: '手机', id: 'phone' },
        { name: '智能', id: 'intelligence' },
        { name: '电视', id: 'television' },
        { name: '笔记本', id: 'notebook' },
        { name: '家电', id: 'electron' },
        { name: '生活周边', id: 'around' },
      ],
    }
  },
  methods: {
    /**
     * 初始化数据
     */
    initData () {
      const appTip = localStorage.getItem(HOME_APP_TIP)

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
    /**
     * 切换显示、隐藏一级分类列表全部
     */
    toggleShowNavAll () {
      this.isShowAllCategory = !this.isShowAllCategory
      // 收起，重新定位收缩列表的滚动条
      if (!this.isShowAllCategory) {
        this.$nextTick(function () {
          this.chgCategory(this.activeCategory)
        })
      }
    },
    /**
     * 改变一级分类
     * @param {string} category 一级分类
     */
    chgCategory (category) {
      this.activeCategory = category
      // 激活的项要在屏幕中间
      /**
       * tips: this.$refs 如果是静态写死的，访问时是返回一个对象，而如果是动态的则会是一个数组
       */
      const curTarget = this.$refs[category][0]
      // 屏幕中心和元素中心的差距
      const offset = (screen.availWidth / 2) - (curTarget.getBoundingClientRect().left + curTarget.offsetWidth / 2)
      const navShrinkEl = this.$refs.navShrink
      const maxScrollLeft = navShrinkEl.scrollWidth - navShrinkEl.clientWidth
      // 当前scrollLeft减去偏移的量
      let nextLeft = navShrinkEl.scrollLeft - offset

      // 判断scrollLeft要在合理范围
      if (nextLeft < 0) {
        nextLeft = 0
      } else if (nextLeft > maxScrollLeft) {
        nextLeft = maxScrollLeft
      }

      navShrinkEl.scrollLeft = nextLeft
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
  z-index: 1;
  top: 0;
  bottom: px2rem(52);
  width: 100%;
  background: #fff;

  .header {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    background: $main-color3;
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
        color: #3c3c3c;
      }

      &__list {
        margin-top: px2rem(17);
        font-size: 0;

        &__item {
          box-sizing: border-box;
          display: inline-block;
          width: px2rem(76);
          height: px2rem(28);
          border: 1px solid #e5e5e5;
          border-radius: px2rem(4);
          margin-right: px2rem(10);
          margin-bottom: px2rem(12);
          background-color: #fff;
          text-align: center;
          font-size: px2rem(12.5);
          line-height: px2rem(26);

          &.is-active {
            border-color: $main-color2;
            background-color: #fde0d5;
            color: $main-color2;
          }

          &:nth-last-of-type(4n) {
            margin-right: 0;
          }
        }
      }
    }

    &__show-all {
      position: absolute;
      right: 0;
      top: 0;
      width: px2rem(34);
      height: px2rem(27.5);
      background: $main-color3;
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
    z-index: 0;
    top: px2rem(70);
    bottom: 0;
    width: 100%;
    background: blue;

    &.show-download-app {
      top: px2rem(121);
    }

    &__mask {
      position: absolute;
      z-index: 99;
      top: 0;
      left: 0;
      @include full-wh();
      background-color: rgba(0,0,0,.3);
    }

    .body {
      font-size: 14px;
    }
  }
}
</style>
