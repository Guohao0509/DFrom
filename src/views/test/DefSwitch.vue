<template>
  <el-form label-position="top">
    <el-form-item label="组件名称">
      <el-input disabled v-model="options.name"></el-input>
    </el-form-item>
    <el-form-item label="组件ID">
      <el-input disabled v-model="options.id"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="options.properties.value"></el-input>
    </el-form-item>
    <el-form-item label="原生name属性">
      <el-input v-model="options.properties.name"></el-input>
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
    <el-form-item label="宽度">
      <el-input type="number" v-model="options.properties.width"></el-input>
    </el-form-item>
    <el-form-item label="激活class">
      <el-input v-model="options.properties.activeIconClass"></el-input>
    </el-form-item>
    <el-form-item label="非激活class">
      <el-input v-model="options.properties.inactiveIconClass"></el-input>
    </el-form-item>
    <el-form-item label="激活展示文字">
      <el-input v-model="options.properties.activeText"></el-input>
    </el-form-item>
    <el-form-item label="非激活展示文字">
      <el-input v-model="options.properties.inactiveText"></el-input>
    </el-form-item>
    <el-form-item label="激活值">
      <el-input v-model="options.properties.activeValue"></el-input>
    </el-form-item>
    <el-form-item label="非激活的值">
      <el-input v-model="options.properties.inactiveValue"></el-input>
    </el-form-item>
    <el-form-item label="激活显示颜色">
      <el-input v-model="options.properties.activeColor"></el-input>
    </el-form-item>
    <el-form-item label="非激活显示颜色">
      <el-input v-model="options.properties.inactiveColor"></el-input>
    </el-form-item>
    <el-form-item label="状态改变时是否触发表单的校验">
      <el-switch v-model="options.properties.validateEvent"></el-switch>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: 'DefSwitch',
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
