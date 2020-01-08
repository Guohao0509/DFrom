import crypto from 'crypto';

var md5 = {};
md5.install = function (Vue, options) {
  Vue.prototype.$md5 = function (str) {
    var cryptoMd5 = crypto.createHash("md5");
    return cryptoMd5.update(str).digest("hex");
  }
}

export default md5;   