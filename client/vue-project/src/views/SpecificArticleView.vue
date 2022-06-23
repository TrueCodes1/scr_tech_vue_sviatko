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

    // IMPORTING FUNCTIONS
    import CreateCurrentArticle from '../interfaces/CreateCurrentArticle'
    
    // IMPORTING INTERFACES
    import type CurrentArticle from '../interfaces/CurrentArticleInterface'

    export default defineComponent({
        name: 'SpecificArticleView',
        components: {

            Navbar,
            Article

        },
        setup() {

            let currentLocation: any = window.location.toString();
            
            let id: string = currentLocation.substring(currentLocation.lastIndexOf('/') + 1);

            let articles: any = localStorage.getItem('articles')
            articles = JSON.parse(articles)

            let rawArticle: any = articles.filter((article: any) => {

                return article['id'] == id

            })[0]

            let currentArticle: CurrentArticle = CreateCurrentArticle(rawArticle)

            return {

                RoutesProp,
                currentArticle

            }

        }
    })

</script>

