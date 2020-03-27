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
  width: 100vw;
  height: 100vh;
  user-select: none;
}
</style>
