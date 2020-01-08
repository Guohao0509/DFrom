<template>
  <el-form-item v-bind="properties">
    <el-date-picker
      v-bind="properties"
      v-model="properties.value">
    </el-date-picker>
  </el-form-item>
</template>

<script>
  import DData from './DData';

  export default {
    name: 'DDatePicker',
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
