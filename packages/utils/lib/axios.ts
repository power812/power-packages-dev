import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
/* 服务器返回数据的的类型，根据接口文档确定 */
export interface Result<T = any> {
  code: number;
  message: string;
  data: T;
}
const BASE_URL = 'http://localhost:7001';
export const request: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

export default request;
/* 导出封装的请求方法 */
// export const http = {
//   get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return request.get(url, config);
//   },

//   post<T = any>(
//     url: string,
//     data?: object,
//     config?: AxiosRequestConfig,
//   ): Promise<T> {
//     return request.post(url, data, config);
//   },

//   put<T = any>(
//     url: string,
//     data?: object,
//     config?: AxiosRequestConfig,
//   ): Promise<T> {
//     return request.put(url, data, config);
//   },

//   delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return request.delete(url, config);
//   },
// };
