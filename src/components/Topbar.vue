<template>
  <!-- 顶部导航 -->
  <div class="container-fluid">
    <div class="container-fluid-content">
      <!-- 左侧 -->
      <div class="top-left">
        <ul>
          <li><a href="javascript:">浦口</a></li>
          <li><a href="javascript:">雨花</a></li>
          <li><a href="javascript:">玄武</a></li>
          <li><a href="javascript:">鼓楼</a></li>
          <li><a href="javascript:">秦淮</a></li>
          <li><a href="javascript:">建邺</a></li>
        </ul>
      </div>
      <!-- 右侧 -->
      <div class="top-right">
          <div class="topbar-profile" v-if="user.show">
            <img :src="user.avatar" alt="user">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  {{user.userName}}<i class="iconfont icon-triangle-bottom"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="uCenter">个人中心</el-dropdown-item>
                  <el-dropdown-item command="我的订单">我的订单</el-dropdown-item>
                  <el-dropdown-item command="安全设置">安全设置</el-dropdown-item>
                  <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            <router-link to="/user" class="uinfo"></router-link>
          </div>
          <div v-else >
            <router-link to="/login">登录</router-link>
          </div>
      </div>
    </div>

  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import store from '../vuex/index'
    export default {
      data(){
        return {

        }
      },
      computed :{
        ...mapGetters({
          user : 'UserInfo'
        })
      },
      methods : {
          logout(){
              this.$store.dispatch('UserLogout');
          },
          handleCommand(command) {
              if(command == 'logout'){
                this.logout();
              }
          }
      }
    }
</script>
<style scoped>
  body{
    margin: 0;
    padding:0;
  }
  .container-fluid{
    width: 100%;
    background: #f3f3f3;
    overflow: hidden;
    height: 30px;
  }
  .container-fluid-content{
    width: 1200px;
    margin: 0 auto;
  }
  .top-left{
    color:#a5a5a5;
    float:left;
  }
  .top-left ul{
    margin: 0;
    padding:0;
  }
  .top-left ul li{
    float: left;
    list-style: none;
    padding: 4px 12px;
  }
  .top-left ul li a{
    float: left;
    font-size:14px;
    color:#a5a5a5;
    text-decoration: none;
  }
  .top-right{
    float: right;
    line-height: 30px;
  }
  .topbar-profile .uinfo{
      line-height: 25px;
  }
  .topbar-profile img{
    height: 25px;
    width: 25px;
    font-size: 22px;
    vertical-align: middle;
    border-radius: 50%;
    display: inline-block;
  }
  .topbar-profile .logout-btn{
      width: 100px;
      display: block;
  }
</style>
