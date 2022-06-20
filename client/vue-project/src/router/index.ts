import { createRouter, createWebHistory } from 'vue-router'

//@ts-ignore
import HomeView from '../views/HomeView.vue';
//@ts-ignore
import ArticlesView from '../views/ArticlesView.vue';
//@ts-ignore
import SpecificArticleView from '../views/SpecificArticleView.vue';

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
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/articles/:id',
      name: 'specific_article',
      component: SpecificArticleView
    }
  ]
})

export default router
