<template>
  <el-form-item v-bind="properties">
    <el-input
      v-bind="properties"
      v-model="properties.value">
    </el-input>
  </el-form-item>
</template>

<script>
  import DData from './DData';

  export default {
    name: 'DInput',
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
