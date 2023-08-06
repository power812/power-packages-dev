import { isObject } from './is';
export function cloneDeep(val: any) {
  if (isObject(val)) {
    const res = {};
    for (const key in val) {
      res[key] = cloneDeep(val[key]);
    }
    return res;
  } else if (Array.isArray(val)) {
    return val.slice();
  } else {
    return val;
  }
}
