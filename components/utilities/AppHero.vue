<script setup>
  defineProps({
    info: {
      type: Object,
      default() {
        return {
          title: "We help ambitious companies build successful digital products.",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At tempora facere optio aperiam impedit ducimus quae assumenda consequuntur molestias, iste aliquam numquam aut alias deserunt! Fugiat quae laboriosam earum beatae."
        };
      },
    },
    link: {
      type: Object,
      default() {
        return {
          url: "#",
          text: "Get Started",
        };
      },
    },
  })
</script>

<template>
  <main class="mx-auto mt-10 py-20 px-20 max-w-7xl shadow-xl">
    <div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 font-extrabold ">
        {{ info.title }}
      </h1>
      <p class="mt-8 text-gray-500 max-w-xl text-xl mx-0">
        {{ info.description }}
      </p>
      <div class="flex justify-start flex-wrap my-5">
        <div class="mr-5">
          <NuxtLink :to="link.url" class="inline-block rounded my-2 px-5 py-3 text-xl font-semibold bg-pink-600 hover:bg-gray-900 text-white">
        {{ link.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>