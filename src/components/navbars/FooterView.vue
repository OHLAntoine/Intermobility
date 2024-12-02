<template>
  <div class="bg-[--blue-] px-6 lg:px-8 lg:py-3 py-2">
    <nav class="flex items-center justify-between text-white border-t border-white pt-2">
      <div class="flex items-center">
        <router-link :to="{ name: 'home' }">
          <img
            src="@/assets/icons/intermobilityIcon.png"
            alt="Intermobility Logo"
            class="intermobility_logo h-12 border-[1px] rounded-full border-white"
          />
        </router-link>
        <p class="text-sm ps-2">© Company, Inc. All rights reserved.</p>
      </div>
      <div class="flex gap-4 items-center">
        <social-link socialLinkPath="https://www.linkedin.com/company/intermobility-eu/posts/">
          <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
            />
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
