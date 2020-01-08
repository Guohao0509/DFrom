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
    <el-form-item label="占位符">
      <el-input v-model="options.properties.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="大小">
      <el-select v-model="options.properties.size" style="width: 100%;">
        <el-option label="默认" value=""></el-option>
        <el-option label="中等" value="medium"></el-option>
        <el-option label="小型" value="small"></el-option>
        <el-option label="迷你" value="mini"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="输入框原生name属性">
      <el-input v-model="options.properties.name"></el-input>
    </el-form-item>
    <el-form-item label="自动填充">
      <el-switch active-value="on" inactive-value="off" v-model="options.properties.autoComplete"></el-switch>
    </el-form-item>
    <el-form-item label="是否只读">
      <el-switch v-model="options.properties.readonly"></el-switch>
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="options.properties.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="是否默认聚焦">
      <el-switch v-model="options.properties.autofocus"></el-switch>
    </el-form-item>
    <el-form-item label="是否显示删除按钮">
      <el-switch v-model="options.properties.clearable"></el-switch>
    </el-form-item>
    <el-form-item label="前置icon">
      <el-input v-model="options.properties.prefixIcon"></el-input>
    </el-form-item>
    <el-form-item label="后置icon">
      <el-input v-model="options.properties.suffixIcon"></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'DefInput',
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
