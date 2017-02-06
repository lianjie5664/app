/**
 * Created by 5664 on 2017-1-17.
 * 新闻模块，所有的新闻类统一放在这里处理
 */
import * as type from '../types'

const state = {
  newsList :  null,
  newsDetail : {}
};

const mutations = {
  [type.INDEX_NEWS](state,news) {
     state.newsList = news;
     // state.newsList = JSON.stringify(news);
  },
  [type.INDEX_NEWS_DETAIL](state,detail){
    state.newsDetail = detail
  }
}


export default {
  state,
  mutations
}
