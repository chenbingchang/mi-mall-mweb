<template>
  <div class="home">
    <header class="header"></header>
    <section class="content-wrap"></section>
    <footer class="catogery"></footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss">
.home {
  width: 100vw;
  height: 100vh;

  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100px;
    background: red;
  }

  .content-wrap {
    position: absolute;
    top: 100px;
    bottom: 100px;
    width: 100vw;
    background: orange;
  }

  .catogery {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100px;
    background: green;
  }
}
</style>
