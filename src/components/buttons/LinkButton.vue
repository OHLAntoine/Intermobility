<template>
  <a
    :href="linkPath"
    target="_blank"
    class="flex items-center justify-center gap-2 max-w-fit px-6 py-3 rounded text-xl font-bold text-nowrap shadow-md shadow-black hover:scale-105"
  >
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  linkPath: String,
})
</script>

<style scoped></style>
