<template>
  <a
    :href="socialLinkPath"
    target="_blank"
    class="h-6 w-6 fill-white hover:fill-black cursor-pointer"
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
