<template>
  <div id="carousel">
    <el-carousel trigger="click">
      <el-carousel-item v-for="(item, i) in list" :key="i">
        <img :src="item.src" alt="" @click="jumpToSearch(item)" style="width: 100%; height: 100%; cursor: pointer;">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  components: {},
  data () {
    return {
      // TODO 轮播图片获取
      list: [
        { src: require('@/assets/images/title-1.jpg'), name: '' },
        { src: require('@/assets/images/title-2.jpg'), name: '' }
      ]
    }
  },
  methods: {
    // TODO 跳转至查询页
    jumpToSearch (item) {
      this.$router.push('/search', {
        query: {name: item.name}
      })
    }
  }
}
</script>

<style scoped lang="less">
#carousel {
  height: 300px;
}
</style>
