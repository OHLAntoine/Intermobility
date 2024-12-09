<template>
  <div class="flex flex-col items-start gap-1 w-full">
    <label :for="labelName" class="text-lg">{{ labelValue }}</label>
    <input
      :type="labelType"
      class="rounded p-2 border border-[--blue-] focus:border-[--dark_blue-] w-full"
      :name="labelName"
      :id="labelName"
      :placeholder="placeholderValue"
      v-model="modelValue"
      :required="required"
    />
  </div>
</template>

<script setup>
defineProps({
  labelType: String,
  labelName: String,
  labelValue: String,
  placeholderValue: String,
  required: String,
})

const modelValue = defineModel()
</script>

<style scoped></style>
