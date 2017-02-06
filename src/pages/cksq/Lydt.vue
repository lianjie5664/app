<template>
    <div class="page">
      <!-- 路演大厅banner -->
      <div class="container-fluid lydt-banner-bg">
        <div class="container-fluid-content lydt-banner">
          <img src="../../assets/img/lydt_newbanner.png" width="1200" alt="">
          <div class="lydt-num">
            <span>30家</span>入驻创投机构
            <span>30多亿</span>创投基金
            <span>若干</span>围观机构等着您
          </div>
          <div class="lydt-enter-btn">
            <router-link to="/lydt/pub"><el-button type="success">我要路演</el-button></router-link>
          </div>
        </div>
        <div class="lydt-black-bg"></div>
      </div>
      <!-- 路演大厅列表 -->
      <div class="container-fluid">
          <div class="container-fluid-content">
              <div class="lydt-pro-list" v-for="item in lydtList">
                  <div class="pro-left">
                    <router-link to=""><img :src="item.lydt_img"  width="720" height="314" :alt="item.lydt_name"></router-link>
                  </div>
                  <div class="pro-right">
                      <!-- 标题 -->
                      <div class="pro-title">
                          <a href="" :title="item.lydt_name">{{item.lydt_name}}</a>
                      </div>
                     <!-- 标签 -->
                      <div class="pro-tags">
                        <div class="pro-tag-box" v-for="tag in item.tags">
                          <el-tag :type="tag.id | filterTag">{{tag.name}}</el-tag>
                        </div>
                      </div>
                      <div class="pro-desc">
                          <p>{{item.lydt_xmjj}}</p>
                      </div>
                      <div class="pro-extra">
                          <div class="pro-extra-area">
                            <i class="iconfont icon-diqu"></i>{{item.lydt_szd_city}}
                          </div>
                          <div class="pro-extra-date">
                            <i class="iconfont icon-time"></i>{{item.create_time}}
                          </div>
                      </div>
                      <div class="pro-link-btn">
                        <router-link :to="{name : 'LydtD',params: {id:item.id}}">我要参与</router-link>
                      </div>
                  </div>
              </div>
              <!-- 分页 -->
            <div class="block page-center mb15">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-size="pageSize"
                layout="total, prev, pager, next"
                :total="totalCount">
              </el-pagination>
            </div>
          </div>
      </div>
    </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import store from '../../vuex/index'
  export default{
    created(){
      this.$store.dispatch('LydtList',1)
    },
    data(){
      return {
        currentPage: 1,
      }
    },
    computed: {
      ...mapGetters({
        lydtList : 'LydtList',
      }),
        pageSize(){
           return this.$store.state.lydt.onePageSize
        },
        totalCount(){
           return this.$store.state.lydt.totalCount
        }
    },
    methods:{
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val
        this.$store.dispatch('LydtList',val)
      }
    },
    filters : {
      filterTag : function (val) {
          switch(val){
            case 1 :
              return 'success';
              break;
            case 2 :
              return 'danger';
              break;
            case 3 :
              return 'primary';
              break;
          }
      }
    }
  }
</script>

<style scoped>
  .page{
    background: #FAFAFA;
  }
  .lydt-banner{
    position: relative;
  }
  .lydt-banner-bg{
    background: #f08d29;
    position: relative;
    height:300px;
  }
  .lydt-pro-list{
    position: relative;
    border: solid 1px #f1f1f1;
    overflow: hidden;
    margin:15px 0;
    background: #fff;
    box-shadow:0 0 40px rgba(216,216,216,.5);
  }
  .lydt-pro-list .pro-left{
    position: relative;
    width: 720px;
    height: 314px;
    float: left;
    /*background: #eee;*/
  }
  /*.lydt-pro-list .pro-left .pro-left-tag{*/
    /*position: absolute;*/
    /*left: -5px;*/
    /*top: 0;*/
    /*width: 100px;*/
    /*height: 40px;*/
    /*color:#fff;*/
    /*background: #fd584d;*/
    /*line-height: 40px;*/
    /*font-size:14px;*/
    /*text-align:center;*/
  /*}*/
  .lydt-pro-list .pro-right{
    float: left;
    margin-left: 25px;
    width: 430px;
    position:relative;
  }
  .pro-right .pro-title{
    padding: 10px 0;
    overflow: hidden;
  }
  .pro-right .pro-title a{
    font-size: 20px;
    color: #666;
    float: left;
    width: 400px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .pro-right .pro-title a:hover{
    color:#ff7f2b;
  }
  .pro-tag-box{
    float: left;
    padding-right:8px;
  }
  .pro-right .pro-desc{
    padding: 12px 0;
    border-bottom: solid 1px #ebebeb;
    clear: both;
  }
  .pro-right .pro-desc p{
    color: #666;
    font-size: 14px;
    height: 96px;
    margin-bottom: 0;
    overflow: hidden;
    line-height: 24px;
  }
  .pro-right .pro-extra{
    color: #666;
    font-size: 14px;
    display: inline-block;
    width: 400px;
    margin-top:15px;
  }
  .pro-right .pro-extra .pro-extra-area{
    float: left;
  }
  .pro-right .pro-extra .pro-extra-date{
    float: right;
  }
  .pro-right .pro-extra i {
    position: relative;
    top: 1px;
    padding-right: 10px;
  }
  .pro-right .pro-link-btn{
    margin-top:15px;
  }
  .pro-right .pro-link-btn a{
    width: 100%;
    background: #ff7f2b;
    text-align: center;
    height: 42px;
    line-height: 42px;
    color: #fff;
    font-size: 16px;
    display: block;
    border-radius: 2px;
  }
  .pro-right .pro-link-btn a:hover{
    background: #e65c04;
  }
  .lydt-num{
    position: absolute;
    bottom: 15px;
    left: 26px;
    color: #fff;
    font-size: 20px;
    z-index: 100;
  }
  .lydt-num span{
    color:#fff;
    font-size:28px;
    padding-right:10px;
  }
  .lydt-enter-btn{
    position: absolute;
    right: 15px;
    bottom:15px;
    z-index:999;
  }
  .lydt-black-bg{
    height: 80px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background: rgba(0,0,0,.5)!important;
  }
</style>
