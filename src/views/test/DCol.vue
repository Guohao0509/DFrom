<template>
  <el-col v-bind="properties">
    <slot></slot>
  </el-col>
</template>

<script>
  import DData from './DData';

  export default {
    name: 'DCol',
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
