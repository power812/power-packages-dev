// @power88/utils  v0.0.4 Copyright (c) 2023  and contributors
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter$1(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator$1(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var toString$1 = Object.prototype.toString;
function isDate$1(val) {
    return toString$1.call(val) === '[object Date]';
}
function isObject$1(val) {
    return toString$1.call(val) === '[object Object]';
}
function isFormData$1(val) {
    return val && val instanceof FormData;
}

const is = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isDate: isDate$1,
    isFormData: isFormData$1,
    isObject: isObject$1
});

function cloneDeep(val) {
    if (isObject$1(val)) {
        var res = {};
        for (var key in val) {
            res[key] = cloneDeep(val[key]);
        }
        return res;
    }
    else if (Array.isArray(val)) {
        return val.slice();
    }
    else {
        return val;
    }
}

// Axios v0.0.3 Copyright (c) 2023 power and contributors
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var toString = Object.prototype.toString;
function isDate(val) {
    return toString.call(val) === '[object Date]';
}
function isObject(val) {
    return toString.call(val) === '[object Object]';
}
function extend(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
    return to;
}
function deepMerge() {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    var result = Object.create(null);
    function assignValue(val, key) {
        if (isObject(result[key]) && isObject(val)) {
            result[key] = deepMerge(result[key], val);
        }
        else if (isObject(val)) {
            result[key] = deepMerge({}, val);
        }
        else {
            result[key] = val;
        }
    }
    for (var i = 0; i < objs.length; i++) {
        var obj = objs[i];
        // if (!isObject(obj)) {
        //   break;
        // }
        for (var key in obj) {
            assignValue(obj[key], key);
        }
    }
    return result;
}
function isFormData(val) {
    return val && val instanceof FormData;
}
function isURLSearchParams(val) {
    return typeof val !== 'undefined' && val instanceof URLSearchParams;
}

function normalizeHeaderName(headers, normalizedName) {
    if (!headers) {
        return;
    }
    Object.keys(headers).forEach(function (name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = headers[name];
            delete headers[name];
        }
    });
}
function processHeaders(data, headers) {
    // 请求头规范化成Content-Type
    normalizeHeaderName(headers, 'Content-Type');
    if (isObject(data)) {
        // 用户不传就添加'application/json;charset=utf-8'
        if (!headers || (headers && !headers['Content-Type'])) {
            headers = headers || {};
            headers['Content-Type'] = 'application/json;charset=utf-8';
        }
    }
    return headers;
}
/**
 * 解析响应头
 * headers: "date: Mon, 29 Jul 2019 07:47:16 GMT ↵etag: W/"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k" ↵connection: close ↵x-powered-by: Express ↵content-length: 13 ↵content-type: application/json; charset=utf-8
 *
 * ｛
    headers: "date: Mon, 29 Jul 2019 07:47:16 GMT
    etag: 'W/"d-Ssxx4FRxEutDLwo2+xkkxKc4y0k"'
    connection: 'close'
    x-powered-by: 'Express'
    content-length: '13'
    content-type: 'application/json; charset=utf-8'
｝
 * */
function parseHeaders(headers) {
    var res = Object.create(null);
    if (!headers) {
        return res;
    }
    headers.split('\r\n').forEach(function (line) {
        var _a = line.split(':'), key = _a[0], val = _a[1];
        key = key.trim().toLowerCase();
        if (!key) {
            return;
        }
        if (val) {
            val = val.trim();
        }
        res[key] = val;
    });
    return res;
}
// headers扁平化
function flattenHeaders(headers, method) {
    if (!headers) {
        return headers;
    }
    headers = deepMerge(headers.common || {}, headers[method] || {}, headers);
    var methodsToDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch', 'common'];
    methodsToDelete.forEach(function (method) {
        delete headers[method];
    });
    return headers;
}

// 创建一个可以通过url获取协议、域名、端口的函数
function resolveURL(url) {
    var urlParsingNode = document.createElement('a');
    urlParsingNode.setAttribute('href', url);
    return {
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        port: urlParsingNode.port,
    };
}
function isURLSameOrigin(requestURL) {
    // 1.先获取当前页面地址的协议、域名、端口
    var currentOrigin = resolveURL(window.location.href);
    // 2.再获取请求url的协议、域名、端口
    var parsedOrigin = resolveURL(requestURL);
    // 3.最后比较三者是否相同
    return (parsedOrigin.protocol === currentOrigin.protocol && parsedOrigin.host === currentOrigin.host && parsedOrigin.port === currentOrigin.port);
}

var cookie = {
    read: function (name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return match ? decodeURIComponent(match[3]) : null;
    },
};

function transform(data, headers, fns) {
    if (!fns) {
        return data;
    }
    if (!Array.isArray(fns)) {
        fns = [fns];
    }
    fns.forEach(function (fn) {
        data = fn(data, headers);
    });
    return data;
}

var AxiosError = /** @class */ (function (_super) {
    __extends(AxiosError, _super);
    function AxiosError(message, config, request, code, response) {
        var _this = _super.call(this, message) || this;
        _this.config = config;
        _this.request = request;
        _this.code = code;
        _this.response = response;
        Object.setPrototypeOf(_this, AxiosError.prototype);
        return _this;
    }
    return AxiosError;
}(Error));
function createError(message, config, code, request, response) {
    var error = new AxiosError(message, config, code, request, response);
    return error;
}

function encode(val) {
    return encodeURIComponent(val)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}
