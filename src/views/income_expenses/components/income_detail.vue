<template>
  <el-dialog
    title="交易详情"
    :visible.sync="centerDialogVisible"
    width="40%">
    <el-row>
      <h3>用户信息</h3>
      <el-col :span="12">
        <span class="label">用户姓名：</span>
        <span class="text">Java</span>
      </el-col>
      <el-col :span="12">
        <span class="label">用户手机号：</span>
        <span class="text">13419565194</span>
      </el-col>
    </el-row>
    <el-row>
      <h3>订单详情</h3>
      <el-col :span="12">
        <span class="label">内部订单号：</span>
        <span class="text">00000000009</span>
      </el-col>
      <el-col :span="12">
        <span class="label">交易类型：</span>
        <span class="text">支出</span>
      </el-col>
      <el-col :span="12">
        <span class="label">收支来源：</span>
        <span class="text">租车平台</span>
      </el-col>
      <el-col :span="12">
        <span class="label">收费类型：</span>
        <span class="text">会员消费</span>
      </el-col>
      <el-col :span="12">
        <span class="label">消费方式：</span>
        <span class="text">支付宝</span>
      </el-col>
      <el-col :span="12">
        <span class="label">交易金额：</span>
        <span class="text">198.02</span>
      </el-col>
      <el-col :span="12">
        <span class="label">交易时间：</span>
        <span class="text">2018-01-01 12:00:00</span>
      </el-col>
       <el-col :span="12">
        <span class="label">业务订单号：</span>
        <span class="text">00000000000001</span>
      </el-col>
       <el-col :span="12">
        <span class="label">三方订单号：</span>
        <span class="text">00000000000001</span>
      </el-col>
       <el-col :span="12">
        <span class="label">第三方账户：</span>
        <span class="text">134****7616</span>
      </el-col>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button size="mini" type="primary" @click="centerDialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
    name: 'incomeDetail',
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
