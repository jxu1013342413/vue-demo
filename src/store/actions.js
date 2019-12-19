import types from './mutation-types';
import makeAction from './make-action';
export default {
  //获取用户信息
  getUserInfo: makeAction({
    type: types.GET_LIST,
    method: 'post',
    url: '/user/getP.do'
  })
}