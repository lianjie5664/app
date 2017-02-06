/**
 * Created by 5664 on 2017-1-17.
 */
import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_ADDRESS } from './types'

Vue.use(VueAxios,axios);

var instance = axios.create({
    baseURL : API_ADDRESS,
    withCredentials : true
});
// if(localStorage.getItem('user')) {
//   instance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user').replace(/(^\")|(\"$)/g, '');
// }
//登录操作
export default {
  localLogin: function (data) {
    var qs = require('qs');
    // var params = new URLSearchParams(); //此方法最少需要传入2个params，否则报错。
    // params.append(data);
    // params.append('password', 'asd123123');
    return instance.post('/LoginController/login.do',qs.stringify(data))
  },
  localLogout: function () {
    return instance.get('/LoginController/logout.do')
  },
  //获取用户基本信息
  //使用axios.get().then(fn)获取data数据
  getUserInfo : function (callback) {
    instance.get('/LoginController/loginstate.do').then(function (res) {
          callback && callback(res);
      })
  },
  //首页新闻
  getIndexNews : function (callback) {
    instance.get('/tkdt/index.do').then(function (res) {
      callback && callback(res);
    })
  },
  getIndexNewsDetail : function (id,callback) {
    instance.get('/tkdt/detail.do?id='+id).then(function (res) {
        callback && callback(res);
    })
  },
  //路演大厅列表
  getLydtList : function (page,callback) {
    instance.get('/lydt/list.do?page='+ page).then(function (res) {
      callback && callback(res);
    })
  },
  //路演大厅详情
  getLydtDetail : function (id,callback) {
    instance.get('/lydt/detail.do?id='+id).then(function (res) {
        callback && callback(res);
    })
  }
}



