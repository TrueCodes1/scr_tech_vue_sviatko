import { createRouter, createWebHistory } from 'vue-router'

//@ts-ignore
import HomeView from '../views/HomeView.vue';
//@ts-ignore
import ArticlesView from '../views/ArticlesView.vue';
//@ts-ignore
import SpecificArticleView from '../views/SpecificArticleView.vue';
//@ts-ignore
import ContactView from '../views/ContactView.vue';
//@ts-ignore
import AboutView from '../views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/blog/:id',
      name: 'specific_article',
      component: SpecificArticleView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }

  ]
})

export default router
