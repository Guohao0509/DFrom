<template>
  <el-form-item v-bind="properties">
    <el-color-picker v-bind="properties" v-model="properties.value"></el-color-picker>
  </el-form-item>
</template>

<script>
  import DData from './DData';

  export default {
    name: 'DColorPicker',
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
