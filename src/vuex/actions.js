/**
 * Created by 5664 on 2017-1-12.
 */
import api from './api'
import * as type from './types'

export const UserLogin = ({ commit }, data) => {
  api.localLogin(data).then(function (response) {
    //登录成功resultCode == 0
    if( response.data.resultCode == 0) {
      //获取登录用户信息
      api.getUserInfo(function (res) {
        commit(type.USER_SIGNIN, res.data.resultData[0]);
        window.location = '/'
      })

    }else{
      window.location = '/login'
    }
  })
    .catch(function (error) {
      console.log(error);
    });
};

export const UserLogout = ({ commit }, data) => {
  api.localLogout().then(function (response) {
    commit(type.USER_SIGNOUT);
    window.location = '/'
  })
    .catch(function (error) {
      console.log(error);
    });
};
//首页新闻
export const IndexNews = ({commit},data) => {
  api.getIndexNews(function (res) {
    commit(type.INDEX_NEWS, res.data.resultData);
  })
};
//首页新闻详情
export const IndexNewsDetail = ({commit},id) => {
  api.getIndexNewsDetail(id,function (res) {
    commit(type.INDEX_NEWS_DETAIL,res.data.resultData);
  })
};
//路演大厅列表
export const LydtList = ({commit},data) =>{
    api.getLydtList(data,function (res) {
      commit(type.LYDT_LIST,res.data);
    })
};
//路演大厅详情
export const LydtDetail =({commit},data) =>{
  api.getLydtDetail(data,function (res) {
      commit(type.LYDT_DETAIL,res.data.resultData);
  })
};
