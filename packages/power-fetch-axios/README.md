## 仿 axios 写一个请求

- 用法

```js
GET
axios('/api', {
  method: 'post',
  data: {
    msg: 'hello2434',
  },
});

POST
axios.post('/api', { msg: 'post' }).then(handleSuccess).catch(handleFailure);

// 范型
interface User {
  name: string;
  age: number;
}

function getUser<T>() {
  return axios<T>('/api')
    .then((res) => res)
    .catch((err) => console.error(err));
}

async function userList() {
  const user = await getUser<User>();
  if (user) {
    user.data.name
  }
}
userList();

// 拦截器
// 添加一个请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前可以做一些事情
    return config;
  },
  function(error) {
    // 处理请求错误
    return Promise.reject(error);
  }
);
// 添加一个响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 处理响应数据
    return response;
  },
  function(error) {
    // 处理响应错误
    return Promise.reject(error);
  }
);

// 删除一个请求拦截器
const myInterceptor = axios.interceptors.request.use(function() {
  /*...*/
});
axios.interceptors.request.eject(myInterceptor);

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

默认配置
axios.defaults.headers.common['NLRX'] = 'Hello NLRX';
axios.defaults.headers.post['NLRX1'] = 'post NLRX';
axios.defaults.headers.get['NLRX2'] = 'get NLRX';

axios({
  url: '/api',
  method: 'post',
  data: JSON.stringify({
    a: 1,
  }),
  headers: {
    test: '321',
  },
}).then((res) => {
  console.log(res.data);
});

// 转换函数

axios({
  url: '/api',
  method: 'post',
  data: {
    a: 1,
  },
  transformRequest: [
    function (data) {
      data.a = data.a + 1;
      return data;
    },
    ...(axios.defaults.transformRequest as AxiosTransformer[]),
  ],
  transformResponse: [
    ...(axios.defaults.transformResponse as AxiosTransformer[]),
    function (data) {
      data.b = '对响应进行了转换';
      return data;
    },
  ],
}).then((res) => {
  console.log(res.data);
});

// 多实例
const instance1 = axios.create({
  headers: {
    NLRX: 'Hello NLRX',
  },
});

instance1({
  url: '/api',
  method: 'post',
  data: JSON.stringify({
    a: 1,
  }),
}).then((res) => {
  console.log(res.data);
});

const instance2 = axios.create({
  headers: {
    test: '123',
  },
});

instance2({
  url: '/api',
  method: 'post',
  data: JSON.stringify({
    a: 1,
  }),
}).then((res) => {
  console.log(res.data);
});

// 取消请求
import { Canceler } from '../../lib/types';

const CancelToken = axios.CancelToken;
let cancel: Canceler;

axios
  .get('/api/cancel', {
    cancelToken: new CancelToken((c) => {
      cancel = c;
    }),
  })
  .catch(function (e) {
    console.log(e);
  });

setTimeout(() => {
  cancel('Operation canceled by the user');
}, 1000);


const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios
  .get('/api/cancel', {
    cancelToken: source.token,
  })
  .catch(function (e) {
    console.log(e);
  });

setTimeout(() => {
  source.cancel('Operation canceled by the user');
}, 1000);



// csrf
axios
  .get("/api/defendXSRF", {
    xsrfCookieName: "XSRF-NLRX",
    xsrfHeaderName: "X-XSRF-NLRX",
    withCredentials: true,
  })
  .then((res) => {
    console.log(res);
  });
```
