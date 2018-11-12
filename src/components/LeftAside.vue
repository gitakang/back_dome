<template>
<div class="left-aside">
  <div class="nav">
    <div class="logo">
      <img @click="goToHome" src="../../static/img/logo.png">
    </div>
    <div

    v-for="item in nav"
    class="nav-item"
    :class="{active:item.active}"
    @click="jumpRouteToSubNav(item.path)"
    :key="item.id">{{item.name}}</div>
  </div>
  <div :class="{'on':subnav.length === 0}" class="subnav">
    <div v-if="this.$store.state.title !== 'undefined'" class="subnav-title"><div>{{this.$store.state.title}}</div></div>
    <div  class="subnav-box">
      <div
      v-for="item in subnav"
      :key="item.id"
      exact
      @click="jumpRouteToHeadNav(item.path,item.id)"
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
    goToHome () {
      this.$router.push('/overview')
    },
    jumpRouteToHeadNav (url, id) {
      this.$router.push(url)
    },
    jumpRouteToSubNav (url) {
      this.$router.push(url)
    }
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
    .nav{
      width: 100%;
      background: #4D4D4D;
      font-size: 16px;
    }
    .logo{
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: center;
      align-items: center;
        img{
          height: 70px;
          width: 70px;
          cursor: pointer;
        }
    }
    .nav-item{
      height: 70px;
      width: 100%;
      text-align: center;
      align-items: center;
      line-height: 70px;
      color: #FFFFFF;
      cursor: pointer;
      font-size: 14px;
    }
    .active {
      background: #fff;
      color: #333;
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
        color: #272525;
        font-size: 18px;
        font-weight: 800;
        text-align: center;
        line-height: 90px;
        height: 90px;
        width: 100%;
        div{
          width: 90px;
        }
      }
      .subnav-box{
        width: 100px;
        .subnav-item{
          height: 65px;
          width: 100%;
          text-align: center;
          line-height: 65px;
          font-size: 14px;
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
