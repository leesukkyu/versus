/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// http 설정

import axios from 'axios';
import qs from 'qs';

let requestInterceptor;
let responseInterceptor;

const instance = axios.create({
  baseURL: 'localhost:8000/',
});

// 통신 전처리
instance.interceptors.request.use(
  (config) => {
    const newConfig = config;
    if (newConfig.headers['Content-type'] === 'application/x-www-form-urlencoded') {
      newConfig.data = qs.stringify(newConfig.data);
    }
    requestInterceptor(newConfig);
    return newConfig;
  },
  (error) => Promise.reject(error),
);

// 통신 후처리
instance.interceptors.response.use(
  (config) => {
    const newConfig = config;
    responseInterceptor(newConfig);
    return newConfig;
  },
  (error) => Promise.reject(error),
);

export const setRequestInterceptor = function (cb) {
  requestInterceptor = cb;
};
export const setResponseInterceptor = function (cb) {
  responseInterceptor = cb;
};
export default instance;
