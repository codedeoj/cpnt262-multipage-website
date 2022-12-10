<template>
  <div>
    <form class="flex flex-col max-w-3xl m-auto rounded-lg shadow-xl px-8 py-8">
      <h1 class="font-bold text-xl">Send a message</h1>

      <label for="name" class="text-gray-900 font-normal mt-5">Full name:</label>
      <input type="text" name="name" class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-pink-500 font-normal text-gray-900" />

      <label for="email" class="text-gray-900 font-normal mt-5">Email:</label>
      <input type="text" name="email" class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-pink-500 font-normal text-gray-900" />

      <label for="subject" class="text-gray-900 font-normal mt-5">Subject:</label>
      <input type="text" name="subject" class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-pink-500 font-normal text-gray-900" />

      <label for="message" class="text-gray-900 font-normal mt-4 dark:text-gray-50">Message:</label>
      <textarea name="message" class="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-pink-500 font-light text-gray-900"></textarea>
      <div class="flex flex-row items-center justify-start mt-5">
        <button type="submit" class="inline-block px-10 py-3 text-xl rounded font-semibold bg-pink-600 hover:bg-black text-white">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>