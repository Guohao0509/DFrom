<template>
  <el-form label-position="top" label-width="80px">
    <p-component
      v-for="item in list"
      :options="item"
      :key="item.id">
    </p-component>
    <el-form-item>
      <el-button>取消</el-button>
      <el-button @click="submitData">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'PreComponent',
    componentName: 'PreComponent',
    props: {
      list: {
        type: Array,
        default() {
          return [];
        }
      }
    },

    data() {
      return {
        formItems: []
      }
    },

    methods: {
      submitData() {
        var res = [];
        this.formItems.map((item, index) => {
          console.log(item);
        });
      }
    }
  }
</script>

<style lang="scss">
  .pre-component-wrapper {
    box-sizing: border-box;
    border: 1px solid #cccccc;
    padding: 20px;
  }
</style>
