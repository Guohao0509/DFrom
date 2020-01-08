<template>
  <div class="table-page-wrapper">
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :background="true"
        :small="true"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Pagination',
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
    data() {
      return {
        currentPage: 1,
        pageSize: 5,
        total: 0
      }
    },
    mounted() {
      this.getList();
    },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
        this.getList();
      },
      reloadList() {
        this.getList();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.getList();
      },
      getList() {
        this.params.pageNum = this.currentPage;
        this.params.pageSize = this.pageSize;
        this.$http({
          type: 'get',
          url: this.url,
          params: this.params,
          success: (data) => {b
            this.total = data.total;
            this.$emit('complete', data);
          },
          error: (err) => {
            this.$emit('fail', error);
          }
        });
      }
    }
}
</script>

<style lang="scss">
    .el-table thead th {
        color: rgb(77, 77, 77);
        font-size: 13px;
        &>div {
            height: 30px;
        }
    }
    .el-table thead th {
        background-color: #FAFAFA;
    }
    .block {
        margin-top: 10px;
    }
</style>
