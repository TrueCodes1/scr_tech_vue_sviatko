<template>
    
    <div>

        <nav class="navbar navbar-expand-lg bg-light fixed-top d-flex flex-row align-items-center justify-content-end">

            <ul class="navbar-nav d-flex flex-row justify-content-end align-items-end w-100">

                <li class="nav-item" v-for="route in routes" :key="route.id" >

                    <router-link :to="route.path" class="nav-link" > {{ route.text }} </router-link>

                </li>

            </ul>
            

        </nav>

    </div>

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