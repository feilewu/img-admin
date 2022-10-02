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

</template>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>

</style>