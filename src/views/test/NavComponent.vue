<template>
  <draggable
    class="nav-component-wrapper"
    :list="list"
    @start="drag = true"
    @end="drag = false"
    :clone="onClone"
    v-bind="dragOptions"
    tag="ul">
    <transition-group>
      <li
        class="nav-component-item"
        v-for="item in list"
        :key="item.name">
        <el-button
          class="nav-component-button"
          size="mini">
          {{ item.name }}
        </el-button>
      </li>
    </transition-group>
  </draggable>
</template>

<script>
  import draggable from 'vuedraggable';

  function randomString() {
    return Math.random().toString(32).substr(2);
  }
  JSON.copy = function (item) {
    return JSON.parse(JSON.stringify(item));
  };

  function build(list, callback) {
    for (var i = 0, len = list.length; i < len; i++) {
      callback && callback(list[i]);
      if (list[i].children instanceof Array) {
        build(list[i].children, callback);
      }
    }
  }

  export default {
    name: 'DesComponent',
    components: {
      draggable
    },
    data() {
      return {
        drag: false,
        msg: 'sdfsdfsdfsdfsdf',
        dragOptions: {
          animation: 200,
          group: { name: 'description', pull: 'clone', put: false },
          disabled: false,
          ghostClass: 'ghost',
          sort: false
        },
        list: [
          {
            name: 'DButton',
            def: 'DefButton',
            properties: {
              size: '',
              type: 'default',
              icon: '',
              loading: false,
              disabled: false,
              plain: false,
              autofocus: false,
              round: false,
              label: '按钮'
            },
          },
          {
            name: 'DInput',
            def: 'DefInput',
            properties: {
              value: '',
              placeholder: '请输入内容',
              label: '单行文本',
              size: '',
              name: '',
              readonly: false,
              autofocus: false,
              disabled: false,
              type: 'text',
              autoComplete: 'off',
              suffixIcon: '',
              prefixIcon: '',
              clearable: false
            },
          },
          {
            name: 'DTextarea',
            def: 'DefTextarea',
            properties: {
              value: '',
              label: '多行文本',
              placeholder: '请输入内容',
              name: '',
              size: '',
              readonly: false,
              autofocus: false,
              disabled: false,
              rows: 2,
              autosize: false,
              type: 'textarea',
              autoComplete: 'off',
            },
          },
          {
            name: 'DSelect',
            def: 'DefSelect',
            properties: {
              value: '',
              label: '选择框',
              placeholder: '请选择内容',
              name: '',
              size: '',
              clearable: false,
              autoComplete: 'off',
              filterable: false,
              noDataText: '无数据',
              popperClass: '',
              popperAppendToBody: true,
              options: [
                { label: '选项1', value: '1' },
                { label: '选项2', value: '2' }
              ]
            },
          },
          {
            name: 'DCard',
            def: 'DefCard',
            draggable: true,
            properties: {
              header: '卡片',
              class: '',
              bodyStyle: {
                fontSize: '16px'
              }
            },
            children: []
          },
          {
            name: 'DRow',
            def: 'DefRow',
            properties: {
              gutter: 20,
              type: '',
              justify: 'start',
              align: 'top',
              tag: 'div'
            },
              children: [
              {
                name: 'DCol',
                draggable: true,
                properties: {
                  span: 12,
                  offset: 0,
                  push: 0,
                  pull: 0,
                  tag: 'div',
                },
                children: []
              },
              {
                name: 'DCol',
                draggable: true,
                properties: {
                  span: 12
                },
                children: []
              }
            ]
          },
          {
            name: 'DCheckboxGroup',
            def: 'DefCheckboxGroup',
            properties: {
              value: ['1'],
              size: '',
              disabled: false,
              min: undefined,
              max: undefined,
              textColor: '#ffffff',
              fill: '#409EFF'
            },
            children: [
              {
                name: 'DCheckbox',
                properties: {
                  label: '1',
                  text: '备选项1',
                  disabled: false,
                  border: false,
                  size: '',
                  name: '',
                  checked: false,
                }
              },
              {
                name: 'DCheckbox',
                properties: {
                  label: '2',
                  text: '备选项2',
                  disabled: false,
                  border: false,
                  size: '',
                  name: '',
                  checked: false,
                }
              },
            ]
          },
          {
            name: 'DRadioGroup',
            def: 'DefRadioGroup',
            properties: {
              value: '1',
              size: '',
              disabled: false,
              textColor: '#ffffff',
              fill: '#409EFF'
            },
            children: [
              {
                name: 'DRadio',
                properties: {
                  label: '1',
                  text: '备选项1',
                  disabled: false,
                  border: false,
                  size: '',
                  name: '',
                }
              },
              {
                name: 'DRadio',
                properties: {
                  label: '2',
                  text: '备选项2',
                  disabled: false,
                  border: false,
                  size: '',
                  name: '',
                }
              },
            ]
          },
          {
            name: 'DInputNumber',
            def: 'DefInputNumber',
            properties: {
              value: 0,
              label: '计数器',
              min: -100,
              max: 100,
              step: 1,
              stepStrictly: false,
              precision: undefined,
              size: '',
              disabled: false,
              controls: true,
              controlsPosition: '',
              name: '',
              placeholder: '',
            }
          },
          {
            name: 'DCascader',
            def: 'DefCascader',
            properties: {
              value: [],
              options: [
                {
                  value: '1-1',
                  label: '一级选项1-1',
                  children: [
                    {
                      value: '2-1',
                      label: '二级选项2-1',
                      children: [
                        {
                          value: '3-1',
                          label: '三级选项3-1'
                        }
                      ]
                    },
                  ]
                }
              ],
              props: {},
              label: '级联选择',
              size: '',
              placeholder: '请选择内容',
              disabled: false,
              clearable: false,
              showAllLevels: true,
              collapseTags: false,
              separator: ' / ',
              filterable: false,
              debounce: 300,
              popperClass: ''
            }
          },
          {
            name: 'DSwitch',
            def: 'DefSwitch',
            properties: {
              value: false,
              disabled: false,
              width: 40,
              activeIconClass: '',
              inactiveIconClass: '',
              activeText: '是',
              inactiveText: '否',
              activeValue: true,
              inactiveValue: false,
              activeColor: '#409EFF',
              inactiveColor: '#C0CCDA',
              name: '',
              validateEvent: true
            },
          },
          {
            name: 'DColorPicker',
            def: 'DefColorPicker',
            properties: {
              value: '',
              label: '选择颜色',
              disabled: false,
              size: '',
              showAlpha: false,
              colorFormat: '',
              prpperClass: ''
            },
          },
          {
            name: 'RandomChart',
            properties: {

            }
          },
          {
            name: 'DDatePicker',
            def: 'DefDatePicker',
            properties: {
              value: '',
              label: '选择时间',
              readonly: false,
              disabled: false,
              editable: true,
              clearable: true,
              size: '',
              placeholder: '请选择时间',
              startPlaceholder: '请选择开始时间',
              endPlaceholder: '请选择结束时间',
              type: 'date',
              format: 'yyyy-MM-dd',
              align: 'left',
              popperClass: '',
              pickerOptions: {},
              rangeSeparator: '-',
              defaultValue: null,
              valueFormat: 'yyyy-MM-dd',
              name: '',
              unlinkPanels: false,
              prefixIcon: '',
              clearIcon: 'el-icon-circle-close'
            },
          }
        ]
      }
    },
    methods: {
      onClone(item) {
        var copyItem = JSON.copy(item);
        build([copyItem], (componentItem) => {
          componentItem.id = randomString();
        });
        return copyItem;
      }
    }
  }
</script>

<style lang="scss">
  .nav-component-wrapper {
    .nav-component-item +.nav-component-item {
      margin-top: 20px;
    }
    .nav-component-button {
      width: 100%;
    }
    .ghost {
      height: 6px;
      border-radius: 3px;
      display: block;
      background: #ff9900;
      transition: all .2s ease-in-out;
      overflow: hidden;
      .d-component-item {
        display: none;
      }
      .nav-component-button {
        display: none;
      }
      .draggable-area {
        display: none;
      }
    }
  }
</style>
