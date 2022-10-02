<template>
  <el-row :gutter="20">
    <el-col :span="4" v-for="(col, index) in row" :key="index">
      <div class="grid-content ep-bg-purple">
        <el-image style="width: 150px; height: 150px" :src="col.url" fit="fill" />
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "ShowImageRow",
  props: {
    row: []
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
  min-width: 1000px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>