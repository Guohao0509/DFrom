<template>
    <div>
      <income-detail ref="incomeDetail"></income-detail>
      <operator-cash-detail ref="operatorCashDetail"></operator-cash-detail>
      <user-refound-detail ref="userRefoundDetail"></user-refound-detail>
    </div>
</template>

<script>
import operatorCashDetail from './operator_cash_detail';
import incomeDetail from './income_detail';
import userRefoundDetail from './user_refound_detail';

export default {
    name: 'modal',
    components: {
      operatorCashDetail,
      incomeDetail,
      userRefoundDetail
    },
    methods: {
      modal(type, data) {
        if (type == 0) {
          this.$refs.incomeDetail.show(data);
        } else if (type == 1) {
          this.$refs.operatorCashDetail.show(data);
        } else if (type == 2) {
          this.$refs.userRefoundDetail.show(data);
        }
      }
    }
}
</script>

<style lang="scss" scoped>
</style>
