/**
 * Created by 5664 on 2017-1-17.
 * 登录模块
 */
import * as type from '../types'

// var isLoggedIn = function() {
//   var token = localStorage.getItem('user');
//   if (token) {
//     var payload = JSON.parse(token);
//     if( payload.exp > Date.now() / 1000 ){
//       return JSON.parse(localStorage.getItem('user'))
//     }
//   } else {
//     return false;
//   }
// };



const state = {
  // token: isLoggedIn() || null
  userName :  JSON.parse(localStorage.getItem('user')) == null ? null : JSON.parse(localStorage.getItem('user')).userName,
  avatar : JSON.parse(localStorage.getItem('user')) == null ? null : JSON.parse(localStorage.getItem('user')).avatar,
  show :   JSON.parse(localStorage.getItem('user')) == null ? null : JSON.parse(localStorage.getItem('user')).show
};

const mutations = {
  [type.USER_SIGNIN](state, user) {
    user.show = true
    localStorage.setItem('user',JSON.stringify(user));
    // state.info = JSON.parse(localStorage.getItem('user'))
  },
  [type.USER_SIGNOUT](state) {
    localStorage.removeItem('user');
    state.info = null;
  },
  // [USER_REG](state, user) {
  //   localStorage.setItem('user',JSON.stringify(user));
  //   state.token = user
  // }
}

export default {
  state,
  mutations
}
