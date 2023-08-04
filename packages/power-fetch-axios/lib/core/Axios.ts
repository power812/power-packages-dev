import { AxiosRequestConfig } from '../types';
import dispatchRequest from '../request/xhr';
import { bulidURL } from '../helpers/url';
import { transformRequest } from '../helpers/data';
import { processHeaders } from '../helpers/headers';

class Axios {
  constructor() {}
  // 处理参数
  processConfig(config: AxiosRequestConfig): void {
    // 处理get请求params参数
    const { url, params, data, headers } = config;
    config.url = bulidURL(url, params);
    // 处理post的data参数
    config.data = transformRequest(data);
    // 处理请求头content-type
    config.headers = processHeaders(data, headers);
    console.log(config.headers, 'headers');
  }
  async request(configOrUrl: AxiosRequestConfig) {
    const config = Object.assign({}, configOrUrl);
    // 处理请求参数
    this.processConfig(config);

    const res = await dispatchRequest.call(this, config);
    return res;
  }
}
export default Axios;
