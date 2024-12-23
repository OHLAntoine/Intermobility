<template>
  <section class="flex flex-col gap-6 py-16 px-8 sm:px-16 items-center text-center">
    <h2>Meet our founding team, composed of mobility experts & leaders</h2>
    <p class="text-lg text-justify sm:text-center">
      Welcome to InterMobility, where innovation and expertise converge to transform mobility. Our
      founding team, a group of seasoned professionals, is dedicated to creating sustainable,
      livable cities, emphasizing collaboration across Europe. Meet the leaders of InterMobility,
      united by a passion for innovation in transportation and energy. Our diverse team, ranging
      from policymakers to engineers, embodies excellence in the mobility sector, working towards a
      more sustainable future. Join us in our quest for a better tomorrow, and discover the
      brilliant minds making a difference at InterMobility.
    </p>
  </section>
  <section class="grid grid-flow-row auto-rows-max">
    <team-section
      v-for="(person, index) in store.team"
      :key="`person-${index}`"
      :personImage="person.image"
      :personName="person.name"
      :personTitle="person.title"
      :personDescription="person.description"
      :personIndex="index"
    ></team-section>
  </section>
</template>

<script setup>
import TeamSection from '@/components/sections/team/TeamSection.vue'

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()
</script>

<style scoped></style>
