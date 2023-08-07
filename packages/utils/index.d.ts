import { AxiosStatic } from '@power88/axios';

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
  axios: AxiosStatic;
  copy: (str: string) => void;
  cloneDeep: (val: any) => any;
}
