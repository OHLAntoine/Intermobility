<template>
  <nav class="lg:px-16 px-6 shadow-md flex flex-wrap items-center lg:py-3 py-2 header_navbar">
    <div class="flex-1 flex justify-between items-center">
      <router-link :to="{ name: 'home' }">
        <img
          src="../../assets/icons/intermobilityBannier.png"
          alt="Intermobility Logo"
          class="intermobility_logo"
        />
      </router-link>
    </div>
    <label for="menu-toggle" class="cursor-pointer lg:hidden block">
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
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />
    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <ul
        class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0"
      >
        <li class="py-2 lg:py-0">
          <router-link
            :to="{ name: 'home' }"
            class="text-white font-bold text-base flex items-center"
          >
            Home
          </router-link>
        </li>
        <li class="py-2 lg:py-0">
          <router-link
            :to="{ name: 'home' }"
            class="text-white font-bold text-base flex items-center"
          >
            About us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              class="arrow_dropdown"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </router-link>
        </li>
        <li class="py-2 lg:py-0">
          <router-link
            :to="{ name: 'home' }"
            class="text-white font-bold text-base flex items-center"
          >
            Our Engagements
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              class="arrow_dropdown"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </router-link>
        </li>
        <li class="py-2 lg:py-0">
          <router-link
            :to="{ name: 'home' }"
            class="text-white font-bold text-base flex items-center"
          >
            How we can help you
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              class="arrow_dropdown"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </router-link>
        </li>
        <li class="py-2 lg:py-0">
          <router-link
            :to="{ name: 'home' }"
            class="text-white font-bold text-base flex items-center"
          >
            Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="white"
              class="arrow_dropdown"
            >
              <path d="M12 16L6 10H18L12 16Z"></path>
            </svg>
          </router-link>
        </li>
        <li class="py-2 lg:py-0">
          <router-link
            :to="{ name: 'home' }"
            class="text-white font-bold text-base flex items-center"
          >
            They support us
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
#menu-toggle:checked + #menu {
  display: block;
}

.intermobility_logo {
  height: 2.5rem;
  scale: 1.5;
}

.arrow_dropdown {
  height: 1rem;
}
</style>
