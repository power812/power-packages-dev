import { AxiosRequestConfig, AxiosResponse } from '../types';
import { parseHeaders } from '../helpers/headers';
import { isFormData } from '../helpers/utils';
import isURLSameOrigin from '../helpers/isURLSameOrigin';
import cookies from '../helpers/cookies';
import transform from '../helpers/transform';
import { createError } from '../helpers/error';
import { bulidURL } from '../helpers/url';
import { processHeaders, flattenHeaders } from '../helpers/headers';
import { isAbsoluteURL } from '../helpers/isAbsoluteURL';
import { combineURLs } from '../helpers/combineURLs';

export function transformUrl(config: AxiosRequestConfig): string {
  let { url, params, paramsSerializer, baseURL } = config;
  if (baseURL && !isAbsoluteURL(url!)) {
    url = combineURLs(baseURL, url);
  }
  return bulidURL(url!, params, paramsSerializer);
}

// 如果已经请求取消，则抛出异常。
function throwIfCancellationRequested(config: AxiosRequestConfig) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
export function processConfig(config: AxiosRequestConfig): void {
  // 处理get请求params参数
  let { url = '', params, data, headers, paramsSerializer, baseURL } = config;
  config.url = transformUrl(config);
  // 处理post的data参数
  config.data = transform(data, headers, config.transformRequest);

  // 处理请求头content-type
  config.headers = processHeaders(data, headers);
  // 扁平化headers
  config.headers = flattenHeaders(config.headers, config.method!);
}

export default function dispatchRequest(config: AxiosRequestConfig) {
  return new Promise((resolve: (res: AxiosResponse) => void, reject) => {
    // 减少二次请求浪费
    throwIfCancellationRequested(config);
    // 处理参数
    processConfig(config);
    // XMLHttp实例化
    let request: XMLHttpRequest | null = new XMLHttpRequest();
    /**************** 参数处理 ************************/
    const {
      auth,
      data = null,
      url = '',
      method = 'get',
      headers,
      responseType,
      xsrfCookieName,
      xsrfHeaderName,
      timeout,
      cancelToken,
      validateStatus,
      withCredentials,
      onDownloadProgress,
      onUploadProgress,
    } = config;
    request.open(method.toUpperCase(), url, true);
    // 请求超时时间
    if (timeout) {
      request.timeout = timeout;
    }

    // Authorization 属性，它的值为 username:password 经过base64加密
    if (auth) {
      const username = auth.username || '';
      const password = auth.password || '';
      headers['Authorization'] = 'Basic ' + btoa(username + ':' + password);
    }
    // 请求中是需要携带cookie的
    if (withCredentials) {
      request.withCredentials = true;
    }
    // 下载上传进度
    // 我们通过 FormData 上传文件的时候，这个Content-Type 字段就不能用了
    if (isFormData(data)) {
      delete headers['Content-Type'];
    }
    if (onDownloadProgress) {
      request.onprogress = onDownloadProgress;
    }

    if (onUploadProgress) {
      request.upload.onprogress = onUploadProgress;
    }
    // xsrf防御(xsrfCookieName 表示存储 token 的 cookie 名称，xsrfHeaderName 表示请求 headers 中 token 对应的 header 名称)
    let xsrfValue = (withCredentials || isURLSameOrigin(url)) && xsrfCookieName ? cookies.read(xsrfCookieName) : undefined;
    if (xsrfValue) {
      headers[xsrfHeaderName!] = xsrfValue;
    }

    // 添加请求头
    if (headers) {
      Object.keys(headers).forEach((name) => {
        if (data === null && name.toLowerCase() === 'content-type') {
          delete headers[name];
        }
        request?.setRequestHeader(name, headers[name]);
      });
    }
    // 定义响应类型(responseType属性，它默认为text，可以指定了responseType: "json")
    if (responseType) {
      request.responseType = responseType;
    }
    // Send the request
    request.send(data || null);
    // 取消请求
    if (cancelToken) {
      cancelToken.promise.then((reason) => {
        request?.abort();
        reject(reason);
      });
    }
    /**************** xhr实例事件监听 ************************/

    //监听请求变化,拿到响应数据
    request.onreadystatechange = function handleLoad() {
      // 请求错误
      if (!request || request.readyState !== 4) {
        return;
      }
      if (request.status === 0) {
        console.info('网络错误或跨域数据请求或主动取消请求');
        return;
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders());
      const responseData = responseType && responseType !== 'text' ? request.response : request.responseText;
      // 包装返回数据
      const response: AxiosResponse = {
        data: responseData, // 数据
        status: request.status, // http状态码
        statusText: request.statusText,
        headers: responseHeaders, //响应头
        config, // 请求配置
        request, // xhr实例
      };
      // 状态码是否在 200-300 之间，来决定是否抛出异常
      if (!validateStatus || validateStatus(response.status)) {
        // 转化成json
        response.data = transform(response.data, response.headers, response.config.transformResponse);
        resolve(response);
        // 清除缓存
        request = null;
      } else {
        reject(createError(`响应失败,响应状态码: ${response.status}`, config, request.status, request, response));
        // 清除缓存
        request = null;
      }
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('请求取消', config, request && request.status, request));

      // Clean up request
      request = null;
    };

    // 网络错误事件
    request.onerror = function () {
      reject(createError('网络错误', config, request && request.status, request));
      // 清除缓存
      request = null;
    };
    request.ontimeout = function () {
      reject(createError(`请求超时,超过 ${timeout} ms `, config, request && request.status, request));
      // 清除缓存
      request = null;
    };

    /**************** 函数************************/
  });
}
