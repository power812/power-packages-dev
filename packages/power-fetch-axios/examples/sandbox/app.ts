import axios from '../../index';
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
    var options = {
      url: getUrl(),
      params: !acceptsData(method.value) ? getParams() : undefined,
      data: acceptsData(method.value) ? getData() : undefined,
      method: method.value,
      headers: getHeaders(),
    };

    request.innerHTML = JSON.stringify(options, null, 2);
    axios(options)
      .then(function (res: any) {
        console.log(res);
        response.innerHTML = JSON.stringify(res, null, 2);
        error.innerHTML = 'None';
      })
      .catch(function (res) {
        console.log(res);
        // error.innerHTML = JSON.stringify(res.toJSON(), null, 2)
        // console.error('Axios caught an error from request', res.toJSON());
        // response.innerHTML = JSON.stringify(res.data, null, 2);
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
// GET
// axios.get(URL, { params: BODY }).then(handleSuccess).catch(handleFailure);

// POST
// axios.post(URL, BODY).then(handleSuccess).catch(handleFailure);
