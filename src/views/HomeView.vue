<template>
  <download-banner
    class="bg-pink-300 fixed bottom-0 w-full z-20 flex items-center justify-center stroke-black stroke-1"
    :hrefDownload="store.reportDownload.url"
    :downloadName="store.reportDownload.name"
  >
    Download our new report here
  </download-banner>
  <section class="backgroundHomeImage h-[92vh] bg-local sm:bg-fixed relative">
    <img
      src="@/assets/images/homeBanner.png"
      alt="Intermobility Banner"
      class="w-3/4 md:w-1/2 absolute bottom-[5%] left-[12.5%] md:left-1/4"
    />
  </section>
  <simple-section class="flex flex-col gap-6 p-16 items-center text-center">
    <h1 class="text-center">A free european network for all</h1>
    <p class="text-xl lg:w-2/3">
      InterMobility champions a free European network, fostering collaboration, events, and
      innovative problem-solving among industry experts and leaders. We believe in the value of free
      exchange.
    </p>
    <p class="font-bold text-xl">
      Join us today and be part of the mobility revolution in Europe !
    </p>
    <link-button
      linkPath="https://www.linkedin.com/company/intermobility-eu/posts/"
      class="blue_button"
      title="Join us on LinkedIn !"
      >Join us</link-button
    >
  </simple-section>
  <double-section id="engagements" class="bg-[--blue-]">
    <div class="flex flex-col items-center justify-center gap-8 w-full md:w-1/2 text-white">
      <h2 class="text-center">Our Expertise: An Overview</h2>
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
  </double-section>
  <double-section>
    <div class="flex flex-col items-center justify-center gap-8 w-full md:w-1/2">
      <h2 class="text-center md:px-4">Empower Your Business with InterMobility: we support you</h2>
      <p class="text-xl text-center px-12">
        InterMobility, a European network rich in expertise, insights, and know-how from top
        automotive and mobility leaders, is dedicated to supporting companies at every stage, from
        ideation to refining processes.
      </p>
    </div>
    <ul class="flex flex-col justify-between w-full md:w-1/2 gap-4 p-4">
      <li class="pb-4">
        <div class="flex gap-8 items-start justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-right stroke-black stroke-2 scale-[250%] mt-[4px]"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
          <div>
            <h3>Support call</h3>
            <p class="text-xl">
              Engage in a complimentary consultation call with one of our seasoned experts to
              address any specific needs or challenges your company may be facing.
            </p>
          </div>
        </div>
      </li>
      <li class="pb-4">
        <div class="flex gap-8 items-start justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-right stroke-black stroke-2 scale-[250%] mt-[4px]"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
          <div>
            <h3>Consulting project</h3>
            <p class="text-xl">
              Collaborate closely with our experts on a tailored consulting project, whether you
              require an external perspective or specialized leadership expertise.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="flex gap-8 items-start justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-right stroke-black stroke-2 scale-[250%] mt-[4px]"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
          <div>
            <h3>Dedicated event</h3>
            <p class="text-xl">
              Co-create a bespoke event with our network around the future of automotive and
              mobility with our unique network of 600+ experts and leaders.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </double-section>
  <section class="flex flex-col items-center md:flex-row bg-[--blue-]">
    <div class="h-[35rem] flex items-center justify-center md:justify-normal">
      <img src="@/assets/images/team/fh3.jpeg" alt="" class="h-[35rem]" />
    </div>
    <div class="flex flex-col justify-around items-center w-full md:w-2/3 gap-8 text-white p-16">
      <h2 class="text-center">Discover our expert team in transportation and mobility</h2>
      <p class="text-xl text-center md:px-12">
        InterMobility, your gateway to a thriving European network, connects you with leading
        experts from the transportation, mobility, and energy sectors, all committed to fostering
        sustainable and livable urban environments. Discover the Minds Behind InterMobility: Our
        Founding Team and Experts.
      </p>
      <router-link-button
        pathName="team"
        class="white_button"
        title="Meet our formidable experts and the cofounding team"
        >Discover our team</router-link-button
      >
    </div>
  </section>
  <double-section>
    <podcast-link
      v-for="(podcast, index) in store.podcasts"
      :key="index"
      :podcastImage="podcast.image"
      :podcastName="podcast.name"
      :podcastLinkPath="podcast.url"
    ></podcast-link>
  </double-section>
</template>

<script setup>
import DownloadBanner from '@/components/downloads/DownloadBanner.vue'
import LinkButton from '@/components/buttons/LinkButton.vue'
import RouterLinkButton from '@/components/buttons/RouterLinkButton.vue'
import SimpleSection from '@/components/sections/SimpleSection.vue'
import DoubleSection from '@/components/sections/DoubleSection.vue'
import CarouselImages from '@/components/carousels/CarouselImages.vue'
import PodcastLink from '@/components/podcasts/PodcastLink.vue'

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()
</script>

<style scoped>
.backgroundHomeImage {
  background-image: url('@/assets/images/homebackground.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
</style>
