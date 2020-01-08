<template>
  <component
    :properties="options.properties"
    :is="options.name">
    <p-component
      v-for="item in options.children"
      :options="item"
      :key="item.id">
    </p-component>
  </component>
</template>

<script>
  export default {
    name: 'PComponent',
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

<style lang="scss">
  .p-component-wrapper {

  }
</style>
