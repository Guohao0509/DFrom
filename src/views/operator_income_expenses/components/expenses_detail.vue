<template>
  <el-dialog
    title="交易详情"
    :visible.sync="centerDialogVisible"
    width="60%">
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
        <span class="text">已审核</span>
      </el-col>
      <el-col :span="8">
        <span class="label">转账状态：</span>
        <span class="text">转帐失败</span>
      </el-col>
      <el-col :span="8">
        <span class="label">交易金额：</span>
        <span class="text">198.02</span>
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
        <span class="label">银行交易号：</span>
        <span class="text">00000000000001</span>
      </el-col>
       <el-col :span="8">
        <span class="label">审核时间：</span>
        <span class="text">2018-01-01 12:00:00</span>
      </el-col>
       <el-col :span="8">
        <span class="label">转账时间：</span>
        <span class="text">2018-01-01 12:00:00</span>
      </el-col>
       <el-col :span="8">
        <span class="label">到账时间：</span>
        <span class="text">2018-01-01 12:00:00</span>
      </el-col>
      <el-col :span="8">
        <span class="label">收支来源：</span>
        <span class="text">充电平台</span>
      </el-col>
      <el-col :span="8">
        <span class="label">平台抽成：</span>
        <span class="text">4 元</span>
      </el-col>
      <el-col :span="8">
        <span class="label">实际到账：</span>
        <span class="text">196 元</span>
      </el-col>
      <el-col :span="8">
        <span class="label">失败原因：</span>
        <span class="text">账号姓名不匹配</span>
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" type="primary" @click="centerDialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
    name: 'expensesDetail',
    props: {
      datas: String
    },
    data () {
      return {
        centerDialogVisible: false
      }
    },
    mounted() {
      console.log(this.datas)
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
