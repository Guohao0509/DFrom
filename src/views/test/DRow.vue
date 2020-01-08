<template>
  <el-row v-bind="properties">
    <slot></slot>
  </el-row>
</template>

<script>
  export default {
    name: 'DRow',
    props: {
      properties: {
        type: Object,
        default() {
          return {};
        }
      },
      children: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>
