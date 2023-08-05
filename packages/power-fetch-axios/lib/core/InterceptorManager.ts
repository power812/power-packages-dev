import { ResolvedFn, RejectedFn } from '../types';
/**
 * 请求拦截器：先添加的后执行，后添加的先执行；
 * 响应拦截器：按添加顺序执行
 */
export interface Interceptor<T> {
  resolved: ResolvedFn<T>;
  rejected?: RejectedFn;
}
export class InterceptorManager<T> {
  public interceptors: Array<Interceptor<T> | null>;
  constructor() {
    this.interceptors = [];
  }
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected,
    });
    // 返回该对象在数组中的索引作为该拦截器的id
    return this.interceptors.length - 1;
  }
  eject(id: number): void {
    if (this.interceptors[id]) {
      this.interceptors[id] = null;
    }
  }
}
