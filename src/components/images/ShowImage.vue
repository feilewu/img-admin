<template>
  <ShowImageRow v-for="(row,index) in rows" :key="index" :row="row"></ShowImageRow>
  <FooterPage></FooterPage>
</template>

<script>
import ShowImageRow from "@/components/images/ShowImageRow";
import FooterPage from "@/components/images/FooterPage";
export default {
  name: "ShowImage",
  components: {FooterPage, ShowImageRow},
  data(){
    return {
      rows: [
        [{"url":"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},"2","3","4","5","6"],
        ["1","2","3","4","5","6"],
        ["1","2","3","4","5","6"],
        ["1","2","3","4","5","6"]
      ]
    }

  }
}
</script>

<style scoped>

</style>