import axios from 'axios';
import qs from 'qs';
import config from '@/config';
var http = {};
var baseUrl = config.host;
var apiLoading = false;

http.install = function (Vue, options) {
  Vue.prototype.$http = function (opt) {
    switch (opt.type) {
      case 'get' :
        get(opt.url, opt.params, opt.success, opt.error);
        break;
      case 'post' :
        post(opt.url, opt.params, opt.success, opt.error);
        break;
    }
  }

  function get(url, params, success, error) {
    var loading = Vue.prototype.$loading({
      customClass: 'my-el-loading',
      spinner: 'el-icon-loading'
    });
    return axios.get(baseUrl + url, {
        params: params
      })
      .then(function (response) {
        if (response.data.code == 0) {
          success && success(response.data.data);
        } else {
          error && error(response.data.data);
        }
        loading.close();
      })
      .catch(function (err) {
        console.log(err);
        if (!apiLoading) {
          apiLoading = true;
          Vue.prototype.$alert('请检查您的网络', '网络连接超时', {
            confirmButtonText: '确定',
            type: 'warning',
            callback: () => {
              apiLoading = false;
            }
          });
        }
        loading.close();
      });
  }

  function post(url, params, success, error) {
    var loading = Vue.prototype.$loading({
      customClass: 'my-el-loading',
      spinner: 'el-icon-loading'
    });
    axios.post(baseUrl + url, qs.stringify(params))
      .then(function (response) {
        if (response.data.code == 0) {
          success && success(response.data.data);
        } else {
          error && error(response.data.data);
        }
        loading.close();
      })
      .catch(function (err) {
        console.log(err);
        if (!apiLoading) {
          apiLoading = true;
          Vue.prototype.$alert('请检查您的网络', '网络连接超时', {
            confirmButtonText: '确定',
            type: 'warning',
            callback: () => {
              apiLoading = false;
            }
          });
        }
        loading.close();
      });
  }
}

export default http;