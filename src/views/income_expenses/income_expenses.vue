<template>

  <div>
    <el-form size="mini" ref="myForm" :model="form" label-width="90px">
      <el-row :gutter="40">
        <el-col :span="6">
          <el-form-item label="交易类型" prop="param1" >
            <el-select v-model="form.param1" placeholder="请选择交易类型">
              <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="收支来源" prop="param2">
            <el-select v-model="form.param2" placeholder="请选择收支来源">
              <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="收费类型" prop="param3">
            <el-select v-model="form.param3" placeholder="请选择收费类型">
              <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="消费方式" prop="param4">
            <el-select v-model="form.param4" placeholder="请选择消费方式">
              <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="支出类型" prop="param5"> 
            <el-select v-model="form.param5" placeholder="请选择支出类型">
              <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="转账状态" prop="param6">
            <el-select v-model="form.param6" placeholder="请选择转账状态">
              <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="审核状态" prop="param7">
            <el-select v-model="form.param7" placeholder="请选择审核状态">
              <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="提交时间" prop="param8">
            <el-date-picker v-model="form.param8" type="date"  placeholder="选择提交时间" format="yyyy 年 MM 月 dd 日"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="审核时间" prop="param9">
            <el-date-picker v-model="form.param9" type="date"  placeholder="选择审核时间" format="yyyy 年 MM 月 dd 日"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="转账时间" prop="param10">
            <el-date-picker v-model="form.param10" type="date"  placeholder="选择转账时间" format="yyyy 年 MM 月 dd 日"></el-date-picker>
          </el-form-item>
        </el-col>
         <el-col :span="6">
          <el-form-item label="用户手机号" prop="param11">
            <el-input v-model="form.param11" placeholder="请输入用户手机号"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <div class="form-btns">
        <el-button @click="$refs.tablePage.reloadTable()" type="primary" size="mini">提交</el-button>
        <el-button size="mini"  @click="$refs.myForm.resetFields()">重置</el-button>
        <el-button type="success" size="mini">导出Excel</el-button>
      </div>
    </el-form>
      
    <table-page url="api/tag/list" ref="tablePage" :params="form">
      <template slot="columns">
        <el-table-column label="标签ID" prop="tagId" width="260px;"></el-table-column>
        <el-table-column label="标签" prop="tagName" width="260px;"></el-table-column>
        <el-table-column label="标签风格" width="260px;">
          <template slot-scope="scope">
            {{ $dictionary.TagStyles(scope.row.styles) }}
          </template>
        </el-table-column>
        <el-table-column label="标签名称">
          <template slot-scope="scope">
            <el-tag size="mini" :type="scope.row.styles">{{ scope.row.tagName }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="tiny" type="danger" @click="showDetail(scope.row.tagId)">详情</el-button>
          </template>
        </el-table-column>
      </template>
    </table-page>
     
    <modal ref="modal"></modal>
    <button @click="$refs.modal.modal(2, '123')"></button>
  </div>
  
</template>

<script>
import TablePage from '@/components/TablePage';
import modal from './components/modal';
export default {
  name: 'incomeExpenses',
  components: {
    TablePage,
    modal
  },
  data () {
    return {
      form: {
        // param
        param1: '',
        param2: '',
        param3: '',
        param4: '',
        param5: '',
        param6: '',
        param7: '',
        param8: '',
        param9: '',
        param10: '',
        param11: ''
      },
      // 下拉框的option选项
      options: []
    }
  },
  mounted() {
    this.$http({
      type: 'get',
      url: 'api/tag/list',
      success: (data) => {
        this.options = data.list;
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.$http({
      type: 'get',
      url: 'api/tag/list',
      success: (data) => {
        this.options = data.list;
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.$http({
      type: 'get',
      url: 'api/tag/list',
      success: (data) => {
        this.options = data.list;
      },
      error: (err) => {
        console.log(err);
      }
    });
    this.$http({
      type: 'get',
      url: 'api/tag/list',
      success: (data) => {
        this.options = data.list;
      },
      error: (err) => {
        console.log(err);
      }
    });
  },
  methods: {
    editTag(tagId) {
      // 这里不能用name
      this.$router.push({path: `/dashboard/editTag/${tagId}`});
    },
    deleteTag(tagId) {
      this.$confirm('确认删除标签', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.post('api/tag/delete', {
          tagId: tagId
        }, (data) => {
          this.$message({
            message: '标签删除成功',
            type: 'success'
          });
          this.$refs.tablePage.reloadTable();
        }, (error) => {
          console.log(error);
        });
      }).catch(() => {
        this.$message({
          message: '已取消删除',
          type: 'info'
        });          
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-select {
    display: block;
  }
  .form-btns {
    padding: 10px 0 30px 0;
    text-align: center;
  }
  .el-date-editor {
    width: 100%;
  }
</style>