function bulidURL(url, params, paramsSerializer) {
    // 如果params为空，直接返回原始url
    if (!params) {
        return url;
    }
    // 如果url中有哈希标记，则直接返回原始url
    if (url.includes('#')) {
        var markIndex = url.indexOf('#');
        url = url.slice(0, markIndex);
        return url;
    }
    var serializedParams;
    if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
    }
    else if (isURLSearchParams(params)) {
        serializedParams = params.toString();
    }
    else {
        // 定义键值对数组，用于最后拼接url，将params中的键值对进行处理最终放入parts中，
        // parts最后应该为['key=value','a=1','b=2','c=3',...]
        var parts_1 = [];
        // 遍历params中的键值对
        Object.keys(params).forEach(function (key) {
            var val = params[key];
            // 如果有为null或undefined的值，不处理直接跳出循环
            if (val === null || typeof val === 'undefined') {
                return;
            }
            var values;
            // 如果值为数组，则将该值赋给临时数组变量values，用于下面遍历处理
            if (Array.isArray(val)) {
                values = val;
                key += '[]';
            }
            else {
                // 如果值不是数组，则强行将其变为数组进行处理
                values = [val];
            }
            values.forEach(function (val) {
                if (isDate(val)) {
                    val = val.toISOString();
                }
                else if (isObject(val)) {
                    val = JSON.stringify(val);
                }
                parts_1.push("".concat(encode(key), "=").concat(encode(val)));
            });
        });
        // 将parts用'&'拼接
        serializedParams = parts_1.join('&');
    }
    if (serializedParams) {
        // 判断原始url中是否有已存在的参数，即判断是否有'?',
        // 如果有，则将处理后的键值对加'&'拼接在后面，
        // 如果没有，则将处理后的键值对加'?'拼接在后面
        url += (url.includes('?') ? '&' : '?') + serializedParams;
    }
    return url;
}

function isAbsoluteURL(url) {
    // 如果URL以“<scheme>：//”或“//”（协议相对URL）开头，则该URL被视为绝对值。
    // RFC 3986将方案名称定义为以字母开头的字符序列，
    // 后跟字母，数字，加号，句点或连字符的任意组合。
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}

function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}

function transformUrl(config) {
    var url = config.url, params = config.params, paramsSerializer = config.paramsSerializer, baseURL = config.baseURL;
    if (baseURL && !isAbsoluteURL(url)) {
        url = combineURLs(baseURL, url);
    }
    return bulidURL(url, params, paramsSerializer);
}
// 如果已经请求取消，则抛出异常。
function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
}
function processConfig(config) {
    // 处理get请求params参数
    config.url; config.params; var data = config.data, headers = config.headers; config.paramsSerializer; config.baseURL;
    config.url = transformUrl(config);
    // 处理post的data参数
    config.data = transform(data, headers, config.transformRequest);
    // 处理请求头content-type
    config.headers = processHeaders(data, headers);
    // 扁平化headers
    config.headers = flattenHeaders(config.headers, config.method);
}
function dispatchRequest(config) {
    return new Promise(function (resolve, reject) {
        // 减少二次请求浪费
        throwIfCancellationRequested(config);
        // 处理参数
        processConfig(config);
        // XMLHttp实例化
        var request = new XMLHttpRequest();
        /**************** 参数处理 ************************/
        var auth = config.auth, _a = config.data, data = _a === void 0 ? null : _a, _b = config.url, url = _b === void 0 ? '' : _b, _c = config.method, method = _c === void 0 ? 'get' : _c, headers = config.headers, responseType = config.responseType, xsrfCookieName = config.xsrfCookieName, xsrfHeaderName = config.xsrfHeaderName, timeout = config.timeout, cancelToken = config.cancelToken, validateStatus = config.validateStatus, withCredentials = config.withCredentials, onDownloadProgress = config.onDownloadProgress, onUploadProgress = config.onUploadProgress;
        request.open(method.toUpperCase(), url, true);
        // 请求超时时间
        if (timeout) {
            request.timeout = timeout;
        }
        // Authorization 属性，它的值为 username:password 经过base64加密
        if (auth) {
            var username = auth.username || '';
            var password = auth.password || '';
            headers['Authorization'] = 'Basic ' + btoa(username + ':' + password);
        }
        // 请求中是需要携带cookie的
        if (withCredentials) {
            request.withCredentials = true;
        }
        // 下载上传进度
        // 我们通过 FormData 上传文件的时候，这个Content-Type 字段就不能用了
        if (isFormData(data)) {
            delete headers['Content-Type'];
        }
        if (onDownloadProgress) {
            request.onprogress = onDownloadProgress;
        }
        if (onUploadProgress) {
            request.upload.onprogress = onUploadProgress;
        }
        // xsrf防御(xsrfCookieName 表示存储 token 的 cookie 名称，xsrfHeaderName 表示请求 headers 中 token 对应的 header 名称)
        var xsrfValue = (withCredentials || isURLSameOrigin(url)) && xsrfCookieName ? cookie.read(xsrfCookieName) : undefined;
        if (xsrfValue) {
            headers[xsrfHeaderName] = xsrfValue;
        }
        // 添加请求头
        if (headers) {
            Object.keys(headers).forEach(function (name) {
                if (data === null && name.toLowerCase() === 'content-type') {
                    delete headers[name];
                }
                request === null || request === void 0 ? void 0 : request.setRequestHeader(name, headers[name]);
            });
        }
        // 定义响应类型(responseType属性，它默认为text，可以指定了responseType: "json")
        if (responseType) {
            request.responseType = responseType;
        }
        // Send the request
        request.send(data || null);
        // 取消请求
        if (cancelToken) {
            cancelToken.promise.then(function (reason) {
                request === null || request === void 0 ? void 0 : request.abort();
                reject(reason);
            });
        }
        /**************** xhr实例事件监听 ************************/
        //监听请求变化,拿到响应数据
        request.onreadystatechange = function handleLoad() {
            // 请求错误
            if (!request || request.readyState !== 4) {
                return;
            }
            if (request.status === 0) {
                console.info('网络错误或跨域数据请求或主动取消请求');
                return;
            }
            var responseHeaders = parseHeaders(request.getAllResponseHeaders());
            var responseData = responseType && responseType !== 'text' ? request.response : request.responseText;
            // 包装返回数据
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request,
            };
            // 状态码是否在 200-300 之间，来决定是否抛出异常
            if (!validateStatus || validateStatus(response.status)) {
                // 转化成json
                response.data = transform(response.data, response.headers, response.config.transformResponse);
                resolve(response);
                // 清除缓存
                request = null;
            }
            else {
                reject(createError("\u54CD\u5E94\u5931\u8D25,\u54CD\u5E94\u72B6\u6001\u7801: ".concat(response.status), config, request.status, request, response));
                // 清除缓存
                request = null;
            }
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(createError('请求取消', config, request && request.status, request));
            // Clean up request
            request = null;
        };
        // 网络错误事件
        request.onerror = function () {
            reject(createError('网络错误', config, request && request.status, request));
            // 清除缓存
            request = null;
        };
        request.ontimeout = function () {
            reject(createError("\u8BF7\u6C42\u8D85\u65F6,\u8D85\u8FC7 ".concat(timeout, " ms "), config, request && request.status, request));
            // 清除缓存
            request = null;
        };
        /**************** 函数************************/
    });
}

