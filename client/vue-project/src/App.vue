
<template>

  <div>

    <router-view />

  </div>

</template>

<script setup lang="ts">

  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/General/Navbar.vue'
  import RoutesProp from './interfaces/Routes'

</script>

<style lang="sass">

  *  
    -ms-overflow-style: none
    scrollbar-width: none

  ::webkit-scrollbar
    dsiaply: none

</style>
