<template>
    <div class="page">
        <!-- banner -->
        <div class="container-fluid ckzj-banner-box">
          <img src="../../assets/img/zckj_banner_new.png">
        </div>
        <!-- 块 -->
        <div class="ckzj-blocks-wrap">
          <!-- 众创空间 -->
          <ckzj-component :list="zckj"></ckzj-component>
          <!-- 产业园区 -->
          <ckzj-component :list="cyyq"></ckzj-component>
          <!-- 创客活动 -->
          <ckzj-component :list="ckhd"></ckzj-component>
        </div>

    </div>
</template>

<script>
    import ckzjComponent from '../../components/CkzjPub.vue'
    export default {
      created(){
        this.$store.dispatch('ZckjList')
        this.$store.dispatch('CyyqList')
        this.$store.dispatch('CkhdList')
      },
      components:{
        ckzjComponent
      },
      computed: {
        zckj(){
          return {
              msg : this.$store.state.cksq.zckjObj,
              title : '众创空间',
              desc : '拎包入驻，降低创业成本',
              picPath : require('assets/img/zckj_image.png'),
              type : 1
          }
        },
        cyyq(){
          return {
            msg : this.$store.state.cksq.cyyqObj,
            title : '产业园区',
            desc : '资源整合，助力企业发展',
            picPath : require('assets/img/cyyq_image.png'),
            type : 0
          }
        },
        ckhd(){
          return {
            msg : this.$store.state.cksq.ckhdObj,
            title : '创客活动',
            desc : '让创业生活丰富多彩',
            picPath : require('assets/img/ckhd_image.png'),
            type : 2
          }
        }
      },
    }
</script>

<style>
  .ckzj-cyyq-wrap,
  .ckzj-ckkj-wrap,
  .ckzj-ckhd-wrap{
    overflow: hidden;
  }
  .ckzj-banner-box{
    text-align: center;
    height: 300px;
  }
  .ckzj-blocks-wrap{
    margin: 20px auto;
    overflow: hidden;
  }
  .cyyq-block-wrap{
    clear: both;
    overflow: hidden;
    margin: 20px auto;
  }
  .ckzj-block-wrap,
  .cyyq-block-wrap{
    position: relative;
  }
  .ckzj-block-wrap .wrap-left-box,
  .cyyq-block-wrap .wrap-left-box{
    position: relative;
  }
  .ckzj-block-wrap .wrap-desc,
  .cyyq-block-wrap .wrap-desc{
    position: absolute;
    top: 50px;
    left:20px;
    color:#fff;
  }
  .ckzj-block-wrap .wrap-desc h1,
  .cyyq-block-wrap .wrap-desc h1{
    font-size:28px;
  }
  .ckzj-block-wrap .wrap-desc em,
  .cyyq-block-wrap .wrap-desc em{
    margin-top:15px;
    font-size:16px;
    display: block;
  }
  .ckzj-block-wrap .wrap-right-box,
  .cyyq-block-wrap .wrap-right-box{
    background: #fff;
    width: 955px;
    height:354px;
    position: absolute;
    left: 225px;
    top:9px;
    box-shadow: 0 0 40px rgba(216,216,216,.5);
  }
  .wrap-right-box ul li{
    float: left;
    width: 317px;
    border-right:solid 1px #f2f2f2;
  }
  .wrap-right-box ul li:last-child{
    border-right:none;
  }
  .wrap-right-box .wrap-pro-pic{
    margin-top: 10px;
    text-align:center
  }
  .wrap-right-box .wrap-pro-title{
    padding:3px 10px;
    font-size:18px;
  }
  .wrap-right-box .wrap-pro-desc{
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 4px 10px;
    font-size: 14px;
    color: #666;
    line-height: 1.8;
  }
  .wrap-right-box .wrap-pro-extra{
    padding:4px 10px;
    line-height: 1.8;
  }
  .wrap-right-box .wrap-pro-extra span{
    color:#999;
  }
  .wrap-pro-title .el-tag--primary{
    color:#20a0ff;
    margin-left:15px;
  }
</style>
