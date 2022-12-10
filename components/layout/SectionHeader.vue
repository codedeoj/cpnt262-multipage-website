<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <header class="text-2xl md:text-3xl font-bold text-center text-gray-900 mt-10">
    <h2>{{ title }}</h2>
  </header>
</template>