// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Element from 'element-ui'
import store from './vuex/index'
import App from './App'
// import VueLazyLoad from 'vue-lazyload'
Vue.use(Element)
// Vue.use(VueLazyLoad,{
//   loading : '/static/img/product_loading.png'
// })


//若路由设置了meta属性（true,false）,表示当前组件需要登录操作，会自动跳转到登录页
//meta的auth为true时强制用户进行登录操作，具体在routers.js中配置
router.beforeEach(({meta, path}, from, next) => {
  var { auth = true } = meta
  var isLogin = Boolean(store.state.login.userName) //true用户已登录， false用户未登录
  if (auth && !isLogin && path !== '/login') {
    return next({ path: '/login' })
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
