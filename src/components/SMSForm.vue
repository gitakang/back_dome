<template>
<div class="login_smsform">
    <input class="username" type="text" placeholder="输入账号">
    <div><input class="smscode" type="text" placeholder="短信验证码"></div>
    <div class="btn">登录</div>
    <div>注册</div>
</div>
</template>

<script>
export default {
  name: 'SMSForm',
  data () {
    return {
      msg: 'denglu'
    }
  }
}
</script>
<style scoped>
.login_smsform{
    width: 210px;
    height: 190px;
    margin: 20px auto;
}
</style>
