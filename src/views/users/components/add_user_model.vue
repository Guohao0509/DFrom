<template>
  <el-dialog
    title="添加/编辑用户"
    :visible.sync="centerDialogVisible"
    :before-close="handleClose"
    width="1000px">
    <div class="form-wrapper">
      <el-form size="small" ref="myForm" :rules="rules" :model="form" label-width="80px">
        <el-row :gutter="40">
          <el-col :span="8">
            <el-form-item label="登陆账号" prop="account">
              <el-input placeholder="请输入登陆账号" v-model="form.account"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="真实姓名" prop="realname">
              <el-input placeholder="请输入真实姓名" v-model="form.realname"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="手机号码" prop="phonenumber">
              <el-input placeholder="请输入手机号" v-model="form.phonenumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="设置密码" prop="password">
              <el-input placeholder="请设置密码" v-model="form.password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所在区域" prop="region">
              <el-select v-model="form.region" placeholder="请选择所在区域">
                <el-option v-for="item in regions" :key="item.regionId" :label="item.regionName" :value="item.regionId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="E-mail" prop="email">
              <el-input placeholder="请填写E-mail" v-model="form.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="验证密码" prop="confirmPassword">
              <el-input placeholder="请再次输入密码" v-model="form.confirmPassword"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="所在部门" prop="department">
              <el-select v-model="form.department" placeholder="请选择所在部门">
                <el-option v-for="item in departments" :key="item.departmentId" :label="item.departmentName" :value="item.departmentId"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="详细地址" prop="address">
              <el-input placeholder="请填写详细地址" v-model="form.address"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="用户编号" prop="userNumber">
              <el-input placeholder="请填写用户编号" v-model="form.userNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="担任职务" prop="duty">
              <el-input placeholder="请填写担任职务" v-model="form.duty"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="备注" prop="remark">
              <el-input placeholder="请填写相关备注" v-model="form.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" type="primary" @click="submitForm('myForm')">确 定</el-button>
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
          account: '',
          realname: '',
          phonenumber: '',
          password: '',
          region: '',
          email: '',
          confirmPassword: '',
          department: '',
          address: '',
          userNumber: '',
          duty: '',
          remark: ''
        },
        regions: [
          {regionId: '1', regionName: '武汉'},
          {regionId: '2', regionName: '恩施'}
        ],
        departments: [
          {departmentId: '1', departmentName: '技术部'},
          {departmentId: '2', departmentName: '商务部'}
        ],
        rules: {
          account: [
            { required: true, message: '请填写登陆账号', trigger: 'blur' }
          ],
          realname: [
            { required: true, message: '请填写真实姓名', trigger: 'blur' }
          ],
          phonenumber: [
            { pattern: /^1\d{10}$/, trigger: 'blur', message: '请填写真实姓名' }
          ],
          password: [
            { required: true, message: '请填写密码', trigger: 'blur' }  
          ],
          region: [
            { required: true, message: '请选择所在区域', trigger: 'change' }  
          ],
          email: [
            { validator: this.$valid.phone, trigger: 'blur' }
          ],
          confirmPassword: [
            { required: true, message: '您两次填写的密码不一致', trigger: 'blur' }  
          ],
          department: [
            { required: true, message: '请选择部门', trigger: 'change' }  
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
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then( _ => {
            done();
          })
          .catch( _ => {});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>

<style lang="scss" scoped>
  .form-wrapper {
    margin-top: 20px;
  }
</style>
