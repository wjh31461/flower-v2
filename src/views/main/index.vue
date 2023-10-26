<template>
  <div id="mainPage" class="wrapper">
    <el-row :gutter="16">
      <el-col :span="6">
        <classify></classify>
      </el-col>
      <el-col :span="12">
        <carousel></carousel>
      </el-col>
      <el-col :span="6">
        <user-overview></user-overview>
      </el-col>
    </el-row>
    
    <recommend></recommend>
  </div>
</template>

<script>
import classify from './classify'
import carousel from './carousel'
import userOverview from './userOverview'
import recommend from './recommend'
export default {
  name: 'mainPage',
  components: { classify, carousel, userOverview, recommend }
}
</script>

<style scoped>
#mainPage {
  margin-top: 40px;
}
</style>
