<template>
  <el-form-item v-bind="properties">
    <el-input-number
      v-model="properties.value"
      v-bind="properties">
    </el-input-number>
  </el-form-item>
</template>

<script>
  import DData from './DData';

  export default {
    name: 'DInputNumber',
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
