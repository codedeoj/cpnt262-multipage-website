<template>
  <nav class="flex p-5 justify-center items-center bg-gray-900 text-white">
    <ul class="flex flex-wrap justify-center items-center gap-10">
      <li>
        <NuxtLink to="/" class="text-xl font-semibold hover:underline">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/services" class="text-xl font-semibold hover:underline">Services</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="text-xl font-semibold hover:underline">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="text-xl font-semibold hover:underline">Blog</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="text-xl font-semibold hover:underline">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>