<template>
  <el-form-item v-bind="properties">
    <el-cascader
      style="width: 100%"
      v-model="properties.value"
      v-bind="properties">
    </el-cascader>
  </el-form-item>
</template>

<script>
  import DData from './DData';

  export default {
    name: 'DCascader',
    mixins: [ DData ],
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
