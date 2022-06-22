<template>
    
        <div class="top-gallery flex-row align-items-stretch justify-content-stretch">

            <div class="card gallery-card d-flex flex-column align-items-center justify-content-center w-25" v-for="image in topGalleryFetched" :key="image.id">
            
                <!-- <img :src="image.imgs.regular" class="card-img-gallery" alt="..."> -->
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-end pb-5" :style="`background-image: url(${image.imgs.regular})`">
                    <p class="card-type">{{ image.type }}</p>
                    <h5 class="card-title">{{ image.name }}</h5>
                    <a href="#" class="gallery-btn btn btn-outline-light">
                        Read More
                    </a>
                </div>

            </div>

        </div>

</template>

<script lang="ts">

    import { defineComponent, reactive } from '@vue/runtime-core'

    export default defineComponent({

        name: 'TopGallery',
        props: {

            topGalleryFetched: Object

        }

    })

</script>

<style scoped lang="sass">

    @import '../../sass/General/variables.sass'
    @import '../../sass/General/fonts.sass'

    html
        overflow-x: hidden

    .top-gallery
        display: none

    @media (min-width: $breakpointLaptop)
        .top-gallery
            display: flex
            width: 100%
            min-height: 300px
            max-height: 500px
            
        .gallery-card
            min-height: 100%
            width: 100%
            min-height: 450px
            max-height: 450px
            margin: 0 3px

        .card-img-overlay
            color: $primary
            background-position: center
            background-size: cover

        #gallery-card-title
            margin-bottom: 20px

        .gallery-btn
            border-width: 2px
            border-radius: 0
</style>