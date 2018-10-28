<template>
<div class="left-aside">
  <div @click="handlesubnav" class="nav">
    <div class="logo"></div>
    <div
    v-for="(item,index) in nav"
    :key="index">{{item.name}}</div>
  </div>
  <div :class="{'on':show}" class="subnav">
    <div class="subnav-title"></div>
    <div  class="subnav-box">
      <div
      v-for="item in arr"
      :key="item"
      class="subnav-item">{{item}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'LeftAside',
  props: {
    nav: {
      type: Array
    }
  },
  data () {
    return {
      arr: [1, 2, 3, 4, 5, 6],
      show: true
    }
  },
  methods: {
    handlesubnav () {
      this.show = !this.show
    }
  }
}
</script>
<style lang="scss" scoped>
  .left-aside{
    display: flex;
    .nav{
      width: 100px;
      height: 100vh;
    }
    .subnav{
      width: 100px;
      height: 100vh;
      background: white;
      transition: width 500ms;
      .subnav-title{
        height: 80px;
        width: 100%;
        background: #09f;
      }
    }
    .on{
      width: 0px;
    }
  }
</style>
