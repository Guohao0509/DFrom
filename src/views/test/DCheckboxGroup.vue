<template>
  <el-form-item label="复选框">
    <el-checkbox-group
      v-bind="properties"
      v-model="properties.value">
      <slot></slot>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
  import DData from './DData';

  export default {
    name: 'DCheckboxGroup',
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
