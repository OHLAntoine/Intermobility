<template>
  <simple-section>
    <h2>Diversity, inclusion and equality</h2>
    <img
      src="../assets/images/experts/diversityInclusion&equality.jpg"
      alt="Diversity, inclusion and equality"
      class="h-96 object-cover"
    />
    <p class="text-lg">
      Intermobility collaborates with the Ambassadors in Diversity program, led by Panteia, Stratec
      and TIS Transports to promote gender equality, diversity and inclusion in every
      transportation. Intermobility published a report in May 2024 “ Intermobility _ Acting today
      for more inclusion, diversity and equity in mobility and transportation “ (Hoehlinger, Allen,
      Bichara and Wrezsinksa) that has been presented to DG Move in Brussels in June 2024. The
      strong collaboration helped us to be supported by key institutions and being largely published
      in the media.
    </p>
    <h4>Our institutional support for the report :</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-flow-row auto-rows-max gap-8">
      <a
        class="flex flex-col items-center underline text-[--blue-] text-lg gap-2"
        target="_blank"
        v-for="(support, index) in store.supports"
        :key="index"
        :href="support.url"
      >
        <img :src="support.image" :alt="`${support.name} logo`" class="h-24" />
        {{ support.name }}
      </a>
    </div>
    <a
      href="https://zagdaily.com/trends/the-5-building-blocks-toolkit-to-address-workforce-diversity-in-new-mobility/"
      class="flex flex-col items-center underline text-[--blue-] text-lg gap-2"
    >
      <img
        src="../assets/images/experts/5blocks.png"
        alt="The 5 building Block"
        class="w-full md:w-3/4 h-auto"
      />
      Our publication in Zag Daily, the mobility dedicated newspaper.
    </a>
  </simple-section>
  <simple-section class="bg-[--blue-] text-white">
    <h2>Creating a greener mobility</h2>
    <p class="text-lg">
      Intermobility collaborates with
      <a href="https://cercle-cime.com/" target="_blank" class="underline">the Cercle CiME</a>, a
      french new think-tank dedicated to mobility and transportation, and focusing on green
      activism. CiME aims to support long-lasting laws focusing on greener mobility to create a
      better and more liveable environment, in cities and in the countryside.
    </p>
    <a
      href="https://cercle-k2.fr/etudes/rassembler-l-ensemble-des-acteurs-du-transport-et-de-la-mobilite-autour-du-projet-france"
      class="flex flex-col items-center underline text-white text-lg gap-2"
    >
      <img
        src="../assets/images/experts/cercleK2.jpg"
        alt="Cercle CiME publication around sustainable mobility at Cercle K2"
        class="w-full md:w-3/4 h-auto"
      />
      Cercle CiME publication around sustainable mobility at Cercle K2
    </a>
  </simple-section>
  <simple-section>
    <h2>Future of Automotive</h2>
    <div class="grid lg:grid-cols-3 gap-6 lg:gap-12">
      <podcast-player
        v-for="(podcastPlayer, index) in store.podcastPlayers"
        :key="`podacast-${index}`"
        :podcastSrc="podcastPlayer.url"
        :podcastName="podcastPlayer.name"
      ></podcast-player>
    </div>
  </simple-section>
</template>

<script setup>
import SimpleSection from '@/components/sections/SimpleSection.vue'
import PodcastPlayer from '@/components/podcasts/PodcastPlayer.vue'

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()
</script>

<style scoped></style>
