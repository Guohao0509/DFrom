export default {
  install: function (Vue, options) {
    Vue.directive('authority', {
      /**
       * 当指令绑定时调用
       * el 为绑定的dom
       * binding 为绑定的的对象
       *  - name：指令名，不包括 v- 前缀。
       *  - value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
       *  - oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
       *  - expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
       *  - arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
       *  - modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
       * vnode 是虚拟dom
       */
      // 这里可以做一些细粒度的权限控制
      // 其他流程的控制可以在各个模块中做 局部指令

      // 绑定时调用
      bind: function (el, binding, vnode) {
        if (binding.value == 0) {
          el.hide()
        }
      },

      // 插入调用
      inserted: function (el, binding, vnode) {
        console.log('insert')
      },

      // 更新调用
      update: function (el, binding, vnode) {
        if (binding.value == 0) {
          el.hide()
        }
      },
      componentUpdated: function (el, binding, vnode) {
        console.log('componentUpdated')
      },
      
      unbind: function (el, binding, vnode) {
        console.log(binding)
      }
    })
  }
}