/**
 * 当 process.env.NODE_ENV 是生产环境的时候，采用异步的方式加载组件
 * 生产环境还可以配置 异步加载一组组件 通过特殊注释的方式
 * 异步加载一组组件(规划中。。。)
 */
module.exports = file => () => import('@/views/' + file + '.vue');
