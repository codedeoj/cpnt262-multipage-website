<script setup>
  defineProps({
    title: {
      type: String,
    }
  })
</script>

<template>
  <header class="flex justify-center text-gray-900 font-bold text-5xl my-5">
    <h1>
      {{ title }}
    </h1>
  </header>
</template>