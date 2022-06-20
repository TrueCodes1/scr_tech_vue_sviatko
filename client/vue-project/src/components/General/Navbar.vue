<template>
    
    <nav class="navbar bg-light fixed-top">

      <router-link v-for="route in routes" :key="route.id" :to="route.path" > {{ route.text }} </router-link>

      <router-view />

    </nav>

</template>

<script lang="ts">

    import { defineComponent, reactive } from '@vue/runtime-core'
    import { RouterLink, RouterView } from 'vue-router'
    import $ from 'jquery'
    import type Route from '../../interfaces/RouteInterface'

    export default defineComponent({

        name: 'Navbar',
        props: {

            routes: Object

        },
        setup(props) {
            
            console.log(props.routes)

            return {


            }

        }

    })

</script>

<style scoped>



</style>