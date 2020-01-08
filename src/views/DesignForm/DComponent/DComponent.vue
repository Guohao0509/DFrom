<template>
  <component
    :is="options.name"
    class="d-component-item"
    :properties="options.properties">
    <template v-if="options.children && options.draggable">
      <draggable
        class="draggable-area"
        :list="options.children"
        @start="drag = true"
        @end="drag = false"
        v-bind="dragOptions">
        <d-component
          v-for="item in options.children"
          :options="item"
          :key="item.id">
        </d-component>
      </draggable>
    </template>
    <template v-else>
      <div>
        <d-component
          v-for="item in options.children"
          :options="item"
          :key="item.id">
        </d-component>
      </div>
    </template>
  </component>
</template>

<script>
  import draggable from 'vuedraggable';

  export default {
    name: 'DComponent',
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    components: {
      draggable
    },
    data() {
      return {
        drag: false,
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

    }
  }
</script>

<style lang="scss">
  .draggable-area {
    box-sizing: border-box;
    min-height: 50px;
    position: relative;
    border: 1px dashed #cccccc;
    padding: 10px;
    &:after {
      content: '';
      display: block;
      clear: both;
      zoom: 1;
    }
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
