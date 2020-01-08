<template>
  <div class="user-wrapper">
    <div class="header">
      <el-form size="small" ref="myForm" :model="form" label-width="90px">
      <el-row :gutter="40">
        <el-col :span="4">
          <el-input
            size="small"
            placeholder="姓名/登陆账号"
            suffix-icon="el-icon-search"
            v-model="account">
          </el-input>
        </el-col>
        <el-col :span="20" class="button-wrapper">
          <el-button class="right" type="warning" size="small" @click="$refs.addUserModel.show()">添加用户</el-button>
          <el-button class="right" size="small">启用</el-button>
          <el-button class="right" size="small">禁用</el-button>
          <el-button class="right" size="small">删除</el-button>
        </el-col>
      </el-row>
    </el-form>
    </div>
    <div class="content">
      <table-page url="api/tag/list" ref="tablePage" :params="form">
        <template slot="columns">
          <el-table-column label="序号" prop="tagId"></el-table-column>
          <el-table-column label="账号" prop="tagName" ></el-table-column>
          <el-table-column label="用户名"> </el-table-column>
          <el-table-column label="编号"> </el-table-column>
          <el-table-column label="手机号"> </el-table-column>
          <el-table-column label="E-mail"> </el-table-column>
          <el-table-column label="所在部门"></el-table-column>
        </template>
      </table-page>
    </div>
    <add-user-model ref="addUserModel"></add-user-model>
  </div>
</template>

<script>
import TablePage from '@/components/TablePage';
import AddUserModel from './add_user_model';
export default {
  components: {
    TablePage,
    AddUserModel
  },
  data() {
    return {
      account: '',
      form: {
        tagId: '',
        tagName: '',
        style1: '',
        style2: '',
        style3: '',
        style4: '',
        time: '',
        isInTime: '',
        endTime: ''
      },
      // 下拉框的option选项
      options: [],
      // 配置参数校验规则
      rules: {
        tagId: [
          { type: 'number', max: 8, min: 5, message: '请填写5 - 8之间的数', trigger: 'blur'}
        ],
        style1: [
          { required: true, message: '请填写手机号码', trigger: 'blur' },
          { validator: this.$valid.phone, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  .user-wrapper {
    margin-top: 20px;
    padding: 20px;
    padding-bottom: 60px;
    border: 1px solid #dcdfe6;
    .header {

    }
    .content {
      margin-top: 20px;
    }
    .search {
      float: right;
    }
    .button-wrapper {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
