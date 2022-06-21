<template>
        
  <div>
    
    <Navbar :routes="RoutesProp" />

    <main>

        <h1 class="mt-5">
            Spec. article
        </h1>

    </main>
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
