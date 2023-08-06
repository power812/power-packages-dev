import { cloneDeep } from './cloneDeep';
import { request } from './request';
import { copy } from './copy'; //复制功能
import { getQueryStringArgs } from './getQueryStringArgs'; // 获取url的search
import browser from './browser'; //平台检测
import * as is from './is';

const powerUtils = {
  cloneDeep,
  request,
  copy,
  getQueryStringArgs,
  browser,
  ...is,
};
export default powerUtils;
