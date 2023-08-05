export type headersType = { [key: string]: string };
export type XMLHttpRequestResponseType = '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
export interface AxiosRequestConfig {
  url?: string;
  method?: string;
  data?: any;
  params?: any;
  headers?: headersType;
  responseType?: XMLHttpRequestResponseType;
  timeout?: number;
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
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  processConfig(config: AxiosRequestConfig): void;
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
