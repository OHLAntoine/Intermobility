<template>
  <div
    class="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 shadow-black shadow-2xl bg-slate-300 rounded"
  >
    <div class="flex flex-col items-center justify-center gap-4 relative p-20">
      <h6>{{ statusMessage }}</h6>
      <button
        class="cursor-pointer absolute right-6 top-6 fill-black stroke-black stroke-1 hover:fill-[--blue-] hover:stroke-[--blue-] hover:scale-125"
        @click="store.closeModal()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <title>close modal</title>
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
          />
        </svg>
      </button>
      <p>{{ modalMessage }}</p>
      <a v-if="mailAdressHref !== ''" :href="mailAdressHref" class="underline link_blue">{{
        mailAdress
      }}</a>
    </div>
  </div>
</template>

<script setup>
import { useMobilityStore } from '@/stores'
const store = useMobilityStore()

defineProps({
  statusMessage: String,
  modalMessage: String,
  mailAdressHref: String,
  mailAdress: String,
})
</script>

<style scoped></style>
