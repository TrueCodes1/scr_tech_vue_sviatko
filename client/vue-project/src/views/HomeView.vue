<template>
        
  <div>
    
    <Navbar :routes="RoutesProp" />

    <main class="mx-auto d-flex flex-column align-items-center justify-content-start">

        <Carousel :firstFromGallery="firstFromGallery" :topGalleryFetchedMobile="topGalleryFetchedMobile" />

        <TopGallery :topGalleryFetched="topGalleryFetched" />

        <Articles :columnsBlogsFetched="columnsBlogsFetched" :openArticle="openArticle" />

    </main>


  </div>

</template>

<script lang="ts">

    import { defineComponent, onMounted, reactive, ref, computed } from 'vue'
    import axios, { AxiosError } from 'axios'

    //IMPORTING COMPONENTS
    import Navbar from '../components/General/Navbar.vue'
    import Carousel from '../components/HomeView/Carousel.vue'
    import TopGallery from '../components/HomeView/TopGallery.vue'
    import Articles from '../components/HomeView/ArticlesList.vue'
    
    // IMPORTING OBJECTS
    import RoutesProp from '../interfaces/Routes'

    // IMPORTING JSONS
    //@ts-ignore
    import articles from '../jsons/articles.json'
    //@ts-ignore
    import gallery from '../jsons/gallery.json'

    //IMPORTING OTHER NECCESSARY FILES
    const UNSPLASH_CLIENT_ID: String = '2Bwn0PvYJW2Czd2YggvBcL5ALqmGFdWYr0nVVyWxBZE'
    

    export default defineComponent({

        name: 'HomeView',
        components: {

            Navbar,
            Carousel,
            TopGallery,
            Articles

        },
        setup() {

            const columnsBlogsFetched: any = ref(null)
            const topGalleryFetched: any = ref(null)
            const topGalleryFetchedMobile: any = ref(null)
            const firstFromGallery: any = ref(null)

            let columnsBlogs: any = {
                '1': {},
                '2': {},
                '3': {}
            }
            
            let topGallery: any = {
                0: {},
                1: {},
                2: {},
                3: {}
            }
            
            let UNSPLASH_ENDPOINT = new URL(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_CLIENT_ID}`)

            let counter = 0;

            fetch(UNSPLASH_ENDPOINT.toString())
                .then(response => { return response.json() })
                .then(images => {

                    images.forEach((image: any) => {

                        // let specificArticleKey = articleKeys[counter];
                        
                        articles[counter]['imgs'] = image['urls'];
                        articles[counter]['id'] = image['id'];
                        
                        counter++

                    })

                })
                .then(() => {
                    
                    fetch(UNSPLASH_ENDPOINT.toString())
                        .then(response => { return response.json() })
                        .then(images2 => {

                            images2.forEach((image: any) => {

                                // let specificArticleKey = articleKeys[counter];
                                
                                articles[counter]['imgs'] = image['urls'];
                                articles[counter]['id'] = image['id'];
                                
                                counter++

                            })

                            // //@ts-ignore
                            // articlesToLoad = Object.values(articles);

                        })
                        .then(() => {

                            // let lengthOfOne: number = Math.floor(articlesToLoad.length / 3)
                            let lengthOfOne: number = Math.floor(articles.length / 3)
                            
                            //EVERY COLUMN WILL HAVE AT LEAST THIS NUMBER OF ITEMS, FURTHER ON
                            //WE ARE GOING TO FIND IF ANY OF THEM WILL HAVE MORE ITEMS

                            // if (articlesToLoad.length % 3 == 1) {
                            if (articles.length % 3 == 1) {
                            //IN THIS CASE, IN 1 OF THE 3 COLUMNS THERE WILL BE ONE MORE ITEM
                            // THAN IN THE OTHER 2

                                // for (let i = 0; i < articlesToLoad.length; i++) {
                                for (let i = 0; i < articles.length; i++) {
                                    
                                    if (-1 < i && i < lengthOfOne + 1) {

                                        // columnsBlogs['1'][i] = articlesToLoad[i]
                                        columnsBlogs['1'][i] = articles[i]

                                    } else if (lengthOfOne < i && i < (lengthOfOne * 2) + 1) {

                                        // columnsBlogs['2'][i] = articlesToLoad[i]
                                        columnsBlogs['2'][i] = articles[i]

                                    } else {

                                        // columnsBlogs['3'][i] = articlesToLoad[i]
                                        columnsBlogs['3'][i] = articles[i]

                                    }
                                
                                }
                                
                            
                            // } else if (articlesToLoad.length % 3 == 2) {
                            } else if (articles.length % 3 == 2) {
                            //IN THIS CASE, IN 2 OF THE 3 COLUMNS THERE WILL BE ONE MORE ITEM
                            // THAN IN THE FIRST ONE
                            
                                // for (let i = 0; i < articlesToLoad.length; i++) {
                                for (let i = 0; i < articles.length; i++) {
                                    
                                    if (-1 < i && i < lengthOfOne + 1) {

                                        console.log('now 1 column')

                                        // columnsBlogs['1'][i] = articlesToLoad[i]
                                        columnsBlogs['1'][i] = articles[i]

                                    } else if (lengthOfOne < i && i < (lengthOfOne * 2) + 2) {

                                        console.log('now 2 column')
                                        // columnsBlogs['2'][i] = articlesToLoad[i]
                                        columnsBlogs['2'][i] = articles[i]

                                    } else {

                                        console.log('now 3 column')
                                        // columnsBlogs['3'][i] = articlesToLoad[i]
                                        columnsBlogs['3'][i] = articles[i]

                                    }
                                
                                }

                            
                            } else {

                                // for (let i = 0; i < articlesToLoad.length; i++) {
                                for (let i = 0; i < articles.length; i++) {
                                    
                                    if (-1 < i && i < lengthOfOne) {

                                        console.log(i)
                                        console.log('now 1 column')
                                        // columnsBlogs['1'][i] = articlesToLoad[i]
                                        columnsBlogs['1'][i] = articles[i]

                                    } else if (lengthOfOne-1 < i && i < (lengthOfOne * 2)) {

                                        console.log('now 2 column')
                                        // columnsBlogs['2'][i] = articlesToLoad[i]
                                        columnsBlogs['2'][i] = articles[i]

                                    } else {

                                        console.log('now 3 column')
                                        // columnsBlogs['3'][i] = articlesToLoad[i]
                                        columnsBlogs['3'][i] = articles[i]

                                    }
                                
                                }

                            }

                            columnsBlogsFetched.value = columnsBlogs

                        })
                
                })

            fetch(UNSPLASH_ENDPOINT.toString())
                .then(response => { return response.json() })
                .then(images => {

                    let counter = 0

                    images.forEach((image: any) => {

                        if (counter < 4) {

                            gallery[counter]['imgs'] = image['urls'];
                            gallery[counter]['id'] = image['id'];

                            topGallery[counter] = gallery[counter]
                            
                            counter++

                        }
                        
                    })

                })
                .then(() => {

                    topGalleryFetched.value = topGallery
                    topGalleryFetchedMobile.value = {
                        '1': topGallery[1],
                        '2': topGallery[2],
                        '3': topGallery[3]
                    }
                    firstFromGallery.value = {
                        '1': topGallery[0]
                    }

                })
            
            const openArticle = (specificId: string) => {

                let specificArticle = articles.filter((article: any) => {
                    return article.id == specificId 
                })[0]

                localStorage.setItem('currentArticle', JSON.stringify(specificArticle))

                window.location.assign(`/blog/${specificId}`)

            }


            return {

                RoutesProp,
                columnsBlogsFetched,
                topGalleryFetched,
                topGalleryFetchedMobile,
                firstFromGallery,
                openArticle

            }

        },
        methods: {

        }

    })

</script>

<style scoped lang="sass">

    @import '../sass/General/variables.sass'
    @import '../sass/General/fonts.sass'
    html
        overflow-x: hidden

    @media (min-width: $breakpointLaptop)
        #gallery-card-title
            margin-bottom: 20px


</style>