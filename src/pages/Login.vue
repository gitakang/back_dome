<template>
  <div class="login-warp">
    <div class="login-model">
      <p>账号登陆</p>
      <div class="login-way">
        <div
        @click="changeActive(1)"
        :class="{'login-active':showActive}"
        >账号密码登陆</div>
        <div
        :class="{'login-active':!showActive}"
        @click="changeActive(0)"
        >短信验证登陆</div>
      </div>
      <form v-if="showActive" class="account-form">
        <input type="text" v-model="username" placeholder="输入账号">
        <input type="password" v-model="password" placeholder="输入密码">
        <div>
          <label><input v-model="remember" type="checkbox">记住密码</label>
          <router-link class="forget-password" to="">忘记密码？</router-link>
        </div>
      </form>
      <form v-else class="sms-form">
          <input class="username" type="text" placeholder="输入手机号">
          <div class="sms-code">
            <input class="smscode" type="text" placeholder="短信验证码">
            <div class="getcode">获取验证码</div>
          </div>
      </form>
      <div class="btn-login" @click="userLogin">登录</div>
      <div class="btn-register">注册</div>
      <div class="other-account"><span>第三方账户登录</span><span></span></div>
      <div class="login-icon">
        <div>
          <img src="../assets/icon-weixin.png">
          <span>微信</span>
        </div>
        <div>
          <img src="../assets/icon-weibo.png">
          <span>微博</span>
        </div>
        <div>
          <img src="../assets/icon-qq.png">
          <span>QQ</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  },
  data () {
    return {
      showActive: true,
      username: '',
      password: '',
      remember: true
    }
  },
  methods: {
    changeActive (code) {
      this.showActive = code === 1
    },
    userLogin () {
      if (this.showActive) {
        console.log(this.remember)
        // let username = this.username
        sessionStorage.setItem('user', this.username)
        console.log(sessionStorage)
      } else {
        console.log(2)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login-warp{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/loginBg.jpg") no-repeat top center;
  background-size: cover;
  font-family: MicrosoftYaHei;
  .login-model{
    width: 272px;
    height: 414px;
    position: absolute;
    right: 64px;
    top: 116px;
    background:linear-gradient(180deg,rgba(255,255,255,1),rgba(220,241,254,1));
    border-radius: 13px;
    p{
      color: #333333;
      font-size: 18px;
      text-align: center;
      margin-top: 30px;
    }
    .login-way{
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #666666;
      font-size: 12px;
      margin-top:15px;
      height: 25px;
      line-height: 25px;
      div{
        cursor: pointer;
      }
      .login-active{
        color: #0099FF;
        border-bottom: 2px solid #0099FF;
      }
    }
    form{
      width: 210px;
      margin: 18px auto;
       >input{
         width: 190px;
         height: 30px;
         outline: none;
         border: 1px solid #CCCCCC;
         border-radius: 2px;
         margin: 10px 0;
         padding: 0 10px;
       }
       div{
         display: flex;
         justify-content: space-between;
         align-items: center;
         font-size: 12px;
         label{
           display: flex;
           justify-content: flex-start;
           align-items: center;
           color: #666666;
         }
         a{
           color: #0099FF;
         }
       }
       .sms-code{
         width: 210px;
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin: 10px auto;
         input{
           outline: none;
           border: 1px solid #ccc;
           height: 30px;
           width: 90px;
           padding: 0 10px;
           border-radius: 2px;
         }
         .getcode{
           width: 85px;
           height: 30px;
           background: #0099FF;
           font-size: 14px;
           color: #FFFFFF;
           text-align: right;
           line-height: 30px;
           border-radius: 2px;
           padding-left: 7px;
           box-sizing: border-box;
           cursor: pointer;
         }
       }
    }
    .btn-login,.btn-register{
      width: 210px;
      height: 30px;
      margin: 10px auto;
      border-radius: 2px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      color: #FFFFFF;
      background: #0099FF;
      cursor: pointer;
    }
    .btn-register{
      background: #CCCCCC;
      color: #333232;
    }
    .other-account{
      width: 210px;
      margin: 10px auto;
      position: relative;
      z-index: 2;
      text-align: center;
      span:first-child{
      margin:0 auto;
      line-height: 20px;
      color: #666666;
      font-size: 12px;
      margin-top:0;
      background: #DCF1FE;
      z-index: 100;
      }
      span:last-child{
        display: block;
        position: absolute;
        top: 10px;
        left: 0;
        width: 210px;
        height: 1px;
        z-index: -1;
        background: #ccc;
      }
    }
    .login-icon{
      width: 180px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        cursor: pointer;
        img{
          width: 25px;
          height: 25px;
        }
        span{
          font-size: 12px;
          color: #333333;
          text-align: center;
        }
      }
    }
  }
}
</style>
