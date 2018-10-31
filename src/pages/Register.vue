<template>
<div class="register-warp">
  <div class="register-box">
     <p>账号注册</p>
      <form class="account-form">
        <input type="text" v-model="username" placeholder="输入账号">
        <input type="password" v-model="password" placeholder="输入密码">
        <input type="password" v-model="passwordRepeat" placeholder="重复密码">
      </form>
      <div class="btn-login" @click="userRegister">注册</div>
      <div class="other-account"><span>第三方账户注册</span><span></span></div>
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
  name: '',
  data () {
    return {
      username: '',
      password: '',
      passwordRepeat: ''
    }
  },
  methods: {
    userRegister () {
      let users = JSON.parse(localStorage.getItem('users')) || []
      let {username, password, passwordRepeat} = this
      if (username !== '' && password !== '' && passwordRepeat === password) {
        let userInfo = {'username': username, 'password': password}
        localStorage.setItem('users', JSON.stringify(users.push(userInfo)))
      } else { console.log(false) }
    }
  }
}
</script>
<style lang="scss" scoped>
.register-warp{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/loginBg.jpg") no-repeat top center;
  background-size: cover;
  .register-box{
    position: absolute;
    right: 64px;
    top: 116px;
    width: 272px;
    height: 414px;
    border-radius: 13px;
    background:linear-gradient(180deg,rgba(255,255,255,1),rgba(220,241,254,1));
        p{
      color: #333333;
      font-size: 18px;
      text-align: center;
      margin: 30px 0 40px 0;
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
