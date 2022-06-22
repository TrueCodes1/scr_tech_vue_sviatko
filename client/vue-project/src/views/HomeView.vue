<template>
        
  <div>
    
    <Navbar :routes="RoutesProp" />

    <main class="mx-auto d-flex flex-column align-items-center justify-content-start">

        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

            <div class="carousel-inner">

                <div class="carousel-item active" v-for="image in firstFromGallery" :key="image.id" data-bs-interval="10000">

                    <img :src="image.imgs.regular" class="d-block w-100 carousel-image" alt="...">

                    <div class="carousel-caption d-md-block">

                        <h5>{{ image.name }}</h5>
                        <p>{{ image.text }}</p>

                    </div>

                </div>

                <div class="carousel-item" v-for="image in topGalleryFetchedMobile" :key="image.id" data-bs-interval="2000">

                    <img :src="image.imgs.regular" class="d-block w-100 carousel-image" alt="...">

                    <div class="carousel-caption d-md-block">

                        <h5>{{ image.name }}</h5>
                        <p>{{ image.text }}</p>

                    </div>

                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">

                <span class="carousel-control-prev-icon" aria-hidden="true"></span>

            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">

                <span class="carousel-control-next-icon" aria-hidden="true"></span>

            </button>
        </div>

        <div class="top-gallery flex-row align-items-stretch justify-content-stretch">

            <div class="card gallery-card w-25 d-flex flex-column align-items-center justify-content-center" v-for="image in topGalleryFetched" :key="image.id">
            
                <img :src="image.imgs.regular" class="card-img" alt="...">
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-end pb-5">
                    <p class="card-type">{{ image.type }}</p>
                    <h5 class="card-title">{{ image.name }}</h5>
                    <a href="#" class="gallery-btn btn btn-outline-light">
                        Read More
                    </a>
                </div>

            </div>

        </div>

        <div class="articles-list mx-auto d-flex">
    
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

        name: 'HomeView',
        components: {

            Navbar

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
            


            return {

                RoutesProp,
                columnsBlogsFetched,
                topGalleryFetched,
                topGalleryFetchedMobile,
                firstFromGallery

            }

        }

    })

</script>

<style scoped lang="sass">

    @import '../sass/General/variables.sass'

    html
        overflow-x: hidden

    .carousel
        display: none
    
    .top-gallery
        display: none
    
    @media (max-width: $breakpointLaptop - 1px) 
        
        .carousel
            display: flex
        .carousel,
        .carousel-item
            visibility: visible  
            min-height: 300px
            max-height: 300px
            width: 100vw
            overflow: hidden

        .carousel-image
            min-width: 100vw
            max-wdith: 100vw
        
        .carousel-caption
            position: absolute
            padding: 10px
            bottom: 0
            left: 0
            width: 100%
            color: #fff

        .carousel-caption h5 
            font-weight: 600
            font-size: 26px
        
        .carousel-caption p
            font-weight: 400
            font-size: 12px
            line-height: 1.2em
        
        .articles-list
            flex-direction: column 
            align-items: center 
            justify-content: flex-start
        

    @media (min-width: $breakpointLaptop)
        .top-gallery
            display: flex
            
        .articles-list
            flex-direction: row 
            align-items: flex-start 
            justify-content: stretch
        

</style>