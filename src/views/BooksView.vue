<template>
  <simple-section>
    <h2>Let's discover our books</h2>
    <p class="text-xl">
      At InterMobility, some of our members writed books to speak about equality.
    </p>
  </simple-section>
  <double-section class="bg-[--blue-] text-white items-center">
    <img :src="store.books[0].image" :alt="`${store.books[0].title} cover picture`" class="h-80" />
    <p class="text-xl text-center md:ms-12">
      Reconstruire le féminisme retrace avec précision et consistance les courants de pensées qui
      ont mené à la révolution à laquelle nous assistons, à l’émergence de nouvelles générations
      pour qui l’égalité et l’acceptation des genres devient un prérequis. Ce livre invite à une
      prise de hauteur et une pointe d’esprit le lecteur pour repenser la société et sa construction
      pour mieux en comprendre les enjeux. L’auteur nous guide, en s’appuyant notamment sur son cas
      d’étude et des interviews réalisés auprès de philosophes, sociologues et de femmes dirigeantes
      pour comprendre l’écart existant, et ce qu’il reste donc à combler. Un voyage initiatique au
      travers de l’histoire et des projections d’une société qui a besoin d’accélérer sa mue vers
      plus d’égalité et de reconnaissance du travail réalisé par des minorités. Un plaidoyer réalisé
      par un homme pour les femmes, précurseur d’un mouvement se voulant plus inclusif et plus
      fédérateur.
      <br />
      <a
        href="https://www.amazon.fr/Reconstruire-f%C3%A9minisme-d%C3%A9cole-conseils-dadministration/dp/233645162X/ref=cm_cr_arp_d_product_top?ie=UTF8"
        target="_blank"
        class="link_white underline ps-2 text-nowrap"
        >Available here >>></a
      >
    </p>
  </double-section>
</template>

<script setup>
import SimpleSection from '@/components/sections/SimpleSection.vue'
import DoubleSection from '@/components/sections/DoubleSection.vue'

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()
</script>

<style scoped></style>
