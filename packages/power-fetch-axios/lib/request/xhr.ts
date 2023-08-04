import { AxiosRequestConfig } from '../types';
export default async function dispatchRequest(config: AxiosRequestConfig) {
  const { data = null, url, method = 'get' } = config;

  let request = new XMLHttpRequest();
  console.log(url);
  request.open(method.toUpperCase(), url, true);
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
    console.log('响应：', request.response);
    return request.response;
  }
}
