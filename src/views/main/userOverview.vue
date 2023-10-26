<template>
  <div id="userOverview">
    <div class="userfaceWrapper">
      <img src="@/assets/images/userface.svg" alt="">
      <div class="username">hi, 你好</div>
    </div>
    
    <div class="btnWrapper">
      <el-button type="primary" round>登 录</el-button>
      <el-button type="success" round>注 册</el-button>
      <el-button round>开 店</el-button>
    </div>
    
    <div class="iconWrapper">
      <div class="iconItem">
        <div ><i class="el-icon-star-off icon" /></div>
        <div>我的收藏</div>
      </div>
      <div class="iconItem">
        <div ><i class="el-icon-s-shop icon" /></div>
        <div>收藏的店</div>
      </div>
      <div class="iconItem">
        <div ><i class="el-icon-goods icon" /></div>
        <div>买过的店</div>
      </div>
      <div class="iconItem">
        <div ><i class="el-icon-time icon" /></div>
        <div>我的足迹</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: { }
}
</script>

<style scoped lang="less">
#userOverview {
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .userfaceWrapper {
    text-align: center;
    .username {
      margin-top: 16px;
      font-size: 20px;
    }
  }

  .btnWrapper {
    display: flex;
    justify-content: space-between;
  }

  .iconWrapper {
    display: flex;
    justify-content: space-between;

    .iconItem {
      text-align: center;
      cursor: pointer;
    }
    .iconItem:hover {
      color: red;
    }
    .icon {
      margin-bottom: 10px;
      font-size: 32px;
    }
  }
}
</style>
