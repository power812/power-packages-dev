interface browserType {
  version: string;
  osVersion: string;
  engine: string;
  browser: string;
  os: string;
  device: string;
  isWebview: boolean;
  language: string;
  platfrom: string;
}
export interface powerUtils {
  isObject: (val: any) => boolean;
  isDate: (val: any) => boolean;
  isFormData: (val: any) => boolean;
  browser: browserType;
}
