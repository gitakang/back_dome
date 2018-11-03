<template>
<div class="back-home">
  <Left-Aisde id="left-aside" :nav="nav"/>
  <div id="main">
    <div id="header"></div>
    <div id="content">
      <router-view></router-view>
    </div>
    <div id="bottom"></div>
  </div>
  <div id="right-aside"></div>
</div>
</template>

<script>
import LeftAisde from '../components/LeftAside'
export default {
  name: '',
  data () {
    return {
    }
  },
  computed: {
    nav () {
      return this.$store.state.nav
    }
  },
  methods: {
    getnav () {
      this.$store.dispatch('getNavs')
    }
  },
  created () {
    this.getnav()
    let hashs = location.hash
    let index = hashs.indexOf('/') + 1
    let str = hashs.slice(index)
    console.log(str)
  },
  mounted () {
    console.log(this.$store.state.nav)
  },
  watch: {
    $router (to, from) {
      console.log(to.path)
    }
  },
  components: {
    LeftAisde
  }
}
</script>
<style lang="scss" scoped>
.back-home{
  position: relative;
  display: flex;
  #left-aside{
    min-width: 100px;
    height: 100vh;
    background: #ccc;
  }
  #main{
    flex: 1;
    background: #09f;
    overflow: hidden;
    #header{
      width: 100%;
      height: 80px;
      background: white;
    }
    #content{
      width: 100%;
      height: calc(100vh - 160px);
      overflow-x:hidden;

      .text{
        height: 200px;
      }
    }::-webkit-scrollbar{
  display: none;
}
    #bottom{
      height: 80px;
      background: white;
    }
  }
  #right-aside{
    width: 150px;
    height: 100vh;
    background: #ccc;
  }
}

</style>
