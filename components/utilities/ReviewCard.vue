<template>
  <div class="md:flex bg-white rounded-lg p-6 border border-gray-200 shadow mx-20 my-10">
    <img class="h-16 w-16  md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" :src="review.picture.large" alt="Profile Photo" />
    <div class="text-center md:text-left">
      <h2 class="font-bold text-2xl">
        {{ review.login.username }}
      </h2>
      <div class="text-gray-600 text-md">
        {{ review.location.country }}
      </div>
      <p class="text-gray-900 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quod repellendus in pariatur totam esse illum facere necessitatibus laborum voluptas?</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["review"],
};
</script>
