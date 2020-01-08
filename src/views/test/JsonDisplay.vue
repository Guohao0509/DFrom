<template>
  <pre class="pre-wrapper">{{ JSONString }}</pre>
</template>

<script>
  export default {
    name: 'JsonDisplay',
    props: {
      list: {
        type: [ Array, Object ],
        default() {
          return {};
        }
      }
    },
    computed: {
      JSONString() {
        return JSON.stringify(this.list, null, 2);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pre-wrapper {
    text-align: left;
    color: #333333;
  }
</style>
