import { isObject } from './is';
export function cloneDeep(val: any) {
  if (isObject(val)) {
    const res = {} as any;
    for (const key in val as Object) {
      res[key] = cloneDeep(val[key]);
    }
    return res;
  } else if (Array.isArray(val)) {
    return val.slice();
  } else {
    return val;
  }
}
