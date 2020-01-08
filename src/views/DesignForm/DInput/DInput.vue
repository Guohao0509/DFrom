<template>
  <el-form-item v-bind="properties">
    <el-input
      v-bind="properties"
      v-model="properties.value">
    </el-input>
  </el-form-item>
</template>

<script>
  import BaseComponent from '../BaseComponent';
  const options = {
    name: 'DInput',
    def: 'DefInput',
    value: {
      type: String,
      default: '',
    },
    properties: {
      placeholder: '请输入内容',
      label: '单行文本',
      size: '',
      name: '',
      readonly: false,
      autofocus: false,
      disabled: false,
      type: 'text',
      autoComplete: 'off',
      suffixIcon: '',
      prefixIcon: '',
      clearable: false
    }
  };
  export default {
    name: 'DInput',
    mixins: [ BaseComponent ],
    props: {
      properties: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>
