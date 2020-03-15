import axios from 'axios';

export const createHttp = (config = {}) => axios.create({
  baseURL: '',
  timeout: 5000,
  ...config,
});

export const $http = createHttp({
  baseURL: '/frontend-api',
});

// 添加请求拦截器
$http.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token');
  if (token) {
    config.headers.token = token;
  }
  // 在发送请求之前做些什么
  return config;
}, (error) => Promise.reject(error));

// 添加响应拦截器
$http.interceptors.response.use((response) => {
  // return response.data.data;
  const { status, data } = response.data;
  if (status === 0) { // 成功
    return data;
  } if (status === 1) { // 失败
    return Promise.reject(response.data);
  } if (status === 2) { // 过期
    window.location.href = '/frontend/login'; // 跳转到登陆页面
    return data;
  }
  return null;
}, (error) => Promise.reject(error));
