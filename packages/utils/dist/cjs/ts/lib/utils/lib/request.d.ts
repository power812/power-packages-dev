import type { AxiosInstance, AxiosRequestConfig } from 'axios';
export interface Result<T = any> {
    code: number;
    message: string;
    data: T;
}
export declare const request: AxiosInstance;
export declare const http: {
    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T_1 = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T_1>;
    put<T_2 = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T_2>;
    delete<T_3 = any>(url: string, config?: AxiosRequestConfig): Promise<T_3>;
};
