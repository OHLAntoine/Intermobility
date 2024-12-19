<template>
  <article-view
    imageArticleTitle="InterMobility: Promoting Equality and Accessibility in Mobility Solutions"
    :imageArticleSrc="store.articles[0].image"
    imageArticleAlt="Gender equality representation"
  >
    <h5 class="firstTitleArticle">The Imperative of Equal Access in Mobility</h5>
    <p class="paragrapheArticle">
      In Europe, both metropolitan and intermediate-sized cities are grappling with similar
      challenges in transitioning towards more accessible mobility solutions. At InterMobility, we
      recognize the critical importance of this transition, emphasizing the need for equitable
      access as a cornerstone of our initiatives.
    </p>
    <h5 class="middleTitleArticle">The Essence of a 'Just Transition' in Urban Mobility</h5>
    <p class="paragrapheArticle">
      The concept of a 'just transition' in mobility is pivotal. It's about evolving our approaches
      to ensure equitable access to transportation, reflecting our commitment to creating a society
      where mobility creates opportunities for all. This aligns with InterMobility's vision of
      fostering sustainable and livable urban environments.
    </p>
    <h5 class="middleTitleArticle">Gender Equality: A Pillar of Inclusive Mobility</h5>
    <p class="paragrapheArticle">
      Addressing the needs of vulnerable populations, especially women, is central to our mission at
      InterMobility. Historically, the mobility landscape in Europe has often overlooked the
      specific requirements of women, leading to their exclusion from traditional mobility
      offerings. This oversight can be attributed to several factors, including a lack of
      gender-sensitive planning in transport systems, safety concerns that disproportionately affect
      women, and the failure to consider the diverse roles women play in society, which often
      require flexible and varied transportation needs. We advocate for a mobility landscape where
      solutions are thoughtfully designed to cater to diverse needs, ensuring no one is left behind.
      By incorporating features such as enhanced safety measures, more accessible vehicle options,
      and routes that consider the unique travel patterns of women, we aim to create a more
      inclusive and equitable mobility environment.
    </p>
    <h5 class="middleTitleArticle">Empowering Diverse Populations through Inclusive Mobility</h5>
    <p class="paragrapheArticle">
      Our goal is to bridge these gaps and empower women and groups of people who are often
      underserved by traditional transportation systems,with reliable, safe, and accessible
      transportation options, thereby fostering a more inclusive and sustainable mobility ecosystem
      in Europe. Our focus extends beyond just providing solutions; it's about anchoring mobility as
      a key enabler for all citizens, especially those traditionally marginalized. InterMobility's
      network, rich in insights and expertise, is dedicated to promoting responsible, sustainable,
      and inclusive mobility solutions.
    </p>
    <h5 class="middleTitleArticle">Building a Relevant Mobility Ecosystem</h5>
    <p class="paragrapheArticle">
      InterMobility plays a crucial role in ensuring mobility solutions are accessible to everyone.
      This involves addressing specific challenges faced by intermediate-sized cities, from
      infrastructure to data collection and cooperation among various stakeholders.
    </p>
    <h5 class="middleTitleArticle">Join the Conversation and Explore InterMobility's Offers</h5>
    <p class="paragrapheArticle">
      Engage with us on our LinkedIn to stay abreast of the latest developments in European
      mobility. Our social media channels are a hub for industry news and community interaction.
      <br />We also highly recommend you to visit our website to explore our range of services and
      solutions, from expert consultations to co-creating events focused on the future of automotive
      and mobility. InterMobility is your portal to a network committed to sustainable and inclusive
      urban mobility.
    </p>
    <div class="flex flex-col sm:flex-row justify-center items-center pt-6">
      <img
        :src="store.books[0].image"
        :alt="`Book's cover : ${store.books[0].title}`"
        class="w-40"
      />
      <p class="text-lg ps-2">
        Find more in the new book of our co-founder “Reconstruire le féminisme” (in french),<a
          href="https://www.amazon.fr/Reconstruire-f%C3%A9minisme-d%C3%A9cole-conseils-dadministration/dp/233645162X/ref=cm_cr_arp_d_product_top?ie=UTF8"
          target="_blank"
          class="link_blue underline ps-2 text-nowrap"
          >Available here >>></a
        >
      </p>
    </div>
  </article-view>
</template>

<script setup>
import ArticleView from '@/components/sections/articles/ArticleView.vue'

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped></style>
