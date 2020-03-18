<template>
  <div class="index">
    <router-view></router-view>
    <footer class="footer">底部</footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'index',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss">
@import '@/common/css/common';
.index {
  width: 100vw;
  height: 100vh;

  .footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: px2rem(52);
    font-size: px2rem(18);
    background: orange;
  }
}
</style>
