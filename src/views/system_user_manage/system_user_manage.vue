<template>
  <div>
    <el-form size="mini" ref="myForm" :rules="rules" :model="form" label-width="90px">
      <el-row :gutter="40">
        <el-col :span="6">
          <el-form-item label="标签ID" prop="tagId" >
            <el-input auto-complete="off" v-model="form.tagId"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="标签名称" prop="tagName">
            <el-select v-model="form.tagName" placeholder="请选择">
              <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="标签风格" prop="style1">
            <el-input v-model="form.style1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="标签风格" prop="style2">
            <el-input v-model="form.style2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="标签风格" prop="style3"> 
            <el-input v-model="form.style3"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="标签风格" prop="style4">
            <el-input v-model="form.style4"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="创建时间" prop="time">
            <el-date-picker v-model="form.time" type="date"  placeholder="选择日期" format="yyyy 年 MM 月 dd 日"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="结束时间" prop="endTime">
            <el-date-picker v-model="form.endTime" type="date"  placeholder="选择日期" format="yyyy 年 MM 月 dd 日"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item class="form-btns">
        <el-button @click="$refs.tablePage.reloadTable()" type="primary" size="mini">提交</el-button>
        <el-button size="mini"  @click="$refs.myForm.resetFields()">重置</el-button>
        <el-button type="success" size="mini">导出Excel</el-button>
      </el-form-item>
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
            <el-button size="tiny" @click="editTag(scope.row.tagId)">编辑</el-button>
            <el-button size="tiny" type="danger" @click="deleteTag(scope.row.tagId)">删除</el-button>
          </template>
        </el-table-column>
      </template>
    </table-page>
  </div>
</template>

<script>
import TablePage from '@/components/TablePage';
export default {
  name: 'systemUserManage',
  components: {
    TablePage
  },
  data () {
    return {
      form: {
        tagId: '',
        tagName: '',
        style1: '',
        style2: '',
        style3: '',
        style4: '',
        time: '',
        isInTime: '',
        endTime: ''
      },
      // 下拉框的option选项
      options: [],
      // 配置参数校验规则
      rules: {
        tagId: [
          { type: 'number', max: 8, min: 5, message: '请填写5 - 8之间的数', trigger: 'blur'}
        ],
        style1: [
          { required: true, message: '请填写手机号码', trigger: 'blur' },
          { validator: this.$valid.phone, trigger: 'blur'}
        ]
      }
    }
  },
  mounted() {
    this.$refs['myForm'].validate((valid) => {
      if (valid) {
        console.log('submit');
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

