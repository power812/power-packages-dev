import { AxiosRequestConfig, AxiosStatic } from './types';
import Axios from './core/Axios';
import { extend } from './helpers/utils';
import defaults from './defaultes';
import mergeConfig from './helpers/mergeConfig';
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

export default axios;
