// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    typescript: {
        shim: false
    },
    css: [
        '@/assets/css/style.css',
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@pinia/nuxt'
    ],
    colorMode: {
        preference: 'system', // default theme
        dataValue: 'theme', // activate data-theme in <html> tag
        classSuffix: '',
    },
    // pinia: {
    //     autoImports: [
    //         // automatically imports `defineStore`
    //         'defineStore', // import { defineStore } from 'pinia'
    //         ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    //     ],
    // },
})
