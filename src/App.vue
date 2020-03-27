<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import "@common/css/base";

#app {
  user-select: none;
}
</style>
