<template>
    
    <div>

        <nav class="navbar navbar-expand-lg fixed-top d-flex flex-row align-items-center">

            <!-- BRANDING LOGO -->
            <a class="navbar-brand" href="#">
                <img src="../../assets/logo.svg" class="branding-logo" alt="Branding Logo"/>
            </a>

            <!-- TOGGLER BUTTON THAT IS SHOWN ON TABLET AND MOBILE SCREEN SIZE AND 
            IS USED TO REVEAL THE NAVIGATION BAR -->
            <button id="toggler-btn" class="navbar-toggler flex-column align-items-center justify-content-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                
                <!-- ALL THESE SPANS TOGETHER CREATE THE BURGER "ICON" -->
                <span class="navbar-toggler-burger"></span>
                <span class="navbar-toggler-burger"></span>
                <span class="navbar-toggler-burger"></span>
            
            </button>

            <!-- THIS NAVBAR IS FULLY VIDIBLE UNLESS SCREEN IS WIDER THAT TABLET SIZE,
            ELSEWAY IT IS HIDDEN AND IS REVEALED ONCE THE TOGGLER BUTTON IS CLICKED -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                <!-- UNORDERED LIST OF NAV ITEMS -->
                <ul class="navbar-nav mr-auto d-flex w-100">

                    <li class="nav-item d-flex flex-row align-items-center justify-content-start" v-for="route in routes" :key="route.id" >

                        <!-- EACH ITEM HAS A ROUTER LINK IN IT -->
                        <router-link :to="route.path" class="nav-link" > {{ route.text }} </router-link>

                        <!-- THE HOME ROUTE HAS A DROPDOWN TOGGLE ARROW NEXT TO THE WORD HOME, AS IN THE ORIGINAL DESIGN -->
                        <button v-if="route.text == 'HOME'" class="btn dropdown-toggle p-0"></button>

                    </li>

                </ul>

            </div>

        </nav>

    </div>

</template>

<script lang="ts">

    import { defineComponent, reactive } from '@vue/runtime-core'

    export default defineComponent({

        name: 'Navbar',
        props: {

            routes: Object

        }

    })

</script>

<style scoped lang="sass">

    @import '../../sass/General/variables.sass'
    @import '../../sass/General/fonts.sass'

    html
        overflow-x: hidden
    .nav-link
        color: $secondary
    .dropdown-toggle,
    .dropdown-toggle:hover,
    .dropdown-toggle:focus,
    .dropdown-toggle:active,
    .dropdown-toggle:visited
        margin-right: 10px
        color: $secondary
        opacity: 1
        border: none
        outline: none
        box-shadow: none
        font-size: $semilarge
    
    @media (max-width: $breakpointMobile)

        .branding-logo
            max-height: 40px

    @media (max-width: 992px) 
        
        .navbar
            background: $primary
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
            border: 0px solid transparent
            outline: 0
            box-shadow: none

        .navbar-toggler-burger
            border: 2px solid $secondary
            height: 5px
            width: 30px
            margin: 2px
            border-radius: 5px
            background: $secondary  
            opacity: .5   

        .navbar-collapse
            align-items: center
            justify-content: center 

        .navbar-nav
            flex-direction: column  
            align-items: center
            justify-content: flex-start
            background: $primary
            padding-bottom: 20px 
        .dropdown-toggle,
        .dropdown-toggle:hover,
        .dropdown-toggle:focus,
        .dropdown-toggle:active,
        .dropdown-toggle:visited
            margin-right: 0 0 0 10px

    @media (min-width: 992px)
        
        .navbar
            padding: 30px 165px 0 40px
            background: $primary
            justify-content: flex-end

        .navbar-toggler
            display: none

        .navbar-nav
            flex-direction: row 
            justify-content: flex-end 
            align-items: flex-end
        

</style>