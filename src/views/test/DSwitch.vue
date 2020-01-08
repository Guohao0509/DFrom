<template>
  <el-form-item label="开关">
    <el-switch
      v-model="properties.value"
      v-bind="properties">
    </el-switch>
  </el-form-item>
</template>

<script>
  import DData from './DData';

  export default {
    name: 'DSwitch',
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
