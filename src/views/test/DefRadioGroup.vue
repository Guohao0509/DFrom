<template>
  <el-form label-position="top">
    <el-form-item label="组件名称">
      <el-input disabled v-model="options.name"></el-input>
    </el-form-item>
    <el-form-item label="组件ID">
      <el-input disabled v-model="options.id"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-select
        v-model="options.properties.value"
        style="width: 100%;">
        <el-option
          v-for="(item, index) in options.children"
          :key="item.label"
          :label="item.properties.text"
          :value="item.properties.label">
        </el-option>
      </el-select>
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
    <el-form-item label="文字颜色">
      <el-input v-model="options.properties.textColor"></el-input>
    </el-form-item>
    <el-form-item label="填充色">
      <el-input v-model="options.properties.fill"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: 'DefRadioGroup',
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
