import axios from 'axios';

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
function cloneDeep(val) {
    if (isObject(val)) {
        const res = {};
        for (const key in val) {
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

const BASE_URL = 'http://localhost:7001';
const request = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
});
request.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});
request.interceptors.response.use((response) => {
    return response.data;
}, (err) => {
    return Promise.reject(err);
});

async function copy(command) {
    if (navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(command);
    }
    else {
        const input = document.createElement('input');
        input.value = command;
        document.body.appendChild(input);
        input.select();
        document.execCommand('Copy');
        input.className = 'input';
        input.style.display = 'none';
    }
}

export { cloneDeep, copy, isObject, request };
//# sourceMappingURL=index.esm.js.map
