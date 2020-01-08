<template>
  <div class="formkey-wrapper">
    <div class="formkey-aside">
      <div class="component-item"
        v-for="(item, index) in buttons"
        :key="index">
        <el-button
          ref="asdfsdfasd"
          :draggable="true"
          @dragstart.native="handleDragstart"
          @dragend.native="handleDragend"
          size="mini">
          {{ item.name }}
        </el-button>
      </div>
    </div>
    <div class="formkey-main" id="formkey-main"
      @dragover="handleDragover"
      @drop="handleDrop">
      <d-button :properties="{ type: 'warning', size: 'mini'}" :slots="{ text: 'clickMe' }"></d-button>
    </div>
    <div>
      <!--<random-chart></random-chart>-->
    </div>
  </div>
</template>

<script>
  import {
    Aside,
    Badge, Button, Breadcrumb, BreadcrumbItem,
    Col, Container, Card,
    Dialog, DatePicker,
    Footer, Form, FormItem,
    Header,
    Icon, Input,
    Loading,
    Main, Menu, MenuItem, MenuItemGroup, Message, MessageBox,
    Notification,
    Option,
    Pagination, Popover,
    Radio, RadioGroup, RadioButton, Row,
    Select, Submenu, Switch,
    Tabs, TabPane, Table, TableColumn, Tag, TimePicker,
    Checkbox, CheckboxGroup
  } from 'element-ui';
  import DButton from './DButton';
  import RandomChart from './RandomChart'
  import Vue from 'vue';
  export default {
    name: 'formkey',
    components: {
      DButton,
      RandomChart
    },
    data() {
      return {
        buttons: [
          { name: 'ElRow' },
          { name: 'ElCol' },
          { name: 'ElButton' },
          { name: 'ElInput' }
        ],
        components: {
          ElButton: Vue.extend(Button)
        }
      }
    },
    mounted() {
    },
    methods: {
      handleDragstart(event) {
        console.log('handleDragstart', event);
      },

      handleDragend(event) {
        console.log('handleDragend', event);
      },

      handleDragover(event) {
        event.preventDefault();
        // console.log('handleDragover', event);
      },

      handleDrop(event) {
        console.log('handleDrop', event);
        var elButton = new this.components.ElButton({
          propsData: {
            type: 'warning'
          },
        });

        elButton.$on('click', function () {
          console.log('sdddddddddddddddddddddddddddddd')
        });
        console.log(this.$refs.asdfsdfasd);
        elButton.$slots.default;
        elButton.$mount();
        document.getElementById('formkey-main').appendChild(elButton.$el);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .formkey-wrapper {
    display: flex;
    .formkey-aside {
      width: 300px;
      background: #f7f8fd;
      padding: 20px;
      .component-item {
        margin-bottom: 20px;
      }
    }
    .formkey-main {
      flex: 1;
      box-sizing: border-box;
      min-height: 600px;
      border: 1px solid #cccccc;
    }
  }
</style>
