<template>
  <iframe
    style="border-radius: 12px"
    :src="podcastSrc"
    width="100%"
    height="352"
    frameborder="0"
    allowfullscreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    :title="podcastName"
  >
  </iframe>
</template>

<script setup>
defineProps({
  podcastSrc: String,
  podcastName: String,
})
</script>

<style scoped></style>
