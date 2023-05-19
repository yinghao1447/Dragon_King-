<template>
  <div class="loginFrom_container">
    <div class="login_box">
      <div class="logo-img">
        <img src="@/assets/imgs/logo.jpg">
      </div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginFormRules" label-width="0" class="login_form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <div class="btn_box">
          <el-button type="primary" @click="submitFrom('loginForm')">登录</el-button>
          <el-button type="info" @click="resetForm('loginForm')">重置</el-button>
        </div>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFormRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 2, message: '长度大于2', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入您的密码', trigger: 'blur' },
          { min: 5, message: '密码长度正确', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitFrom (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('可提交')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.loginFrom_container{
  background-color: #2b4b5b;
  height: 100%;
  .login_box{
    width: 430px;
    height: 290px;
    // padding: 25px 0;
    background-color: white;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    .logo-img{
      width: 130px;
      height: 130px;
      border:1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%,-50%);
      background: white;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
  .login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    box-sizing: border-box;

    .btn_box{
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
