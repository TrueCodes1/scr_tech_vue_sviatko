<script setup lang="ts">

  import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

  <div>
    
    <nav>

      <router-link to="/home" > Home </router-link>
      <router-link to="/articles" > Blog </router-link>
      <router-link to="/articles/351" > Specific Article </router-link>

    </nav>

    <router-view />

  </div>

</template>

<style>



</style>
