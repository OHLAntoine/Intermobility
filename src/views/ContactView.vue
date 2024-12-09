<template>
  <section class="flex flex-col items-center justify-center py-16 gap-4">
    <h3>Contact us</h3>
    <form @submit.prevent="sendEmail()" class="flex items-center justify-center w-full">
      <fieldset class="flex flex-col items-center justify-center gap-4 w-4/5 sm:w-1/2">
        <base-input
          labelType="text"
          labelName="firstname"
          labelValue="Your firstname :"
          placeholderValue="Your firstname"
          required="required"
          v-model="firstnameValue"
        ></base-input>
        <base-input
          labelType="text"
          labelName="lastname"
          labelValue="Your lastname :"
          placeholderValue="Your lastname"
          required="required"
          v-model="lastnameValue"
        ></base-input>
        <base-input
          labelType="email"
          labelName="email"
          labelValue="Your email :"
          placeholderValue="Your email"
          required="required"
          v-model="emailValue"
        ></base-input>
        <base-input
          labelType="tel"
          labelName="tel"
          labelValue="Your telephone number :"
          placeholderValue="Your telephone number (Optionnal)"
          v-model="telValue"
        ></base-input>
        <base-input
          labelType="text"
          labelName="subject"
          labelValue="Your email subject :"
          placeholderValue="Your email subject"
          required="required"
          v-model="subjectValue"
        ></base-input>
        <base-textarea
          labelType="text"
          labelName="message"
          labelValue="Your message :"
          placeholderValue="Write your message"
          v-model="messageValue"
          required="required"
          textareaRows="3"
        ></base-textarea>
        <div class="flex items-center justify-center">
          <submit-button class="blue_button">Submit</submit-button>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/form/BaseInput.vue'
import BaseTextarea from '@/components/form/BaseTextarea.vue'
import SubmitButton from '@/components/buttons/SubmitButton.vue'

const firstnameValue = ref('')
const lastnameValue = ref('')
const emailValue = ref('')
const telValue = ref('')
const subjectValue = ref('')
const messageValue = ref('')

import emailjs from '@emailjs/browser'

function sendEmail() {
  ;(function () {
    emailjs.init('WJ3IcHoOqkApdz1Zq')
  })()

  let params = {
    firstname: firstnameValue.value,
    lastname: lastnameValue.value,
    email: emailValue.value,
    tel: telValue.value,
    subject: subjectValue.value,
    message: messageValue.value,
  }

  let serviceID = 'service_y1nba1c'
  let templateID = 'template_ukx0bam'

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert('Email send succesfully ! Thank you', res.status)
    })
    .catch((err) => {
      alert(
        'Failed... Try again later please or mail me to : francois.hoehlinger@gmail.com or our socials !',
        err,
      )
    })
}
</script>

<style scoped></style>
