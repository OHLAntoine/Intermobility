import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import TeamView from '@/views/TeamView.vue'
import ExpertisesView from '@/views/ExpertisesView.vue'
import ActionsView from '@/views/ActionsView.vue'
import ArticlesView from '@/views/ArticlesView.vue'
import GenderEquality from '@/views/articles/GenderEquality.vue'
import MobilityHUB from '@/views/articles/MobilityHUB.vue'
import USPNetwork from '@/views/articles/USPNetwork.vue'
import YouthDecarbonizationTech from '@/views/articles/YouthDecarbonizationTech.vue'
import PodcastsView from '@/views/PodcastsView.vue'
import BooksView from '@/views/BooksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/foundingTeam',
          name: 'team',
          component: TeamView,
        },
        {
          path: '/expertises',
          name: 'expertises',
          component: ExpertisesView,
        },
        {
          path: '/actions',
          name: 'actions',
          component: ActionsView,
        },
        {
          path: '/articles',
          name: 'articles',
          component: ArticlesView,
        },
        {
          path: '/GenderEquality',
          name: 'gender equality',
          component: GenderEquality,
        },
        {
          path: '/MobilityHUB',
          name: 'mobility hub',
          component: MobilityHUB,
        },
        {
          path: '/USPNetwork',
          name: 'usp network',
          component: USPNetwork,
        },
        {
          path: '/YouthDecarbonizationTech',
          name: 'youth decarnization tech',
          component: YouthDecarbonizationTech,
        },
        {
          path: '/Podcasts',
          name: 'podcasts',
          component: PodcastsView,
        },
        {
          path: '/Books',
          name: 'books',
          component: BooksView,
        },
      ],
    },
  ],
})

export default router
