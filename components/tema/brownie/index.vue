<template>
    <div>
        <div
            class="relative text-center w-full h-screen bg-[url('https://satumomen.com/themes/adat-aceh/bg.jpg')] bg-cover bg-center bg-no-repeat">
            <section v-if="currentSection === 'overview'" id="overview" class="relative h-full w-full">
                <div class="frame">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tl.png" alt="frame"
                        class="absolute top-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInTopLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tr.png" alt="frame"
                        class="absolute top-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInTopRight animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-bl.png" alt="frame"
                        class="absolute bottom-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-br.png" alt="frame"
                        class="absolute bottom-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomRight animate__slower">
                </div>
                <div class="absolute w-full h-screen z-10">
                    <div :class="isMobile && width < 640 && height > 420 ? 'justify-center gap-[2vmax]' : 'justify-evenly gap-[1vmax]'"
                        class="relative flex flex-col items-center h-screen">
                        <div :class="isMobile && width < 640 && height > 420 ? 'mt-[2.5vmax]' : ''"
                            class="flex flex-col gap-[1vmax] w-full animate__animated animate__fadeInDown animate__slower">
                            <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                class="font-['Berkshire_Swash'] text-[#515151]">You are invited</h2>
                            <img src="https://satumomen.com/themes/adat-aceh/character.png" alt="book-character"
                                :class="isMobile && width < 640 && height > 420 ? 'w-[35vmax]' : isMobile && height <= 420 ? 'w-[10vmax]' : 'w-[20vmax]'"
                                class="object-cover mx-auto ease-in duration-200">
                            <div class="animate__animated animate__fadeInUp animate__slower">
                                <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                    class="font-['Berkshire_Swash'] text-[#515151]">
                                    Kepada Yth;
                                </h2>
                                <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                    class="font-['Berkshire_Swash'] text-[#515151]">
                                    Bapak/Ibu/Saudara/{{ height }}
                                </h2>
                                <h1 :class="isMobile && width < 640 && height > 420 ? 'text-[3.25vmax] w-2/3' : 'text-[2.25vmax]  w-3/3'"
                                    class="font-['Berkshire_Swash'] text-[#B98E30] mx-auto animate__animated animate__fadeInUp animate__slower">
                                    Mohammad Barj Lazuardi Dindashwara
                                </h1>
                            </div>
                        </div>
                        <button @click.prevent="openInvitation()"
                            :class="isMobile && width < 640 && height > 420 ? 'text-[2vmax]' : 'text-[1vmax] -mt-[2vmax]'"
                            class="font-['Berkshire_Swash'] text-white py-[1vmax] px-[2vmax] bg-[#B98E30] glass rounded-full cursor-pointer hover:bg-secondary ease-in duration-200 animate__animated animate__fadeInUp animate__slow">
                            Buka Undangan
                        </button>
                    </div>
                </div>
            </section>

            <section v-else-if="currentSection === 'cover'" id="cover" class="relative h-[90vh] w-full">
                <div class="frame">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tl.png" alt="frame"
                        class="absolute top-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInTopLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tr.png" alt="frame"
                        class="absolute top-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInTopRight animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-bl.png" alt="frame"
                        class="absolute bottom-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-br.png" alt="frame"
                        class="absolute bottom-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomRight animate__slower">
                </div>
                <div class="absolute w-full h-[85vh] z-10">
                    <div :class="isMobile && width < 640 && height > 420 ? 'justify-center gap-[2vmax]' : 'justify-evenly gap-[1vmax]'"
                        class="relative flex flex-col items-center h-[90vh]">
                        <div class="flex flex-col gap-[1vmax] w-full animate__animated animate__fadeInDown animate__slower">
                            <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                class="font-['Berkshire_Swash'] text-[#515151]">You are invited</h2>
                            <img src="https://satumomen.com/themes/adat-aceh/character.png" alt="book-character"
                                :class="isMobile && width < 640 && height > 420 ? 'w-[28vmax]' : isMobile && height <= 420 ? 'w-[10vmax]' : 'w-[20vmax]'"
                                class="object-cover mx-auto ease-in duration-200">
                            <div class="animate__animated animate__fadeInUp animate__slower">
                                <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                    class="font-['Berkshire_Swash'] text-[#515151]">
                                    Kepada Yth;
                                </h2>
                                <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                    class="font-['Berkshire_Swash'] text-[#515151]">
                                    Bapak/Ibu/Saudara/{{ height }}
                                </h2>
                                <h1 :class="isMobile && width < 640 && height > 420 ? 'text-[3.25vmax] w-2/3' : 'text-[2.25vmax]  w-3/3'"
                                    class="font-['Berkshire_Swash'] text-[#B98E30] mx-auto animate__animated animate__fadeInUp animate__slower">
                                    Mohammad Barj Lazuardi Dindashwara
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else-if="currentSection === 'opening'" id="opening" class="relative h-[90vh] w-full">
                <div class="frame">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tl.png" alt="frame"
                        class="absolute top-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInTopLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tr.png" alt="frame"
                        class="absolute top-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInTopRight animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-bl.png" alt="frame"
                        class="absolute bottom-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-br.png" alt="frame"
                        class="absolute bottom-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomRight animate__slower">
                </div>
                <div class="absolute w-full h-[85vh] z-10">
                    <div :class="isMobile && width < 640 && height > 420 ? 'justify-center gap-[2vmax]' : 'justify-evenly gap-[1vmax]'"
                        class="relative flex flex-col items-center h-[90vh]">
                        <div class="flex flex-col gap-[1vmax] w-full animate__animated animate__fadeInDown animate__slower">
                            <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                class="font-['Berkshire_Swash'] text-[#515151]">{{ currentSection }}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else-if="currentSection === 'mempelai'" id="mempelai" class="relative h-[90vh] w-full">
                <div class="frame">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tl.png" alt="frame"
                        class="absolute top-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInTopLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tr.png" alt="frame"
                        class="absolute top-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInTopRight animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-bl.png" alt="frame"
                        class="absolute bottom-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-br.png" alt="frame"
                        class="absolute bottom-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomRight animate__slower">
                </div>
                <div class="absolute w-full h-[85vh] z-10">
                    <div :class="isMobile && width < 640 && height > 420 ? 'justify-center gap-[2vmax]' : 'justify-evenly gap-[1vmax]'"
                        class="relative flex flex-col items-center h-[90vh]">
                        <div class="flex flex-col gap-[1vmax] w-full animate__animated animate__fadeInDown animate__slower">
                            <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                class="font-['Berkshire_Swash'] text-[#515151]">{{ currentSection }}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else-if="currentSection === 'acara'" id="acara" class="relative h-[90vh] w-full">
                <div class="frame">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tl.png" alt="frame"
                        class="absolute top-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInTopLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tr.png" alt="frame"
                        class="absolute top-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInTopRight animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-bl.png" alt="frame"
                        class="absolute bottom-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-br.png" alt="frame"
                        class="absolute bottom-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomRight animate__slower">
                </div>
                <div class="absolute w-full h-[85vh] z-10">
                    <div :class="isMobile && width < 640 && height > 420 ? 'justify-center gap-[2vmax]' : 'justify-evenly gap-[1vmax]'"
                        class="relative flex flex-col items-center h-[90vh]">
                        <div class="flex flex-col gap-[1vmax] w-full animate__animated animate__fadeInDown animate__slower">
                            <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                class="font-['Berkshire_Swash'] text-[#515151]">{{ currentSection }}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else-if="currentSection === 'maps'" id="maps" class="relative h-[90vh] w-full">
                <div class="frame">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tl.png" alt="frame"
                        class="absolute top-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInTopLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tr.png" alt="frame"
                        class="absolute top-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInTopRight animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-bl.png" alt="frame"
                        class="absolute bottom-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-br.png" alt="frame"
                        class="absolute bottom-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomRight animate__slower">
                </div>
                <div class="absolute w-full h-[85vh] z-10">
                    <div :class="isMobile && width < 640 && height > 420 ? 'justify-center gap-[2vmax]' : 'justify-evenly gap-[1vmax]'"
                        class="relative flex flex-col items-center h-[90vh]">
                        <div class="flex flex-col gap-[1vmax] w-full animate__animated animate__fadeInDown animate__slower">
                            <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                class="font-['Berkshire_Swash'] text-[#515151]">{{ currentSection }}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else-if="currentSection === 'rsvp'" id="rsvp" class="relative h-[90vh] w-full">
                <div class="frame">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tl.png" alt="frame"
                        class="absolute top-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInTopLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tr.png" alt="frame"
                        class="absolute top-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInTopRight animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-bl.png" alt="frame"
                        class="absolute bottom-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-br.png" alt="frame"
                        class="absolute bottom-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomRight animate__slower">
                </div>
                <div class="absolute w-full h-[85vh] z-10">
                    <div :class="isMobile && width < 640 && height > 420 ? 'justify-center gap-[2vmax]' : 'justify-evenly gap-[1vmax]'"
                        class="relative flex flex-col items-center h-[90vh]">
                        <div class="flex flex-col gap-[1vmax] w-full animate__animated animate__fadeInDown animate__slower">
                            <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                class="font-['Berkshire_Swash'] text-[#515151]">{{ currentSection }}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else-if="currentSection === 'gift'" id="gift" class="relative h-[90vh] w-full">
                <div class="frame">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tl.png" alt="frame"
                        class="absolute top-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInTopLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tr.png" alt="frame"
                        class="absolute top-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInTopRight animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-bl.png" alt="frame"
                        class="absolute bottom-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-br.png" alt="frame"
                        class="absolute bottom-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomRight animate__slower">
                </div>
                <div class="absolute w-full h-[85vh] z-10">
                    <div :class="isMobile && width < 640 && height > 420 ? 'justify-center gap-[2vmax]' : 'justify-evenly gap-[1vmax]'"
                        class="relative flex flex-col items-center h-[90vh]">
                        <div class="flex flex-col gap-[1vmax] w-full animate__animated animate__fadeInDown animate__slower">
                            <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                class="font-['Berkshire_Swash'] text-[#515151]">{{ currentSection }}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else-if="currentSection === 'protokol'" id="protokol" class="relative h-[90vh] w-full">
                <div class="frame">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tl.png" alt="frame"
                        class="absolute top-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInTopLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tr.png" alt="frame"
                        class="absolute top-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInTopRight animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-bl.png" alt="frame"
                        class="absolute bottom-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-br.png" alt="frame"
                        class="absolute bottom-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomRight animate__slower">
                </div>
                <div class="absolute w-full h-[85vh] z-10">
                    <div :class="isMobile && width < 640 && height > 420 ? 'justify-center gap-[2vmax]' : 'justify-evenly gap-[1vmax]'"
                        class="relative flex flex-col items-center h-[90vh]">
                        <div class="flex flex-col gap-[1vmax] w-full animate__animated animate__fadeInDown animate__slower">
                            <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                class="font-['Berkshire_Swash'] text-[#515151]">{{ currentSection }}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section v-else-if="currentSection === 'thanks'" id="thanks" class="relative h-[90vh] w-full">
                <div class="frame">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tl.png" alt="frame"
                        class="absolute top-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInTopLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-tr.png" alt="frame"
                        class="absolute top-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInTopRight animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-bl.png" alt="frame"
                        class="absolute bottom-0 left-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomLeft animate__slower">
                    <img src="https://satumomen.com/themes/adat-aceh/frame-br.png" alt="frame"
                        class="absolute bottom-0 right-0 w-[30vmax] z-0 animate__animated animate__fadeInBottomRight animate__slower">
                </div>
                <div class="absolute w-full h-[85vh] z-10">
                    <div :class="isMobile && width < 640 && height > 420 ? 'justify-center gap-[2vmax]' : 'justify-evenly gap-[1vmax]'"
                        class="relative flex flex-col items-center h-[90vh]">
                        <div class="flex flex-col gap-[1vmax] w-full animate__animated animate__fadeInDown animate__slower">
                            <h2 :class="isMobile && width < 640 && height > 420 ? 'text-[2.5vmax]' : 'text-[1.5vmax]'"
                                class="font-['Berkshire_Swash'] text-[#515151]">{{ currentSection }}</h2>
                        </div>
                    </div>
                </div>
            </section>

            <TemaBrownieBottomNav v-if="currentSection !== 'overview'" 
            :isMobile="isMobile"
            :isTablet="isTablet"
            :width="width"
            :height="height"
            :currentSection="currentSection" 
            />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStates } from '~/composables/states'

const props = defineProps(['temaName'])

const store = useStates()

let isMobile = useState('isMobile').value
let isTablet = useState('isTablet').value

let width = ref(store.page.width)
let height = ref(store.page.height)
let currentSection = ref(store.section.current)

watch(store.page, (newState) => {
    width.value = newState.width
    height.value = newState.height
})

watch(store.section, (newState) => {
    currentSection.value = newState.current
})

onMounted(() => {
})

function openInvitation() {
    store.setSection('cover')
}

console.log('Theme: Brownie', '\nIs Mobile: ', isMobile)
</script>