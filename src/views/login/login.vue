<template>
  <div>
    <div class="login-wrapper">
      <img src="@/assets/background/bg_6.jpg" style="width: 100%; height: 100%" alt="">
    </div>
    <div class="login-form">
      <div>COM.GHAO.BlOG</div>
      <el-form ref="form" size="small" :model="form">
        <el-form-item>
          <el-input v-model="form.account">
            <template slot="prepend">账号</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="password">
            <template slot="prepend">密码</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%" @click="submit">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        account: '',
        password: ''
      },
      password: ''
    }
  },
  methods: {
    submit() {
      this.form.password = this.$md5(this.password);
      this.$http({
        type: 'post',
        url: 'api/admin/login',
        params: this.form,
        success: (data) => {
          
          this.$router.push({name: 'articleList'});
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
</script>


<style lang="scss" scoped>
  .login-wrapper {
     z-index: -200;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    img {
      z-index: -100;
    }
  }
  .login-form {
    width: 300px;
    border-radius: 8px;
    padding: 30px;
    background-color: rgba(233, 233, 233, 0.5);
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    &>div {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      padding: 10px 0 30px;
    }
  }
</style>

