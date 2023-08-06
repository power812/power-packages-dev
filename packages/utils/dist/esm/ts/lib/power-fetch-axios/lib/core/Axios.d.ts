import { AxiosRequestConfig, AxiosPromise, Method } from '../types';
declare class Axios {
    private interceptors;
    defaults: AxiosRequestConfig;
    constructor(defaultConfig: AxiosRequestConfig);
    request(configOrUrl: string, config?: AxiosRequestConfig): AxiosPromise;
    getUri(config?: AxiosRequestConfig): string;
    get(url: string, config?: AxiosRequestConfig): AxiosPromise;
    delete(url: string, config?: AxiosRequestConfig): AxiosPromise;
    head(url: string, config?: AxiosRequestConfig): AxiosPromise;
    options(url: string, config?: AxiosRequestConfig): AxiosPromise;
    post(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;
    put(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;
    patch(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;
    _requestMethodWithoutData(method: Method, url: string, config?: AxiosRequestConfig): AxiosPromise<any>;
    _requestMethodWithData(method: Method, url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<any>;
}
export default Axios;
