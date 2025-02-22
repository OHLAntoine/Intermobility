<template>
  <nav
    class="px-6 lg:px-8 shadow-md flex flex-wrap items-center lg:py-3 py-2 bg-[--blue-] overflow-hidden sm:overflow-visible"
  >
    <div class="flex-1 flex justify-between items-center ps-2">
      <router-link :to="{ name: 'home' }">
        <img
          src="@/assets/icons/intermobilityBannier.png"
          alt="Intermobility Logo"
          class="intermobility_logo"
        />
      </router-link>
    </div>
    <button
      :class="{ hidden: menuIsOpen, block: !menuIsOpen }"
      class="cursor-pointer lg:hidden"
      @click="menuIsOpen = !menuIsOpen"
    >
      <svg
        class="fill-current text-white my-3"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </button>
    <div
      class="lg:flex lg:items-center lg:w-auto w-full sm:w-1/2 z-50 absolute top-0 right-0 bg-[--blue-] lg:static min-h-screen lg:min-h-fit pb-4 lg:pb-0 lg:px-0"
      :class="{ hidden: !menuIsOpen, block: menuIsOpen }"
    >
      <div
        :class="{ hidden: !menuIsOpen, block: menuIsOpen }"
        class="flex justify-between items-start"
      >
        <img
          src="@/assets/icons/intermobilityIcon.png"
          alt="Intermobility Logo"
          class="h-60 w-60"
        />
        <button class="cursor-pointer pe-6 pt-2" @click="menuIsOpen = !menuIsOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            class="bi bi-x-lg fill-current text-white my-3 stroke-white stroke-1"
            viewBox="0 0 16 16"
          >
            <title>close menu</title>
            <path
              d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"
            />
          </svg>
        </button>
      </div>
      <ul class="text-xl text-center items-center pt-4 lg:text-lg lg:flex lg:pt-0 ps-14 lg:ps-0">
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded hover:text-black text-white">
          <router-link :to="{ name: 'home' }" class="font-bold text-base flex items-center">
            Home
          </router-link>
        </li>
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded text-white lg:relative">
          <div
            class="font-bold text-base flex items-center cursor-pointer hover:text-black"
            @click="openDropdownAbout()"
          >
            About us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="arrow_dropdown"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>
          <ul
            class="flex flex-col pt-4 lg:pt-0 lg:absolute top-11 lg:right-0 rounded-b font-bold text-base bg-[--blue-]"
            :class="{ hidden: !dropdownAboutOpen, block: dropdownAboutOpen }"
          >
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'team' }" class="text-nowrap">Founding Team</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'expertises' }">Expertises</router-link>
            </li>
          </ul>
        </li>
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded text-white lg:relative">
          <div
            class="font-bold text-base flex items-center cursor-pointer hover:text-black"
            @click="openDropdownEngagement()"
          >
            Our engagements
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="arrow_dropdown"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>
          <ul
            class="flex flex-col pt-4 lg:pt-0 lg:absolute top-11 lg:right-0 rounded-b font-bold text-base bg-[--blue-]"
            :class="{ hidden: !dropdownEngagementOpen, block: dropdownEngagementOpen }"
          >
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'webinars' }">Webinars</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'conferences' }">Conferences</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'whitePapers' }" class="text-nowrap"
                >Reports & White papers</router-link
              >
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'cercleCime' }" class="text-nowrap"
                >Cercle CiME</router-link
              >
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'plugAndPlay' }" class="text-nowrap"
                >Plug & Play</router-link
              >
            </li>
          </ul>
        </li>
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded text-white lg:relative">
          <div
            class="font-bold text-base flex items-center cursor-pointer hover:text-black"
            @click="openDropdownAction()"
          >
            Our actions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="arrow_dropdown"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>
          <ul
            class="flex flex-col pt-4 lg:pt-0 lg:absolute top-11 lg:right-0 rounded-b font-bold text-base bg-[--blue-]"
            :class="{ hidden: !dropdownActionOpen, block: dropdownActionOpen }"
          >
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'actions' }" v-scroll-to="'#callAction'" class="text-nowrap"
                >Support call</router-link
              >
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link
                :to="{ name: 'actions' }"
                v-scroll-to="'#projectAction'"
                class="text-nowrap"
                >Consulting project</router-link
              >
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link
                :to="{ name: 'actions' }"
                v-scroll-to="'#eventAction'"
                class="text-nowrap"
                >Dedicated event</router-link
              >
            </li>
          </ul>
        </li>
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded text-white lg:relative">
          <div
            class="font-bold text-base flex items-center cursor-pointer hover:text-black"
            @click="openDropdownMedia()"
          >
            Our medias
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="arrow_dropdown"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </div>
          <ul
            class="flex flex-col pt-4 lg:pt-0 lg:absolute top-11 lg:right-0 rounded-b font-bold text-base bg-[--blue-] media_drowdown"
            :class="{ hidden: !dropdownMediaOpen, block: dropdownMediaOpen }"
          >
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'articles' }">Articles</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'podcasts' }" class="text-nowrap">Podcasts</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'books' }" class="text-nowrap">Books</router-link>
            </li>
          </ul>
        </li>
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded hover:text-black text-white">
          <router-link :to="{ name: 'contact' }" class="font-bold text-base flex items-center">
            Contact us
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const menuIsOpen = ref(false)

const dropdownAboutOpen = ref(false)
const dropdownEngagementOpen = ref(false)
const dropdownActionOpen = ref(false)
const dropdownMediaOpen = ref(false)

const openDropdownAbout = () => {
  dropdownAboutOpen.value = !dropdownAboutOpen.value
  dropdownEngagementOpen.value = false
  dropdownActionOpen.value = false
  dropdownMediaOpen.value = false
}

const openDropdownEngagement = () => {
  dropdownEngagementOpen.value = !dropdownEngagementOpen.value
  dropdownAboutOpen.value = false
  dropdownActionOpen.value = false
  dropdownMediaOpen.value = false
}

const openDropdownAction = () => {
  dropdownActionOpen.value = !dropdownActionOpen.value
  dropdownAboutOpen.value = false
  dropdownEngagementOpen.value = false
  dropdownMediaOpen.value = false
}

const openDropdownMedia = () => {
  dropdownMediaOpen.value = !dropdownMediaOpen.value
  dropdownAboutOpen.value = false
  dropdownEngagementOpen.value = false
  dropdownActionOpen.value = false
}

import router from '@/router'

router.afterEach(() => {
  menuIsOpen.value = false
  dropdownMediaOpen.value = false
  dropdownAboutOpen.value = false
  dropdownEngagementOpen.value = false
  dropdownActionOpen.value = false
})

window.addEventListener('resize', () => {
  if (window.innerWidth > 1023 && menuIsOpen.value == true) {
    menuIsOpen.value = false
  }
})
</script>

<style scoped>
.intermobility_logo {
  height: 2.5rem;
  scale: 1.5;
}

.arrow_dropdown {
  height: 1rem;
}

.media_drowdown {
  width: -webkit-fill-available;
}
</style>
