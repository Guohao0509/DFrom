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
    <el-form-item label="颜色的格式">
      <el-select v-model="options.properties.colorFormat" style="width: 100%;">
        <el-option label="自动" value=""></el-option>
        <el-option label="hsl" value="hsl"></el-option>
        <el-option label="hsv" value="hsv"></el-option>
        <el-option label="hex" value="hex"></el-option>
        <el-option label="rgb" value="rgb"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否支持透明度">
      <el-switch v-model="options.properties.showAlpha"></el-switch>
    </el-form-item>
    <el-form-item label="大小">
      <el-select v-model="options.properties.size" style="width: 100%;">
        <el-option label="默认" value=""></el-option>
        <el-option label="中等" value="medium"></el-option>
        <el-option label="小型" value="small"></el-option>
        <el-option label="迷你" value="mini"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="options.properties.disabled"></el-switch>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'DefColorPicker',
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
