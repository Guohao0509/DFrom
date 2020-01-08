<template>
  <el-form label-position="top">
    <el-form-item label="组件名称">
      <el-input disabled v-model="options.name"></el-input>
    </el-form-item>
    <el-form-item label="组件ID">
      <el-input disabled v-model="options.id"></el-input>
    </el-form-item>
    <el-form-item label="label">
      <el-input v-model="options.properties.label"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="options.properties.value"></el-input>
    </el-form-item>
    <el-form-item label="props">
      <el-input v-model="options.properties.props"></el-input>
    </el-form-item>
    <el-form-item label="占位符">
      <el-input v-model="options.properties.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="分割符">
      <el-input v-model="options.properties.separator"></el-input>
    </el-form-item>
    <el-form-item label="是否显示删除">
      <el-switch v-model="options.properties.clearable"></el-switch>
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="options.properties.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="是否显示所有级别">
      <el-switch v-model="options.properties.showAllLevels"></el-switch>
    </el-form-item>
    <el-form-item label="是否折叠标签">
      <el-switch v-model="options.properties.collapseTags"></el-switch>
    </el-form-item>
    <el-form-item label="是否可以搜索">
      <el-switch v-model="options.properties.filterable"></el-switch>
    </el-form-item>
    <el-form-item label="大小">
      <el-select v-model="options.properties.size" style="width: 100%;">
        <el-option label="默认" value=""></el-option>
        <el-option label="中等" value="medium"></el-option>
        <el-option label="小型" value="small"></el-option>
        <el-option label="迷你" value="mini"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="防抖时间">
      <el-input type="number" v-model="options.properties.debounce"></el-input>
    </el-form-item>
    <el-form-item label="popperClass">
      <el-input v-model="options.properties.popperClass"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: 'DefCascader',
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
