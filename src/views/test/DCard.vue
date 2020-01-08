<template>
  <el-card
    style="margin-bottom: 22px;"
    v-bind="properties">
    <slot></slot>
  </el-card>
</template>

<script>
  export default {
    name: 'DCard',
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
