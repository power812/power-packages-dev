const toString = Object.prototype.toString;

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]';
}

export function isObject(val: any): val is Object {
  return toString.call(val) === '[object Object]';
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    (to as T & U)[key] = from[key] as any;
  }
  return to as T & U;
}
export function deepMerge(...objs: any[]): any {
  const result = Object.create(null);
  function assignValue(val: any, key: string) {
    if (isObject(result[key]) && isObject(val)) {
      result[key] = deepMerge(result[key], val);
    } else if (isObject(val)) {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (let i = 0; i < objs.length; i++) {
    const obj = objs[i];
    if (!isObject(obj)) {
      console.error('参数不是对象，合并错误');
    }
    for (let key in obj) {
      assignValue(obj[key], key);
    }
  }

  return result;
}
