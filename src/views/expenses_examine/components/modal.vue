<template>
    <div>
      <user-redeposit-examine ref="userRedepositExamine"></user-redeposit-examine>
      <operator-cash-examine ref="operatorCashExamine"></operator-cash-examine>
      <user-refound-examine ref="userRefoundExamine"></user-refound-examine>
      <cash ref="cash"></cash>
    </div>
</template>

<script>
import operatorCashExamine from './operator_cash_examine';
import userRedepositExamine from './user_redeposit_examine';
import userRefoundExamine from './user_refound_examine';
import cash from './cash';

export default {
    name: 'modal',
    components: {
      operatorCashExamine,
      userRedepositExamine,
      userRefoundExamine,
      cash
    },
    methods: {
      modal(type, data) {
        if (type == 0) {
          this.$refs.userRedepositExamine.show(data);
        } else if (type == 1) {
          this.$refs.operatorCashExamine.show(data);
        } else if (type == 2) {
          this.$refs.userRefoundExamine.show(data);
        } else {
          this.$refs.cash.show(data);
        }
      }
    }
}
</script>

<style lang="scss" scoped>
</style>
