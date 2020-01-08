<template>
  <el-checkbox
    v-bind="properties">
    {{ properties.text }}
  </el-checkbox>
</template>

<script>
  export default {
    name: 'DCheckbox',
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
