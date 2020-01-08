<template>

  <div>
    <el-table :data="tableList" :border="true" size="small" :stripe="true" tooltip-effect="dark">
      <slot name="columns"></slot>
    </el-table>
    <div class="block">
      <slot name="bar"></slot>
      <pagination style="float: right;" :url="url" :params="params" @complete="onComplete" @fail="onFail" ref="pagination"></pagination>
    </div>
  </div>
  
</template>

<script>
import Pagination from '@/components/Pagination';
export default {
  name: 'TablePage',
  props: {
    url: {
      type: String
    },
    params: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {
    Pagination
  },
  
  data () {
    return {
      tableList: [],
      form: null
    }
  },
  mounted () {
    
  },
  methods: {
    onComplete(data) {
      this.tableList = data.list;
    },
    onFail(err) {
      console.log(err);
    },
    reloadTable() {
      this.$refs.pagination.reloadList();
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

