var valid = {};
valid.install = function (Vue, options) {
  Vue.prototype.$valid = {
    // 校验手机号码
    phone: (rule, value, callback) => {
      if (!(/^1\d{10}$/.test(value) || value == '')) {
        callback(new Error('请输入正确的手机号码'));
      }
    }
  }
}

export default valid;   