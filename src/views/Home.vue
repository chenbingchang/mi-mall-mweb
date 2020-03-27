<template>
  <div class="home">
    <header class="header">
      <div class="download-app"></div>
      <div class=""></div>
      <div class=""></div>
    </header>
    <section class="content">内容</section>
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
  background: red;

  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: px2rem(100);
    background: greenyellow;
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
