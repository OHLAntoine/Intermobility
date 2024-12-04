import { defineStore } from 'pinia'

export const useMobilityStore = defineStore('mobility', {
  state: () => ({
    reportDownload: {
      name: 'Intermobility White Paper 2024 Acting today for more inclusion, diversity and equity in mobility and transportation.pdf',
      url: '../../src/assets/downloads/Intermobility-White-Paper-2024-Acting-today-for-more-inclusion,diversity-and-equity-in-mobility-and-transportation.pdf',
    },
    slidesCarousel: [
      {
        name: 'Events',
        url: '../../src/assets/images/engagements/event1.jpg',
        alt: 'Engaged participants at an InterMobility event',
      },
      {
        name: 'Conferences',
        url: '../../src/assets/images/engagements/conferenceramu1.jpg',
        alt: 'Inspirational speakers at an InterMobility conference',
      },
      {
        name: 'Reports & white papers',
        url: '../../src/assets/images/engagements/report&whitepapers.png',
        alt: "Comprehensive collection of InterMobility's white papers and reports, offering in-depth analyses and expert insights on mobility and transportation trends.",
      },
    ],
    currentSlide: 0,
    slideEffect: '',
    slideInterval: null,
    podcasts: [
      {
        image: '../../src/assets/images/podcasts/the_citiesfirst_podcast_logo.jpg',
        name: '#CitiesFirst Podcast',
        url: 'https://open.spotify.com/show/0sazSrcIOtRJCniMv03pJr?si=a417a40a40344230&nd=1&dlsi=ef4e0b471881458f',
      },
      {
        image: '../../src/assets/images/podcasts/MobilityPioneer.png',
        name: 'Mobility Pioneer Podcast',
        url: 'https://open.spotify.com/show/6peyf592JmgoZxXWRKwOkM?si=24c51dc91dd447b7&nd=1&dlsi=becee6470a6c4b6f',
      },
    ],
    podcastPlayers: [
      {
        url: 'https://open.spotify.com/embed/show/6peyf592JmgoZxXWRKwOkM?utm_source=generator&theme=0',
        name: 'Mobility Pioneer',
      },
      {
        url: 'https://open.spotify.com/embed/show/73bwBTg8JAP7yxCZ52E6qy?utm_source=generator&theme=0',
        name: 'Zipidi Doo-Dah',
      },
      {
        url: 'https://open.spotify.com/embed/show/0sazSrcIOtRJCniMv03pJr?utm_source=generator&theme=0',
        name: 'The #CitiesFirst Podcast',
      },
    ],
    team: [
      {
        image: '../../src/assets/images/team/kenneth1.jpg',
        name: 'Kenneth Jensen',
        title: 'Chief Operating Officer, KINTO Mobility',
        description:
          "When he's not working, you might find him exploring the world as a solo eco-friendly backpacker. However, within the professional realm, Kenneth is widely regarded as a senior leader with a remarkable track record in precise planning, flawless execution, and valuable feedback derived from his military background. Kenneth's expertise lies in daily operations, the mechanics of keeping things running smoothly, and the strategies needed to stay ahead in an ever-evolving landscape. His ability to set high standards, even under physical and psychological pressure, is a testament to his commitment.",
      },
      {
        image: '../../src/assets/images/team/lukas1.jpg',
        name: 'Lukas Neckermann',
        title: 'Chief Executive Officer, Neckermann Strategic Advisor',
        description:
          'Lukas Neckermann, Chief Executive Officer at Neckermann Strategic Advisor, has been at the forefront of the #mobilityrevolution for over a decade. He is a distinguished strategist, advisor, researcher, and sought-after keynote speaker specializing in Smart Cities and Smart Mobility. Lukas introduced pivotal industries to "The Mobility Revolution" with his groundbreaking book in 2014. Subsequently, he authored three more influential works: "Corporate Mobility Breakthrough 2020," "Smart Cities, Smart Mobility," and "Being Driven." He is co-initiator of PAVE Europe and Intermobility. Lukas is the mobility guide in Intermobility.',
      },
      {
        image: '../../src/assets/images/team/ramu1.jpg',
        name: 'Ramu Nair',
        title: 'Head of Sales, Invers GmbH',
        description:
          'Ramu Nair, Head of Sales at INVERS GmbH, is an accomplished sales leader and a prominent figure in the business development field. He plays a pivotal role at INVERS, the global market leader in shared mobility technology, with a compelling mission: to assist entrepreneurs and organizations in launching and scaling profitable and sustainable mobility services using innovative and dependable software and hardware solutions. Ramu is also responsible for the management and expansion of strategic partnerships with key stakeholders in the ecosystem. His passion lies in the future of mobility and its transformative potential to reshape how we live, work, and travel.',
      },
      {
        image: '../../src/assets/images/team/fh2.jpg',
        name: 'François Hoehlinger',
        title: 'Deputy CEO, Troopy',
        description:
          'François brings a wealth of experience and a deep-rooted network within the mobility and transportation industry, providing him with a keen understanding of market trends, critical challenges, and effective strategies. He also brings a key emphasis on diversity and inclusion, for which he published a report in 2024, presented to the CEO of DG MOVE (European Commission). François is a valued member of the European Commission Ambassador Program for Diversity and has received several awards. He launched a mobility & transportation dedicated think-tank in France called "Cercle CiME" with Erwann Le Page.',
      },
      {
        image: '../../src/assets/images/team/ScottShepard.png',
        name: 'Scott Shepard',
        title: 'Founder, The #CitiesFirstAdvisors Podcast',
        description:
          'Scott Shepard is an award-winning urban planner, author, educator, speaker & thought leader, Scott Shepard has his finger on the pulse of everything related to #CitiesFirst, an interdisciplinary term he coined. At the intersection of AI, urbanism, active transportation, shared mobility & decarbonization, Scott delivers real value in the mobility & climate tech ecosystems. Scott is the Founder & CEO of the #CitiesFirst Advisors + Podcast, Co-Author of Technologies for Smart Cities, Board at Green Mobility Magazine & Intermobility, Founding Member & Advisor at Urban AI & Columnist at METRO Magazine".',
      },
      {
        image: '../../src/assets/images/team/dagmara.jpg',
        name: 'Dagmara Wrzesinska',
        title: 'MaaS & Urban Mobility expert, Trafi',
        description:
          'Dagmara is a transportation engineer with a robust background in industry advocacy, technical expertise, and stakeholder relationship management. Extensive experience at key industry players such as Trafi, POLIS, TIER, and Vias has equipped her with a deep understanding of innovative mobility solutions and regulatory landscapes. Dagmara specializes in creating symbiotic public-private partnerships that allow forward-thinking mobility to flourish. As MaaS & Urban Mobility Specialist at Trafi, she leads outreach and engagement efforts to share Trafi’s expertise with the market. She supports cities as they develop policies to tackle urban mobility challenges by analyzing urban mobility trends and market dynamics.',
      },
    ],
    supports: [
      {
        image: '../../src/assets/images/experts/supports/ambassadors.jpg',
        name: 'Ambassadors for Diversity In Transport',
        url: 'https://transport.ec.europa.eu/transport-themes/social-issues-equality-and-attractiveness-transport-sector/equality/diversity-ambassadors-transport_en',
      },
      {
        image: '../../src/assets/images/experts/supports/femmesenmouvement.png',
        name: ' Femmes en Mouvement',
        url: 'https://www.femvt.fr/',
      },
      {
        image: '../../src/assets/images/experts/supports/polis.png',
        name: 'Polis Network for Cities & Regions',
        url: 'https://www.polisnetwork.eu/',
      },
      {
        image: '../../src/assets/images/experts/supports/mobilians.png',
        name: 'Mobilians',
        url: 'https://www.mobilians.fr/le-point-sur/artisans-du-cnpa/',
      },
    ],
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
  },
})
