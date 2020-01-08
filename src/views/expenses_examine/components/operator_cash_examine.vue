<template>
  <el-dialog
    title="交易详情"
    :visible.sync="centerDialogVisible"
    width="60%"
    top="5vh">
    <el-row>
      <h3>运营商信息</h3>
      <el-col :span="8">
        <span class="label">运营商名称：</span>
        <span class="text">石家庄畅的</span>
      </el-col>
      <el-col :span="8">
        <span class="label">银行卡号：</span>
        <span class="text">6221 2012 2990 2999</span>
      </el-col>
    </el-row>
    <el-row>
      <h3>订单详情</h3>
      <el-col :span="8">
        <span class="label">内部订单号：</span>
        <span class="text">00000000009</span>
      </el-col>
      <el-col :span="8">
        <span class="label">交易类型：</span>
        <span class="text">支出</span>
      </el-col>
      <el-col :span="8">
        <span class="label">支出类型：</span>
        <span class="text">运营商提现</span>
      </el-col>
      <el-col :span="8">
        <span class="label">审核状态：</span>
        <span class="text">待审核</span>
      </el-col>
      <el-col :span="8">
        <span class="label">实际支出：</span>
        <span class="text">980.00 元</span>
      </el-col>
      <el-col :span="8">
        <span class="label">预支出金额：</span>
        <span class="text">1000.00 元</span>
      </el-col>
      <el-col :span="8">
        <span class="label">申请时间：</span>
        <span class="text">2018-01-01 12:00:00</span>
      </el-col>
       <el-col :span="8">
        <span class="label">业务订单号：</span>
        <span class="text">00000000000001</span>
      </el-col>
       <el-col :span="8">
        <span class="label">收支来源：</span>
        <span class="text">租车平台</span>
      </el-col>
    </el-row>
    <el-row>
      <h3>运营商账户总览</h3>
      <el-col :span="8">
        <span class="label">当前余额：</span>
        <span class="text">1000元</span>
      </el-col>
      <el-col :span="8">
        <span class="label">历史总收入：</span>
        <span class="text">2000元</span>
      </el-col>
      <el-col :span="8">
        <span class="label">历史总提现：</span>
        <span class="text">1000元</span>
      </el-col>
      <el-col :span="8">
        <span class="label">当前提现：</span>
        <span class="text">1000元</span>
      </el-col>
      <el-col :span="8">
        <span class="label">提现单数：</span>
        <span class="text">100单</span>
      </el-col>
      <el-col :span="8">
        <span class="label">平台抽成：</span>
        <span class="text">20元</span>
      </el-col>
    </el-row>
    <el-row>
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
      实际转账金额：<span class="nomal-tips">1000(提现金额）- 20(平台抽成)</span> = ￥ <b class="money">1000</b> 元
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" type="danger" @click="centerDialogVisible = false">审核不通过</el-button>
      <el-button size="mini" type="success" @click="centerDialogVisible = false">审核通过</el-button>
      <el-button size="mini" type="primary" @click="centerDialogVisible = false">审核通过并转账</el-button>
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
        tagList: []
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
