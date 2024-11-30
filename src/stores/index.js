import { defineStore } from 'pinia'

export const useMobilityStore = defineStore('mobility', {
  state: () => ({
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
  },
})
