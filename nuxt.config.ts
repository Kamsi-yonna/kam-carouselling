import getHeadScripts from "./commons/head-scripts";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  pages: true,

  ssr: false,

  devServer: {
    port: 3002,
  },

  app: {
    head: {
      link: [
        {
          rel: "shortcut icon",
          type: "image/x-icon",
          href: "https://cdn.prod.website-files.com/67245aca623c6cfc8f245f78/673a615900a0d08adfb08e77_favicon.png",
        },
        {
          rel: "apple-touch-icon",
          href: "https://cdn.prod.website-files.com/67245aca623c6cfc8f245f78/673a611ed3b5194a44a2842f_ico.png",
        },
      ],
      script: [...getHeadScripts()],
    },
  },

  css: [
    "/public/assets/css/kam-caroselling.webflow.d19ad660d.css",
    "/public/assets/css/main.css",
  ],
});
