export type headersType = {
    [key: string]: string;
};
export type XMLHttpRequestResponseType = '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
import CancelToken from '../cancel/CancelToken';
export interface AxiosTransformer {
    (data: any, headers?: any): any;
}
export interface AxiosBasicCredentials {
    username: string;
    password: string;
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
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
    onDownloadProgress?: (e: ProgressEvent) => void;
    onUploadProgress?: (e: ProgressEvent) => void;
    auth?: AxiosBasicCredentials;
    paramsSerializer?: (params: any) => string;
    baseURL?: string;
    validateStatus?: (status: number) => Boolean;
    [propName: string]: any;
}
export type Method = 'get' | 'GET' | 'delete' | 'Delete' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH';
export interface AxiosResponse<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    request: any;
}
export interface AxiosPromise<T = any> extends Promise<T> {
}
export interface AxiosError<T = any> extends Error {
    config: AxiosRequestConfig;
    code?: string | null | number;
    request?: any;
    response?: AxiosResponse<T>;
}
export interface Axios {
    defaults: AxiosRequestConfig;
    interceptors: {
        request: AxiosInterceptorManager<AxiosRequestConfig>;
        response: AxiosInterceptorManager<AxiosResponse>;
    };
    getUri: (config?: AxiosRequestConfig) => string;
    request<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
    get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
    delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
    head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
    options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
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
    all<T>(promises: Array<T | Promise<T>>): Promise<T[]>;
    spread<T, R>(callback: (...args: T[]) => R): (arr: T[]) => R;
}
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
}
