/**
 * Created by 5664 on 2017-1-17.
 */
import { LYDT_LIST,LYDT_DETAIL } from '../types'

const state = {
  lydtList :  null,
  onePageSize : 0,
  totalCount : 0,
  lydtDetail : {}
};

const mutations = {
  [LYDT_LIST](state,data) {
    state.lydtList = data.resultData;
    state.onePageSize = data.onePageSize;
    state.totalCount = data.totalCount
  },
  [LYDT_DETAIL](state,data){
    state.lydtDetail = data;
  }
}

export default {
  state,
  mutations
}
