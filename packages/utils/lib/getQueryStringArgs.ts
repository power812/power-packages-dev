// 获取search的值（来自红宝书）
export function getQueryStringArgs(key: string) {
  const qs = location.search.length > 0 ? location.search.substring(1) : '';
  const args = {} as any;
  const items = qs.length ? qs.split('&') : [];
  let name: string | null = null;
  let value: string | null = null;
  const len = items.length;
  items.forEach((item) => {
    let itemArr = item.split('=');
    name = decodeURIComponent(itemArr[0]);
    value = decodeURIComponent(itemArr[1]);
    if (name.length) {
      args[name] = value;
    }
  });
  return args[key] || '';
}
