import { request } from '../scripts/request';
import { replaceTemplate } from '../scripts/help';
import QS from 'qs';
/**
 * 制造请求action
 * @param method 请求方法: get(默认), post, put等
 * @param type mutation类型
 * @param url 请求url
 * @param resolve 回调函数(可处理数据)
 * @returns function
 */
function makeAction ({ method = 'get', type, url, defaultQuery }, resolve) {
  /**
   * @param pathData 替换url模板的数据
   * @param query 请求上传数据
   */
  return ({ commit }, { pathData, query } = {}) => {
    query = { ...defaultQuery, ...query };
    // get参数特殊处理
    if (method === 'get') {
      query = {
        params: query,
      };
    }
    // 请求
    return request[method](replaceTemplate(url, pathData), QS.stringify(query))
        .then((resData = {}) => {
          resolve && resolve(resData);
          type && commit(type, resData.data);
          return Promise.resolve(resData);
        });
  };
}
export default makeAction;
