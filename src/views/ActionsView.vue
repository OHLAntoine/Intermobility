<template>
  <simple-section id="callAction">
    <h2>Support call</h2>
    <p class="text-xl w-full md:w-2/3 lg:w-1/2">
      Get 15 minutes of free expert advice on a topic of your choice. Unlock insights and solutions
      for your business.
    </p>
    <router-link-button pathName="home" class="blue_button"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-envelope stroke-white stroke-1"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
        />
      </svg>
      Get started
    </router-link-button>
  </simple-section>
  <simple-section id="projectAction" class="bg-[--blue-] text-white">
    <h2>Strategic consulting initiatives</h2>
    <p class="text-xl w-full md:w-2/3 lg:w-1/2">
      InterMobility provides you with expert guidance and support to ensure your projects are
      delivered on time and on target. Let's discuss how we can boost your project's success.
    </p>
    <router-link-button pathName="home" class="white_button"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-envelope stroke-[--blue-] stroke-1"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
        />
      </svg>
      Contact us
    </router-link-button>
  </simple-section>
  <simple-section id="eventAction">
    <h2>Exclusive network gathering</h2>
    <p class="text-xl w-full md:w-2/3 lg:w-1/2">
      InterMobility empowers your company or association's growth and amplifies your message.
      Harness our extensive network to co-create impactful events with us.
    </p>
    <router-link-button pathName="home" class="blue_button"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-envelope stroke-white stroke-1"
        viewBox="0 0 16 16"
      >
        <path
          d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
        />
      </svg>
      Get started
    </router-link-button>
  </simple-section>
</template>

<script setup>
import SimpleSection from '@/components/sections/SimpleSection.vue'
import RouterLinkButton from '@/components/buttons/RouterLinkButton.vue'
</script>

<style scoped></style>
