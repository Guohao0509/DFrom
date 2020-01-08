<template>
  <el-dialog
    title="交易详情"
    :visible.sync="centerDialogVisible"
    width="60%">
    <div class="form-wrapper">
      <el-form size="mini" ref="myForm" :rules="rules" :model="form" label-width="90px">
        <el-row :gutter="40">
          <el-col :span="8">
            <el-form-item label="审核状态" prop="param1">
              <el-select v-model="form.param1" placeholder="请选择审核状态">
                <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="审核状态" prop="param1">
              <el-select v-model="form.param1" placeholder="请选择审核状态">
                <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="审核状态" prop="param1">
              <el-select v-model="form.param1" placeholder="请选择审核状态">
                <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="审核状态" prop="param1">
              <el-select v-model="form.param1" placeholder="请选择审核状态">
                <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="审核状态" prop="param1">
              <el-select v-model="form.param1" placeholder="请选择审核状态">
                <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="审核状态" prop="param1">
              <el-select v-model="form.param1" placeholder="请选择审核状态">
                <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="审核状态" prop="param1">
              <el-select v-model="form.param1" placeholder="请选择审核状态">
                <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="审核状态" prop="param1">
              <el-select v-model="form.param1" placeholder="请选择审核状态">
                <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="审核状态" prop="param1">
              <el-select v-model="form.param1" placeholder="请选择审核状态">
                <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="审核状态" prop="param1">
              <el-select v-model="form.param1" placeholder="请选择审核状态">
                <el-option v-for="item in options" :key="item.tagId" :label="item.tagName" :value="item.tagId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
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
        centerDialogVisible: false,
        form: {
          param1: '',
          param2: '',
          param3: '',
          param4: '',
          param5: '',
          param6: '',
          param7: '',
          param8: '',
          param9: '',
          param10: ''
        },
        options: [],
        rules: {
          param1: [
            { type: 'number', max: 8, min: 5, message: '请填写5 - 8之间的数', trigger: 'blur'}
          ],
          param2: [
            { required: true, message: '请填写手机号码', trigger: 'blur' },
            { validator: this.$valid.phone, trigger: 'blur'}
          ]
        }
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
