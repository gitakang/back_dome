<template>
    <div class="header">
        <div class="active"
        v-for="item in headNav"
        :key="item.id"
        >{{item.name}}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    headNav () {
      console.log(this)
      return this.$store.state.headNav
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
    box-sizing: border-box;
    font-size: 14px;
    div{
        margin-right: 80px;
        width: 80px;
        text-align: center;
        cursor: pointer;
        height: 50px;
        line-height: 50px;
    }
    .active{
        color: #09f;
        position: relative;
        &:after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 80px;
            left: 0;
            right: 0;
            margin: auto;
            background: #09f;
            height: 2px;
        }
    }
}
</style>
