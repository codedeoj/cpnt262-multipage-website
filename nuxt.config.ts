// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title:"Evolving Web Technologies",
      meta: [
        {
          name: "description",
          content: "We develop amazing mobile apps & digital products",
        },
      ],
    },
  },
  modules: [
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
  ],
  components: [
    "~/components",
    "~/components/ui",
    "~/components/layout",
    "~/components/utilities",
  ],
})
