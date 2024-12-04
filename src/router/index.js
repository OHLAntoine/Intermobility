import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import TeamView from '@/views/TeamView.vue'
import ExpertisesView from '@/views/ExpertisesView.vue'
import ActionsView from '@/views/ActionsView.vue'
import ArticlesView from '@/views/ArticlesView.vue'

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
      ],
    },
  ],
})

export default router
