
import type Route from './RouteInterface'
import type Routes from './RoutesInterface'

const homeRoute: Route = {
    
    text: 'Home',
    path: '/home'

}

const articlesRoute: Route = {

    text: 'Blog',
    path: '/articles'

}

const specificArticleRoute: Route = {

    text: 'Article',
    path: '/articles/asd'

}

const RoutesProp: Routes = {

    homeRoute: homeRoute,
    articlesRoute: articlesRoute,
    specificArticleRoute: specificArticleRoute

}

console.log(RoutesProp)

export default RoutesProp