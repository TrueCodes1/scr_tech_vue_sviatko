<template>

    <main class="mx-auto w-100">

        <div class="top-header d-flex flex-row align-items-center justify-content-start">{{ currentArticle?.name }}</div>

        <div class="blog mx-auto">
            
            <div class="img-wrapper d-flex align-items-center justify-content-center">
        
                <img :src="currentArticle?.imgs.regular" alt="" class="top-img w-100">
            
            </div>

            <p class="body-text">{{ currentArticle?.longText }}</p>

            <p class="body-text">{{ currentArticle?.longText }}</p>

            <div class="highlighted">

                <p class="body-text highlighted-text"><i>{{ currentArticle?.longText.substring(0, currentArticle?.longText.length / 2) }}</i></p>

            </div>
            
            <div class="img-wrapper d-flex align-items-center justify-content-center">
        
                <img :src="currentArticle?.imgs.regular" alt="" class="top-img w-100">
            
            </div>

            <p class="body-text">{{ currentArticle?.longText }}</p>

        </div>

    </main>

</template>

<script lang="ts">

    import { defineComponent, reactive } from '@vue/runtime-core'

    export default defineComponent({

        name: 'Article',
        props: {

            currentArticle: Object,

        }

    })

</script>

<style scoped lang="sass">

    @import '../../sass/General/variables.sass'
    @import '../../sass/General/fonts.sass'

    @media (max-width: $breakpointMobile - 1px)

        .top-header 
            min-height: 150px
            max-height: 150px
            margin-top: 100px
            padding-left: 10%
            font-size: $giant
            font-weight: 600
            color: $secondary
            background: $tertiary

        .blog
            min-width: 85%
            max-width: 85%
            margin-top: 40px

        .img-wrapper
            max-height: 400px
            overflow: hidden
            margin-top: 20px

        p
            text-align: justify
            margin: 20px 0
            font-size: $medium
            opacity: .75
        
        .highlighted
            background: $tertiary
        
        .highlighted-text
            padding: 20px
            font-weight: 500
            opacity: 1


    @media (min-width: $breakpointMobile) and (max-width: $breakpointTablet - 1px)

        .top-header 
            min-height: 150px
            max-height: 150px
            margin-top: 100px
            padding-left: 10%
            font-size: $giant
            font-weight: 600
            color: $secondary
            background: $tertiary

        .blog
            min-width: 85%
            max-width: 85%
            margin-top: 40px

        .img-wrapper
            max-height: 400px
            overflow: hidden
            margin-top: 20px

        p
            text-align: justify
            margin: 20px 0
            font-size: $medium
            opacity: .75
        
        .highlighted
            background: $tertiary
        
        .highlighted-text
            padding: 20px
            font-weight: 500
            opacity: 1

    @media (min-width: $breakpointTablet) and (max-width: $breakpointLaptop - 1px)

        .top-header 
            min-height: 150px
            max-height: 150px
            margin-top: 100px
            padding-left: 10%
            font-size: $giant
            font-weight: 600
            color: $secondary
            background: $tertiary

        .blog
            min-width: 75%
            max-width: 75%
            margin-top: 40px

        .img-wrapper
            max-height: 400px
            overflow: hidden
            margin-top: 20px

        p
            text-align: justify
            margin: 20px 0
            font-size: $medium
            opacity: .75
        
        .highlighted
            background: $tertiary
        
        .highlighted-text
            padding: 20px
            font-weight: 500
            opacity: 1

    @media (min-width: $breakpointLaptop) 

        .top-header 
            min-height: 250px
            max-height: 250px
            padding-left: 20%
            font-size: $ultra
            font-weight: 600
            color: $secondary
            background: $tertiary
            margin-top: 120px

        .blog
            min-width: 50%
            max-width: 50%
            margin-top: 40px

        .img-wrapper
            max-height: 400px
            overflow: hidden
            margin-top: 20px

        p
            text-align: justify
            margin: 20px 0
            font-size: $medium
            opacity: .75
        
        .highlighted
            background: $tertiary
        
        .highlighted-text
            padding: 20px
            font-weight: 500
            opacity: 1


</style>