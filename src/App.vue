<template>
  <div id="app">
    <!-- 头部 -->
    <div class="head">
      <!-- <div class="search"></div>
      <div class="category"></div> -->
      啊啊啊啊
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/common/css/base';
@import '@/common/css/common';

.head {
  width: px2rem(375);
  height: px2rem(73.75);
  border: 1px solid #333;
  @include fontSize(16px);
}

#app {
  .head {
    @include fontSize(18px);
  }
}
</style>
