<template>
    <div>
      <income-detail ref="incomeDetail"></income-detail>
      <expenses-detail ref="expensesDetail"></expenses-detail>
    </div>
</template>

<script>
import expensesDetail from './expenses_detail';
import incomeDetail from './income_detail';

export default {
    name: 'modal',
    components: {
      expensesDetail,
      incomeDetail
    },
    methods: {
      modal(type, data) {
        if (type == 0) {
          this.$refs.incomeDetail.show(data);
        } else if (type == 1) {
          this.$refs.expensesDetail.show(data);
        }
      }
    }
}
</script>

<style lang="scss" scoped>
</style>
