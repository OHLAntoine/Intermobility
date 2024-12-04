<template>
  <section class="flex flex-col gap-6 p-16">
    <h3>{{ articleTitle }}</h3>
    <p class="text-xl">
      {{ articleResume }}
      <router-link :to="{ name: articlePathName }" class="underline ms-2" :class="articleLinkClass"
        >View more >>></router-link
      >
    </p>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  articleTitle: String,
  articleResume: String,
  articlePathName: String,
  articleLinkClass: String,
})
</script>

<style scoped></style>
