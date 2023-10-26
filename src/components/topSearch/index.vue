<template>
  <div id="search" class="wrapper">
    <el-row style="width: 100%;">
      <el-col :span="6" style="text-align: center;">
        <router-link to='/main'>
          <img src="@/assets/images/title-1.jpg" alt="" class="logoImg" style="width: 70px;">
          <img src="@/assets/images/title-2.jpg" alt="" class="logoImg" style="width: 120px;">
        </router-link>
      </el-col>
      <el-col :span="12">
        <el-input placeholder="请输入内容" v-model="searchStr" class="input-with-select">
          <el-select v-model="searchType" slot="prepend" style="width: 80px;">
            <el-option label="商品" value="commodity"></el-option>
            <el-option label="店铺" value="shop"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="onSearch"></el-button>
        </el-input>
        <div class="recommendWrapper">
          <a v-for="(item, i) in recommendWords" :key="i" class="wordItem">{{ item }}</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'search',
  data() {
    return {
      searchStr: '',
      searchType: 'commodity',

      recommendWords: ['康乃馨', '红玫瑰', '永生花', '百合']
    }
  },
  methods: {
    // TODO 搜索
    onSearch () {

    }
  }
}
</script>

<style scoped lang="less">
#search {
  display: flex;
  // margin-top: 20px;

  .logoImg {
    margin: 0 auto;
  }
  .recommendWrapper {
    margin-top: 6px;
  }
  .wordItem {
    margin: 0 10px;
    font-size: 12px;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
}

</style>
