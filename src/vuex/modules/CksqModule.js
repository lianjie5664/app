/**
 * Created by 5664 on 2017-1-17.
 */
import * as type from '../types'

const state = {
  lydtList :  null,
  onePageSize : 0,
  totalCount : 0,
  lydtDetail : {},
  zckjObj : {},
  cyyqObj : {},
  ckhdObj : {}
};

const mutations = {
  //路演大厅部分
  [type.LYDT_LIST](state,data) {
    state.lydtList = data.resultData;
    state.onePageSize = data.onePageSize;
    state.totalCount = data.totalCount
  },
  [type.LYDT_DETAIL](state,data){
    state.lydtDetail = data;
  },
  //创客之家部分
  [type.CKZJ_ZCKJ_LIST](state,data){
    state.zckjObj = data.resultData
  },
  [type.CKZJ_CYYQ_LIST](state,data){
    state.cyyqObj = data.resultData
  },
  [type.CKZJ_CKHD_LIST](state,data){
    state.ckhdObj = data.resultData
  },
}

export default {
  state,
  mutations
}
