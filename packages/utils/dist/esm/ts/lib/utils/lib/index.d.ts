import { cloneDeep } from './cloneDeep';
import { copy } from './copy';
import { getQueryStringArgs } from './getQueryStringArgs';
import { isDate, isObject } from './is';
declare const powerUtils: {
    isObject: typeof isObject;
    cloneDeep: typeof cloneDeep;
    request: import("axios").AxiosInstance;
    copy: typeof copy;
    getQueryStringArgs: typeof getQueryStringArgs;
    browser: {
        version: string;
        osVersion: string;
        engine: string;
        browser: string;
        os: string;
        device: string;
        isWebview: boolean;
        language: string;
        platfrom: string;
    };
    isDate: typeof isDate;
};
export default powerUtils;
