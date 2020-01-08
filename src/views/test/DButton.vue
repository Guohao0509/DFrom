<template>
  <el-button
    @click="getValue"
    v-bind="properties">
    {{ properties.label }}
  </el-button>
</template>

<script>
  export default {
    name: 'DButton',
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
