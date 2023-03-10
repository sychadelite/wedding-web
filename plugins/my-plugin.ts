export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            myPlugin: () => 'String generated from my auto-imported plugin!',
            hello: (msg: string) => `Hello ${msg}!`
        }
    }
})