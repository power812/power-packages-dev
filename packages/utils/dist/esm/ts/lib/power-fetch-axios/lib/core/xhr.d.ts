import { AxiosRequestConfig, AxiosResponse } from '../types';
export declare function transformUrl(config: AxiosRequestConfig): string;
export declare function processConfig(config: AxiosRequestConfig): void;
export default function dispatchRequest(config: AxiosRequestConfig): Promise<AxiosResponse<any>>;
