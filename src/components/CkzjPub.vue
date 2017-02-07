<template>
  <div class="container-fluid ckzj-cyyq-wrap">
    <div class="container-fluid-content cyyq-block-wrap">
      <div class="wrap-left-box fl">
        <div class="wrap-desc">
          <h1>{{list.title}}</h1>
          <em>{{list.desc}}</em>
        </div>
        <div class="wrap-pic">
          <img :src="list.picPath" width="240" height="373">
        </div>
      </div>
      <div class="wrap-right-box fl">
        <ul>
          <li v-for="item in list.msg">
            <div class="wrap-pro-pic">
              <a href="" v-if="list.type">
                <img :src="item.show_pic" width="300" height="240">
              </a>
              <a href="" v-else>
                <img :src="item.introductimg" width="300" height="240">
              </a>
            </div>
            <h3 class="wrap-pro-title">
              <router-link to="111">{{item.title}}</router-link>
              <el-tag type="primary" v-if="list.type == 1" class="fr">{{item.service[0].name}}</el-tag>
            </h3>
            <p class="wrap-pro-desc" v-if="list.type" :title="item.introduction">{{item.simpleintroduce}}</p>
            <p class="wrap-pro-desc" v-else :title="item.introduction">{{item.introduction}}</p>
            <div class="wrap-pro-extra">
              <div class="fl">
                <i class="iconfont icon-location"></i>
                <span v-if="list.type">{{item.address}}</span>
                <span v-else>{{item.location}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
      name : 'child',
      props : [
          'list'
      ]
  }
</script>
