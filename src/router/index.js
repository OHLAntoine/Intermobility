import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/views/layouts/DefaultLayout.vue'
import TeamView from '@/views/TeamView.vue'
import ExpertisesView from '@/views/ExpertisesView.vue'
import ActionsView from '@/views/ActionsView.vue'
import ArticlesView from '@/views/ArticlesView.vue'
import GenderEquality from '@/views/articles/GenderEqualityView.vue'
import MobilityHUB from '@/views/articles/MobilityHUBView.vue'
import USPNetwork from '@/views/articles/USPNetworkView.vue'
import YouthDecarbonizationTech from '@/views/articles/YouthDecarbonizationTechView.vue'
import PodcastsView from '@/views/PodcastsView.vue'
import BooksView from '@/views/BooksView.vue'
import ContactView from '@/views/ContactView.vue'
import WebinarsView from '@/views/engagements/WebinarsView.vue'
import ConferencesView from '@/views/engagements/ConferencesView.vue'
import WhitePapersView from '@/views/engagements/WhitePapersView.vue'
import CercleCimeView from '@/views/engagements/CercleCimeView.vue'
import PlugAndPlayView from '@/views/engagements/PlugAndPlayView.vue'

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
          meta: {
            title: 'Intermobility',
            description:
              'InterMobility, the new and free european network dedicated to mobility and transportation in Europe.',
          },
        },
        {
          path: '/foundingTeam',
          name: 'team',
          component: TeamView,
          meta: {
            title: 'Intermobility - Founding team',
            description:
              "Discover the passionate leaders and innovators behind InterMobility. Learn about our founding team's expertise in transportation, mobility, and sustainable practices, driving change for a better future.",
          },
        },
        {
          path: '/expertises',
          name: 'expertises',
          component: ExpertisesView,
          meta: {
            title: 'Intermobility - Expertises',
            description:
              'Discover our expertises in transportation, mobility, and sustainable practices, driving change for a better future.',
          },
        },
        {
          path: '/webinars',
          name: 'webinars',
          component: WebinarsView,
          meta: {
            title: 'Intermobility - Webinars',
            description:
              'Discover us during our webinars about mobility, transportation and Smart Cities',
          },
        },
        {
          path: '/conferences',
          name: 'conferences',
          component: ConferencesView,
          meta: {
            title: 'Intermobility - Conferences',
            description:
              'Discover us during our conferences about mobility, transportation and Smart Cities',
          },
        },
        {
          path: '/whitePapers',
          name: 'whitePapers',
          component: WhitePapersView,
          meta: {
            title: 'Intermobility - White Papers',
            description:
              'Discover our white papers about mobility, transportation and Smart Cities',
          },
        },
        {
          path: '/cercleCime',
          name: 'cercleCime',
          component: CercleCimeView,
          meta: {
            title: 'Intermobility - Cercle CiME',
            description: 'Discover our public affairs with Cercle CiME',
          },
        },
        {
          path: '/plugAndPlay',
          name: 'plugAndPlay',
          component: PlugAndPlayView,
          meta: {
            title: 'Intermobility - Plug & Play',
            description: 'Discover the innovation inside the Smart Cities with Plug & Play',
          },
        },
        {
          path: '/actions',
          name: 'actions',
          component: ActionsView,
          meta: {
            title: 'Intermobility - Actions',
            description:
              "Experience mobility and innovation with InterMobility's tailored support. Explore expert calls, consulting projects, and specialized events to empower your business and drive success in transportation and mobility.",
          },
        },
        {
          path: '/articles',
          name: 'articles',
          component: ArticlesView,
          meta: {
            title: 'Intermobility - Articles',
            description:
              'Discover our articles about transportation, mobility, sustainable practices and gender equality driving change for a better future.',
          },
        },
        {
          path: '/GenderEquality',
          name: 'gender equality',
          component: GenderEquality,
          meta: {
            title: 'Intermobility - Gender equality',
            description: 'Our article about inclusiveness of women in mobility offers',
          },
        },
        {
          path: '/MobilityHUB',
          name: 'mobility hub',
          component: MobilityHUB,
          meta: {
            title: 'Intermobility - Mobility HUB',
            description: 'Our article about HUB in mobility',
          },
        },
        {
          path: '/USPNetwork',
          name: 'usp network',
          component: USPNetwork,
          meta: {
            title: 'Intermobility - USP Network',
            description: 'Our article about inclusiveness the USP network',
          },
        },
        {
          path: '/YouthDecarbonizationTech',
          name: 'youth decarnization tech',
          component: YouthDecarbonizationTech,
          meta: {
            title: 'Intermobility - Youth, Decarbonization & Technologies',
            description: 'Our article about inclusiveness of the youth in mobility',
          },
        },
        {
          path: '/Podcasts',
          name: 'podcasts',
          component: PodcastsView,
          meta: {
            title: 'Intermobility - Podcasts',
            description:
              'Discover podcasts about transportation, mobility, sustainable practices and gender equality driving change for a better future.',
          },
        },
        {
          path: '/Books',
          name: 'books',
          component: BooksView,
          meta: {
            title: 'Intermobility - Books',
            description:
              'Discover our books about transportation, mobility, sustainable practices and gender equality driving change for a better future.',
          },
        },
        {
          path: '/ContactUs',
          name: 'contact',
          component: ContactView,
          meta: {
            title: 'Intermobility - Contact us',
            description:
              "Let's contact our experts in transportation, mobility, and sustainable practices.",
          },
        },
        { path: '/:pathMatch(.*)*', component: HomeView },
      ],
    },
  ],
})

router.beforeEach((to) => {
  const { title, description } = to.meta
  const defaultTitle = 'Intermobility'
  const defaultDescription =
    'InterMobility, the new and free european network dedicated to mobility and transportation in Europe.'

  document.title = title || defaultTitle

  const descriptionElement = document.querySelector('head meta[name="description"]')

  descriptionElement.setAttribute('content', description || defaultDescription)
})

export default router
