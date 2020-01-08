<template>
  <el-form label-position="top">
    <el-form-item label="组件名称">
      <el-input disabled v-model="options.name"></el-input>
    </el-form-item>
    <el-form-item label="组件ID">
      <el-input disabled v-model="options.id"></el-input>
    </el-form-item>
    <el-form-item label="按钮label">
      <el-input v-model="options.properties.label"></el-input>
    </el-form-item>
    <el-form-item label="按钮大小">
      <el-select v-model="options.properties.size" style="width: 100%;">
        <el-option label="默认" value=""></el-option>
        <el-option label="中等" value="medium"></el-option>
        <el-option label="小型" value="small"></el-option>
        <el-option label="迷你" value="mini"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="按钮类型">
      <el-select v-model="options.properties.type" style="width: 100%;">
        <el-option label="默认" value="default"></el-option>
        <el-option label="基本" value="primary"></el-option>
        <el-option label="成功" value="success"></el-option>
        <el-option label="警告" value="warning"></el-option>
        <el-option label="错误" value="danger"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="按钮icon">
      <el-input v-model="options.properties.icon"></el-input>
    </el-form-item>
    <el-form-item label="是否显示加载中">
      <el-switch v-model="options.properties.loading"></el-switch>
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="options.properties.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="是否默认聚焦">
      <el-switch v-model="options.properties.autofocus"></el-switch>
    </el-form-item>
    <el-form-item label="是否圆角按钮">
      <el-switch v-model="options.properties.round"></el-switch>
    </el-form-item>
    <el-form-item label="是否朴素按钮">
      <el-switch v-model="options.properties.plain"></el-switch>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'DefButton',
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
