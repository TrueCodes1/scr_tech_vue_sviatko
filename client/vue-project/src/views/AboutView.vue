<template>
        
  <div>
    
    <Navbar :routes="RoutesProp" />

    <main>

        <h1>
            About
        </h1>

    </main>
  </div>

</template>

<script lang="ts">

    import { defineComponent } from 'vue'

    // IMPORTING COMPONENTS
    import Navbar from '../components/General/Navbar.vue'

    // IMPORTING OBJECTS
    import RoutesProp from '../interfaces/Routes'

    export default defineComponent({

        name: 'HomeView',
        components: {

            Navbar

        },
        setup() {

            return {

                RoutesProp

            }

        }

    })

</script>

<style lang="sass">
    
    h1
        position: absolute
        left: 0
        width: 100%
        margin-top: 200px

</style>