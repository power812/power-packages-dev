import { AxiosRequestConfig } from './types';
import { processHeaders } from './helpers/headers';
import { transformRequest, transformResponse } from './helpers/data';
const defaults: AxiosRequestConfig = {
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  validateStatus(status: number): boolean {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*',
    },
  },
  transformRequest: [
    function (data: any, headers: any): any {
      processHeaders(data, headers);
      return transformRequest(data);
    },
  ],
  transformResponse: [
    function (data: any) {
      return transformResponse(data);
    },
  ],
};

const methodsNoData = ['delete', 'get', 'head', 'options'];

methodsNoData.forEach((method) => {
  defaults.headers[method] = {};
});

const methodsWithData = ['post', 'put', 'patch'];

methodsWithData.forEach((method) => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
});
export default defaults;
