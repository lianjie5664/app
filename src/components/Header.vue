<!-- 公共头部 -->
<template>
    <div class="container-fluid header-wrap">
        <div class="container-fluid-content">
            <div class="header clearfix">
                <!-- logo -->
                <div class="logo">
                    <router-link to="/"><img :src="logo" width="187" alt="天开金服"></router-link>
                </div>
                <!-- navigation -->
                <div class="nav">
                    <ul class="menu">
                        <li v-for="menu,index in menus" @mouseover="over(index,$event)" @mouseout="out(index,$event)">
                          <!-- exact 这个链接只会在地址为 / 的时候被激活 -->
                          <router-link :to="menu.link" exact :class="{ active: menu.isActive }">{{menu.name}}</router-link>
                          <div class="nav-son" v-if="menu.hasChild" :style="menu.switch">
                              <ul class="menu">
                                 <li v-for="child in menu.children" @click="parent(child.parent,index)"><router-link :to="child.link">{{child.name}}</router-link></li>
                              </ul>
                          </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- 顶部js -->
<script>
    export default {
        data(){
          return {
            logo : require('assets/img/logo.png'),
            menus : [
              {
                name : '首页',
                link : '/',
                hasChild : false,
              },
              {
                name : '创客社区',
                link : '/cksq',
                hasChild : true,
                isActive : false,
                switch: {
                  display : 'none'
                },
                children : [
                  {
                    name : '路演大厅',
                    link : '/cksq/lydt',
                    parent : 'cksq'
                  },
                  {
                    name : '创客之家',
                    link : '/cksq/ckzj',
                    parent : 'cksq'
                  },
                  {
                    name : '创客学院',
                    link : '/cksq/cksxy',
                    parent : 'cksq'
                  },
                  {
                    name : '创客沙龙',
                    link : '/cksq/cksl',
                    parent : 'cksq'
                  },
                  {
                    name : '失信曝光',
                    link : '/cksq/sxbg',
                    parent : 'cksq'
                  },
                  {
                    name : '征信查询',
                    link : '/cksq/zxcx',
                    parent : 'cksq'
                  }
                ]
              },
              {
                name : '政务快车',
                link : '/zwkc'
              },
              {
                name : '融资服务',
                link : '/rzfw/dksj'
              },
              {
                name : '保险超市',
                link : '/bxcs'
              },
              {
                name : '小二跑腿',
                link : '/xept'
              },
              {
                name : '投资理财',
                link : '/tzlc'
              }
            ]
          }
        },
        methods :{
            over : function (index,event) {
                this.menus[index].switch = {
                    display : 'block'
                };
            },
            out : function (index,event) {
                this.menus[index].switch = {
                  display : 'none'
                };
            },
            parent : function (parentNode,index) {
//              this.menus[index].isActive = true;
//                alert(parentNode)
            }
        }
    }
</script>

<!-- 顶部样式表 -->
<style scoped>
  .header-wrap{
    box-shadow: 0 2px 4px #f1f1f1
  }
  .header{
    width: 1200px;
    margin: 0 auto;
    padding:20px 0;
  }
  .header .logo{
    float:left;
  }
  .nav{
    float:right;
    margin-top:4px;
  }
  .nav ul.menu li{
    float:left;
    margin-right:10px;
    position:relative;
  }
  .nav ul.menu li a{
    padding: 5px 10px;
    width: 84px;
    text-align: center;
    display: block;
    color:#000;
    font-size:16px;
  }
  .nav ul.menu li a:hover{
      color:#fff;
      background: #ff7f2b;
      border-radius: 3px;
  }
  .nav ul.menu li a.active{
    color:#fff;
    background: #ff7f2b;
    border-radius: 3px;
  }
  .nav .nav-son{
    border-top:solid 2px #ff7f2b;
    position: absolute;
    top:31px;
    width: 220px;
    background: #fff;
    color:#000;
    z-index:999;
  }
  .nav .nav-son ul.menu li{
      float: left;
      width: 100px;
  }
  .nav .nav-son ul.menu li a:hover{
      background: none;
      color:#ff7f2b;
  }
  .nav .nav-son ul.menu li a{
      font-size:14px;
      color:#000;
      background: none;
  }

  .nav .nv-son ul.menu li a.active{
      background: none;
  }
</style>
