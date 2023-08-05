import axios from '../../index';
import { AxiosRequestConfig } from '../../lib/types';
(function () {
  // Just for you IE8
  if (typeof Array.prototype.indexOf === 'undefined') {
    Array.prototype.indexOf = function (item) {
      for (var i = 0, l = this.length; i < l; i++) {
        if (this[i] === item) {
          return i;
        }
      }
      return -1;
    };
  }

  var url = document.getElementById('url') as HTMLInputElement;
  var method = document.getElementById('method') as HTMLInputElement;
  var params = document.getElementById('params') as HTMLTextAreaElement;
  var data = document.getElementById('data') as HTMLTextAreaElement;
  var headers = document.getElementById('headers') as HTMLInputElement;
  var submit = document.getElementById('submit') as HTMLButtonElement;
  var request = document.getElementById('request') as HTMLElement;
  var response = document.getElementById('response') as HTMLElement;
  var error = document.getElementById('error') as HTMLElement;

  function acceptsData(method: string) {
    return ['PATCH', 'POST', 'PUT'].indexOf(method) > -1;
  }

  function getUrl() {
    return url.value.length === 0 ? '/api' : url.value;
  }

  function getParams() {
    return params.value.length === 0 ? null : JSON.parse(params.value);
  }

  function getData() {
    return data.value.length === 0 ? null : JSON.parse(data.value);
  }

  function getHeaders() {
    return headers.value.length === 0 ? null : JSON.parse(headers.value);
  }

  function syncWithLocalStorage() {
    method.value = localStorage.getItem('method') || 'GET';
    params.value = localStorage.getItem('params') || '';
    data.value = localStorage.getItem('data') || '';
    headers.value = localStorage.getItem('headers') || '';
  }

  function syncParamsAndData() {
    switch (method.value) {
      case 'PATCH':
      case 'POST':
      case 'PUT':
        (params.parentNode as HTMLElement).style.display = 'none';
        (data.parentNode as HTMLElement).style.display = '';
        break;
      default:
        (params.parentNode as HTMLElement).style.display = '';
        (data.parentNode as HTMLElement).style.display = 'none';
        break;
    }
  }

  submit.onclick = function () {
    var options: AxiosRequestConfig = {
      url: getUrl(),
      params: !acceptsData(method.value) ? getParams() : undefined,
      data: acceptsData(method.value) ? getData() : undefined,
      method: method.value,
      headers: getHeaders(),
      // responseType: 'json',
    };

    request.innerHTML = JSON.stringify(options, null, 2);
    axios(options)
      .then(function (res: any) {
        console.log('响应:', res);
        response.innerHTML = JSON.stringify(res.data, null, 2);
        error.innerHTML = 'None';
      })
      .catch(function (e) {
        console.log(e.message);
        console.log(e.config);
        console.log(e.request);
        console.log(e.code);
        error.innerHTML = JSON.stringify(e, null, 2);
        response.innerHTML = JSON.stringify(e.data, null, 2);
      });
  };

  url.onchange = function () {
    localStorage.setItem('url', url.value);
  };

  method.onchange = function () {
    localStorage.setItem('method', method.value);
    syncParamsAndData();
  };

  params.onchange = function () {
    localStorage.setItem('params', params.value);
  };

  data.onchange = function () {
    localStorage.setItem('data', data.value);
  };

  headers.onchange = function () {
    localStorage.setItem('headers', headers.value);
  };

  syncWithLocalStorage();
  syncParamsAndData();
})();
// 请求参数
// import requestParams from './requestParams';
// console.log(requestParams);
const handleSuccess = () => {};
const handleFailure = () => {};
// GET
// axios('/api', {
//   method: 'post',
//   data: {
//     msg: 'hello2434',
//   },
// });

// POST
// axios.post('/api', { msg: 'post' }).then(handleSuccess).catch(handleFailure);

// 范型
// interface User {
//   name: string;
//   age: number;
// }

// function getUser<T>() {
//   return axios<T>('/api')
//     .then((res) => res)
//     .catch((err) => console.error(err));
// }

// async function userList() {
//   const user = await getUser<User>();
//   if (user) {
//     user.data.name
//   }
// }
// userList();

// 拦截器
// 添加一个请求拦截器
// axios.interceptors.request.use(
//   function(config) {
//     // 在发送请求之前可以做一些事情
//     return config;
//   },
//   function(error) {
//     // 处理请求错误
//     return Promise.reject(error);
//   }
// );
// // 添加一个响应拦截器
// axios.interceptors.response.use(
//   function(response) {
//     // 处理响应数据
//     return response;
//   },
//   function(error) {
//     // 处理响应错误
//     return Promise.reject(error);
//   }
// );

// // 删除一个请求拦截器
// const myInterceptor = axios.interceptors.request.use(function() {
//   /*...*/
// });
// axios.interceptors.request.eject(myInterceptor);

// 请求拦截器1
let requestInterceptor1 = axios.interceptors.request.use((config) => {
  config.headers && (config.headers.test += 'requestInterceptors1---');
  return config;
});

// 请求拦截器2
axios.interceptors.request.use((config) => {
  config.headers && (config.headers.test += 'requestInterceptors2---');
  return config;
});

// 请求拦截器3
axios.interceptors.request.use((config) => {
  config.headers && (config.headers.test += 'requestInterceptors3---');
  return config;
});

// 响应拦截器1
axios.interceptors.response.use((response) => {
  response.data.test += '响应拦截器1';
  return response;
});

// 响应拦截器2
let responseInterceptor2 = axios.interceptors.response.use((response) => {
  response.data.test += '响应拦截器2';
  return response;
});

// 响应拦截器3
axios.interceptors.response.use((response) => {
  response.data.test += '响应拦截器3';
  return response;
});

axios.interceptors.request.eject(requestInterceptor1);
axios.interceptors.response.eject(responseInterceptor2);

axios.get('/api', { headers: { test: 'NLRX---' } }).then((res) => {
  console.log(res);
});
