<template>
  <div class="page">
      <div class="container-fluid news-wrap">
          <div class="container-fluid-content news-box">
              <div class="news-header">
                <div class="news-title">
                    {{details.title}}
                </div>
                <div class="news-extra">
                    <div class="news-date fl">
                        发布时间：{{details.time}}
                    </div>
                    <div class="news-share fl">

                    </div>
                </div>
            </div>
            <!-- 新闻正文 -->
            <div class="news-content-wrap">
              <div class="news-content"  v-html="details.content">

              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex';
  export default{
      created(){
        let id = this.$route.params.id;
        this.$store.dispatch('IndexNewsDetail', id);
      },
      data(){
        return {

        }
      },
      computed : {
        ...mapGetters({
            details : 'IndexNewsDetail'
        })
      }

  }
</script>

<style scoped>
  .news-wrap{
    padding:15px 0;
  }
  .news-box{
    border:solid 1px #f1f1f1;
    background: #fff;
    overflow: hidden;
    box-shadow:0 0 40px rgba(216,216,216,.5);
  }
  .news-title{
    font-size:24px;
    color:#333;
    text-align:center;
    font-weight:500;
    margin:20px;
  }
  .news-header{
    border-bottom:dashed 1px #f1f1f1;
    overflow: hidden;
  }
  .news-extra{
    width: 400px;
    margin: 0 auto;
  }
  .news-date{
    width: 100%;
    padding-bottom:15px;
    text-align:center;
  }
  .news-content-wrap{
    padding:15px 20px;
  }
</style>