var InterceptorManager = /** @class */ (function () {
    function InterceptorManager() {
        this.interceptors = [];
    }
    InterceptorManager.prototype.use = function (resolved, rejected) {
        this.interceptors.push({
            resolved: resolved,
            rejected: rejected,
        });
        // 返回该对象在数组中的索引作为该拦截器的id
        return this.interceptors.length - 1;
    };
    InterceptorManager.prototype.eject = function (id) {
        if (this.interceptors[id]) {
            this.interceptors[id] = null;
        }
    };
    return InterceptorManager;
}());

function mergeConfig(defaultConfig, userConfig) {
    var config = Object.create(null); // 创建空对象，作为最终的合并结果
    // 1.常规属性，如果用户配置了就用用户配置的，如果用户没配置，则用默认配置的；
    // 1.常规属性，如果用户配置了就用用户配置的，如果用户没配置，则用默认配置的；
    var defaultToUserConfig = [
        'baseURL',
        'transformRequest',
        'transformResponse',
        'paramsSerializer',
        'timeout',
        'withCredentials',
        'adapter',
        'responseType',
        'xsrfCookieName',
        'xsrfHeaderName',
        'onUploadProgress',
        'onDownloadProgress',
        'maxContentLength',
        'validateStatus',
        'maxRedirects',
        'httpAgent',
        'httpsAgent',
        'cancelToken',
        'socketPath',
    ];
    defaultToUserConfig.forEach(function (prop) {
        userConfig = userConfig || {};
        // 如果用户配置里有
        if (typeof userConfig[prop] !== 'undefined') {
            config[prop] = userConfig[prop];
            // 如果用户配置里没有，默认配置里有
        }
        else if (typeof defaultConfig[prop] !== 'undefined') {
            config[prop] = defaultConfig[prop];
        }
    });
    // 2.对于 url、method、params、data这些属性，只接受用户配置,
    var valueFromUserConfig = ['url', 'method', 'params', 'data'];
    valueFromUserConfig.forEach(function (prop) {
        userConfig = userConfig || {};
        if (typeof userConfig[prop] !== 'undefined') {
            config[prop] = userConfig[prop];
        }
    });
    // 3.复杂对象深度合并
    var mergeDeepProperties = ['headers', 'auth', 'proxy'];
    mergeDeepProperties.forEach(function (prop) {
        userConfig = userConfig || {};
        if (isObject(userConfig[prop])) {
            config[prop] = deepMerge(defaultConfig[prop], userConfig[prop]);
        }
        else if (userConfig[prop]) {
            config[prop] = userConfig[prop];
        }
        else if (isObject(defaultConfig[prop])) {
            config[prop] = deepMerge(defaultConfig[prop]);
        }
        else if (typeof defaultConfig[prop] !== 'undefined') {
            config[prop] = defaultConfig[prop];
        }
    });
    return config;
}

