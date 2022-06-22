<template>
    
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

            <div class="carousel-inner">

                <div class="carousel-item active" v-for="image in firstFromGallery" :key="image.id" data-bs-interval="10000">

                    <!-- <img :src="image.imgs.regular" class="d-block w-100 carousel-image" alt="..."> -->

                    <div class="carousel-caption d-flex" :style="`background-image: url(${image.imgs.regular})`">

                        <h5>{{ image.name }}</h5>
                        <p>{{ image.text }}</p>

                    </div>

                </div>

                <div class="carousel-item" v-for="image in topGalleryFetchedMobile" :key="image.id" data-bs-interval="2000">

                    <!-- <img :src="image.imgs.regular" class="d-block w-100 carousel-image" alt="..."> -->

                    <div class="carousel-caption d-flex" :style="`background-image: url(${image.imgs.regular})`">

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


</template>

<script lang="ts">

    import { defineComponent, reactive } from '@vue/runtime-core'
    import { RouterLink, RouterView } from 'vue-router'
    import $ from 'jquery'
    import type Route from '../../interfaces/RouteInterface'

    export default defineComponent({

        name: 'Carousel',
        props: {

            firstFromGallery: Object,
            topGalleryFetchedMobile: Object

        },
        setup(props) {

            return {


            }

        }

    })

</script>

<style scoped lang="sass">

    @import '../../sass/General/variables.sass'


</style>