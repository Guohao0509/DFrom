<template>
  <div style="display: flex;" class="d-form">
    <div style="width: 150px; margin-right: 20px;">
      <nav-component></nav-component>
    </div>
    <div style="flex: 4; margin-right: 20px;">
      <div style="margin-bottom: 20px; text-align: right;">
        <el-button type="text" icon="el-icon-view" @click="visible = true">预览表单</el-button>
        <el-button type="text" icon="el-icon-document" @click="jsonVisible = true">预览JSON</el-button>
      </div>
      <des-component :list="list"></des-component>
    </div>
    <div style="flex: 1;height: 80vh;overflow-y: auto;padding-right: 20px">
      <component :is="currentDComponent.def" :options="currentDComponent"></component>
    </div>
    <el-dialog title="预览表单" :visible.sync="visible" width="1200px">
      <div style="display: flex;padding: 20px 0;">
        <div style="flex: 3">
          <pre-component :list="list"></pre-component>
        </div>
        <!--<div style="flex: 1">-->
          <!--<json-display :list="list"></json-display>-->
        <!--</div>-->
      </div>
    </el-dialog>
    <el-dialog title="预览JSON" :visible.sync="jsonVisible" width="500px">
      <div style="display: flex;padding: 20px 0;">
        <div style="flex: 3">
          <json-display :list="list"></json-display>
        </div>
        <!--<div style="flex: 1">-->
        <!--<json-display :list="list"></json-display>-->
        <!--</div>-->
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import PreComponent from './PreComponent';
  import DesComponent from './DesComponent';
  import NavComponent from './NavComponent';
  import JsonDisplay from './JsonDisplay';
  import DefButton from './DefButton';
  import DefInput from './DefInput';
  import DefTextarea from './DefTextarea';
  import DefSelect from './DefSelect';
  import DefCard from './DefCard';
  import DefRow from './DefRow';
  import DefCheckboxGroup from './DefCheckboxGroup';
  import DefRadioGroup from './DefRadioGroup';
  import DefInputNumber from './DefInputNumber';
  import DefSwitch from './DefSwitch';
  import DefCascader from './DefCascader';
  import DefColorPicker from './DefColorPicker';
  import DefDatePicker from './DefDatePicker';

  export default {
    name: 'testDrag',
    componentName: 'testDrag',
    components: {
      PreComponent,
      DesComponent,
      NavComponent,
      JsonDisplay,
      DefButton,
      DefInput,
      DefTextarea,
      DefSelect,
      DefCard,
      DefRow,
      DefCheckboxGroup,
      DefRadioGroup,
      DefInputNumber,
      DefSwitch,
      DefCascader,
      DefColorPicker,
      DefDatePicker
    },

    created() {
      this.$on('select' , this.handleDComponentSelect);
    },

    data() {
      return {
        list: [ ],
        visible: false,
        jsonVisible: false,
        currentDComponent: {}
      }
    },
    methods: {
      handleDComponentSelect(options) {
        this.currentDComponent = options;
      }
    },
  }
</script>

<style>
  .d-form >>> .is-disabled {
    background-color: #ffffff!important;
    border-color: #dcdfe6;
    color: #606266;
    cursor: pointer;
  }
</style>
