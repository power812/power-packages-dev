import { AxiosRequestConfig, AxiosStatic } from './types';
import Axios from './core/Axios';
import { extend } from './helpers/utils';
import defaults from './defaultes';
import mergeConfig from './helpers/mergeConfig';
import CancelToken from './cancel/CancelToken';
import Cancel from './cancel/Cancel';
import isCancel from './cancel/isCancel';
function createInstance(defaultConfig: AxiosRequestConfig) {
  const context = new Axios(defaultConfig);
  const axios = async function (url: string, userConfig?: AxiosRequestConfig) {
    return await context.request(url, userConfig);
  };
  // axios.get = Axios.prototype.get.bind(context);
  // axios.post = Axios.prototype.post.bind(context);
  // axios.delete = Axios.prototype.delete.bind(context);
  // axios.put = Axios.prototype.put.bind(context);
  extend(axios, context);
  return axios as AxiosStatic;
}
const axios = createInstance(defaults);
axios.create = function (userConfig: AxiosRequestConfig) {
  return createInstance(mergeConfig(defaults, userConfig));
};
// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
// axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken;
axios.isCancel = isCancel;
// axios.VERSION = VERSION;
// axios.toFormData = toFormData;

// Expose AxiosError class
// axios.AxiosError = AxiosError;
// 取消请求
axios.CancelToken = CancelToken; // 取消类
axios.Cancel = Cancel;
axios.isCancel = isCancel;

axios.all = function (promises) {
  return Promise.all(promises);
};
axios.spread = function (callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

export default axios;
