import { isObject } from './utils';

export function transformRequest(data: any): any {
  if (isObject(data)) {
    return JSON.stringify(data);
  }
  return data;
}

export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (e) {
      // console.info(e);
    }
  }
  return data;
}