var Axios = /** @class */ (function () {
    function Axios(defaultConfig) {
        // 默认配置
        this.defaults = defaultConfig;
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager(),
        };
    }
    // 处理参数
    // processConfig(config: AxiosRequestConfig): void {
    //   // 处理get请求params参数
    //   const { url = '', params, data, headers } = config;
    //   config.url = bulidURL(url, params);
    //   // 处理post的data参数
    //   config.data = transform(data, headers, config.transformRequest);
    //   // 处理请求头content-type
    //   config.headers = processHeaders(data, headers);
    //   // 扁平化headers
    //   config.headers = flattenHeaders(config.headers, config.method!);
    // }
    Axios.prototype.request = function (configOrUrl, config) {
        /**
         * 支持二种写法
         * 一、axios(config)
         * 二、axios(url, config)
         */
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        }
        else {
            config = configOrUrl;
        }
        // 合并参数
        config = mergeConfig(this.defaults, config);
        console.log('config', config);
        // 处理请求参数
        // this.processConfig(config);
        // 构建 arr = ['请求拦截器2','请求拦截器1',...,'真实请求','响应拦截器1','响应拦截器2',...]
        var arr = [
            {
                resolved: dispatchRequest,
                rejected: undefined,
            },
        ];
        // 添加请求拦截器
        this.interceptors.request.interceptors.forEach(function (interceptor) {
            if (interceptor !== null) {
                arr.unshift(interceptor);
            }
        });
        // 添加响应拦截器
        this.interceptors.response.interceptors.forEach(function (interceptor) {
            if (interceptor !== null) {
                arr.push(interceptor);
            }
        });
        var promise = Promise.resolve(config);
        while (arr.length) {
            var _a = arr.shift(), resolved = _a.resolved, rejected = _a.rejected;
            promise = promise.then(resolved, rejected);
        }
        return promise;
        // const res = await dispatchRequest.call(this, config);
        // return res;
    };
    Axios.prototype.getUri = function (config) {
        config = mergeConfig(this.defaults, config);
        return transformUrl(config);
    };
    Axios.prototype.get = function (url, config) {
        return this._requestMethodWithoutData('get', url, config);
    };
    Axios.prototype.delete = function (url, config) {
        return this._requestMethodWithoutData('delete', url, config);
    };
    Axios.prototype.head = function (url, config) {
        return this._requestMethodWithoutData('head', url, config);
    };
    Axios.prototype.options = function (url, config) {
        return this._requestMethodWithoutData('options', url, config);
    };
    Axios.prototype.post = function (url, data, config) {
        return this._requestMethodWithData('post', url, data, config);
    };
    Axios.prototype.put = function (url, data, config) {
        return this._requestMethodWithData('put', url, data, config);
    };
    Axios.prototype.patch = function (url, data, config) {
        return this._requestMethodWithData('patch', url, data, config);
    };
    Axios.prototype._requestMethodWithoutData = function (method, url, config) {
        return this.request(url, Object.assign(config || {}, {
            method: method,
            url: url,
        }));
    };
    Axios.prototype._requestMethodWithData = function (method, url, data, config) {
        return this.request(url, Object.assign(config || {}, {
            method: method,
            url: url,
            data: data,
        }));
    };
    return Axios;
}());

function transformRequest(data) {
    if (isObject(data)) {
        return JSON.stringify(data);
    }
    return data;
}
function transformResponse(data) {
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        }
        catch (e) {
            // console.info(e);
        }
    }
    return data;
}

var defaults = {
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    validateStatus: function (status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            Accept: 'application/json, text/plain, */*',
        },
    },
    transformRequest: [
        function (data, headers) {
            processHeaders(data, headers);
            return transformRequest(data);
        },
    ],
    transformResponse: [
        function (data) {
            return transformResponse(data);
        },
    ],
};
var methodsNoData = ['delete', 'get', 'head', 'options'];
methodsNoData.forEach(function (method) {
    defaults.headers[method] = {};
});
var methodsWithData = ['post', 'put', 'patch'];
methodsWithData.forEach(function (method) {
    defaults.headers[method] = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
});

var Cancel = /** @class */ (function () {
    function Cancel(message) {
        this.message = message || '请求取消';
    }
    return Cancel;
}());

var CancelToken = /** @class */ (function () {
    function CancelToken(executor) {
        var _this = this;
        var resolvePromise;
        this.promise = new Promise(function (resolve) {
            resolvePromise = resolve;
        });
        executor(function (message) {
            if (_this.reason) {
                return;
            }
            _this.reason = new Cancel(message);
            resolvePromise(_this.reason);
        });
    }
    CancelToken.prototype.throwIfRequested = function () {
        if (this.reason) {
            throw this.reason;
        }
    };
    CancelToken.source = function () {
        var cancel;
        var token = new CancelToken(function (c) {
            cancel = c;
        });
        return {
            cancel: cancel,
            token: token,
        };
    };
    return CancelToken;
}());

function isCancel(val) {
    return val instanceof Cancel;
}

function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var axios = function (url, userConfig) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, context.request(url, userConfig)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    // axios.get = Axios.prototype.get.bind(context);
    // axios.post = Axios.prototype.post.bind(context);
    // axios.delete = Axios.prototype.delete.bind(context);
    // axios.put = Axios.prototype.put.bind(context);
    extend(axios, context);
    return axios;
}
var axios = createInstance(defaults);
axios.create = function (userConfig) {
    return createInstance(mergeConfig(defaults, userConfig));
};
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
// axios.CanceledError = CanceledError;
axios.CancelToken = CancelToken;
axios.isCancel = isCancel;
// axios.VERSION = VERSION;
// axios.toFormData = toFormData;
// Expose AxiosError class
// axios.AxiosError = AxiosError;
// 取消请求
axios.CancelToken = CancelToken; // 取消类
axios.Cancel = Cancel;
axios.isCancel = isCancel;
axios.all = function (promises) {
    return Promise.all(promises);
};
axios.spread = function (callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

var BASE_URL = 'http://localhost:7001';
var request = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});
request.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});
request.interceptors.response.use(function (response) {
    return response.data;
}, function (err) {
    return Promise.reject(err);
});
/* 导出封装的请求方法 */
// export const http = {
//   get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return request.get(url, config);
//   },
//   post<T = any>(
//     url: string,
//     data?: object,
//     config?: AxiosRequestConfig,
//   ): Promise<T> {
//     return request.post(url, data, config);
//   },
//   put<T = any>(
//     url: string,
//     data?: object,
//     config?: AxiosRequestConfig,
//   ): Promise<T> {
//     return request.put(url, data, config);
//   },
//   delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
//     return request.delete(url, config);
//   },
// };

