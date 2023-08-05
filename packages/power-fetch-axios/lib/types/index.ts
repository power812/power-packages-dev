export type headersType = { [key: string]: string };
export type XMLHttpRequestResponseType = '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
import CancelToken from '../cancel/CancelToken';
export interface AxiosTransformer {
  (data: any, headers?: any): any;
}
export interface AxiosRequestConfig {
  url?: string;
  method?: Method;
  headers?: any;
  data?: any;
  params?: any;
  responseType?: XMLHttpRequestResponseType;
  timeout?: number;
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  cancelToken?: CancelToken;
  withCredentials?: boolean;
  xsrfCookieName?: string; //表示存储 token 的 cookie 名称
  xsrfHeaderName?: string; //请求 headers 中 token 对应的 header 名称
  onDownloadProgress?: (e: ProgressEvent) => void;
  onUploadProgress?: (e: ProgressEvent) => void;
  // auth?: AxiosBasicCredentials;
  paramsSerializer?: (params: any) => string;
  baseURL?: string;
  [propName: string]: any;
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
export interface AxiosResponse<T = any> {
  data: T; // 服务端返回的数据
  status: number; // HTTP 状态码
  statusText: string; // 状态消息
  headers: any; // 响应头
  config: AxiosRequestConfig; // 请求配置对象
  request: any; // 请求的 XMLHttpRequest 对象实例
}

export interface AxiosPromise<T = any> extends Promise<T> {}

export interface AxiosError<T = any> extends Error {
  config: AxiosRequestConfig;
  code?: string | null | number;
  request?: any;
  response?: AxiosResponse<T>;
}

// Axios类
export interface Axios {
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  request<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;

  // 以下三个与上面三个多了data参数

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>;
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>;
  <T = any>(urlOrCofig: string, config?: AxiosRequestConfig): AxiosPromise<T>;
}
export interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance;
  CancelToken: CancelTokenStatic;
  Cancel: CancelStatic;
  isCancel: (value: any) => boolean;
}

// 拦截器
export interface ResolvedFn<T = any> {
  (val: T): T | Promise<T>;
}
export interface RejectedFn {
  (err: any): any;
}
export interface AxiosInterceptorManager<T> {
  use(resolve: ResolvedFn<T>, reject?: RejectedFn): number;
  eject(id: number): void;
}

export interface PromiseArr<T> {
  resolved: ResolvedFn<T> | ((config: AxiosRequestConfig) => AxiosPromise);
  rejected?: RejectedFn;
}
// 取消功能

// export interface CancelToken{
//   promise: Promise<Cancel | undefined>;
//   reason?: string;
// }
export interface CancelExecutor {
  (cancel: Canceler): void;
}
export interface Canceler {
  (message?: string): void;
}

export interface CancelTokenStatic {
  new (executor: CancelExecutor): CancelToken;
  source(): CancelTokenSource;
}
export interface CancelTokenSource {
  token: CancelToken;
  cancel: Canceler;
}

export interface Cancel {
  message?: string;
}

export interface CancelStatic {
  new (message?: string): Cancel;
  // message: string;
}
