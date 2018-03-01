<template>
  <div class="app-main">
    <div class="check">
      <div class="check-two check-phone">l-phone[480-768]->xs</div>
      <div class="check-two check-ipad">ipad[768-992]->sm</div>
      <div class="check-two check-tablet">tablet[992-1200]->md</div>
      <div class="check-two check-desktop">desktop[1200-大]->lg</div>
    </div>
    <div class="header">
      <div class="container container-grid">
        <div class="navbar-header">
          <Row>
            <Col :lg="{ span: 7 }" :md="{ span: 4 }" :xs="{ span: 12 }">
              <div class="logo">
                <div class="logo-icon"></div>
              </div>
            </Col>
            <Col :lg="{ span: 17 }" :md="{ span: 20 }" :xs="{ span: 12 }">
              <div class="header-menu">
                <div class="holder">
                  <Row>
                    <Col :md="{ span: 3 }" :sm="{ span: 24 }" class="list line-effect-two">
                      <span>产品</span>
                    </Col>
                    <Col :md="{ span: 3 }" :sm="{ span: 24 }" class="list line-effect-two">
                      <span>关于我们</span>
                    </Col>
                    <Col :md="{ span: 3 }" :sm="{ span: 24 }" class="list line-effect-two">
                      <span>申请接入</span>
                    </Col>
                    <Col :md="{ span: 3 }" :sm="{ span: 24 }" class="list line-effect-two">
                      <span>商户门户</span>
                    </Col>
                    <Col :md="{ span: 3 }" :sm="{ span: 24 }" class="list line-effect-two">
                      <span>开发者</span>
                    </Col>
                    <Col :md="{ span: 3 }" :sm="{ span: 24 }" class="list line-effect-two">
                      <span>帮助</span>
                    </Col>
                    <Col :md="{ span: 3 }" :sm="{ span: 24 }" class="list line-effect-two">
                      <span>联系我们</span>
                    </Col>
                  </Row>
                </div>
              </div>

              <div class="toggle-header-menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="container container-grid" style="padding-top: 61px;">
        enjoy superX-RGW
      </div>
    </div>
    <div style="height: 1000px;"></div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    this.$nextTick(function() {
      this.$store.commit('sayHelloApp')

      // nav-toggle-menu
      $('.toggle-header-menu').click(function() {
        $(this).toggleClass('open')
        $('.header .logo').toggleClass('open')
        $('.header-menu').toggleClass('open-menu')
        $('body').toggleClass('no-scroll-bar')
      })

      /**
       * header 效果
       * ---------------
       */
      const headerBox = document.querySelector('.header')
      window.addEventListener('scroll', scrollBrain, false)

      function scrollBrain() {
        if (window.pageYOffset >= 300) {
          headerBox.classList.add('header-effect')
        } else if (headerBox.classList.contains('header-effect')) {
          headerBox.classList.remove('header-effect')
        }
      }
    })
  },
  methods: {
    init () {
    }
  },
  created () {

  }
}
</script>

<style lang="less">
  @import './Main/main.less';
</style>

<style lang="less" scoped>

</style>


