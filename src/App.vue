<template>
  <div id="app">
    <!-- 头部 -->
    <div class="head">
      <div class="search"></div>
      <div class="category"></div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/common/css/base';
@import '@/common/css/func';

.head {
  @include px2rem(width, 375);
  @include px2rem(height, 73.75);
  border: 1px solid #333;
}
</style>
