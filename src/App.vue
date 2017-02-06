<template>
  <div id="app">
    <Topbar></Topbar>
    <Vheader></Vheader>
    <div class="main">
      <router-view></router-view>
    </div>
    <Vfooter></Vfooter>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Vheader from './components/Header'
import Vfooter from './components/Footer'

export default {
  name: 'app',
  components: {
    Topbar,
    Vheader,
    Vfooter
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
</style>
