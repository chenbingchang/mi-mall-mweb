<template>
  <div class="index">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <footer class="footer">
      <router-link
        class="footer-tab"
        v-for="footerTab in footerTabList"
        :to="{ name: footerTab.routerName }"
        :key="footerTab.routerName"
      >
        <i
          class="iconfont"
          :class="footerTab.iconClassName"
        ></i>
        <span class="txt">{{ footerTab.txt }}</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Index',
  data () {
    return {
      footerTabList: [
        {
          routerName: 'Home', // 路由的name
          iconClassName: 'icon-home',
          txt: '首页',
        },
        {
          routerName: 'Category',
          iconClassName: 'icon-category',
          txt: '分类',
        },
        {
          routerName: 'Discover',
          iconClassName: 'icon-discovery',
          txt: '星球',
        },
        {
          routerName: 'Cart',
          iconClassName: 'icon-cart',
          txt: '购物车',
        },
        {
          routerName: 'User',
          iconClassName: 'icon-user',
          txt: '我的',
        },
      ],
    }
  },
  methods: {
  },
}
</script>

<style lang="scss">
.index {
  width: 100vw;
  height: 100vh;

  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: px2rem(52);
    font-size: px2rem(18);
  }

  .footer-tab {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    color: #999;

    /* router-link-exact-active这个类名是router-link激活时自动添加的类名 */
    &.router-link-exact-active {
      color: #ff6700;
    }

    .iconfont {
      margin-bottom: px2rem(5);
      font-size: px2rem(20);
      line-height: px2rem(20);
    }

    .txt {
      font-size: px2rem(12);
    }
  }
}
</style>
