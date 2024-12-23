<template>
  <div class="bg-[--blue-] px-6 lg:px-8 lg:py-3 py-2">
    <nav
      class="flex gap-2 sm:gap-0 items-center justify-between text-white border-t border-white py-4"
    >
      <div class="flex items-center">
        <router-link :to="{ name: 'home' }">
          <img
            src="@/assets/icons/intermobilityIcon.png"
            alt="Intermobility Logo"
            class="intermobility_logo h-12 border-[1px] rounded-full border-white"
          />
        </router-link>
        <p class="text-sm ps-2 text-center sm:text-left">© Company, Inc. All rights reserved.</p>
      </div>
      <div class="flex gap-4 items-center justify-center">
        <social-link socialLinkPath="https://www.linkedin.com/company/intermobility-eu/posts/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
            ></path>
          </svg>
        </social-link>
        <social-link socialLinkPath="mailto:francois.hoehlinger@gmail.com">
          <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-envelope" viewBox="0 0 16 16">
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            />
          </svg>
        </social-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
import SocialLink from '@/components/buttons/SocialLink.vue'
</script>

<style scoped></style>
