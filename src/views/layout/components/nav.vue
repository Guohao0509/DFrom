<template>
  <el-menu
    background-color="#545c64"
    text-color="#eeeeee"
    :collapse="isCollapse"
    :default-active="active"
    active-text-color="#ffd04b"
    :unique-opened="true"
    :router="true">
    <el-menu-item index="/dashboard/display_board">
      <i class="el-icon-date"></i>
      <span slot="title">平台账户总览</span>
    </el-menu-item>
    <el-menu-item index="/dashboard/income_expenses">
      <i class="el-icon-document"></i>
      <span slot="title">平台收支明细</span>
    </el-menu-item>
    <el-menu-item index="/dashboard/expenses_examine">
      <i class="el-icon-star-on"></i>
      <span slot="title">平台支出审核</span>
    </el-menu-item>
    <el-menu-item index="/dashboard/operator_account_board">
      <i class="el-icon-view"></i>
      <span slot="title">运营商账户总览</span>
    </el-menu-item>
    <el-menu-item index="/dashboard/operator_income_expenses">
      <i class="el-icon-tickets"></i>
      <span slot="title">运营商收支明细</span>
    </el-menu-item>
    <el-menu-item index="/dashboard/operator_account_manage">
      <i class="el-icon-mobile-phone"></i>
      <span slot="title">运营商账户管理</span>
    </el-menu-item>
    <el-menu-item index="/dashboard/api_manage">
      <i class="el-icon-edit-outline"></i>
      <span slot="title">API管理</span>
    </el-menu-item>
    <el-menu-item index="/dashboard/test">
      <i class="el-icon-edit-outline"></i>
      <span slot="title">test</span>
    </el-menu-item>
  </el-menu>
</template>

<script>

export default {
  name: 'myNav',
  props: [
    'isCollapse'
  ],
  
  data() {
    return {
      active: '',
    }
  },
  created() {
    this.active = this.$route.path;
  }
}

</script>

<style lang="scss" scoped>

</style>
