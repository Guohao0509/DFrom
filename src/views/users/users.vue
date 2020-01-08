<template>
  <div class="tab-wrapper">
    <ul class="tab-header">
      <router-link tag="li" to="/dashboard/users/user" class="tab-item">
        用户管理
      </router-link>
      <router-link tag="li" to="/dashboard/users/user_group" class="tab-item">
        用户组管理
      </router-link>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
  .tab-wrapper {
    margin: 0 auto;
  }
  .tab-header {
    width: 200px;
    margin: 0 auto;
    height: 40px;
    .tab-item {
      float: left;
      cursor: pointer;
      width: 100px;
      text-align: center;
      height: 35px;
      line-height: 35px;
      font-size: 16px;
      border-bottom: 2px solid transparent;
      &.router-link-active{
        color: #ff9900;
        font-weight: bold;
        border-bottom: 2px solid currentColor;
      }
    }
  }
</style>
