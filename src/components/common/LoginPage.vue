<template>
  <div>
    <el-input v-model="userName" placeholder="Please input">
      <template #prepend>用户名</template>
    </el-input>
  </div>
  <div>
    <el-input v-model="password" placeholder="Please input">
      <template #prepend>密码</template>
    </el-input>
  </div>

  <el-button type="primary" round @click="submit">登录</el-button>

</template>

<script>

import { ref } from 'vue'
import http from '@/request/index'
import router from "@/router";

export default {
  name: "LoginPage",
  setup(){
    const userName = ref('')
    const password = ref('')
    function submit(){
      http.post('http://localhost:9527/api/user/login', JSON.stringify({
        "name": userName.value,
        "password": password.value
      })).then(data=>{

        if (data.success){
          localStorage.setItem("token",data.obj)

          router.push('/')


        } else {
          alert(data.message)
        }


      })

    }


    return {
      userName,
      password,
      submit
    }
  }
}








</script>

<style scoped>

</style>