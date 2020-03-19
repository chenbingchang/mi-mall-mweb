<template>
  <div class="index">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <footer class="footer">
      <router-link
        class="footer-tab"
        v-for="footerTab in footerTabList"
        :to="{ name: footerTab.cmpName }"
        :key="footerTab.cmpName"
      >
        <i class="iconfont" :class="footerTab.iconClassName"></i>
        <span class="txt">{{ footerTab.txt }}</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'index',
  data() {
    return {
      footerTabList: [
        {
          cmpName: 'home', // 组件的name
          iconClassName: 'icon-home',
          txt: '首页',
        },
        {
          cmpName: 'category',
          iconClassName: 'icon-category',
          txt: '分类',
        },
        {
          cmpName: 'discover',
          iconClassName: 'icon-discovery',
          txt: '星球',
        },
        {
          cmpName: 'cart',
          iconClassName: 'icon-cart',
          txt: '购物车',
        },
        {
          cmpName: 'user',
          iconClassName: 'icon-user',
          txt: '我的',
        },
      ],
    }
  },
  methods: {},
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
    background: orange;
  }

  .footer-tab {
    display: flex;
    flex-direction: column;
    align-items: center;

    .iconfont {
      margin-bottom: px2rem(5);
      font-size: px2rem(20);
      color: #7c7c7c;
      line-height: px2rem(20);
    }

    .txt {
      font-size: px2rem(12);
    }
  }
}
</style>
