<template>
  <div class="flex justify-center">
    <div class="relative h-[500px] w-full overflow-hidden">
      <button
        class="bg-white bg-opacity-75 z-10 absolute left-2 bottom-[calc(50%-20px)] h-[30px] w-[30px] rounded-full flex items-center justify-center hover:bg-opacity-100"
        @click="store.previousSlide()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(0, 74, 173, 1)"
        >
          <path
            d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"
          ></path>
        </svg>
      </button>
      <div
        class="absolute top-0 left-0 right-0 bottom-0"
        v-for="(slide, index) in slides"
        :key="`slide-${index}`"
        @mouseenter="store.stopSlideInterval()"
        @mouseout="store.startSlideInterval()"
      >
        <transition :name="store.slideEffect">
          <img
            class="h-[500px] w-full object-cover rounded"
            :src="slide.url"
            :alt="slide.alt"
            v-show="currentSlide === index"
          />
        </transition>
      </div>
      <div
        class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white bg-opacity-75 rounded px-4"
        v-for="(slide, index) in slides"
        :key="`slide-${index}`"
      >
        <p class="font-bold" v-show="currentSlide === index">{{ slide.name }}</p>
      </div>
      <div class="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          v-for="(slide, index) in slides"
          :key="`slide-${index}`"
          class="bg-white h-3 w-3 rounded-full"
          :class="currentSlide === index ? 'bg-opacity-100' : 'bg-opacity-75'"
          @click="store.switchCurrentSlide(index)"
        ></button>
      </div>
      <button
        class="bg-white bg-opacity-75 z-10 absolute right-2 bottom-[calc(50%-20px)] h-[30px] w-[30px] rounded-full flex items-center justify-center hover:bg-opacity-100"
        @click="store.nextSlide()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="rgba(0, 74, 173, 1)"
        >
          <path
            d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  slides: Array,
  currentSlide: Number,
})

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()

import { onMounted, onBeforeUnmount } from 'vue'
onMounted(() => {
  store.startSlideInterval()
})
onBeforeUnmount(() => {
  store.stopSlideInterval()
})
</script>

<style scoped>
.slide-in-enter-active,
.slide-in-enter,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-enter,
.slide-out-leave-active {
  transition: all 0.7s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(100%);
}
.slide-in-leave-to {
  transform: translateX(-100%);
}
.slide-out-enter-from {
  transform: translateX(-100%);
}
.slide-out-leave-to {
  transform: translateX(100%);
}
</style>
