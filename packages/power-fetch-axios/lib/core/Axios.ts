import { AxiosRequestConfig } from '../types';
import dispatchRequest from '../request/xhr';
import { bulidURL } from '../helpers/url';

class Axios {
  constructor() {}
  // 处理参数
  processConfig(config: AxiosRequestConfig): void {
    // 处理get请求params参数
    const { url, params } = config;
    config.url = bulidURL(url, params);
  }
  async request(configOrUrl: AxiosRequestConfig) {
    const config = Object.assign({}, configOrUrl);
    // 处理参数
    this.processConfig(config);
    const res = await dispatchRequest.call(this, config);
    return res;
  }
}
export default Axios;
