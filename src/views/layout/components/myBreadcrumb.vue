<template>

  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in this.$route.matched" :to="item.path" :key="item.name">
        {{ item.meta.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>

<script>

export default {
  name: 'myBreadcrumb'
}

</script>

<style lang="scss" scoped>

  .breadcrumb {
    padding: 15px;
    background-color: #e5eaeb;
    border-bottom: 1px solid #ddd;
    font-size: 12px;
  }
  .el-breadcrumb {
    font-size: 12px;
  }

</style>
