<template>
  <div class="flex flex-col items-start gap-1 w-full">
    <label :for="inputName" class="text-lg">{{ labelName }}</label>
    <input
      :type="inputType"
      class="rounded p-2 border border-[--blue-] focus:border-[--dark_blue-] w-full"
      :name="inputName"
      :id="inputName"
      :placeholder="placeholderName"
      :required="required"
    />
  </div>
</template>

<script setup>
defineProps({
  inputName: String,
  labelName: String,
  inputType: String,
  placeholderName: String,
  required: String,
})
</script>

<style scoped></style>
