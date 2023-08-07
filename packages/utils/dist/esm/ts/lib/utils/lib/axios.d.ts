import type { AxiosInstance } from 'axios';
export interface Result<T = any> {
    code: number;
    message: string;
    data: T;
}
export declare const request: AxiosInstance;
export default request;
