// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  plugins: ["~/plugins/country-codes.ts"],
  components: true,
  devtools: { enabled: true },
});
