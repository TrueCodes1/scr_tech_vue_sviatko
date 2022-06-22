
import type Route from './RouteInterface'
import type Routes from './RoutesInterface'

const homeRoute: Route = {
    
    text: 'HOME',
    path: '/home'

}

const aboutRoute: Route = {

    text: 'ABOUT',
    path: '/about'

}

const articlesRoute: Route = {

    text: 'BLOG',
    path: '/blog'

}

const contactRoute: Route = {

    text: 'CONTACT',
    path: '/contact'

}

const RoutesProp: Routes = {

    homeRoute: homeRoute,
    aboutRoute: aboutRoute,
    articlesRoute: articlesRoute,
    contactRoute: contactRoute

}

console.log(RoutesProp)

export default RoutesProp