import { defineStore } from 'pinia'

import DownloadReport from '@/assets/downloads/Intermobility-White-Paper-2024-Acting-today-for-more-inclusion,diversity-and-equity-in-mobility-and-transportation.pdf'
import ConferenceImage from '@/assets/images/engagements/event1.jpg'
import WebinarImage from '@/assets/images/engagements/conferenceramu1.jpg'
import ReportImage from '@/assets/images/engagements/report&whitepapers.png'
import CimeImage from '@/assets/images/engagements/cercleCime.png'
import PlugAndPlayImage from '@/assets/images/engagements/PlugAndPlay2.jpg'
import CitiesFirstLogo from '@/assets/images/podcasts/the_citiesfirst_podcast_logo.jpg'
import MobilityPioneerLogo from '@/assets/images/podcasts/MobilityPioneer.png'
import KennethPicture from '@/assets/images/team/kenneth1.jpg'
import LukasPicture from '@/assets/images/team/lukas1.jpg'
import RamuPicture from '@/assets/images/team/ramu1.jpg'
import FrancoisPicture from '@/assets/images/team/fh2.jpg'
import ScottPicture from '@/assets/images/team/ScottShepard.png'
import DagmaraPicture from '@/assets/images/team/dagmara.jpg'
import AmbassadorsLogo from '@/assets/images/experts/supports/ambassadors.jpg'
import FemmesEnMouvementLogo from '@/assets/images/experts/supports/femmesenmouvement.png'
import PolisLogo from '@/assets/images/experts/supports/polis.png'
import MobiliansLogo from '@/assets/images/experts/supports/mobilians.png'
import GenderEqualityPicture from '@/assets/images/articles/egalite_des_genres.jpg'
import MobilityHUBPicture from '@/assets/images/articles/Hubs_de_mobilité.jpg'
import USPNetworkPicture from '@/assets/images/articles/USP_du_reseau.jpeg'
import DecarbonizationPicture from '@/assets/images/articles/decarbonation.jpg'
import FeminismeBook from '@/assets/images/articles/Reconstruire-le-feminisme.jpg'

