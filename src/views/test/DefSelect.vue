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
    <el-form-item label="输入框原生name属性">
      <el-input v-model="options.properties.name"></el-input>
    </el-form-item>
    <el-form-item label="自动填充">
      <el-switch active-value="on" inactive-value="off" v-model="options.properties.autoComplete"></el-switch>
    </el-form-item>
    <!--<el-form-item label="选项">-->
      <!--<el-alert-->
        <!--:title="'label:' + item.label + '&#45;&#45;' + 'value: ' + item.value"-->
        <!--style="margin-bottom: 10px; line-height: 35px;"-->
        <!--type="info"-->
        <!--effect="dark"-->
        <!--:key="index"-->
        <!--@close="handleClose(options.properties.options, index)"-->
        <!--v-for="(item, index) in options.properties.options">-->
      <!--</el-alert>-->
      <!--<div style="text-align: center;line-height: 35px;">-->
         <!--<div style="text-align: left;">-->
           <!--label: <el-input size="small"></el-input>-->
           <!--value: <el-input size="small"></el-input>-->
         <!--</div>-->
        <!--<el-button size="mini">-->
          <!--<i class="el-icon-plus"></i>-->
        <!--</el-button>-->
      <!--</div>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="是否只读">-->
      <!--<el-switch v-model="options.properties.readonly"></el-switch>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="是否禁用">-->
      <!--<el-switch v-model="options.properties.disabled"></el-switch>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="是否默认聚焦">-->
      <!--<el-switch v-model="options.properties.autofocus"></el-switch>-->
    <!--</el-form-item>-->
    <el-form-item label="是否显示删除按钮">
      <el-switch v-model="options.properties.clearable"></el-switch>
    </el-form-item>
    <el-form-item label="是否开启搜索模式">
      <el-switch v-model="options.properties.filterable"></el-switch>
    </el-form-item>
    <el-form-item label="没有选项时展示值">
      <el-input v-model="options.properties.noDataText"></el-input>
    </el-form-item>
    <el-form-item label="选择框弹出层的class">
      <el-input v-model="options.properties.popperClass"></el-input>
    </el-form-item>
    <el-form-item label="是否在将弹出框添加在body中">
      <el-switch v-model="options.properties.popperAppendToBody"></el-switch>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    name: 'DefSelect',
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      handleClose(options, index) {
        options.splice(index, 1);
      }
    }
  }
</script>
