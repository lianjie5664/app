<template>
  <div class="container-fluid login-container">
    <div class="container-fluid-content login-wrap">
      <div class="login-box">
        <div class="login-body">
          <div class="login-title">登录</div>
          <div class="login-form">
            <form action="" role="form" method="post" @submit.prevent="login()">
                <!-- 用户名 -->
                <div class="form-group">
                  <input type="text" class="account-input" v-model="user.mobile" name="mobile" placeholder="输入手机号">
                  <i class="iconfont icon-ren user-icon"></i>
                </div>
                  <!-- 密码 -->
                <div class="form-group">
                  <input type="password" class="account-input" v-model="user.password" name="password" placeholder="输入密码">
                  <i class="iconfont icon-suo user-icon"></i>
                </div>
                <!-- 记住密码 -->
                <div class="form-group">
                    <el-checkbox v-model="checked" checked>7天内免登陆</el-checkbox>
                    <router-link to="/reset" class="forget-pass">忘记密码？</router-link>
                </div>
                  <!-- 提交按钮 -->
                <div class="form-group">
                    <button class="login-btn" type="submit" :disabled="status">{{btnTxt}}</button>
                </div>
            </form>
          </div>
            <!-- 合作账号登录 -->
          <div class="cooperation-account">
              <div class="line"></div>
              <div class="title">用以下合作账号登录</div>
              <div class="cooperation-wrap">
                  <a href="#"><img src="../assets/img/mp-icon.png" alt="微信登录" width="30"></a>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//  require ('../assets/iconfont/iconfont.css')
  import { mapActions } from 'vuex'
  export default {
    data (){
      return {
        btnTxt : '登录',
        status : false,
        checked : true,
        user: [
          {
            mobile : '',
            password : '',
          }
        ]
      }
    },
    computed: {
      ...mapActions({
        UserLogin: 'UserLogin',
      })
    },
    methods:{
      login(){
        this.btnTxt = '正在登录，请稍后...'
        this.status = true
        this.$store.dispatch('UserLogin', this.user);
      }
    }
  }
</script>

<style scoped>
  .login-container{
    width: 100%;
    height:581px;
    background: #e14d4d url("../assets/img/register_banner.png") no-repeat top center;
  }
  .login-wrap{
    position:relative;
  }
  .login-box{
    position: absolute;
    top:100px;
    right:-20px;
    width: 380px;
    height:355px;
    background: #fff;
    border-radius: 3px;
  }
  .login-box .login-body{
    width:300px;
    margin: 15px auto;
  }
  .login-box .login-body .login-title{
    font-size:22px;
    color:#ff7f2b;
  }
  .login-box .login-body .login-form{
    margin-top:20px;
  }
  .login-box .form-group{
      margin: 15px 0;
      position: relative;
      width: 300px;
  }
  .account-input{
      border:1px solid #d3e1f1;
      border-radius: 2px;
      font-size: 14px;
      height: 40px;
      width: 260px;
      padding-left: 38px;
  }
  .user-icon{
    position: absolute;
    top: 5px;
    left: 5px;
    color: #a6b2c2;
    /*background-color: #f8fafb;*/
    font-size: 20px;
    padding: 5px;
    border-radius: 3px;
  }
  .form-group .login-btn{
      width: 100%;
      background: #ff7f2b;
      border: 1px solid #ff7f2b;
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      border-radius: 3px;
      height: 40px;
      cursor: pointer;
      font-family: -apple-system,PingFang SC,Hiragino Sans GB,Arial,Microsoft YaHei,Helvetica Neue,sans-serif;
  }
  .cooperation-account{
      margin-top:30px;
      position: relative;
  }
  .cooperation-account .line{
    border-top:solid 1px #f1f1f1;
    height: 0;
  }
  .cooperation-account .title{
      position: absolute;
      top: -10px;
      left: 77px;
      background: #fff;
      padding: 0 10px;
  }
  .cooperation-wrap{
      text-align:center;
      margin-top:12px;
  }
  .cooperation-wrap a{
      padding: 0 8px;
  }
  .forget-pass{
      float: right;
  }
</style>

