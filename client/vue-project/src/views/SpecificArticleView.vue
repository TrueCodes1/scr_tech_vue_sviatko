<template>
        
  <div>
    
    <Navbar :routes="RoutesProp" />

    <Article :currentArticle="currentArticle" />    

  </div>

</template>

<script lang="ts">

    import { defineComponent } from 'vue'

    // IMPORTING COMPONENTS
    import Navbar from '../components/General/Navbar.vue'
    import Article from '../components/SpecificArticleView/Article.vue'
    
    // IMPORTING OBJECTS
    import RoutesProp from '../interfaces/Routes'

    export default defineComponent({
        name: 'SpecificArticleView',
        components: {

            Navbar,
            Article

        },
        setup() {

            let currentArticle: any = localStorage.getItem('currentArticle')
            currentArticle = JSON.parse(currentArticle)

            currentArticle = {

                name: currentArticle['name'],
                text: currentArticle['text'],
                longText: currentArticle['long-text'],
                id: currentArticle['id'],
                imgs: currentArticle['imgs'],
                type: currentArticle['type']

            }

            return {

                RoutesProp,
                currentArticle

            }

        }
    })

</script>

