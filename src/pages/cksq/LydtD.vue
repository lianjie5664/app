<template>
    <div class="page">
        <div class="container-fluid">
            <div class="container-fluid-content">
                <div class="lydt-header-wrap">
                    <div class="header-left fl">
                      <img :src="lydt.lydt_img">
                    </div>
                    <div class="header-right fl">
                      <h2>{{lydt.lydt_name}}</h2>
                      <div class="lydt-provide">
                          <div class="avatar fl">
                            <img :src="lydt.lydt_fqr_img" width="720" height="314">
                          </div>
                          <div class="provice-info fl">

                          </div>
                      </div>
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
          let id = this.$route.params.id;
          this.$store.dispatch('LydtDetail', id);
        },
        data(){
          return{

          }
        },
        computed : {
          ...mapGetters({
              lydt : 'LydtDetail'
          })
        }
    }
</script>

<style scoped>
  .lydt-header-wrap{
    background: #fff;
    /*border:solid 1px red;*/
    overflow: hidden;
    padding: 15px 0;
  }
  .lydt-header-wrap .header-left{
      /*padding:10px;*/
      margin:0 15px;
  }
  .lydt-header-wrap h2{
      font-size:22px;
      line-height: 1.4;
      color:#666;
      margin-bottom:10px;
  }
  .lydt-provide img{
    border-radius: 5px;
    width: 60px;
    height: 60px;
  }
  .lydt-provide .avatar{
      margin-right:15px;
  }
</style>
