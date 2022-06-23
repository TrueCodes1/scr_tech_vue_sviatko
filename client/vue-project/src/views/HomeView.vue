<template>
        
  <div>
    
    <Navbar :routes="RoutesProp" />

    <main class="mx-auto d-flex flex-column align-items-center justify-content-start">

        THE HOME VIEW CONSISTS OF COMPONENTS "CAROUSEL", "TOP GALLERY" AND "ARTICLES"
        <Carousel :firstFromGallery="firstFromGallery" :topGalleryFetchedMobile="topGalleryFetchedMobile" />

        <TopGallery :topGalleryFetched="topGalleryFetched" :openArticle="openArticle" />

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
    
    // IMPORTING FUNCTIONS
    //@ts-ignore
    import createArticles from '../functions/createArticles'

    // IMPORTING OBJECTS
    import RoutesProp from '../interfaces/Routes'

    // IMPORTING JSONS
    //@ts-ignore
    import articles from '../jsons/articles.json'
    //@ts-ignore
    import gallery from '../jsons/gallery.json'

    export default defineComponent({

        name: 'HomeView',
        components: {

            Navbar,
            Carousel,
            TopGallery,
            Articles

        },
        setup() {

            // DEFINING REFS FOR ALL THE NECCESSARY PROPERTIES SO THAT
            // THE TEMPLATE UPDATES ONE THEY HAVE THE VALU ASSIGNED
            const columnsBlogsFetched: any = ref(null)
            const topGalleryFetched: any = ref(null)
            const topGalleryFetchedMobile: any = ref(null)
            const firstFromGallery: any = ref(null)

            // FUNCTIONALITY OF FETCHING ALL THE NECCESSARY DATA FROM HERE ON
            //
            //
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
            
            const UNSPLASH_CLIENT_ID: String = '2Bwn0PvYJW2Czd2YggvBcL5ALqmGFdWYr0nVVyWxBZE'
            const UNSPLASH_ENDPOINT = new URL(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_CLIENT_ID}`)

            let counter = 0;

            // FETCHING RANDOM IMAGES FROM UNSPLASH FOR THE FIRST TIME
            // IN HERE (WE NEED 20 OF THEM SO WE WILL FETCH ONE MORE TIME)
            fetch(UNSPLASH_ENDPOINT.toString())
                .then(response => { return response.json() })
                .then(images => {

                    // FIRST 10 ARTICLES HAVE ASSIGNED AN IMAGE
                    // TO AEACH OF THEM IN THIS LOOP
                    images.forEach((image: any) => {
                        
                        articles[counter]['imgs'] = image['urls'];
                        articles[counter]['id'] = image['id'];
                        
                        counter++

                    })

                })
                .then(() => {
                    
                    // ANOTHER UNSPLASH FETCH TAKING PLACE IN HERE
                    fetch(UNSPLASH_ENDPOINT.toString())
                        .then(response => { return response.json() })
                        .then(images2 => {

                            // ANOTHER 10 ARTICLES HAVE ASSIGNED AN IMAGE
                            // TO AEACH OF THEM IN THIS LOOP
                            images2.forEach((image: any) => {
                                
                                articles[counter]['imgs'] = image['urls'];
                                articles[counter]['id'] = image['id'];
                                
                                counter++

                            })

                        })
                        .then(() => {

                            // WE DIVIDE ALL 20 ARTICLES INTO 3 "SAME SIZE" PARTS
                            // AND THEN WE WILL FIND OUT WHAT IS THE REST (0, 1 OR 2)
                            let lengthOfOne: number = Math.floor(articles.length / 3)
                            

                            if (articles.length % 3 == 1) {
                            //IN THIS CASE, IN 1 OF THE 3 COLUMNS THERE WILL BE ONE MORE ITEM
                            // THAN IN THE OTHER 2

                                for (let i = 0; i < articles.length; i++) {
                                    
                                    // THE FIRST THIRD OF THE ITEMS IS ASSIGNED TO THE FIRST COLUMN
                                    if (-1 < i && i < lengthOfOne + 1) {

                                        columnsBlogs['1'][i] = articles[i]

                                    // THE SECOND THIRD OF THE ITEMS IS ASSIGNED TO THE FIRST COLUMN
                                    } else if (lengthOfOne < i && i < (lengthOfOne * 2) + 1) {

                                        columnsBlogs['2'][i] = articles[i]

                                    // THE LAST THIRD OF THE ITEMS IS ASSIGNED TO THE FIRST COLUMN
                                    } else {

                                        columnsBlogs['3'][i] = articles[i]

                                    }
                                
                                }
                                
                            } else if (articles.length % 3 == 2) {
                            //IN THIS CASE, IN 2 OF THE 3 COLUMNS THERE WILL BE ONE MORE ITEM
                            // THAN IN THE REMAINING ONE
                            
                                for (let i = 0; i < articles.length; i++) {
                                    
                                    // THE FIRST THIRD OF THE ITEMS IS ASSIGNED TO THE FIRST COLUMN
                                    if (-1 < i && i < lengthOfOne + 1) {

                                        columnsBlogs['1'][i] = articles[i]

                                    // THE SECOND THIRD OF THE ITEMS IS ASSIGNED TO THE FIRST COLUMN
                                    } else if (lengthOfOne < i && i < (lengthOfOne * 2) + 2) {

                                        columnsBlogs['2'][i] = articles[i]

                                    // THE LAST THIRD OF THE ITEMS IS ASSIGNED TO THE FIRST COLUMN
                                    } else {

                                        columnsBlogs['3'][i] = articles[i]

                                    }
                                
                                }

                            
                            } else {
                                
                                // IN THIS CASE, THERE WILL BE SAME NUMBER OF ITEMS IN EACH OF THE COLUMNS

                                for (let i = 0; i < articles.length; i++) {
                                    
                                    // THE FIRST THIRD OF THE ITEMS IS ASSIGNED TO THE FIRST COLUMN
                                    if (-1 < i && i < lengthOfOne) {

                                        columnsBlogs['1'][i] = articles[i]

                                    // THE SECOND THIRD OF THE ITEMS IS ASSIGNED TO THE FIRST COLUMN
                                    } else if (lengthOfOne-1 < i && i < (lengthOfOne * 2)) {

                                        columnsBlogs['2'][i] = articles[i]

                                    // THE LAST THIRD OF THE ITEMS IS ASSIGNED TO THE FIRST COLUMN
                                    } else {

                                        columnsBlogs['3'][i] = articles[i]

                                    }
                                
                                }

                            }

                            // IN THE LOCAL STORAGE, ALL THE ARTICLES WITH ALL THE INFORMATION
                            // ARE SAVED TO BE ACCESSED WHEN ANY OF THEM IS OPENED
                            localStorage.setItem('articles', JSON.stringify(articles))
                            // THE PROP "COLUMNS BLOGS FETCHED" IS NOW ASSIGNED A VALUE
                            // AND THE TEMPLATE UPDATES ACCORDINGLY
                            columnsBlogsFetched.value = columnsBlogs

                        })
                
                })

            // THE 4 IMAGES FOR THE TOP GALLERY IS FETCHED SAME AS FOR THE ARTICLES ABOVE
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

            // FUNCTION TO OPEN A SPECIFIC ARTICLE
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