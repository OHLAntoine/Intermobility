<template>
  <iframe
    height="315"
    :src="videoSrc"
    :title="videoTitle"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</template>

<script setup>
defineProps({
  videoSrc: String,
  videoTitle: String,
})
</script>

<style scoped></style>
