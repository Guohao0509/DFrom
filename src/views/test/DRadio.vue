<template>
  <el-radio
    v-bind="properties">
    {{ properties.text }}
  </el-radio>
</template>

<script>
  export default {
    name: 'DRadio',
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
