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
    <el-form-item label="原生name属性">
      <el-input v-model="options.properties.name"></el-input>
    </el-form-item>
    <el-form-item label="占位符">
      <el-input v-model="options.properties.placeholder"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input type="number" v-model="options.properties.value"></el-input>
    </el-form-item>
    <el-form-item label="最小值">
      <el-input-number
        v-model="options.properties.min">
      </el-input-number>
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number
        v-model="options.properties.max">
      </el-input-number>
    </el-form-item>
    <el-form-item label="步长">
      <el-input-number
        :min="1"
        v-model="options.properties.step">
      </el-input-number>
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
    <el-form-item label="是否显示精确值">
      <el-switch v-model="options.properties.stepStrictly"></el-switch>
    </el-form-item>precision

    <el-form-item label="精确度">
      <el-input type="number" v-model="options.properties.precision"></el-input>
    </el-form-item>

    <el-form-item label="是否显示控制按钮">
      <el-switch v-model="options.properties.controls"></el-switch>
    </el-form-item>
    <el-form-item label="控制按钮位置">
      <el-select v-model="options.properties.controlsPosition" style="width: 100%;">
        <el-option label="左右两边" value=""></el-option>
        <el-option label="右边" value="right"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: 'DefRow',
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
