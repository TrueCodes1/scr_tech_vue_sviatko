<template>
        
  <div>
    
    <Navbar :routes="RoutesProp" />

    <main class="mx-auto d-flex flex-column align-items-center justify-content-start">

        <div class="top-gallery d-flex flex-row align-items-stretch justify-content-stretch">

            <div class="card gallery-card w-25 d-flex flex-column align-items-center justify-content-center" v-for="image in topGalleryFetched" :key="image.id">
            
                <img :src="image.imgs.regular" class="card-img" alt="...">
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-end pb-5">
                    <p class="card-type">{{ image.type }}</p>
                    <h5 class="card-title">{{ image.name }}}</h5>
                    <a href="#" class="gallery-btn btn btn-outline-light">
                        Read More
                    </a>
                </div>

            </div>

        </div>

        <div class="articles-list mx-auto d-flex felx-row align-items-start justify-content-stretch">
    
            <div class="column" v-for="column in columnsBlogsFetched" :key="column"> 
                
                <div class="card" v-for="blog in column" :key="blog.id"> 
                    <img class="card-img-top" alt="" :src="blog.imgs.regular">
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
                        <a href="#" class="btn">
                            Read More
                        </a>
                    </div>
                </div>
                
            </div>
            
        </div>

    </main>

  </div>

</template>

<script lang="ts">

    import { defineComponent, onMounted, reactive, ref, computed } from 'vue'
    import Navbar from '../components/General/Navbar.vue'
    import RoutesProp from '../interfaces/Routes'
    import axios, { AxiosError } from 'axios'
    const UNSPLASH_CLIENT_ID: String = '2Bwn0PvYJW2Czd2YggvBcL5ALqmGFdWYr0nVVyWxBZE'
    //@ts-ignore
    import articles from '../jsons/articles.json'
    //@ts-ignore
    import gallery from '../jsons/gallery.json'

    export default defineComponent({
        name: 'ArticlesView',
        components: {

            Navbar

        },
        setup() {

            const columnsBlogsFetched: any = ref(null)
            const topGalleryFetched: any = ref(null)

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

                })
            


            return {

                RoutesProp,
                columnsBlogsFetched,
                topGalleryFetched

            }

        }
    
    })

</script>

<style lang="sass">

    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500&display=swap')

    $primaryColor: purple
   
    *
        border-radius: 0
    
    main
        width: 100%
        margin-top: 130px
        font-family: 'Poppins'
        text-align: center

    .top-gallery,
    .gallery-card,
    .card-img
        min-height: 500px
        max-height: 500px

    .gallery-card
        min-height: 100%

    .card-img 
        padding: 5px

    .card-img-overlay
        color: #fff

    #gallery-card-title
        margin-bottom: 20px

    .gallery-btn
        border-width: 2px
        border-radius: 0

    .articles-list
        width: 65%
        margin-top: 60px

    .column 
        flex: 33.33%
        max-width: 33.33%
        padding: 5px
        border-radius: 0
        
    .card-img-top
        display: block
        width: 100%
        height: auto
        padding: 3px
        border-radius: 0
    
    .card
        height: fit-content
        border: none
        margin-bottom: 10px
        border-radius: 0

    .card-type,
    .card-text,
    .btn
        font-weight: 400
        opacity: .5
        font-size: 12px

    .card-title
        font-weight: 500
        font-size: 26px
        margin-top: -10px

    .line 
        border-bottom: 2px solid #000
        opacity: .25
        min-width: 25%
        max-width: 25%
        margin: 10px 0 20px 0

    .card-text
        line-height: 1.3em


</style>

