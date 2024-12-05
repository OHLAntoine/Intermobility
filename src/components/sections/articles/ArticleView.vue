<template>
  <section class="flex flex-col gap-6 py-16 px-6 lg:px-8">
    <h3 class="text-center">{{ imageArticleTitle }}</h3>
    <article>
      <img
        :src="imageArticleSrc"
        :alt="imageArticleAlt"
        class="float-none lg:float-right w-full lg:w-1/2 ms-0 lg:ms-4 mb-2 lg:mb-0"
      />
      <slot></slot>
    </article>
  </section>
</template>

<script setup>
defineProps({
  imageArticleTitle: String,
  imageArticleSrc: String,
  imageArticleAlt: String,
})
</script>

<style scoped></style>
