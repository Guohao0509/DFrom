<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="6">
        <el-card shadow="always">
          <h2 class="amount-title">账户总余额</h2>
          <div class="amount-of-money">
            ￥ <span>12,012,891.02</span> 元
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <h2 class="amount-title">租车保证金</h2>
          <div class="amount-of-money">
            ￥ <span>12,012,891.02</span> 元
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <h2 class="amount-title">租车余额</h2>
          <div class="amount-of-money">
            ￥ <span>12,012,891.02</span> 元
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <h2 class="amount-title">充电余额</h2>
          <div class="amount-of-money">
            ￥ <span>12,012,891.02</span> 元
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="pannal-col">
          <div class="head">
            待办事项
          </div>
          <ul class="list">
            <li>保证金退款审核 <b>9</b> 项</li>
            <li>充电余额退款审核 <b>11</b> 项</li>
            <li>运营商提现审核 <b>9</b> 项</li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card shadow="always" class="pannal-col">
          <div class="head">
            本月收支状况
          </div>
          <div>
            <div style="float: right; width: 50%; height: 200px;">
              
            </div>
             <ul class="list">
              <li>收入￥ <b>128,090.00</b> 元</li>
              <li>支出￥ <b>128,090.00</b> 元</li>
              <li>收入占比 <b>87.8</b> %</li>
              <li>支出占比 <b>12.2</b> %</li>
              <li>收入记录 <b>908</b> 条</li>
              <li>支出记录 <b>189</b> 条</li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :span="9">
        <el-card shadow="always" class="pannal-col">
          <div class="head">
            上月收支状况
          </div>
          <div>
            <div style="float: right; width: 50%; height: 200px;">
              
            </div>
            <ul class="list">
              <li>收入￥ <b>128,090.00</b> 元</li>
              <li>支出￥ <b>128,090.00</b> 元</li>
              <li>收入占比 <b>87.8</b> %</li>
              <li>支出占比 <b>12.2</b> %</li>
              <li>收入记录 <b>908</b> 条</li>
              <li>支出记录 <b>189</b> 条</li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <h2 class="amount-title">账户总余额</h2>
          <div class="amount-of-money">
            ￥ <span>12,012,891.02</span> 元
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <h2 class="amount-title">租车保证金</h2>
          <div class="amount-of-money">
            ￥ <span>12,012,891.02</span> 元
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <h2 class="amount-title">租车余额</h2>
          <div class="amount-of-money">
            ￥ <span>12,012,891.02</span> 元
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always">
          <h2 class="amount-title">充电余额</h2>
          <div class="amount-of-money">
            ￥ <span>12,012,891.02</span> 元
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'displayBoard',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  .el-col {
    margin-bottom: 12px;
    .head {
      font-size: 18px;
      color: #686868;
    }
    >.pannal-col {
      height: 270px;
    }
  }

  .el-card {
    .amount-title {
      margin: 10px;
      text-align: center;
      font-size: 18px;
      font-weight: normal;
      color: #858585;
    }
    .amount-of-money {
      margin: 10px;
      text-align: center;
      margin-top: 10px;
      font-size: 14px;
      span {
        font-weight: bold;
        color: #015180;
        font-size: 20px;
      }
    }
    .list {
      margin-top: 20px;
      font-size: 13px;
      li {
        height: 28px;
        line-height: 28px;
        b {
          font-size: 16px;
          color: #015180;
        }
      }
    }
  }

</style>

