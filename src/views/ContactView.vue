<template>
  <section class="flex flex-col items-center justify-center py-16 gap-4">
    <h3>Contact us</h3>
    <form submit="" class="flex items-center justify-center w-full">
      <fieldset class="flex flex-col items-center justify-center gap-4 w-4/5 sm:w-1/2">
        <input-form
          v-for="(input, index) in store.form"
          :key="index"
          :inputName="input.inputName"
          :labelName="input.labelName"
          :inputType="input.inputType"
          :placeholderName="input.placeholderName"
          :required="input.required"
        ></input-form>
        <div class="flex items-center justify-center">
          <submit-button class="blue_button">Submit</submit-button>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script setup>
import InputForm from '@/components/form/InputForm.vue'
import SubmitButton from '@/components/buttons/SubmitButton.vue'

import { useMobilityStore } from '@/stores'
const store = useMobilityStore()
</script>

<style scoped></style>
