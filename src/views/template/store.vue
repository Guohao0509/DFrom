<template>
  <div>
    <h1>{{ $store.state.count }}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    add() {
      console.log(this.$store.state.count)
      this.$store.commit('increment')
    }
  }
}
</script>

<style>

</style>
