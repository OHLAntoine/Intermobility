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
