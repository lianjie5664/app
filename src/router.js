/**
 * Created by 5664 on 2017-1-10.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
// 告诉vue要使用router
Vue.use(VueRouter)
/* eslint-disable no-new */
// 实例化router对象
const router = new VueRouter({
  mode: 'history', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
  linkActiveClass: 'active', // 这是链接激活时的class
  // base : __dirname,
  // base: '/app/', // 这个是设置根目录路径，一般用不到，默认'/'
  saveScrollPosition: true,
  //滚动行为（这个功能只在 HTML5 history 模式下可用）
  scrollBehavior(to,from,savedPosition){
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
  },
  routes // 挂载路由集合 后面会说
})

// 导出router对象
export default router
