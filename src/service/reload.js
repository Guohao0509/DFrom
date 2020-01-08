var reload = {};
reload.install = function (Vue, options) {
  Vue.prototype.$reload = function () {
    this.$router.push({path: '/dashboard'});
    this.$router.go(-1);
  }
}

export default reload;   