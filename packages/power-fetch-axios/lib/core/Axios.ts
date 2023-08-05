import { AxiosRequestConfig, AxiosPromise, AxiosResponse, Method, PromiseArr } from '../types';
import dispatchRequest from '../request/xhr';
import { bulidURL } from '../helpers/url';
import { transformRequest } from '../helpers/data';
import { processHeaders } from '../helpers/headers';
import { InterceptorManager } from './InterceptorManager';

class Axios {
  private interceptors: {
    request: InterceptorManager<AxiosRequestConfig>;
    response: InterceptorManager<AxiosResponse<any>>;
  };
  constructor() {
    this.interceptors = {
      request: new InterceptorManager<AxiosRequestConfig>(),
      response: new InterceptorManager<AxiosResponse>(),
    };
  }
  // 处理参数
  processConfig(config: AxiosRequestConfig): void {
    // 处理get请求params参数
    const { url = '', params, data, headers } = config;
    config.url = bulidURL(url, params);
    // 处理post的data参数
    config.data = transformRequest(data);
    // 处理请求头content-type
    config.headers = processHeaders(data, headers);
    console.log(config.headers, 'headers');
  }
  request(configOrUrl: string, config?: AxiosRequestConfig): AxiosPromise {
    /**
     * 支持二种写法
     * 一、axios(config)
     * 二、axios(url, config)
     */
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl;
    }
    // 处理请求参数
    this.processConfig(config);

    // 构建 arr = ['请求拦截器2','请求拦截器1',...,'真实请求','响应拦截器1','响应拦截器2',...]
    let arr: PromiseArr<any>[] = [
      {
        resolved: dispatchRequest,
        rejected: undefined,
      },
    ];

    // 添加请求拦截器
    this.interceptors.request.interceptors.forEach((interceptor) => {
      if (interceptor !== null) {
        arr.unshift(interceptor);
      }
    });

    // 添加响应拦截器
    this.interceptors.response.interceptors.forEach((interceptor) => {
      if (interceptor !== null) {
        arr.push(interceptor);
      }
    });

    let promise = Promise.resolve(config);

    while (arr.length) {
      const { resolved, rejected } = arr.shift()!;
      promise = promise.then(resolved, rejected);
    }

    return promise;

    // const res = await dispatchRequest.call(this, config);
    // return res;
  }
  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('get', url, config);
  }

  delete(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('delete', url, config);
  }

  head(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('head', url, config);
  }

  options(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithoutData('options', url, config);
  }

  post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('post', url, data, config);
  }

  put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('put', url, data, config);
  }

  patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise {
    return this._requestMethodWithData('patch', url, data, config);
  }

  _requestMethodWithoutData(method: Method, url: string, config?: AxiosRequestConfig) {
    return this.request(
      url,
      Object.assign(config || {}, {
        method,
        url,
      })
    );
  }

  _requestMethodWithData(method: Method, url: string, data?: any, config?: AxiosRequestConfig) {
    return this.request(
      url,
      Object.assign(config || {}, {
        method,
        url,
        data,
      })
    );
  }
}
export default Axios;
