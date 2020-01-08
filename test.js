import axios from 'axios'
import Vue from 'vue'
import dictionary from './src/service/dictionary';

// 错误回调
function _errorHandler(error) {
  Vue.prototype.$alert('请检查您的网络', '网络连接超时', {
    confirmButtonText: '确定',
    type: 'warning',
    callback: () => {
      
    }
  });
}

// 成功的回调
function _successHandler() {
  
}

// 请求响应成功，但是后端返回状态码为失败的处理函数
function _failHandler() {
  Vue.prototype.$alert('请检查您的网络', '网络连接超时', {
    confirmButtonText: '确定',
    type: 'warning',
    callback: () => {
      
    }
  });
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.data.code == dictionary.ajax_code.FAILED) {
    Vue.prototype.$alert('请检查您的网络', '', {
      confirmButtonText: '确定',
      type: 'warning'
    });
  }
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

axios.create({
  baseURL: config.baseURL
})