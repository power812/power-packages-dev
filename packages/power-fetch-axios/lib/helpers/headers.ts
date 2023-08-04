import { isObject } from './utils';
import { headersType } from './../types';

function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return;
  }
  Object.keys(headers).forEach((name) => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name];
      delete headers[name];
    }
  });
}

export function processHeaders(data: any, headers?: headersType): any {
  // 请求头规范化成Content-Type
  normalizeHeaderName(headers, 'Content-Type');
  if (isObject(data)) {
    // 用户不传就添加'application/json;charset=utf-8'
    if (!headers || (headers && !headers['Content-Type'])) {
      headers = headers || {};
      headers['Content-Type'] = 'application/json;charset=utf-8';
    }
  }
  return headers;
}
