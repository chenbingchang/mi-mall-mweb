<template>
  <div>
    <span @click="$router.go(-1)">返回</span>
    <span>search</span>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {}
  },
}
</script>
<style lang="scss"></style>
