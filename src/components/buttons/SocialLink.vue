<template>
  <a
    :href="socialLinkPath"
    target="_blank"
    class="flex items-center justify-center gap-2 h-8 w-8 fill-white hover:fill-black cursor-pointer"
  >
    <slot></slot>
  </a>
</template>

<script setup>
defineProps({
  socialLinkPath: String,
})
</script>

<style scoped></style>
