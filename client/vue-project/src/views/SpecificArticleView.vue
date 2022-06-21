<template>
        
  <div>
    
    <Navbar :routes="RoutesProp" />

    <h1 class="mt-5">
        Specific Article
    </h1>

  </div>

</template>

<script lang="ts">

    import { defineComponent } from 'vue'
    import Navbar from '../components/General/Navbar.vue'
    import RoutesProp from '../interfaces/Routes'

    export default defineComponent({
        name: 'SpecificArticleView',
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
