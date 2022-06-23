<template>

        <!-- THE WHOLE ARTICLES LIST -->
        <div class="articles-list mx-auto d-flex">
    
            <!-- FOR EACH OF THE 3 COLUMNS, THAT WERE GENERATED, THERE IS A SINGLE COLUMN THAT IS 
            LOADED IN THE TEMPLATE -->
            <div class="column" v-for="column in columnsBlogsFetched" :key="column"> 
                
                <!-- FOR EACH OF THE BLOGS OF THE SPECIFIC COLUMN, THERE IS A CARD CREATED
                WITH THE IMAGE AT THE TOP, AND THEN THE CARD BODY (BLOG TYPE, HEADING (NAME), TEXT 
                AND "READ MORE" BUTTON) -->
                <div class="card" v-for="blog in column" :key="blog.id"> 
                    <img class="card-img-top" :alt="blog.name" :src="blog.imgs.regular" loading="lazy">
                    <div class="card-body d-flex flex-column align-items-center justify-content-start">
                        <p class="card-type">
                            {{ blog.type }}
                        </p>
                        <h5 class="card-title" id="gallery-card-title">
                            {{ blog.name }}
                        </h5>
                        <div class="line"></div>
                        <p class="card-text">
                            {{ blog.text }}
                        </p>
                        <a v-on:click="openArticle?.(blog?.id)" class="btn">
                            Read More
                        </a>
                    </div>
                </div>
                
            </div>
            
        </div>


</template>

<script lang="ts">

    import { defineComponent, reactive } from '@vue/runtime-core'

    export default defineComponent({

        name: 'ArticlesList',
        props: {

            columnsBlogsFetched: Object,
            openArticle: Function

        }

    })

</script>

<style scoped lang="sass">

    @import '../../sass/General/variables.sass'
    @import '../../sass/General/fonts.sass'

    html
        overflow-x: hidden
    
    @media (max-width: $breakpointLaptop - 1px) 
        
        .articles-list
            flex-direction: column 
            align-items: center 
            justify-content: flex-start
        

    @media (min-width: $breakpointTablet)
        .articles-list
            flex-direction: row 
            align-items: flex-start 
            justify-content: stretch
        

    @media (min-width: $breakpointLaptop)
        #gallery-card-title
            margin-bottom: 20px


</style>