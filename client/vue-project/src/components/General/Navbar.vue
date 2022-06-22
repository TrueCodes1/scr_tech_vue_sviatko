<template>
    
    <div>
<!-- 
        <nav class="navbar navbar-expand-lg fixed-top d-flex flex-row align-items-center justify-content-end">

            <ul class="navbar-nav d-flex flex-row justify-content-end align-items-end w-100">

                <li class="nav-item d-flex flex-row align-items-center justify-content-start" v-for="route in routes" :key="route.id" >

                    <router-link :to="route.path" class="nav-link" > {{ route.text }} </router-link>

                    <button v-if="route.text == 'HOME'" class="btn dropdown-toggle p-0"></button>

                </li>

            </ul>
            

        </nav> -->

        <nav class="navbar navbar-expand-lg fixed-top d-flex flex-row align-items-center">

            <a class="navbar-brand" href="#">Navbar</a>

            <button id="toggler-btn" class="navbar-toggler flex-column align-items-center justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                <span class="navbar-toggler-burger"></span>
                <span class="navbar-toggler-burger"></span>
                <span class="navbar-toggler-burger"></span>
            
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <ul class="navbar-nav mr-auto d-flex w-100">

                    <li class="nav-item d-flex flex-row align-items-center justify-content-start" v-for="route in routes" :key="route.id" >

                        <router-link :to="route.path" class="nav-link" > {{ route.text }} </router-link>

                        <button v-if="route.text == 'HOME'" class="btn dropdown-toggle p-0"></button>

                    </li>

                </ul>

            </div>

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

            return {


            }

        }

    })

</script>

<style scoped lang="sass">

    @import '../../sass/General/variables.sass'

    html
        overflow-x: hidden
    .nav-link
                color: #000
    .dropdown-toggle,
    .dropdown-toggle:hover,
    .dropdown-toggle:focus,
    .dropdown-toggle:active,
    .dropdown-toggle:visited
        margin-right: 10px
        color: #000
        opacity: 1
        border: none
        outline: none
        box-shadow: none
        font-size: 20px
    
    @media (max-width: 992px) 
        
        .navbar
            background: #fff
            justify-content: space-between

        .navbar-brand
            margin-left: 20px

        .navbar-toggler,
        .navbar-toggler:hover,
        .navbar-toggler:focus,
        .navbar-toggler:active,
        .navbar-toggler:visited
            display: flex
            height: 40px
            width: 40px
            margin-right: 20px
            border-radius: 0
            border: 0px solid black
            outline: 0
            box-shadow: none

        .navbar-toggler-burger
            border: 2px solid #000
            height: 5px
            width: 30px
            margin: 2px
            border-radius: 5px
            background: #000  
            opacity: .5   

        .navbar-collapse
            align-items: center
            justify-content: center 

        .navbar-nav
            flex-direction: column  
            align-items: center
            justify-content: flex-start
            background: #fff   
            padding-bottom: 20px 
        .dropdown-toggle,
        .dropdown-toggle:hover,
        .dropdown-toggle:focus,
        .dropdown-toggle:active,
        .dropdown-toggle:visited
            margin-right: 0
            margin-left: 10px

    @media (min-width: 992px)
        
        .navbar
            padding: 30px 165px 0 40px
            background: #fff
            justify-content: flex-end

        .navbar-toggler
            display: none

        .navbar-nav
            flex-direction: row 
            justify-content: flex-end 
            align-items: flex-end
        

</style>