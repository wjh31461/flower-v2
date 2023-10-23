<template>
  <div id="classify">
    <div class="classifyTitle">所有分类</div>
    <!-- TODO 分类跳转 -->
    <div class="classifyWrapper">
      <div class="classifyItemTitle">用途</div>
      <span v-for="(type, i) in classifyOpts['useTo']" :key="i" class="classifyItem">
        {{ type.label }}
      </span>
    </div>

    <div class="classifyWrapper">
      <div class="classifyItemTitle">花材</div>
      <span v-for="(material, i) in classifyOpts['material']" :key="i" class="classifyItem">
        {{ material }}
      </span>
    </div>

    <div class="classifyWrapper">
      <div class="classifyItemTitle">永生花</div>
      <span v-for="(immortal, i) in classifyOpts['immortal']" :key="i" class="classifyItem">
        {{ immortal.label }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classify',
  components: {},
  data () {
    return {
      classifyOpts: {
        useTo: [
          { label: '爱情鲜花', type: 'love' },
          { label: '生日鲜花', type: 'birthday' },
          { label: '友情鲜花', type: 'friendship' },
          { label: '问候长辈', type: 'older' },
          { label: '探病慰问', type: 'illness' },
          { label: '道歉鲜花', type: 'sorry' },
          { label: '祝贺鲜花', type: 'congratulate' },
          { label: '婚庆鲜花', type: 'marrage' },
          { label: '商务鲜花', type: 'business' },
        ],
        material: ['玫瑰', '康乃馨', '百合', '向日葵', '郁金香'],
        immortal: [
          { label: '瓶花', type: 'vase' },
          { label: '盒花', type: 'box' },
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
#classify {
  height: 300px;
  padding: 20px;
  border-radius: 16px;
  background-color: #f9f9f9;

  .classifyTitle {
    font-size: 20px;
    // margin-bottom: 10px;
  }
  .classifyWrapper {
    margin: 10px 0;
    .classifyItemTitle {
      margin-bottom: 6px;
      font-size: 16px;
    }
    .classifyItem {
      margin-right: 10px;
      margin-bottom: 5px;
      display: inline-block;
    }
  }
  
}
</style>
