<template>
        
  <div>
    
    <Navbar :routes="RoutesProp" />

    <main class="articles-list mx-auto d-flex felx-row align-items-start justify-content-stretch">

        <div class="column" v-for="column in columnsBlogsFetched" :key="column"> 
            
            <div class="card" v-for="blog in column" :key="blog.id"> 
                <img class="card-img-top" alt="" :src="blog.imgs.regular">
                <div class="card-body">
                    <h5 class="card-title">
                        {{ blog.name }}
                    </h5>
                    <p class="card-text">
                        {{ blog.text }}
                    </p>
                    <a href="#" class="btn btn-primary">
                        read more
                    </a>
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
    import loadBlog from '../functions/LoadBlog'
    //@ts-ignore
    import articles from '../jsons/articles.json'

    export default defineComponent({
        name: 'ArticlesView',
        components: {

            Navbar

        },
        setup() {

            const columnsBlogsFetched: any = ref(null)

            let columnsBlogs: any = {
                '1': {},
                '2': {},
                '3': {}
            }
            
            let UNSPLASH_ENDPOINT = new URL(`https://api.unsplash.com/photos/?client_id=${UNSPLASH_CLIENT_ID}`)

            let counter = 0;
            let articleKeys = Object.keys(articles);

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
                        .then(images => {

                            images.forEach((image: any) => {

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

            return {

                RoutesProp,
                columnsBlogsFetched

            }

        }
    
    })

    const fetchData = async () => {
        
                const articles: any = await ( await axios.get('http://localhost:3000/src/jsons/articles.json')).data
                console.log('articles' + articles)
                return {
                    '1': {
                        '1': {
                            'name': 'sasfaf',
                            'text': 'asdasf'
                        },
                        '2': {
                            'name': 'sasfaf',
                            'text': 'asdasf'
                        }
                    }
                }

    }

</script>

<style lang="sass">

    $primaryColor: purple

    main
        width: 60%
        margin-top: 130px

    .column 
        flex: 33.33%
        max-width: 33.33%
        padding: 1px
        
    .image
        display: block
        width: 100%
        height: auto
        padding: 3px
    
    .card
        height: fit-content

</style>

