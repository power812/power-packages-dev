import { cloneDeep } from './cloneDeep';
import axios from './axios';
import { copy } from './copy'; //复制功能
import { getQueryStringArgs } from './getQueryStringArgs'; // 获取url的search
import browser from './browser'; //平台检测
import * as is from './is';

const powerUtils = {
  cloneDeep,
  axios,
  copy,
  getQueryStringArgs,
  browser,
  ...is,
};
export default powerUtils;
