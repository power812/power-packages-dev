import { AxiosRequestConfig } from '../types';
export default function dispatchRequest(config: AxiosRequestConfig) {
  return new Promise((resolve, reject) => {
    const { data = null, url, method = 'get', headers } = config;
    let request = new XMLHttpRequest();
    request.open(method.toUpperCase(), url, true);
    // 添加请求头
    if (headers) {
      Object.keys(headers).forEach((name) => {
        if (data === null && name.toLowerCase() === 'content-type') {
          delete headers[name];
        }
        request.setRequestHeader(name, headers[name]);
      });
    }
    // Send the request
    request.send(data || null);

    //监听请求变化
    request.onreadystatechange = function handleLoad() {
      // 请求错误
      if (!request || request.readyState !== 4) {
        return;
      }

      return onloadend();
    };

    // 函数
    function onloadend() {
      console.log('响应：', typeof request.response);
      resolve(request.response);
    }
  });
}
