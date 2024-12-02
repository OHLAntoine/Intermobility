<template>
  <div
    class="flex flex-col md:flex-row justify-center items-center gap-6 p-16"
    :class="{
      bgWhite: !store.numberIsPair(personIndex),
      bgBlue: store.numberIsPair(personIndex),
    }"
  >
    <img
      :src="personImage"
      :alt="`${personName} picture`"
      class="object-cover border-2 border-black h-60 w-60"
    />
    <div class="flex flex-col lg:gap-2">
      <h3 class="text-center md:text-left">
        {{ personName }}<span class="font-normal ms-2">({{ personTitle }})</span>
      </h3>
      <p class="text-lg text-justify">
        {{ personDescription }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  personImage: String,
  personName: String,
  personTitle: String,
  personDescription: String,
  personIndex: Number,
})

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()
</script>

<style scoped></style>
