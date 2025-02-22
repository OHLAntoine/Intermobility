<template>
  <simple-section>
    <h2>Let's discover podcasts about mobility</h2>
    <p class="text-xl">
      At InterMobility, some of our members maintened podcast to speak about creating sustainable,
      livable cities, emphasizing collaboration across Europe, innovation in transportation or
      energy.
    </p>
  </simple-section>
  <double-section
    v-for="(podcastPlayer, index) in store.podcastPlayers"
    :key="`podcast-${index}`"
    :class="{
      bgWhite: !store.numberIsPair(index),
      bgBlue: store.numberIsPair(index),
    }"
  >
    <div class="flex flex-col items-center justify-center w-full lg:w-1/2 gap-4">
      <h4 class="underline">{{ podcastPlayer.name }}</h4>
      <p class="text-center text-lg w-[90%]">{{ podcastPlayer.description }}</p>
    </div>
    <podcast-player
      :podcastSrc="podcastPlayer.url"
      :podcastName="podcastPlayer.name"
      class="w-full lg:w-1/2"
    ></podcast-player>
  </double-section>
</template>

<script setup>
import SimpleSection from '@/components/sections/SimpleSection.vue'
import DoubleSection from '@/components/sections/DoubleSection.vue'
import PodcastPlayer from '@/components/podcasts/PodcastPlayer.vue'

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()
</script>

<style scoped></style>
