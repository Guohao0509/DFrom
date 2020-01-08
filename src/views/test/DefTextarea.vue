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
    <el-form-item label="行数">
      <el-input type="number" :min="2" :max="20" v-model="options.properties.rows"></el-input>
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
  </el-form>
</template>

<script>
  export default {
    name: 'DefTextarea',
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
