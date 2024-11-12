<script setup>
import { RouterView } from 'vue-router'
import HeaderView from '@/components/navbars/HeaderView.vue'
import FooterView from '@/components/navbars/FooterView.vue'
</script>

<template>
  <header>
    <header-view />
  </header>
  <main class="flex flex-col flex-grow">
    <router-view />
  </main>
  <footer>
    <footer-view />
  </footer>
</template>
