<template>
  <div class="grid">
    <div class="check">
      <div class="check-two check-phone">l-phone[480-768]->xs</div>
      <div class="check-two check-ipad">ipad[768-992]->sm</div>
      <div class="check-two check-tablet">tablet[992-1200]->md</div>
      <div class="check-two check-desktop">desktop[1200-大]->lg</div>
    </div>
    <h3 class="title">iView grid</h3>
    <div>
      <Row class="row-demo">
        <Col span="8" class="demo">1</Col>
        <Col span="8" class="demo">2</Col>
        <Col span="8" class="demo">3</Col>
      </Row>
      <Row class="row-demo">
        <Col :lg="{ span: 12 }" :md="{ span: 8 }" :sm="{ span: 6 }" :xs="{ span: 4 }" class="demo">1 of 2</Col>
        <Col :lg="{ span: 12 }" :md="{ span: 8 }" :sm="{ span: 6 }" :xs="{ span: 4 }" class="demo">1 of 2</Col>
      </Row>
      <Row class="row-demo">
        <Col span="8" class="demo">1 of 3</Col>
        <Col span="8" class="demo">1 of 3</Col>
        <Col span="8" class="demo">1 of 3</Col>
      </Row>
    </div>

    <h3 class="title">Vue grid</h3>
    <div class="container-grid">
      <Row class="row-demo">
        <Col span="8" class="demo">1</Col>
        <Col span="8" class="demo">2</Col>
        <Col span="8" class="demo">3</Col>
      </Row>
      <Row class="row-demo">
        <Col span="12" class="demo">1 of 2</Col>
        <Col span="12" class="demo">1 of 2</Col>
      </Row>
      <Row class="row-demo">
        <Col class="demo" :lg="{ span: 12 }" :md="{ span: 8 }" :sm="{ span: 6 }" :xs="{ span: 4 }">responsive-one</Col>
        <Col class="demo center" :lg="{ span: 12 }" :md="{ span: 16 }" :sm="{ span: 18 }" :xs="{ span: 20 }">responsive-two</Col>
      </Row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
  @import './grid';
</style>

<style lang="less" scoped>

</style>


