<template>
  <div class="flex flex-col items-center justify-around gap-4">
    <div class="rounded-full h-40 overflow-hidden">
      <img :src="podcastImage" :alt="`${podcastName} logo`" class="h-40 scale-105" />
    </div>
    <h4 class="text-nowrap">{{ podcastName }}</h4>
    <link-button :linkPath="podcastLinkPath" class="blue_button">Go to Spotify</link-button>
  </div>
</template>

<script setup>
import LinkButton from '@/components/buttons/LinkButton.vue'

defineProps({
  podcastLinkPath: String,
  podcastImage: String,
  podcastName: String,
})
</script>

<style scoped></style>
