<template>
  <article-view
    imageArticleTitle="Spearheading the Future of European Mobility: Youth Empowerment and Sustainable Innovation"
    :imageArticleSrc="store.articles[3].image"
    imageArticleAlt="Youth, decarbonization and technologies representation"
  >
    <p class="paragrapheArticle">
      At InterMobility, we are more than visionaries in the European mobility landscape: we are
      active architects of its future. Our approach combines collaboration and innovation to
      redefine mobility.
      <br />Our network, abundant in expertise from leading figures in automotive and mobility
      sectors, focuses on empowering technologies and promoting sustainable mobility solutions.
    </p>
    <h5 class="middleTitleArticle">
      Pioneering Sustainable Mobility in Europe with Advanced Technologies
    </h5>
    <p class="paragrapheArticle">
      Leading the charge in integrating cutting-edge technologies, InterMobility is revolutionizing
      European mobility. We are committed to enhancing the efficiency, safety, and sustainability of
      transportation systems through technological advancements. From intelligent traffic management
      to predictive vehicle maintenance, these technologies are transforming our approach to
      mobility challenges. Our efforts are geared towards sustainable solutions that improve route
      planning, reduce carbon emissions, and enhance traffic flow in urban areas. Our goal is to
      forge a connected, intelligent, and eco-friendly transportation landscape in Europe, in line
      with our mission to drive innovation and sustainability in the mobility sector. This strategy
      addresses the preferences of a tech-savvy younger generation and aligns with Europe's
      objective of a greener, more efficient mobility ecosystem.
    </p>
    <h5 class="middleTitleArticle">
      Cultivating Collaborative Innovation and Sustainable Mobility at InterMobility
    </h5>
    <p class="paragrapheArticle">
      InterMobility stands as a pillar of collaboration and expert networking in the European
      mobility sector. Our recommendations to you and current initiatives aim to transform mobility
      by:
    </p>
    <ol class="paragrapheArticle list-decimal ps-4 flex flex-col gap-2 pt-2">
      <li class="ps-2">
        Creating Synergy between Industry and Academia: We leverage our extensive network to forge
        dynamic partnerships with educational institutions. These collaborations are essential for
        integrating sustainable mobility concepts into youth education, resonating with our vision
        for a sustainable transportation future.
      </li>
      <li class="ps-2">
        Bridging Theory and Practice through Academic Engagement: Our commitment to academia extends
        to providing practical learning experiences. We offer internships and interactive events
        that connect academic theories with real-world mobility challenges, embodying our dedication
        to innovative and practical learning in sustainable mobility.
      </li>
      <li class="ps-2">
        Advocating for Eco-Friendly and Accessible Mobility for Europe's Youth: Understanding the
        unique needs of Europe's younger population, InterMobility provides environmentally
        conscious and accessible mobility solutions. Our initiatives encourage young people to adopt
        shared, sustainable transportation methods, reflecting our commitment to a greener, more
        interconnected Europe.
      </li>
    </ol>
    <h5 class="middleTitleArticle">Driving Europe's Mobility Revolution with InterMobility</h5>
    <p class="paragrapheArticle">
      Join us at InterMobility in our mission to create a more sustainable, inclusive, and
      innovative transportation future in Europe. Our network offers insights into the latest trends
      in mobility, automotive, and energy sectors, all dedicated to fostering livable urban
      environments. Be a part of this transformative journey and contribute to a greener future for
      European mobility.
    </p>
    <h4 class="middleTitleArticle">
      Discover InterMobility's Offerings and Engage with Us on Social Media
    </h4>
    <h5 class="pb-2">Explore InterMobility's Innovative Solutions</h5>
    <p class="paragrapheArticle">
      We invite mobility enthusiasts, industry professionals, and young innovators to discover
      InterMobility's unique offerings. Our network provides a spectrum of services and solutions to
      address modern mobility challenges. Whether seeking expert advice, strategic partnerships, or
      sustainable mobility solutions, InterMobility is your ideal partner. Visit our website to
      learn more about our services and how we can assist in your journey towards a sustainable and
      innovative mobility future.
    </p>
    <h5 class="middleTitleArticle">Connect with InterMobility on Social Media</h5>
    <p class="paragrapheArticle">
      Be part of the conversation shaping the future of mobility in Europe! Stay updated with the
      latest industry insights and networking opportunities by following us on our social media
      platforms.
      <br />Join our LinkedIn community to remain at the forefront of mobility innovation. Our
      social media channels are hubs of regular updates, inspiring stories, and collaborative
      opportunities.
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
