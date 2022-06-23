<template>
    
        <!-- THE WHOLE CAROUSEL -->
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">

            <div class="carousel-inner">

                <!-- FOR THE VERY FIRST IMAGE FROM THE WHOLE GALLERY, AN ITEM WITH CLASS
                "ACTIVE" IS CREATED  -->
                <div class="carousel-item active" v-for="image in firstFromGallery" :key="image.id" data-bs-interval="10000">

                    <div class="carousel-caption d-flex" :style="`background-image: url(${image.imgs.regular})`">

                        <h5>{{ image.name }}</h5>
                        <p>{{ image.text }}</p>

                    </div>

                </div>

                <!-- FOR ALL THE REST IMAGES, SPECIFIC ITEM IS CREATED BUT THIS TIME WITHOUT CLASS "ACTIVE" -->
                <div class="carousel-item" v-for="image in topGalleryFetchedMobile" :key="image.id" data-bs-interval="2000">

                    <!-- <img :src="image.imgs.regular" class="d-block w-100 carousel-image" alt="..."> -->

                    <!-- EACH ITEM HAS A CAPTION SECTION WHICH HAS THE IMAGE AS A BACKGROUND IMAGE (TO MAKE IT RESPONSIVE) 
                    WITH ITS HEADING (NAME) AND TEXT -->
                    <div class="carousel-caption d-flex" :style="`background-image: url(${image.imgs.regular})`">

                        <h5>{{ image.name }}</h5>
                        <p>{{ image.text }}</p>

                    </div>

                </div>

            </div>

            <!-- BUTTONS TO CONTROL THE CAROUSEL, BUT IS WORKS FINE EVEN WITHOUT THEM 
            AS THERE IS AN INTERVAL IN WHICH THE SLIDES MOVE ON -->
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

    export default defineComponent({

        name: 'Carousel',
        props: {

            firstFromGallery: Object,
            topGalleryFetchedMobile: Object

        }

    })

</script>

<style scoped lang="sass">

    @import '../../sass/General/variables.sass'
    @import '../../sass/General/fonts.sass'

    html
        overflow-x: hidden

    .carousel
        display: none
        margin-top: 100px
    
    .carousel-caption p
        max-width: 500px

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

        .carousel-caption
            position: absolute
            padding: 10px
            bottom: 0
            left: 0
            width: 100%
            height: 100%
            color: $primary
            background-position: center
            background-size: cover
            display: flex
            flex-direction: column
            align-items: center
            justify-content: flex-end

        .carousel-caption h5 
            font-weight: 600
            font-size: $giant
        
        .carousel-caption p
            font-weight: 400
            font-size: $small
            line-height: 1.2em
        

    @media (min-width: $breakpointTablet)
        .carousel-caption
            position: absolute
            padding: 10px
            bottom: 0
            left: 0
            width: 100%
            height: 100%
            color: $primary
            background-position: center
            background-size: cover
            display: flex
            flex-direction: column
            align-items: center
            justify-content: flex-end
        

</style>