<template>
  <div>
    <pre>
      {{ JSONData }}
    </pre>
  </div>
</template>

<script>
  export default {
    name: 'JsonDisplay',
    props: {
      list: {
        type: [ Array, Object ],
        default() {
          return [];
        }
      }
    },

    computed: {
      JSONData() {
        return JSON.stringify(this.list, null, 2);
      }
    }
  }
</script>
