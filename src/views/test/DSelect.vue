<template>
  <el-form-item v-bind="properties">
    <el-select
      style="width: 100%"
      v-bind="properties"
      v-model="properties.value">
      <el-option
        v-for="(item, index) in properties.options"
        :label="item.label"
        :value="item.value"
        :key="index">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  import DData from './DData';

  export default {
    name: 'DSelect',
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
