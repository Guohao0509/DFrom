<template>
  <el-form label-position="top">
    <el-form-item label="组件名称">
      <el-input disabled v-model="options.name"></el-input>
    </el-form-item>
    <el-form-item label="组件ID">
      <el-input disabled v-model="options.id"></el-input>
    </el-form-item>
    <el-form-item label="header">
      <el-input v-model="options.properties.header"></el-input>
    </el-form-item>
    <el-form-item label="class">
      <el-input v-model="options.properties.class"></el-input>
    </el-form-item>
    <el-form-item label="bodyStyle">
      <el-tag v-for="(item, key) in options.properties.bodyStyle" :key="key">
        {{ key }} : {{ item }}
      </el-tag>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: 'DefCard',
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  }
</script>
