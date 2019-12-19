import types from './mutation-types';
export default {
  [types.GET_LIST] (state, data) {
    state.list = data || {}
  }
}