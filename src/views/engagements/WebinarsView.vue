<template>
  <simple-section>
    <h2>Our webinars engagement</h2>
    <div class="flex flex-col lg:flex-row items-center gap-8">
      <youtube-video-player
        v-for="(youtubePlayer, index) in store.youtubePlayers"
        :key="`video-${index}`"
        :videoSrc="youtubePlayer.url"
        :videoTitle="youtubePlayer.title"
      ></youtube-video-player>
    </div>
    <p class="text-xl">
      Participate in one of our webinar on mobility, transportation and Smart Cities.
      Intermobility’s founding members also provide visibility with two major podcast about mobility
      and transportation.
    </p>
  </simple-section>
</template>

<script setup>
import SimpleSection from '@/components/sections/SimpleSection.vue'
import YoutubeVideoPlayer from '@/components/videos/YoutubeVideoPlayer.vue'

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()
</script>

<style scoped></style>
