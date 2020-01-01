<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      aa: 'asdfasd'
    }
  },
  methods: {
    add(x, y) {
      if (x) {
        return x + y
      } else {
        return y
      }
    }
  },
  components: {
    HelloWorld
  }
}
</script>
