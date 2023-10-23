<template>
  <div id="normalLayout">
    <nav-header />
    <top-search />
    <router-view />
    <nav-footer />
  </div>
  
</template>

<script>
import navHeader from '@/components/header'
import topSearch from '@/components/topSearch'
import navFooter from '@/components/footer'

export default {
  components: { navHeader, topSearch, navFooter }
}
</script>

<style scoped>
#normalLayout {
  margin: 0 auto;
}
</style>