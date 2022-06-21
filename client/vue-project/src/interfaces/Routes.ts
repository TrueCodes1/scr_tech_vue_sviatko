
import type Route from './RouteInterface'
import type Routes from './RoutesInterface'

const homeRoute: Route = {
    
    text: 'HOME',
    path: '/home'

}

const aboutRoute: Route = {

    text: 'ABOUT',
    path: '/'

}

const articlesRoute: Route = {

    text: 'BLOG',
    path: '/articles'

}

const contactRoute: Route = {

    text: 'CONTACT',
    path: '/'

}

const RoutesProp: Routes = {

    homeRoute: homeRoute,
    aboutRoute: aboutRoute,
    articlesRoute: articlesRoute,
    contactRoute: contactRoute

}

console.log(RoutesProp)

export default RoutesProp