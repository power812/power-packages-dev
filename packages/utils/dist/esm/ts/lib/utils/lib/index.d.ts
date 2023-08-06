import { cloneDeep } from './cloneDeep';
import { copy } from './copy';
import { getQueryStringArgs } from './getQueryStringArgs';
declare const powerUtils: {
    isDate(val: any): val is Date;
    isObject(val: any): val is Object;
    isFormData(val: any): boolean;
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
};
export default powerUtils;
