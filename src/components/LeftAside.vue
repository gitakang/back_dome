<template>
<div class="left-aside">
  <div class="nav">
    <div class="logo">logo</div>
    <router-link
    class="nav-item"
    tag="div"
    v-for="(item,index) in nav"
    :to="item.path"
    :key="index">{{item.name}}</router-link>
  </div>
  <div :class="{'on':subnav.length === 0}" class="subnav">
    <div class="subnav-title"></div>
    <div  class="subnav-box">
      <div
      v-for="item in subnav"
      :key="item.id"
      class="subnav-item"><span>{{item.name}}</span></div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LeftAside',
  data () {
    return {
    }
  },
  methods: {
  },
  created () {
    axios.post('/randomnum').then(res => {
    })
  },
  computed: {
    nav () {
      return this.$store.state.nav
    },
    subnav () {
      return this.$store.state.subnav
    }
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
      height: 70px;
      width: 100%;
      text-align: center;
      align-items: center;
      line-height: 70px;
      cursor: pointer;
    }
    .router-link-active {
      background: #fff;
      color: #09f;
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
      .subnav-box{
        width: 100px;
        .subnav-item{
          height: 65px;
          width: 100%;
          text-align: center;
          line-height: 65px;
          span{
            cursor: pointer;
          }
        }
      }
    }
    .on{
      width: 0px;
    }
  }
</style>