function copy(command) {
    return __awaiter$1(this, void 0, void 0, function () {
        var input;
        return __generator$1(this, function (_a) {
            if (navigator.clipboard.writeText) {
                navigator.clipboard.writeText(command);
            }
            else {
                input = document.createElement('input');
                input.value = command;
                document.body.appendChild(input);
                input.select();
                document.execCommand('Copy');
                input.className = 'input';
                input.style.display = 'none';
            }
            return [2 /*return*/];
        });
    });
}

// 获取search的值（来自红宝书）
function getQueryStringArgs(key) {
    var qs = location.search.length > 0 ? location.search.substring(1) : '';
    var args = {};
    var items = qs.length ? qs.split('&') : [];
    var name = null;
    var value = null;
    items.length;
    items.forEach(function (item) {
        var itemArr = item.split('=');
        name = decodeURIComponent(itemArr[0]);
        value = decodeURIComponent(itemArr[1]);
        if (name.length) {
            args[name] = value;
        }
    });
    return args[key] || '';
}

/** *************以上是类型代码*********** */
var NAVIGATOR = {};
if (typeof navigator !== 'undefined') {
    NAVIGATOR = navigator;
}
var UA = NAVIGATOR.userAgent || '';
var mimeTypes = NAVIGATOR.mimeTypes;
var platfrom = NAVIGATOR.platform;
/** 内核 */
var engineRegExp = {
    Trident: /(Trident|NET CLR)/,
    Presto: /Presto/,
    WebKit: /AppleWebKit/,
    Gecko: /Gecko\//,
    KHTML: /KHTML\//,
};
/** 浏览器 */
var browserRegExp = {
    Safari: /Safari/,
    Chrome: /(Chrome|CriOS)/,
    IE: /(MSIE|Trident)/,
    Edge: /(Edge|Edg\/|EdgA|EdgiOS)/,
    Firefox: /(Firefox|FxiOS)/,
    'Firefox Focus': /Focus/,
    Chromium: /Chromium/,
    Opera: /(Opera|OPR|OPT)/,
    Vivaldi: /Vivaldi/,
    Yandex: /YaBrowser/,
    Arora: /Arora/,
    Lunascape: /Lunascape/,
    QupZilla: /QupZilla/,
    'Coc Coc': /coc_coc_browser/,
    Kindle: /(Kindle|Silk\/)/,
    Iceweasel: /Iceweasel/,
    Konqueror: /Konqueror/,
    Iceape: /Iceape/,
    SeaMonkey: /SeaMonkey/,
    Epiphany: /Epiphany/,
    '360': /(QihooBrowser|QHBrowser)/,
    '360EE': /360EE/,
    '360SE': /360SE/,
    UC: /(UCBrowser|UBrowser|UCWEB)/,
    QQBrowser: /QQBrowser/,
    QQ: /QQ\//,
    Baidu: /(Baidu|BIDUBrowser|baidubrowser|baiduboxapp|BaiduHD)/,
    Maxthon: /Maxthon/,
    Sogou: /(MetaSr|Sogou)/,
    Liebao: /(LBBROWSER|LieBaoFast)/,
    '2345Explorer': /2345Explorer/,
    '115Browser': /115Browser/,
    TheWorld: /TheWorld/,
    XiaoMi: /MiuiBrowser/,
    Vivo: /VivoBrowser/,
    Huawei: /HuaweiBrowser/,
    OPPO: /HeyTapBrowser/,
    Quark: /Quark/,
    Qiyu: /Qiyu/,
    Wechat: /MicroMessenger/,
    WechatWork: /wxwork\//,
    Taobao: /AliApp\(TB/,
    Alipay: /AliApp\(AP/,
    Weibo: /Weibo/,
    Douban: /com\.douban\.frodo/,
    Suning: /SNEBUY-APP/,
    iQiYi: /IqiyiApp/,
    DingTalk: /DingTalk/,
    Douyin: /aweme/,
};
/** 系统或平台 */
var osRegExp = {
    Windows: /Windows/,
    Linux: /(Linux|X11)/,
    MacOS: /Macintosh/,
    Android: /(Android|Adr)/,
    HarmonyOS: /HarmonyOS/,
    Ubuntu: /Ubuntu/,
    FreeBSD: /FreeBSD/,
    Debian: /Debian/,
    'Windows Phone': /(IEMobile|Windows Phone)/,
    BlackBerry: /(BlackBerry|RIM)/,
    MeeGo: /MeeGo/,
    Symbian: /Symbian/,
    iOS: /like Mac OS X/,
    'Chrome OS': /CrOS/,
    WebOS: /hpwOS/,
};
/** 设备 */
var deviceRegExp = {
    Mobile: /(Mobi|iPh|480)/,
    Tablet: /(Tablet|Pad|Nexus 7)/,
};
/** 环境 */
var envRegExp = {
    isWebview: /; wv/,
};
var hash = {
    os: Object.keys(osRegExp),
    device: Object.keys(deviceRegExp),
    engine: Object.keys(engineRegExp),
    browser: Object.keys(browserRegExp),
};
var getMimeType = function (value) {
    try {
        return !!mimeTypes.namedItem(value);
    }
    catch (e) {
        return false;
    }
};
var getValueOf = function (values, reg, ua) {
    if (ua === void 0) { ua = UA; }
    var i = values.length;
    while (i--) {
        var value = values[i];
        if (reg[value].test(ua))
            return value;
    }
    return 'unknown';
};
var _windowVersion;
if (NAVIGATOR === null || NAVIGATOR === void 0 ? void 0 : NAVIGATOR.userAgentData) {
    NAVIGATOR.userAgentData.getHighEntropyValues(['platformVersion']).then(function (ua) {
        if (NAVIGATOR.userAgentData.platform === 'Windows') {
            var majorPlatformVersion = parseInt(ua.platformVersion.split('.')[0]);
            if (majorPlatformVersion >= 13) {
                _windowVersion = '11';
            }
            else {
                _windowVersion = '10';
            }
        }
    });
}
var getLanguage = function () { var _a; return (_a = (NAVIGATOR.browserLanguage || NAVIGATOR.language)) === null || _a === void 0 ? void 0 : _a.replace(/-\w+/g, function (word) { return word.toUpperCase(); }); };
var isWechatMiniapp = function () { return typeof __wxjs_environment !== 'undefined' && __wxjs_environment === 'miniprogram'; };
var isWebview = function (ua) { return envRegExp.isWebview.test(ua); };
var UaBrowser = /** @class */ (function () {
    function UaBrowser(ua) {
        var _this = this;
        this.ua = UA;
        this.version = {
            Safari: function () { return _this.ua.replace(/^.*Version\/([\d.]+).*$/, '$1'); },
            Chrome: function () { return _this.ua.replace(/^.*Chrome\/([\d.]+).*$/, '$1').replace(/^.*CriOS\/([\d.]+).*$/, '$1'); },
            IE: function () { return _this.ua.replace(/^.*MSIE ([\d.]+).*$/, '$1').replace(/^.*rv:([\d.]+).*$/, '$1'); },
            Edge: function () {
                return _this.ua
                    .replace(/^.*Edge\/([\d.]+).*$/, '$1')
                    .replace(/^.*Edg\/([\d.]+).*$/, '$1')
                    .replace(/^.*EdgA\/([\d.]+).*$/, '$1')
                    .replace(/^.*EdgiOS\/([\d.]+).*$/, '$1');
            },
            Firefox: function () { return _this.ua.replace(/^.*Firefox\/([\d.]+).*$/, '$1').replace(/^.*FxiOS\/([\d.]+).*$/, '$1'); },
            'Firefox Focus': function () { return _this.ua.replace(/^.*Focus\/([\d.]+).*$/, '$1'); },
            Chromium: function () { return _this.ua.replace(/^.*Chromium\/([\d.]+).*$/, '$1'); },
            Opera: function () {
                return _this.ua
                    .replace(/^.*Opera\/([\d.]+).*$/, '$1')
                    .replace(/^.*OPR\/([\d.]+).*$/, '$1')
                    .replace(/^.*OPT\/([\d.]+).*$/, '$1');
            },
            Vivaldi: function () { return _this.ua.replace(/^.*Vivaldi\/([\d.]+).*$/, '$1'); },
            Yandex: function () { return _this.ua.replace(/^.*YaBrowser\/([\d.]+).*$/, '$1'); },
            Arora: function () { return _this.ua.replace(/^.*Arora\/([\d.]+).*$/, '$1'); },
            Lunascape: function () { return _this.ua.replace(/^.*Lunascape[\s]([\d.]+).*$/, '$1'); },
            QupZilla: function () { return _this.ua.replace(/^.*QupZilla[\s]([\d.]+).*$/, '$1'); },
            'Coc Coc': function () { return _this.ua.replace(/^.*coc_coc_browser\/([\d.]+).*$/, '$1'); },
            Kindle: function () { return _this.ua.replace(/^.*Version\/([\d.]+).*$/, '$1'); },
            Iceweasel: function () { return _this.ua.replace(/^.*Iceweasel\/([\d.]+).*$/, '$1'); },
            Konqueror: function () { return _this.ua.replace(/^.*Konqueror\/([\d.]+).*$/, '$1'); },
            Iceape: function () { return _this.ua.replace(/^.*Iceape\/([\d.]+).*$/, '$1'); },
            SeaMonkey: function () { return _this.ua.replace(/^.*SeaMonkey\/([\d.]+).*$/, '$1'); },
            Epiphany: function () { return _this.ua.replace(/^.*Epiphany\/([\d.]+).*$/, '$1'); },
            Maxthon: function () { return _this.ua.replace(/^.*Maxthon\/([\d.]+).*$/, '$1'); },
            QQBrowser: function () { return _this.ua.replace(/^.*QQBrowser\/([\d.]+).*$/, '$1'); },
            QQ: function () { return _this.ua.replace(/^.*QQ\/([\d.]+).*$/, '$1'); },
            Baidu: function () { return _this.ua.replace(/^.*BIDUBrowser[\s/]([\d.]+).*$/, '$1').replace(/^.*baiduboxapp\/([\d.]+).*$/, '$1'); },
            UC: function () { return _this.ua.replace(/^.*UC?Browser\/([\d.]+).*$/, '$1'); },
            Sogou: function () { return _this.ua.replace(/^.*SE ([\d.X]+).*$/, '$1').replace(/^.*SogouMobileBrowser\/([\d.]+).*$/, '$1'); },
            TheWorld: function () { return _this.ua.replace(/^.*TheWorld ([\d.]+).*$/, '$1'); },
            XiaoMi: function () { return _this.ua.replace(/^.*MiuiBrowser\/([\d.]+).*$/, '$1'); },
            Vivo: function () { return _this.ua.replace(/^.*VivoBrowser\/([\d.]+).*$/, '$1'); },
            OPPO: function () { return _this.ua.replace(/^.*HeyTapBrowser\/([\d.]+).*$/, '$1'); },
            Quark: function () { return _this.ua.replace(/^.*Quark\/([\d.]+).*$/, '$1'); },
            Qiyu: function () { return _this.ua.replace(/^.*Qiyu\/([\d.]+).*$/, '$1'); },
            Wechat: function () { return _this.ua.replace(/^.*MicroMessenger\/([\d.]+).*$/, '$1'); },
            WechatWork: function () { return _this.ua.replace(/^.*wxwork\/([\d.]+).*$/, '$1'); },
            Taobao: function () { return _this.ua.replace(/^.*AliApp\(TB\/([\d.]+).*$/, '$1'); },
            Alipay: function () { return _this.ua.replace(/^.*AliApp\(AP\/([\d.]+).*$/, '$1'); },
            Weibo: function () { return _this.ua.replace(/^.*weibo__([\d.]+).*$/, '$1'); },
            Douban: function () { return _this.ua.replace(/^.*com.douban.frodo\/([\d.]+).*$/, '$1'); },
            Suning: function () { return _this.ua.replace(/^.*SNEBUY-APP([\d.]+).*$/, '$1'); },
            iQiYi: function () { return _this.ua.replace(/^.*IqiyiVersion\/([\d.]+).*$/, '$1'); },
            DingTalk: function () { return _this.ua.replace(/^.*DingTalk\/([\d.]+).*$/, '$1'); },
            Huawei: function () { return _this.ua.replace(/^.*Version\/([\d.]+).*$/, '$1').replace(/^.*HuaweiBrowser\/([\d.]+).*$/, '$1'); },
            Douyin: function () { return _this.ua.replace(/^.*app_version\/([\d.]+).*$/, '$1'); },
            '115Browser': function () { return _this.ua.replace(/^.*115Browser\/([\d.]+).*$/, '$1'); },
            '360': function () { return _this.ua.replace(/^.*QihooBrowser\/([\d.]+).*$/, '$1'); },
            '360SE': function () {
                var vers = _this.getChromeVars();
                var hash = {
                    '108': '14.0',
                    '86': '13.0',
                    '78': '12.0',
                    '69': '11.0',
                    '63': '10.0',
                    '55': '9.1',
                    '45': '8.1',
                    '42': '8.0',
                    '31': '7.0',
                    '21': '6.3',
                };
                return hash[vers] || '';
            },
            '360EE': function () {
                var vers = _this.getChromeVars();
                var hash = {
                    '86': '13.0',
                    '78': '12.0',
                    '69': '11.0',
                    '63': '9.5',
                    '55': '9.0',
                    '50': '8.7',
                    '30': '7.5',
                };
                return hash[vers] || '';
            },
            '2345Explorer': function () {
                var vers = _this.getChromeVars();
                var hash = {
                    '69': '10.0',
                    '55': '9.9',
                };
                return hash[vers] || _this.ua.replace(/^.*2345Explorer\/([\d.]+).*$/, '$1').replace(/^.*Mb2345Browser\/([\d.]+).*$/, '$1');
            },
            Liebao: function () {
                var _version = '';
                if (/LieBaoFast/.test(_this.ua)) {
                    _version = _this.ua.replace(/^.*LieBaoFast\/([\d.]+).*$/, '$1');
                }
                var vers = _this.getChromeVars();
                var hash = {
                    '57': '6.5',
                    '49': '6.0',
                    '46': '5.9',
                    '42': '5.3',
                    '39': '5.2',
                    '34': '5.0',
                    '29': '4.5',
                    '21': '4.0',
                };
                return _version || hash[vers] || '';
            },
        };
        this.osVersion = {
            Android: function () { return _this.ua.replace(/^.*Android ([\d.]+);.*$/, '$1'); },
            iOS: function () { return _this.ua.replace(/^.*OS ([\d_]+) like.*$/, '$1').replace(/_/g, '.'); },
            Debian: function () { return _this.ua.replace(/^.*Debian\/([\d.]+).*$/, '$1'); },
            'Windows Phone': function () { return _this.ua.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/, '$2'); },
            MacOS: function () { return _this.ua.replace(/^.*Mac OS X -?([\d_]+).*$/, '$1').replace(/_/g, '.'); },
            WebOS: function () { return _this.ua.replace(/^.*hpwOS\/([\d.]+);.*$/, '$1'); },
            HarmonyOS: function () {
                var vers = _this.ua.replace(/^Mozilla.*Android ([\d.]+)[;)].*$/, '$1');
                var hash = {
                    '10': '2',
                };
                return hash[vers] || '';
            },
            Windows: function () {
                var vers = _this.ua.replace(/^Mozilla\/\d.0 \(Windows NT ([\d.]+);.*$/, '$1');
                var hash = {
                    '10': '10',
                    '6.4': '10',
                    '6.3': '8.1',
                    '6.2': '8',
                    '6.1': '7',
                    '6.0': 'Vista',
                    '5.2': 'XP',
                    '5.1': 'XP',
                    '5.0': '2000',
                };
                return hash[vers] || parseInt(vers).toString();
            },
        };
        this.getChromeVars = function () { return _this.ua.replace(/^.*Chrome\/([\d]+).*$/, '$1'); };
        this.setUA(ua);
    }
    UaBrowser.prototype.getOs = function () {
        return getValueOf(hash.os, osRegExp, this.ua);
    };
    UaBrowser.prototype.getEngine = function () {
        return getValueOf(hash.engine, engineRegExp, this.ua);
    };
    UaBrowser.prototype.getBrowser = function () {
        return getValueOf(hash.browser, browserRegExp, this.ua);
    };
    UaBrowser.prototype.getDevice = function () {
        if (platfrom === 'MacIntel' && NAVIGATOR.maxTouchPoints > 1) {
            return 'Tablet';
        }
        var device = getValueOf(hash.device, deviceRegExp, this.ua);
        return device === 'unknown' ? 'PC' : device;
    };
    UaBrowser.prototype.setUA = function (ua) {
        if (typeof ua === 'string') {
            this.ua = ua;
        }
        else {
            if (typeof ua !== 'undefined') {
                console.warn('`ua` must be of type string.');
            }
            this.ua = UA;
        }
    };
    UaBrowser.prototype.getEnv = function (ua) {
        var _a, _b;
        this.setUA(ua);
        var env = {
            version: 'unknown',
            osVersion: 'unknown',
            engine: this.getEngine(),
            browser: this.getBrowser(),
            os: this.getOs(),
            device: this.getDevice(),
            isWebview: isWebview(this.ua),
            language: (_a = getLanguage()) !== null && _a !== void 0 ? _a : 'unknown',
            platfrom: platfrom !== null && platfrom !== void 0 ? platfrom : 'unknown',
        };
        var browser = env.browser;
        var is360 = false;
        if (typeof chrome !== 'undefined') {
            var vers = this.getChromeVars();
            if (chrome.adblock2345 || chrome.common2345) {
                env.browser = '2345Explorer';
            }
            else if (getMimeType('application/360softmgrplugin') ||
                getMimeType('application/mozilla-npqihooquicklogin') ||
                (vers > '36' && typeof showModalDialog !== 'undefined')) {
                is360 = true;
            }
            else if (vers > '45') {
                is360 = getMimeType('application/vnd.chromium.remoting-viewer');
                if (!is360 && vers >= '69') {
                    is360 = getMimeType('application/hwepass2001.installepass2001') || getMimeType('application/asx');
                }
            }
        }
        if (env.device === 'Mobile' && /iPad/.test(this.ua)) {
            env.device = 'Tablet';
        }
        else if (is360) {
            if (getMimeType('application/gameplugin') || !((_b = NAVIGATOR === null || NAVIGATOR === void 0 ? void 0 : NAVIGATOR.connection) === null || _b === void 0 ? void 0 : _b.saveData)) {
                browser = '360SE';
            }
            else {
                browser = '360EE';
            }
        }
        if (hash.browser.indexOf(browser) >= hash.browser.indexOf(env.browser)) {
            env.browser = browser;
        }
        if (env.browser === 'Baidu' && browserRegExp.Opera.test(this.ua)) {
            env.browser = 'Opera';
        }
        if (env.os in this.osVersion) {
            env.osVersion = this.osVersion[env.os]();
            if (env.osVersion === this.ua) {
                env.osVersion = 'unknown';
            }
        }
        if (env.os === 'Windows' && _windowVersion) {
            env.osVersion = _windowVersion;
        }
        if (env.browser in this.version) {
            env.version = this.version[env.browser]();
            if (env.version === this.ua) {
                env.version = 'unknown';
            }
        }
        if (env.browser === 'Chrome' && this.ua.match(/\S+Browser/)) {
            env.browser = this.ua.match(/\S+Browser/)[0];
            env.version = this.ua.replace(/^.*Browser\/([\d.]+).*$/, '$1');
        }
        else if (env.browser === 'Firefox' && (typeof clientInformation !== 'undefined' || !(typeof u2f !== 'undefined'))) {
            env.browser = "".concat(env.browser, " Nightly");
        }
        else if (env.browser === 'Wechat' && isWechatMiniapp()) {
            env.browser = 'Wechat Miniapp';
        }
        if (env.browser === 'Edge') {
            env.engine = parseInt(env.version) > 75 ? 'Blink' : 'EdgeHTML';
        }
        else if ((browserRegExp.Chrome.test(this.ua) && env.engine === 'WebKit' && parseInt(this.version.Chrome()) > 27) ||
            (env.browser === 'Opera' && parseInt(env.version) > 12) ||
            env.browser === 'Yandex') {
            env.engine = 'Blink';
        }
        return env;
    };
    return UaBrowser;
}());
const browser = new UaBrowser().getEnv();

var powerUtils = __assign({ cloneDeep: cloneDeep, axios: request, copy: copy, getQueryStringArgs: getQueryStringArgs, browser: browser }, is);

export { powerUtils as default };
//# sourceMappingURL=index.js.map
