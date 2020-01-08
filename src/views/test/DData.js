export default {
  methods: {
    getValue() {
      console.log(this.properties)
    },

    getParentByComponentName(componentName) {
      let parent = this.$parent;
      while (parent && parent.$options.componentName !== componentName) {
        parent = parent.$parent;
      }

      return parent
    }
  },

  created() {
    let preComponent = this.getParentByComponentName('');
    preComponent.formItems.push(this);
  }
}
