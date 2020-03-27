<template>
  <div class="home">
    <header class="header">
      <div class="download-app">
        <span class="download-app--close-wrap">
          <i class="download-app--close icon-close iconfont"></i>
        </span>
        <img
          class="download-app--icon"
          src="@/assets/imgs/icon.png"
        />
        <div class="download-app--title">【100元】新人大礼包正在派发</div>
        <div class="download-app--btn">前往APP领取</div>
      </div>
      <div class="search"></div>
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
    background: greenyellow;
  }

  .download-app {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(17, 17, 17, 0.75);

    &--close-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      width: px2rem(40);
      height: px2rem(50);
    }
    &--close {
      font-size: px2rem(16);
      color: #fff;
    }

    &--icon {
      width: px2rem(50);
      height: px2rem(50);
    }

    &--title {
      font-size: px2rem(14);
      color: #fff;
    }

    &--btn {
      font-size: px2rem(14);
      color: #fff;
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
