<template>
  <div id="normalLayout">
    <nav-header></nav-header>
    <search></search>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
  
</template>

<script>
import navHeader from '@/components/header'
import search from '@/components/search'
import navFooter from '@/components/footer'

export default {
  components: { navHeader, search, navFooter }
}
</script>

<style>

</style>