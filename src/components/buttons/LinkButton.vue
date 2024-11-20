<template>
  <router-link
    :to="{ name: pathName }"
    class="max-w-fit px-8 py-4 rounded text-xl font-bold text-nowrap"
    :class="buttonClass"
  >
    <slot></slot>
  </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  pathName: String,
  buttonClass: String,
})
</script>

<style scoped></style>
