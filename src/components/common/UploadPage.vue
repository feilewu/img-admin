<template>
  <el-upload
      class="upload-page"
      drag
      action="http://localhost:9527/api/img"
      :headers="headers"
      :on-success="onSuccess"
  >
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">
      Drop file here or <em>click to upload</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        only support jpg/png files
      </div>
    </template>
  </el-upload>

  <div>
    <img :src="loadedUrl" alt="">
  </div>

</template>

<script>
import {ref} from "vue";

export default {
  name: "UploadPage",
  setup(){
    const headers = {
      "token": localStorage.getItem("token"),
    }

    let loadedUrl = ref('https://tva3.sinaimg.cn/large/0072Vf1pgy1foxloigdl2j31kw0w0kib.jpg')

    return {
      headers,
      loadedUrl,
      onSuccess(resp){
        if(resp.success){
          loadedUrl.value=resp.obj
        }else {
          alert(resp.message)
        }


      }

    }

  }



}
</script>

<style scoped>

</style>