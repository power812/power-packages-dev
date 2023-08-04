import { AxiosRequestConfig } from './types';
import Axios from './core/Axios';
function createInstance() {
  const context = new Axios();
  const instance = async function (config: AxiosRequestConfig) {
    return await context.request(config);
  };
  return instance;
}
const axios = createInstance();

export default axios;
