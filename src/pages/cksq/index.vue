<template>
    <div class="page">
        <!-- 创客社区banner -->
        <div class="container-fluid cksq-banner-bg">
            <div class="container-fluid-content">
              <img src="../../assets/img/ckzj_banner.png" alt="">
            </div>
        </div>
        <!-- 路演大厅 -->
        <div class="cksq-lydt-box">
            <div class="container-fluid">
                <div class="container-fluid-content pos-r">
                    <div class="cksq-lydt-left" data-scroll-reveal="enter left over 2s and move 70px">
                      <img src="../../assets/img/ckkj_lydt_desc.png" width="461">
                    </div>
                    <div class="cksq-lydt-right">
                      <h2>路演大厅</h2>
                      <p class="desc">我行我演，想野就演！秀出自己，寻找队友、场地和资金就<br>从路演大厅开始！</p>
                      <p class="lydt-enter-btn"><router-link to="/cksq/lydt">我要路演</router-link></p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 创客之家 -->
        <div class="cksq-ckzj-box">
          <div class="container-fluid">
            <div class="container-fluid-content pos-r">
                <div class="cksq-ckzj-left">
                    <h2>创客之家</h2>
                    <p class="desc">这里是创业者梦想聚集的空间，思想火花碰撞的空间；<br>快来入驻，创业的你们需要归属感。</p>
                    <p class="ckzj-enter-btn"><router-link to="">我要入驻</router-link></p>
                </div>
                <div class="cksq-ckzj-right" data-scroll-reveal="wait 0.5s enter right over 1s and move 80px">
                  <img src="../../assets/img/ckkj_ckzj_desc.png" width="385" alt="">
                </div>
            </div>
          </div>
        </div>
        <!-- 创客商学院 -->
        <div class="cksq-cksxy-box">
          <div class="container-fluid">
            <div class="container-fluid-content pos-r">
                <div class="cksq-cksxy-left" data-scroll-reveal="wait 0.5s enter top over 1s and move 80px">
                  <img src="../../assets/img/ckkj_cksxy_desc.png" width="348" alt="">
                </div>
                <div class="cksq-cksxy-right">
                  <h2>创客商学院</h2>
                  <p class="desc">创业的路上需要时刻充电提升自己，这里为创业者免费 <br>提供知识和指导，让创业不再艰难。</p>
                  <p class="cksxy-enter-btn"><router-link to="">我要学习</router-link></p>
                </div>
            </div>
          </div>
        </div>
        <!-- 创客沙龙 -->
        <div class="cksq-cksl-box">
          <div class="container-fluid">
            <div class="container-fluid-content pos-r">
                <div class="cksq-cksl-left">
                  <h2>创客沙龙</h2>
                  <p class="desc">这里是行业、技术、生活的专属领域，你可以自主建造一个 <br>专属的圈子，交流思想、共谈商机、整合人脉。</p>
                  <p class="cksl-enter-btn"><router-link to="">我要参与</router-link></p>
                </div>
                <div class="cksq-cksl-right" data-scroll-reveal="wait 0.5s enter right over 1s and move 80px">
                  <img src="../../assets/img/ckkj_qzyd_desc.png"  width="361" alt="">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  import scroll from '../../utils/scrollReveal.js'
  export default {
    mounted(){
        this.$nextTick(()=>{
          window.scrollReveal = new scrollReveal({ reset: true });
        })
      }
  }
</script>

<style scoped>
  .cksq-banner-bg{
    background: #4ec4e2;
    height: 300px;
  }
  .cksq-banner-bg img{
    width: 100%;
  }
  .cksq-lydt-box{
    background: #efece7;
    height: 444px;
  }
  .cksq-lydt-left {
    position: absolute;
    left: 60px;
    top:90px;
  }
  .cksq-lydt-right{
    position: absolute;
    right: 50px;
    top: 150px;
  }
  .cksq-lydt-right h2,
  .cksq-ckzj-left h2,
  .cksq-cksxy-right h2,
  .cksq-cksl-left h2{
    font-size:30px;
  }
  .cksq-lydt-right .desc,
  .cksq-ckzj-left .desc,
  .cksq-cksxy-right .desc,
  .cksq-cksl-left .desc{
    font-size:18px;
    line-height: 1.8;
    text-align: justify;
    margin-top: 15px;
  }
  .cksq-ckzj-box{
    background: #fe7877;
    height: 444px;
  }
  .cksq-cksxy-box{
    background: #efece7;
    height: 444px;
  }
  .cksq-cksl-box{
    height: 444px;
    background: #fff;
  }
  .lydt-enter-btn,
  .ckzj-enter-btn,
  .cksxy-enter-btn,
  .cksl-enter-btn{
    margin-top: 25px;
  }
  .cksq-lydt-right a{
    padding:8px 30px;
    color:#333;
    border:solid 1px #333;
    border-radius:3px;
    font-size:16px;
  }
  .cksq-lydt-right a:hover{
    background: #333;
    color:#fff;
  }
  .cksq-ckzj-left{
    position: absolute;
    left:100px;
    top:140px;
  }
  .cksq-ckzj-right{
    position: absolute;
    right:45px;
    top:70px;
  }
  .cksq-ckzj-left a{
    padding:8px 30px;
    color:#333;
    border:solid 1px #333;
    border-radius:3px;
    font-size:16px;
  }
  .cksq-ckzj-left a:hover{
    background: #333;
    color:#fff;
  }
  .cksq-cksxy-left{
    position: absolute;
    top:60px;
    left:60px;
  }
  .cksq-cksxy-right{
    position: absolute;
    top:135px;
    right:20px;
  }
  .cksq-cksxy-right a{
    padding:8px 30px;
    color:#333;
    border:solid 1px #333;
    border-radius:3px;
    font-size:16px;
  }
  .cksq-cksxy-right a:hover{
    background: #333;
    color:#fff;
  }
  .cksq-cksl-left{
    position: absolute;
    left: 103px;
    top: 140px;
  }
  .cksq-cksl-left a{
    padding:8px 30px;
    color:#333;
    border:solid 1px #333;
    border-radius:3px;
    font-size:16px;
  }
  .cksq-cksl-left a:hover{
    background: #333;
    color:#fff;
  }

  .cksq-cksl-right{
    position: absolute;
    right:54px;
    top:40px;
  }
</style>
