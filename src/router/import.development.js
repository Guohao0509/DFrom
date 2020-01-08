/**
 * 当 process.env.NODE_ENV 是开发环境的时候，采用同步的方式加载组件
 * require 是 CommonJS（和 AMD）的模块导入方式，不支持模块的默认导出，因此导入的结果其实是一个含 default 属性的对象，因此需要使用 
 * .default 来获取实际的组件选项 
 */
module.exports = file => require('@/views/' + file + '.vue').default;
