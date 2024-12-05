<template>
  <div class="grid grid-flow-row auto-rows-max">
    <article-presentation
      v-for="(article, index) in store.articles"
      :key="`article-${index}`"
      :articleTitle="article.title"
      :articleResume="article.resume"
      :articlePathName="article.pathName"
      :class="{
        bgWhite: store.numberIsPair(index),
        bgBlue: !store.numberIsPair(index),
      }"
      :articleLinkClass="{
        link_blue: store.numberIsPair(index),
        link_white: !store.numberIsPair(index),
      }"
    ></article-presentation>
    <section class="flex flex-col gap-6 p-16">
      <h3>Some recent #CitiesFirst original articles shared with InterMobility</h3>
      <ul class="flex flex-col gap-3 list-disc">
        <li class="text-xl">
          "Paris Is Great, But Here's Where the Green Mobility Revolution Is Happening"
          <span class="italic font-light">by Scott Shepard for Planitizen.</span
          ><a
            href="https://www.planetizen.com/features/126996-paris-great-heres-where-green-mobility-revolution-happening"
            target="_blank"
            class="underline ms-2 link_blue text-nowrap"
            >View more >>></a
          >
        </li>
        <li class="text-xl">
          "Did the Pandemic Spur Radical Urban Change ?"
          <span class="italic font-light">by Diana Ionescu for Planitizen.</span
          ><a
            href="https://www.planetizen.com/news/2024/02/127470-did-pandemic-spur-radical-urban-change"
            target="_blank"
            class="underline ms-2 link_blue text-nowrap"
            >View more >>></a
          >
        </li>
        <li class="text-xl">
          "Being “Smart” Isn’t Enough, Cities Need to be Human-Centric Too"
          <span class="italic font-light">by Scott Shepard for Ibex Publishing.</span
          ><a
            href="https://ibexpub.media/being-smart-isnt-enough-cities-need-to-be-human-centric-too/"
            target="_blank"
            class="underline ms-2 link_blue text-nowrap"
            >View more >>></a
          >
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import ArticlePresentation from '@/components/sections/articles/ArticlePresentation.vue'

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()
</script>

<style scoped></style>
