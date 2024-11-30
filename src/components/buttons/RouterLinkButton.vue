<template>
  <router-link
    :to="{ name: pathName }"
    class="max-w-fit px-6 py-3 rounded text-xl font-bold text-nowrap shadow-md shadow-black hover:scale-105"
  >
    <slot></slot>
  </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  pathName: String,
})
</script>

<style scoped></style>
