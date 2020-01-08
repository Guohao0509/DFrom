<template>
  <div class="header-wrapper">
    <div class="float-left">
      <div class="logo">
        <i class="el-icon-menu" @click="collapse"></i>
      </div>
      <div class="title">
        畅的资金管理系统
      </div>
    </div>
    <div class="float-right">
      <div class="user" v-popover:userInfo>
        <img class="user-avatar" src="https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg">
        <el-popover
          ref="userInfo"
          popper-class="my-popper"
          width="250"
          trigger="hover">
          <div class="user-panel">
            <div class="base-info">
              <img class="user-avatar" src="https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg">
              <div class="user-name">{{ adminName }}</div>
            </div>
            <el-row>
              <el-col :span="12">
                <div class="panel-item">
                  <i class="el-icon-news"></i>
                  <div class="item-info">个人信息</div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="panel-item">
                  <i class="el-icon-tickets"></i>
                  <div class="item-info">账户信息</div>
                </div>
              </el-col>
            </el-row>
            <div class="logout">
              退出登陆
            </div>
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'myHeader',
  data() {
    return {
      account: '',
      adminName: ''
    };
  },
  created() {
    
  },
  methods: {
    doSearch () {
      console.log('doSearch')
    },
    collapse() {
      this.$emit('navcollapse')
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '../styles/layout.scss';
  .header-wrapper {
    height: $headerHeight;
    line-height: $headerHeight;
    font-size: 0px;
  }
  .logo, .title, .search, .msg, .user {
    display: inline-block;
    height: $headerHeight;
    line-height: $headerHeight;
    padding: 0px 20px;
    text-align: center;
    font-size: 17px;
    color: #fff;
    border-right: 1px solid rgb(27, 27, 27);
    .doSearch {
      cursor: pointer;
    }
    &:not(.search) {
      cursor: pointer;
    }
    &:not(.search):hover {
      background-color: rgb(27, 27, 27);
    }
  }
  .user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    vertical-align: middle;
  }
  .base-info {
    border-bottom: 1px solid #ddd;
    .user-avatar {
      width: 50px;
      height: 50px;
    }
    .user-name {
      margin: 15px;
    }
  }
  .user-panel {
    text-align: center;
    background-color: rgb(247, 247, 247);
    .logout {
      height: 45px;
      line-height: 45px;
      background-color: rgb(226, 226, 226);
    }
    .panel-item {
      line-height: 20px;
      margin: 20px 20px;
      padding: 10px 0px;
      font-size: 20px;
      border-radius: 3px;
      &:hover {
        background-color: rgb(226, 226, 226);
      }
      .item-info {
        margin-top: 15px;
        font-size: 14px;
      }
    }
  }
</style>