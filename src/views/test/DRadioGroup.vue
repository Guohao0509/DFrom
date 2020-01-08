<template>
  <el-form-item label="单选框">
    <el-radio-group
      v-bind="properties"
      v-model="properties.value">
      <slot></slot>
    </el-radio-group>
  </el-form-item>
</template>

<script>
  import DData from './DData';

  export default {
    name: 'DRadioGroup',
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
