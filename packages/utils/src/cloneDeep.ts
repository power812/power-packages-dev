export function isObject(obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
export function cloneDeep(val) {
  if (isObject(val)) {
    const res = {}
    for (const key in val) {
      res[key] = cloneDeep(val[key])
    }
    return res
  } else if (Array.isArray(val)) {
    return val.slice()
  } else {
    return val
  }
}