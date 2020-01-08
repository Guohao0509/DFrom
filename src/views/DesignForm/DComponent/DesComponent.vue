<template>
  <el-form disabled class="des-component-wrapper" label-position="top" label-width="80px">
    <draggable
      class="draggable-area"
      :list="list"
      @start="drag = true"
      @end="drag = false"
      v-bind="dragOptions">
      <transition-group
        :name="!drag ? 'flip-list' : null"
        :scroll="false"
        class="transition-group">
        <d-component
          v-for="item in list"
          :key="item.id"
          :options="item">
        </d-component>
      </transition-group>
    </draggable>
  </el-form>
</template>

<script>
  import draggable from 'vuedraggable';
  const options = {
    name: 'DForm',
    def: 'DefForm',
    properties: {
      labelPosition: 'top',
      labelWidth: '80px',
      disabled: false
    }
  };
  export default {
    name: 'DesComponent',
    componentName: 'PreComponent',
    components: {
      draggable
    },
    props: {
      list: {
        type: Array,
        default() {
          return [];
        }
      }
    },

    data() {
      return {
        drag: false,
        current: {
          label: '',
        },
        formItems: [],
        dragOptions: {
          animation: 200,
          group: 'description',
          disabled: false,
          ghostClass: 'ghost',
          chosenClass: 'chosen'
        }
      }
    },

    methods: {
      handleClick(item) {
        console.log(item);
        this.$emit('select', item);
      },
    }
  }
</script>

<style lang="scss">
  .des-component-wrapper {
    >.draggable-area {
      border: 1px solid #dcdfe6;
      border-radius: 3px;
    }
  }
  .draggable-area {
    box-sizing: border-box;
    min-height: 50px;
    position: relative;
    border: 1px dashed #cccccc;
    padding: 10px;
    >span.transition-group {
      display: block;
      min-height: 50px;
    }

    .draggable-item {
      box-sizing: border-box;
      margin-bottom: 10px;
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
