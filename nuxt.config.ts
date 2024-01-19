// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Smooch: [400],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
  },
})
