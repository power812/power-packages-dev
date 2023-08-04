export interface Axios {}
export type headersType = { [key: string]: string };
export interface AxiosRequestConfig {
  url: string;
  method?: string;
  data?: any;
  params?: any;
  headers?: headersType;
}
export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH';
