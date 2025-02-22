<template>
  <article-view
    imageArticleTitle="Pioneering Sustainable European Mobility"
    :imageArticleSrc="store.articles[2].image"
    imageArticleAlt="USP Network representation"
  >
    <h5 class="firstTitleArticle">Embracing the Future of Mobility</h5>
    <p class="paragrapheArticle">
      At InterMobility, we are dedicated to reshaping the landscape of European mobility. Our
      mission is to foster a network that champions innovation, collaboration, and sustainable
      solutions in the automotive, transportation, and energy sectors. As leaders in this field, we
      understand the importance of integrating cutting-edge technology and sustainable practices to
      drive the future of mobility in Europe.
    </p>
    <h5 class="middleTitleArticle">Driving Innovation and Collaboration in Mobility</h5>
    <p class="paragrapheArticle">
      InterMobility stands at the forefront of the mobility revolution, offering a platform where
      experts, industry leaders, and innovators converge to share insights and develop solutions.
      Our focus on collaborative innovation and expert networking sets us apart, ensuring that we
      stay ahead in the rapidly evolving world of European mobility.
    </p>
    <h5 class="middleTitleArticle">Empowering Sustainable and Inclusive Mobility Solutions</h5>
    <p class="paragrapheArticle">
      We believe in creating a future where mobility is not only efficient and innovative but also
      inclusive and environmentally friendly. Our initiatives are designed to promote eco-friendly
      mobility and sustainable practices, making us a beacon for those seeking to contribute to a
      greener, more sustainable Europe.
    </p>
    <h5 class="middleTitleArticle">InterMobility's Unique Offerings and Expertise</h5>
    <p class="paragrapheArticle">
      Our network is rich in expertise, offering tailored consulting services, bespoke event
      collaborations, and strategic partnerships. Whether it's refining business processes or
      ideating new mobility solutions, InterMobility is equipped to guide and support businesses at
      every stage of their journey towards sustainable mobility.
    </p>
    <h5 class="middleTitleArticle">
      Connect with InterMobility: Social Media and Exclusive Offers
    </h5>
    <p class="paragrapheArticle">
      Stay updated with the latest trends and opportunities in European mobility by following
      InterMobility on LinkedIn. Our social media channels are vibrant hubs for industry news,
      insights, and community engagement. Additionally, explore our website to discover the range of
      services and solutions we offer. From expert consultations to co-creating events focused on
      the future of automotive and mobility, InterMobility is your gateway to a thriving European
      network committed to sustainable and livable urban environments.
    </p>
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
