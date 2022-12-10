<script setup>
  defineProps({
    title: {
      type: String,
    }
  })
</script>

<template>
  <header class="flex justify-center text-center text-gray-900 font-bold text-3xl lg:text-4xl xl:text-5xl my-5">
    <h1>
      {{ title }}
    </h1>
  </header>
</template>