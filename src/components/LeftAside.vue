<template>
<div class="left-aside">
  <div @click="handlesubnav" class="nav">
    <div class="logo">logo</div>
    <router-link
    class="nav-item"
    tag="div"
    v-for="(item,index) in nav"
    :to="item.path"
    :key="index">{{item.name}}</router-link>
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
import axios from 'axios'
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
  },
  created () {
    axios.post('/randomnum').then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss" scoped>
  .left-aside{
    display: flex;
    .logo{
      width: 100%;
      height: 80px;
      background: #09f;
    }
    .nav-item{
      height: 50px;
      width: 100%;
      text-align: center;
      align-items: center;
      line-height: 50px;
      cursor: pointer;
    }
    .nav-item:hover{
      background: #fff;
    }
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
