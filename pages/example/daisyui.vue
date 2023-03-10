<template>
    <div>
        <NuxtLayout name="custom">
            <div class="relative flex flex-col w-full min-h-screen">
                <div class="p-4 flex flex-wrap gap-4">
                    <button class="btn">Hello daisyUI</button>
                    <select class="select w-36" v-model="colorMode.preference">
                        <option disabled selected>Theme</option>
                        <option v-for="theme of themes" :key="theme">{{ theme }}</option>
                    </select>
                </div>
                <div class="hero bg-base-300 py-10">
                    <div class="hero-content text-center">
                        <div class="max-w-md">
                            <h1 class="text-5xl font-bold">Hello there</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                                exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
                <div class="p-4 sm:p-10">
                    <div class="card w-full max-w-md mx-auto bg-base-200 shadow-xl pt-8">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary mt-4">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
const colorMode = useColorMode()
const themes = [
    'system',
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'mytheme'
]
</script>

<style scoped></style>