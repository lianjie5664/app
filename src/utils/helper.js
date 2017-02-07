/**
 * Created by 5664 on 2017-2-6.
 */

var helper = {};

//返回顶部
helper.toTop = function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

export default helper;
