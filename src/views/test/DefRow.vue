<template>
  <el-form label-position="top">
    <el-form-item label="组件名称">
      <el-input disabled v-model="options.name"></el-input>
    </el-form-item>
    <el-form-item label="组件ID">
      <el-input disabled v-model="options.id"></el-input>
    </el-form-item>
    <el-form-item label="间隔">
      <el-input type="number" v-model="options.properties.gutter"></el-input>
    </el-form-item>
    <el-form-item label="type">
      <el-input v-model="options.properties.type"></el-input>
    </el-form-item>
    <el-form-item label="justify">
      <el-input v-model="options.properties.justify"></el-input>
    </el-form-item>
    <el-form-item label="align">
      <el-input v-model="options.properties.align"></el-input>
    </el-form-item>
    <el-form-item label="tag">
      <el-input v-model="options.properties.tag"></el-input>
    </el-form-item>
    <el-form-item label="children">
      <el-tag v-for="(item, index) in options.children" :key="index">
        {{ item.name }}
      </el-tag>
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
