<template>
  <nav class="px-6 lg:px-8 shadow-md flex flex-wrap items-center lg:py-3 py-2 bg-[--blue-]">
    <div class="flex-1 flex justify-between items-center ps-2">
      <router-link :to="{ name: 'home' }">
        <img
          src="../../assets/icons/intermobilityBannier.png"
          alt="Intermobility Logo"
          class="intermobility_logo"
        />
      </router-link>
    </div>
    <button class="cursor-pointer lg:hidden block" @click="menuIsOpen = !menuIsOpen">
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
      class="lg:flex lg:items-center lg:w-auto w-full"
      :class="{ hidden: !menuIsOpen, block: menuIsOpen }"
    >
      <ul class="text-xl text-center items-center pt-4 lg:text-lg lg:flex lg:pt-0">
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded hover:text-black text-white">
          <router-link :to="{ name: 'home' }" class="font-bold text-base flex items-center">
            Home
          </router-link>
        </li>
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded text-white lg:relative">
          <div
            class="font-bold text-base flex items-center cursor-pointer hover:text-black"
            @click="
              (dropdownAboutOpen = !dropdownAboutOpen),
                (dropdownEngagementOpen = false),
                (dropdownActionOpen = false),
                (dropdownMediaOpen = false)
            "
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
              <router-link :to="{ name: 'home' }" class="text-nowrap">Founding Team</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'home' }">Expertises</router-link>
            </li>
          </ul>
        </li>
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded text-white lg:relative">
          <div
            class="font-bold text-base flex items-center cursor-pointer hover:text-black"
            @click="
              (dropdownEngagementOpen = !dropdownEngagementOpen),
                (dropdownAboutOpen = false),
                (dropdownActionOpen = false),
                (dropdownMediaOpen = false)
            "
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
              <router-link :to="{ name: 'home' }">Webinars</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'home' }">Conferences</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'home' }" class="text-nowrap"
                >Reports & White papers</router-link
              >
            </li>
          </ul>
        </li>
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded text-white lg:relative">
          <div
            class="font-bold text-base flex items-center cursor-pointer hover:text-black"
            @click="
              (dropdownActionOpen = !dropdownActionOpen),
                (dropdownAboutOpen = false),
                (dropdownEngagementOpen = false),
                (dropdownMediaOpen = false)
            "
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
              <router-link :to="{ name: 'home' }" class="text-nowrap">Support call</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'home' }" class="text-nowrap"
                >Consulting project</router-link
              >
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'home' }" class="text-nowrap">Dedicated event</router-link>
            </li>
          </ul>
        </li>
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded text-white lg:relative">
          <div
            class="font-bold text-base flex items-center cursor-pointer hover:text-black"
            @click="
              (dropdownMediaOpen = !dropdownMediaOpen),
                (dropdownAboutOpen = false),
                (dropdownEngagementOpen = false),
                (dropdownActionOpen = false)
            "
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
            class="flex flex-col pt-4 lg:pt-0 lg:absolute top-11 lg:right-0 rounded-b font-bold text-base bg-[--blue-]"
            :class="{ hidden: !dropdownMediaOpen, block: dropdownMediaOpen }"
          >
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'home' }">Articles</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'home' }" class="text-nowrap">Podcasts</router-link>
            </li>
            <li class="lg:border lg:border-white"></li>
            <li
              class="py-4 px-4 text-left lg:text-center hover:text-black hover:bg-white rounded lg:rounded-none"
            >
              <router-link :to="{ name: 'home' }" class="text-nowrap">Books</router-link>
            </li>
          </ul>
        </li>
        <li class="py-2 lg:py-0 px-0 lg:px-2 rounded hover:text-black text-white">
          <router-link :to="{ name: 'home' }" class="font-bold text-base flex items-center">
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
</script>

<style scoped>
.intermobility_logo {
  height: 2.5rem;
  scale: 1.5;
}

.arrow_dropdown {
  height: 1rem;
}
</style>
