<template>
  <el-container>
    <el-header>
      <!-- 头部 -->
      <my-header @navcollapse="collapse"></my-header>
    </el-header>
    <el-container>

      
      <transition
        name="nav-fade"
        enter-class="nav-fade-in-enter"
        enter-active-class="nav-fade-in-active"
        leave-class="nav-fade-out-enter"
        leave-active-class="nav-fade-out-active"
      >
        <el-aside :class="{active: isCollapse}" :bind="isCollapse">
          <!-- 导航栏 -->
          <div class="nav-wrapper">
            <my-nav :isCollapse="isCollapse"></my-nav>
          </div>
        </el-aside>
      </transition>
      <el-container>
        <!-- 面包屑导航条 -->
        <my-breadcrumb></my-breadcrumb>
        <!-- app 主体 -->
        <el-main>
          <transition name="fade">
            <router-view/>
          </transition>
        </el-main>
        <el-footer>
          2016 © happyev.com
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

import myNav from './components/nav.vue';
import myHeader from './components/header.vue';
import myBreadcrumb from './components/myBreadcrumb.vue';

export default {
  name: 'layout',
  components: {
    myNav,
    myHeader,
    myBreadcrumb
  },
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    collapse() {
      this.isCollapse = ! this.isCollapse;
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-container {
    height: 100%;
  } 
  .el-header {
    height: 50px !important;
    line-height: 50px;
    background-color: #373d41;
    padding: 0;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-footer {
    height: 35px !important;
    background-color: #eee;
    line-height: 35px;
    text-align: center;
    font-size: 14px;
    color: #313131;
  }
  .el-main {
    background-color: #fff;
  }
  .my-popper {
    padding: 0px !important;
    background-color: #eee;
  }

  /** 路由切换的过度动画 **/
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }

  
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 180px;
    min-height: 400px;
  }
  .nav-wrapper {
    width: 250px;
    overflow-y: scroll;
    height: 100%;
  }
  .el-aside {
    width: 180px !important;
    overflow: hidden;
    &.active {
      width: 64px !important;
    }
  }
  .nav-fade-in-enter {
    width: 300px;
  }

  .nav-fade-in-active {
    width: 64px;
    transition: width 0.5s;
  }

  .nav-fade-out-enter {
    width: 64px;
  }

  .nav-fade-out-active {
    width: 300px;
    transition: width 0.5s;
  }
</style>
