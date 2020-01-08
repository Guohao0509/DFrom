<template>
  <el-dialog
    title="交易详情"
    :visible.sync="centerDialogVisible"
    width="60%">
    <el-row>
      <h3>转账清单</h3>
      <el-table :data="tagList" height="250" border size="small" style="width: 100%; margin-top: 10px;" :stripe="true" tooltip-effect="dark">
        <el-table-column label="标签ID" prop="tagId" width="300px;"></el-table-column>
        <el-table-column label="标签风格">
          <template slot-scope="scope">
            {{ $dictionary.TagStyles(scope.row.styles) }}
          </template>
        </el-table-column>
        <el-table-column label="标签名称">
          <template slot-scope="scope">
            <el-tag size="mini" :type="scope.row.styles">{{ scope.row.tagName }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <div class="footer-tip">
      <span style="color: #e4393c; float: left;" class="nomal-tips">
        <i class="el-icon-warning"></i>
        请确保账户余额充足，以免转账失败
      </span>
      实际转账金额：<span class="nomal-tips">1000(提现金额）- 20(平台抽成)</span> = ￥ <b class="money">1000</b> 元
    </div>
    <el-row style="margin-top: 10px;">
      <el-col :span="2">
        转账密码：
      </el-col>
      <el-col :span="6">
        <el-input type="password" size="mini" auto-complete="off" v-model="password" placeholder="请输入转账密码"></el-input>
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" type="primary" @click="centerDialogVisible = false">立即转账</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
    name: 'operatorCashExamine',
    props: {
      datas: String
    },
    data () {
      return {
        centerDialogVisible: false,
        tagList: [],
        password: ''
      }
    },
    mounted() {
      this.$http({
        type: 'get',
        url: 'api/tag/list',
        success: (data) => {
          this.tagList = data.list;
        },
        error: (err) => {
          console.log(err);
        }
      });
    },
    methods: {
      show(data) {
        console.log(data);
        this.centerDialogVisible = true;
      }
    }
}
</script>

<style lang="scss" scoped>
  @import '../styles/modal.scss';
</style>
