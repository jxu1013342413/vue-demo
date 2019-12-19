import axios from 'axios';
import { baseURL } from './env';
const request = axios.create({
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    baseURL,
    timeout: 15000,
})
//成功
function resolve({ data } = {}) {
  return data;
}
//失败
function reject({ response } = {}) {
  return Promise.reject(response);
}
request.interceptors.response.use(resolve, reject);
export {
  request,
};