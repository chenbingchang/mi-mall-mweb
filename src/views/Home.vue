<template>
  <div class="home">
    <header class="header">
      <div class="download-app">
        <img
          class="download-app--img"
          src="@/assets/imgs/download-app.png"
        />
        <span class="download-app--close"></span>
      </div>
      <div class="search">
        <div class="search--left">
          <img
            class="search--left--img"
            src="@assets/imgs/icon.png"
            alt="小米图标"
          >
        </div>
        <div class="search--middle">
          <div class="search--middle--icon-wrap">
            <i class="search--middle--icon iconfont icon-search"></i>
          </div>
          搜索商品名称
        </div>
        <div class="search--right">
          <i class="search--right--icon iconfont icon-user"></i>
        </div>
      </div>
      <div class="nav"></div>
    </header>
    <section class="content">内容43</section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss">
.home {
  position: absolute;
  top: 0;
  bottom: px2rem(52);
  width: 100vw;
  background: #fff;

  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: px2rem(100);
    background: #f2f2f2;
  }

  .download-app {
    position: relative;
    height: px2rem(50);

    &--img {
      @include full-wh;
    }

    &--close {
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

    &--left,
    &--right {
      @include flex();
      width: px2rem(50);
      height: px2rem(30);
    }

    &--left--img {
      width: px2rem(24);
    }

    &--right--icon {
      font-size: px2rem(20);
      color: #999;
    }

    &--middle {
      flex-grow: 1;
      @include flex(flex-start);
      height: px2rem(30);
      border: 1px solid #e5e5e5;
      border-radius: px2rem(2);
      box-shadow: 0 0 1px #aaa;
      background: #fff;
      font-size: px2rem(15);
      color: rgba(0,0,0,.3);

      &--icon {
        font-size: px2rem(16);

        &-wrap {
          @include flex();
          width: px2rem(30);
          height: px2rem(30);
        }
      }
    }

  }

  .content {
    position: absolute;
    top: px2rem(100);
    bottom: 0;
    width: 100%;
    background: blue;
  }
}
</style>
