<template>
  <div class="flex flex-col items-start gap-1 w-full">
    <label :for="labelName" class="text-lg">{{ labelValue }}</label>
    <textarea
      :type="labelType"
      class="rounded p-2 border border-[--blue-] focus:border-[--dark_blue-] w-full"
      :name="labelName"
      :id="labelName"
      :placeholder="placeholderValue"
      v-model="modelValue"
      :required="required"
      :rows="textareaRows"
    ></textarea>
  </div>
</template>

<script setup>
defineProps({
  labelType: String,
  labelName: String,
  labelValue: String,
  placeholderValue: String,
  textareaRows: String || Number,
  required: String,
})

const modelValue = defineModel()
</script>

<style scoped></style>
