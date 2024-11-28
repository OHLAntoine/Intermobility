<template>
  <section class="backgroundHomeImage h-[92vh] bg-local sm:bg-fixed relative">
    <img
      src="../assets/images/homeBanner.png"
      alt="Intermobility Banner"
      class="w-3/4 md:w-1/2 absolute bottom-[5%] left-[12.5%] md:left-1/4"
    />
  </section>
  <section class="grid grid-cols-11 p-20 text-center">
    <div class="col-start-3 col-span-7 grid grid-rows-4">
      <h1 class="font-semibold text-5xl text-center">A free european network for all</h1>
      <p class="text-xl">
        InterMobility champions a free European network, fostering collaboration, events, and
        innovative problem-solving among industry experts and leaders. We believe in the value of
        free exchange.
      </p>
      <p class="font-bold text-xl pt-4">
        Join us today and be part of the mobility revolution in Europe !
      </p>
      <div class="text-center">
        <link-button pathName="home" buttonClass="blue_button">Join us</link-button>
      </div>
    </div>
  </section>
  <section
    id="engagements"
    class="flex flex-col md:flex-row gap-8 md:gap-0 justify-around px-6 lg:px-8 py-20 bg-[--blue-]"
  >
    <div class="flex flex-col items-center justify-center gap-8 w-full md:w-1/2 text-white">
      <h2 class="font-bold text-5xl text-center">Our Expertise: An Overview</h2>
      <p class="text-xl text-center px-12">
        InterMobility stands out as a premier expert network, facilitating meaningful interactions
        and collaborations among leaders. We provide a vibrant platform for networking, sharing
        insights, and advancing knowledge through diverse events, working groups, and publications.
      </p>
    </div>
    <carousel-images
      class="w-full md:w-1/2 lg:w-[45%]"
      :currentSlide="store.currentSlide"
      :slides="store.slidesCarousel"
    />
  </section>
</template>

<script setup>
import LinkButton from '@/components/buttons/LinkButton.vue'
import CarouselImages from '@/components/carousels/CarouselImages.vue'

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()
</script>

<style scoped>
.backgroundHomeImage {
  background-image: url('../assets/images/homebackground.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
</style>
