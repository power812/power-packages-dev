export default class Cancel {
  message: string;
  constructor(message?: string) {
    this.message = message || '请求取消';
  }
}
