<template>
  <div class="login-box">
    <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="70px" class="loginForm">
      <h1>后台管理系统</h1>
      <el-form-item label="账号" prop="userName">
        <el-input v-model="loginForm.userName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button class="subtn" type="primary" @click="submitForm(loginFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { InitData } from '../types/login'
import type { FormInstance } from 'element-plus'
import { login } from "../http/api";

import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const data = reactive(new InitData())
    const router = useRouter()

    const rules = {
      userName: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 6, max: 24, message: '6-24位之间', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 6, max: 24, message: '6-24位之间', trigger: 'blur' }
      ]
    }

    const submitForm = (loginFormRef: FormInstance | undefined) => {
      if (!loginFormRef) return
      loginFormRef.validate((valid: boolean) => {
        if (valid) {
          login(data.loginForm).then(res=>{
            localStorage.setItem("token", res.data.token)
            router.push('/')
          })
          
        }
      })
    }
    return {
      ...toRefs(data),
      rules,
      submitForm
    }
  }
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background-color: rgb(99, 99, 231);
  box-sizing: border-box;
  padding-top: 200px;

  .loginForm {
    width: 400px;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
    margin: 0 auto;
    .subtn {
      width: 100%;
    }
    h1 {
      text-align: center;
      margin: 20px 0;
    }
  }
}
</style>