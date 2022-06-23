<template>
    
        <div class="top-gallery flex-row align-items-stretch justify-content-stretch">

            <!-- FOR EACH IMAGE TO BE USED IN THE TOP GALLERY SPECIFIC CARD IS CREATED  -->
            <div class="card gallery-card d-flex flex-column align-items-center justify-content-center w-25" v-for="image in topGalleryFetched" :key="image.id">
            
                <!-- THERE IS AN OVERLAY WHICH HAS THE SPECIFIC IMAGE AS A BACKGROUND IMAGE (TO MAKE
                IT RESPONSIVE) AND THERE ARE TYPE, HEADING (NAME) AND ONCLICK FUNCTION TO OPEN
                THE ARTICLE WITH ITS "ID" AS THE ONLY ARGUMENT -->
                <div class="card-img-overlay d-flex flex-column align-items-center justify-content-end pb-5" :style="`background-image: url(${image.imgs.regular})`">
                    <p class="card-type">{{ image.type }}</p>
                    <h5 class="card-title">{{ image.name }}</h5>
                    <a v-on:click="openArticle?.(image?.id)" class="gallery-btn btn btn-outline-light">
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

            topGalleryFetched: Object,
            openArticle: Function

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
            margin-top: 120px
            
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