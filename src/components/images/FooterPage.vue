<template>
  <div class="example-pagination-block">
    <el-pagination
        layout="prev, pager, next"
        :background="true"
        :total="1000"
        v-model:currentPage="currentPage"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import {ref} from "vue"
export default {
  name: "FooterPage",
  methods: {
    handleCurrentChange(val){
      console.log(`current page: ${val}`)
    }
  },
  setup(){
    const currentPage = ref(5)
    return {
      currentPage
    }
  }
}


</script>


<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>