<template>
  <div class="page-index">
    <div class="container-fluid index-main">
        <div class="container-fluid-content index-steps-box">
            <div class="broken-lines broken-lines-animate">

            </div>
        </div>
    </div>
    <!-- 首页新闻 -->
    <div class="container-fluid">
        <div class="container-fluid-content">
          <div class="index-news-wrap">
              <div class="index-news-desc">
                  <h4>天开动态</h4>
              </div>
              <div class="index-news-list">
                  <ul>
                    <li v-for="item in news">
                      <div class="news-date">
                        <span class="news-date-month">{{item.time | month}}</span>
                        <span class="news-date-day">{{item.time | day}}</span>
                      </div>
                      <div class="news-content-box">
                        <div class="news-title">

                          <router-link :to="{name : 'NewsDetail',params: {id:item.id}}">{{item.title}}</router-link>
                        </div>
                        <p class="news-summary" :title="item.introduction">{{item.introduction}}</p>
                      </div>
                    </li>
                  </ul>
              </div>
              <!-- 更多 -->
              <div class="index-news-more">
                  <router-link to="/tkdt/more">更多新闻</router-link>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default{
      created(){
        this.$store.dispatch('IndexNews')
      },
      data(){
        return {

        }
      },
      computed: {
        ...mapGetters({
           news : 'IndexNews'
        })
      },
      methods:{

      },
      filters : {
        month : function (value) {
            if(!value) return ''
            let newDate = value.substring(0,10),
                month = newDate.split('-')[1];
            return month;
        },
        day : function (value) {
            if(!value) return ''
            let newDate = value.substring(0,10),
              day = newDate.split('-')[2];
            return day;
        }
      }

    }
</script>

<style scoped>
    .index-main{
        background: #86be33 url(../assets/img/index_newbanner.png);
        background-size: 1920px 590px;
    }
    .index-steps-box{
      position: relative;
      height:590px;
      background-size: cover;
    }
  .index-steps-box .broken-lines{
      position: absolute;
      bottom:50px;
      left: 400px;
      background: url(../assets/img/line_air.png);
      width: 722px;
      height: 348px;
      background-size:cover;
  }
  @keyframes index-steps-box{
    0%{ width: 0; }
    100%{ width: 722px; }
  }
  @-webkit-keyframes index-steps-box{
    0%{ width: 0; }
    100%{ width: 722px; }
  }
  .broken-lines-animate{
    -webkit-animation: line 4s linear;
    -moz-animation: line 4s linear;
    -ms-animation: line 4s linear;
    animation: line 4s linear;
  }
  .index-news-wrap{
    margin:30px auto;
    width: 930px;
  }
  .index-news-wrap .index-news-desc{
    font-size: 20px;
    text-align: center;
    border-bottom: solid 1px #ccc;
    color: #666;
    height: 40px;
  }
    .index-news-wrap .index-news-desc h4{
      border-bottom: solid 1px #000;
      display: inline-block;
      height: 40px;
    }
  .index-news-list ul li{
    float: left;
    margin: 14px 100px 14px 0;
  }
  .index-news-list ul li:nth-child(2n){
    margin-right:0;
  }
  .news-content-box{
    float: left;
  }
  .index-news-list .news-date{
    background: url("../assets/img/calendar_bg.png") no-repeat center;
    width: 40px;
    height: 50px;
    display: inline-block;
    position: relative;
    top: 5px;
    float: left;
    margin-right: 12px;
  }
  .news-content-box .news-title a{
    color: #ff7e34;
    margin: 0;
    padding: 0;
    font-size: 14px;
    width: 310px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .news-content-box .news-summary{
    margin: 0;
    padding: 0;
    font-size: 12px;
    width: 360px;
    max-height: 36px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    word-wrap: break-word;
    white-space: normal!important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 18px;
  }
  .news-date .news-date-month{
    position: absolute;
    top: 0;
    left: 13px;
    color: #fff;
    font-size: 16px;
  }
  .news-date .news-date-day{
    position: absolute;
    top: 25px;
    left: 13px;
    color: #666;
    font-size: 14px;
  }
  .index-news-more{
    width: 934px;
    margin: 25px auto 0;
    text-align: center;
  }
  .index-news-more a{
    padding: 5px 20px;
    border: solid 1px #ff7e34;
    border-radius: 2px;
    text-align: center;
    color: #ff7e34;
  }
  .index-news-more a:hover{
    color:#fff;
    background:#ff7f2b;
  }

</style>
