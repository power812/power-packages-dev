import type { AxiosInstance } from '@power88/axios';
export interface Result<T = any> {
    code: number;
    message: string;
    data: T;
}
export declare const request: AxiosInstance;
export default request;
