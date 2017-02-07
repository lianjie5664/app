/**
 * Created by 5664 on 2017-1-17.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import login from './modules/LoginModule'
import indexNews from './modules/NewsModule'
import cksq from './modules/CksqModule'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    login,
    indexNews,
    cksq
  },
  strict: debug
})
