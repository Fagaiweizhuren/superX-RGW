<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    this.$nextTick(function() {
      console.log('DOM 挂载之后')
    })
  },
  beforeDestroy () {

  },
  methods: {
    init () {
      this.$router.push({ name: 'mainPage' })
    }
  },
  created () {
    console.log('app created')
    this.init()
  }
}
</script>

<style lang="less">
  @import './styles/app.less';
</style>

<style lang="less" scoped>
</style>


