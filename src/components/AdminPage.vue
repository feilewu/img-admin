<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <ShowImage></ShowImage>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import ShowImage from "@/components/images/ShowImage";

export default {
  name: "AdminPage",
  components: {
    ShowImage
  }
}
</script>

<style scoped>

</style>