<template>
  <div id="nav-header">
    <div class="left">
      <span class="header-item">
        <router-link to="/login" class="login">请登录</router-link>
      </span>
      <span class="header-item">
        <router-link to="/registry">免费注册</router-link>
      </span>
      <span class="header-item">
        <!-- TODO 手机逛 -->
        <i class="el-icon-mobile" style=""></i>
        手机逛
      </span>
    </div>
    <div class="right">
      <span v-if="showJumpMain" class="header-item">
        <router-link to="/">去首页</router-link>
      </span>
      <span class="header-item">
        <el-dropdown placement="bottom" @command="handleCommand">
          <span class="el-dropdown-link">
            我的<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="/order" icon="el-icon-shopping-bag-2">已买到的</el-dropdown-item>
            <el-dropdown-item command="/history" icon="el-icon-time">我的足迹</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      <span class="header-item">
        <router-link to="/cart">
          <i class="el-icon-shopping-cart-2" style="color: red;"></i>
          购物车
        </router-link>
      </span>
      <span class="header-item">
        <router-link to="/favorites">
          <i class="el-icon-star-on" style="color: orange;"></i>
          收藏夹
        </router-link>
      </span>
      <span class="header-item">
        <!-- TODO 我是商家 -->
        我是商家
      </span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'nav-header',
  components: {},
  data () {
    return {

    }
  },
  computed: {
    showJumpMain () {
      return this.$route.path !== '/main'
    }
  },
  methods: {
    handleCommand (command) {
      this.$router.push(command)
    },
  }
}
</script>

<style scoped lang="less">
@import './index.less';

</style>