export const useMobilityStore = defineStore('mobility', {
  state: () => ({
    reportDownload: {
      name: 'Intermobility White Paper 2024 Acting today for more inclusion, diversity and equity in mobility and transportation.pdf',
      url: DownloadReport,
    },
    slidesCarousel: [
      {
        name: 'Webinars',
        url: WebinarImage,
        alt: 'Inspirational speakers at an InterMobility conference',
      },
      {
        name: 'Conferences',
        url: ConferenceImage,
        alt: 'Engaged participants at an InterMobility event',
      },
      {
        name: 'Reports & white papers',
        url: ReportImage,
        alt: "Comprehensive collection of InterMobility's white papers and reports, offering in-depth analyses and expert insights on mobility and transportation trends.",
      },
      {
        name: 'Cercle CiME',
        url: CimeImage,
        alt: 'Public Affairs with Cercle CiME',
      },
      {
        name: 'Plug & Play',
        url: PlugAndPlayImage,
        alt: 'Innovation inside the Smart Cities with Plug & Play',
      },
    ],
    currentSlide: 0,
    slideEffect: '',
    slideInterval: null,
    podcasts: [
      {
        image: CitiesFirstLogo,
        name: '#CitiesFirst Podcast',
        url: 'https://open.spotify.com/show/0sazSrcIOtRJCniMv03pJr?si=a417a40a40344230&nd=1&dlsi=ef4e0b471881458f',
      },
      {
        image: MobilityPioneerLogo,
        name: 'Mobility Pioneer Podcast',
        url: 'https://open.spotify.com/show/6peyf592JmgoZxXWRKwOkM?si=24c51dc91dd447b7&nd=1&dlsi=becee6470a6c4b6f',
      },
    ],
    podcastPlayers: [
      {
        url: 'https://open.spotify.com/embed/show/6peyf592JmgoZxXWRKwOkM?utm_source=generator&theme=0',
        name: 'Mobility Pioneer',
        description:
          "Mobility Pioneer est un podcast dédiés aux plus belles histoires de la mobilité : interviews, reportage et documentaires pour que les experts comme les curieux puissent découvrir l'envers du décor de la mobilité. Success stories, tendances et entreprises innovantes sont au menu de ce podcast, présenté par François, un des co-fondateurs d'Intermobility et entrepreneur dans le transport et la mobilité depuis plusieurs années. Mobility Pioneer is a podcast dedicated to key stories of mobility: interviews, reports and documentaries led by François, Intermobility co-founder.",
      },
      {
        url: 'https://open.spotify.com/embed/show/73bwBTg8JAP7yxCZ52E6qy?utm_source=generator&theme=0',
        name: 'Zipidi Doo-Dah',
        description:
          'Zipidi Doo-Dahs discuss issues and opportunities in new mobility. We guide decision-makers to better understand and harness the potential of micromobility while developing robust policies and frameworks that promote sustainability, safety, accessibility, and seamless integration into existing transport strategies. Zipidi is a specialist micromobility consultancy with a comprehensive understanding of the entire micromobility landscape, including insurance.',
      },
      {
        url: 'https://open.spotify.com/embed/show/0sazSrcIOtRJCniMv03pJr?utm_source=generator&theme=0',
        name: 'The #CitiesFirst Podcast',
        description:
          'New Podcast Series hosted by Scott Shepard, and focused on the intersection of AI, Urbanism, Active Transportation, Shared Mobility & Decarbonization',
      },
    ],
    youtubePlayers: [
      {
        url: 'https://www.youtube.com/embed/dAOC7TpnKnk?si=jn3I9VtV3R8v7igf',
        title: 'Mobility Talks - Lukas Neckermann',
      },
      {
        url: 'https://www.youtube.com/embed/s3dsULWsC_0?si=yE0aWZSQOfRVIIwL',
        title: 'Ramu Nair - How INVERS is making keyless car-sharing more secure',
      },
    ],
    team: [
      {
        image: KennethPicture,
        name: 'Kenneth Jensen',
        title: 'CEO, Forsvaret',
        description:
          "When he's not working, you might find him exploring the world as a solo eco-friendly backpacker. However, within the professional realm, Kenneth is widely regarded as a senior leader with a remarkable track record in precise planning, flawless execution, and valuable feedback derived from his military background. Kenneth's expertise lies in daily operations, the mechanics of keeping things running smoothly, and the strategies needed to stay ahead in an ever-evolving landscape. His ability to set high standards, even under physical and psychological pressure, is a testament to his commitment.",
      },
      {
        image: LukasPicture,
        name: 'Lukas Neckermann',
        title: 'Chief Executive Officer, Neckermann Strategic Advisor',
        description:
          'Lukas Neckermann, Chief Executive Officer at Neckermann Strategic Advisor, has been at the forefront of the #mobilityrevolution for over a decade. He is a distinguished strategist, advisor, researcher, and sought-after keynote speaker specializing in Smart Cities and Smart Mobility. Lukas introduced pivotal industries to "The Mobility Revolution" with his groundbreaking book in 2014. Subsequently, he authored three more influential works: "Corporate Mobility Breakthrough 2020," "Smart Cities, Smart Mobility," and "Being Driven." He is co-initiator of PAVE Europe and Intermobility. Lukas is the mobility guide in Intermobility.',
      },
      {
        image: RamuPicture,
        name: 'Ramu Nair',
        title: 'Head of Sales, Invers GmbH',
        description:
          'Ramu Nair, Head of Sales at INVERS GmbH, is an accomplished sales leader and a prominent figure in the business development field. He plays a pivotal role at INVERS, the global market leader in shared mobility technology, with a compelling mission: to assist entrepreneurs and organizations in launching and scaling profitable and sustainable mobility services using innovative and dependable software and hardware solutions. Ramu is also responsible for the management and expansion of strategic partnerships with key stakeholders in the ecosystem. His passion lies in the future of mobility and its transformative potential to reshape how we live, work, and travel.',
      },
      {
        image: FrancoisPicture,
        name: 'François Hoehlinger',
        title: 'Director, Plug & Play',
        description:
          'François brings a wealth of experience and a deep-rooted network within the mobility and transportation industry, providing him with a keen understanding of market trends, critical challenges, and effective strategies. He also brings a key emphasis on diversity and inclusion, for which he published a report in 2024, presented to the CEO of DG MOVE (European Commission). François is a valued member of the European Commission Ambassador Program for Diversity and has received several awards. He launched a mobility & transportation dedicated think-tank in France called "Cercle CiME" with Erwann Le Page.',
      },
      {
        image: ScottPicture,
        name: 'Scott Shepard',
        title: 'Founder, The #CitiesFirstAdvisors Podcast',
        description:
          'Scott Shepard is an award-winning urban planner, author, educator, speaker & thought leader, Scott Shepard has his finger on the pulse of everything related to #CitiesFirst, an interdisciplinary term he coined. At the intersection of AI, urbanism, active transportation, shared mobility & decarbonization, Scott delivers real value in the mobility & climate tech ecosystems. Scott is the Founder & CEO of the #CitiesFirst Advisors + Podcast, Co-Author of Technologies for Smart Cities, Board at Green Mobility Magazine & Intermobility, Founding Member & Advisor at Urban AI & Columnist at METRO Magazine".',
      },
      {
        image: DagmaraPicture,
        name: 'Dagmara Wrzesinska',
        title: 'Mobility Expert',
        description:
          'Dagmara is a transportation engineer with a robust background in industry advocacy, technical expertise, and stakeholder relationship management. Extensive experience at key industry players such as Trafi, POLIS, TIER, and Vias has equipped her with a deep understanding of innovative mobility solutions and regulatory landscapes. Dagmara specializes in creating symbiotic public-private partnerships that allow forward-thinking mobility to flourish. As MaaS & Urban Mobility Specialist at Trafi, she leads outreach and engagement efforts to share Trafi’s expertise with the market. She supports cities as they develop policies to tackle urban mobility challenges by analyzing urban mobility trends and market dynamics.',
      },
    ],
    supports: [
      {
        image: AmbassadorsLogo,
        name: 'Ambassadors for Diversity In Transport',
        url: 'https://transport.ec.europa.eu/transport-themes/social-issues-equality-and-attractiveness-transport-sector/equality/diversity-ambassadors-transport_en',
      },
      {
        image: FemmesEnMouvementLogo,
        name: ' Femmes en Mouvement',
        url: 'https://www.femvt.fr/',
      },
      {
        image: PolisLogo,
        name: 'Polis Network for Cities & Regions',
        url: 'https://www.polisnetwork.eu/',
      },
      {
        image: MobiliansLogo,
        name: 'Mobilians',
        url: 'https://www.mobilians.fr/le-point-sur/artisans-du-cnpa/',
      },
    ],
    articles: [
      {
        title: 'Diversity, inclusion and equality',
        resume:
          "In Europe, both metropolitan and intermediate-sized cities are grappling with similar challenges in transitioning towards more accessible mobility solutions. The concept of a 'just transition' in mobility is pivotal. It's about evolving our approaches to ensure equitable access to transportation, reflecting our commitment to creating a society where mobility creates opportunities for all. Our goal is to bridge these gaps and empower women and groups of people who are often underserved by traditional transportation systems,with reliable, safe, and accessible transportation options, thereby fostering a more inclusive and sustainable mobility ecosystem in Europe.",
        pathName: 'gender equality',
        image: GenderEqualityPicture,
      },
      {
        title: 'Mobility HUB',
        resume:
          "In an era where sustainable and efficient urban transportation is paramount, cities across Europe are embracing a transformative movement, with France leading the way. Mobility hubs, the epicenters of this change, are redefining urban navigation in major European cities. It's a physical space where different modes of transportation converge, offering a seamless transition from one mode to another. These hubs typically include options like bicycles, scooters, cars , and public transit like buses and trains. The idea is to create a centralized point in urban areas where people can easily switch between different forms of transport, depending on their needs. They are the cornerstone in the battle against noise, visual pollution, and air pollution, making them indispensable in our quest for sustainable urban living.",
        pathName: 'mobility hub',
        image: MobilityHUBPicture,
      },
      {
        title: 'USP Network',
        resume:
          "At InterMobility, we are dedicated to reshaping the landscape of European mobility. Our mission is to foster a network that champions innovation, collaboration, and sustainable solutions in the automotive, transportation, and energy sectors. Our focus on collaborative innovation and expert networking sets us apart, ensuring that we stay ahead in the rapidly evolving world of European mobility. We believe in creating a future where mobility is not only efficient and innovative but also inclusive and environmentally friendly. Whether it's refining business processes or ideating new mobility solutions, InterMobility is equipped to guide and support businesses at every stage of their journey towards sustainable mobility.",
        pathName: 'usp network',
        image: USPNetworkPicture,
      },
      {
        title: 'Youth, decarbonization and technologies',
        resume:
          "At InterMobility, we are more than visionaries in the European mobility landscape: we are active architects of its future. Our approach combines collaboration and innovation to redefine mobility. InterMobility stands as a pillar of collaboration and expert networking in the European mobility sector. Creating Synergy between Industry and Academia: We leverage our extensive network to forge dynamic partnerships with educational institutions. Be a part of this transformative journey and contribute to a greener future for European mobility. We invite mobility enthusiasts, industry professionals, and young innovators to discover InterMobility's unique offerings.",
        pathName: 'youth decarnization tech',
        image: DecarbonizationPicture,
      },
    ],
    books: [
      {
        title: 'Reconstruire le féminisme',
        image: FeminismeBook,
      },
    ],
    modalIsOpen: false,
  }),
  getters: {},
  actions: {
    setCurrentSlide(index) {
      this.currentSlide = index
      this.stopSlideInterval()
    },
    switchCurrentSlide(index) {
      if (index < this.currentSlide) {
        this.setCurrentSlide(index)
        this.slideEffect = 'slide-out'
      } else {
        this.setCurrentSlide(index)
        this.slideEffect = 'slide-in'
      }
    },
    previousSlide() {
      const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.slidesCarousel.length - 1
      this.currentSlide = index
      this.slideEffect = 'slide-out'
    },
    nextSlide() {
      const index = this.currentSlide < this.slidesCarousel.length - 1 ? this.currentSlide + 1 : 0
      this.currentSlide = index
      this.slideEffect = 'slide-in'
    },
    startSlideInterval() {
      this.slideInterval = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },
    stopSlideInterval() {
      clearInterval(this.slideInterval)
    },
    numberIsPair(index) {
      if (index % 2 == 0) {
        return true
      } else {
        return false
      }
    },
    openModal() {
      this.modalIsOpen = true
    },
    closeModal() {
      this.modalIsOpen = false
    },
  },
})
