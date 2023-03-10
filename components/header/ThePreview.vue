<template>
    <div>
        <input type="checkbox"
            class="toggle toggle-warning absolute left-[1.25vmax] top-[47%] w-[3vmax] h-[2vmax] max-w-[3vmax] max-h-[2vmax] rotate-90 border-[.125vmax] z-30"
            @change="toggleHeaderPreview($event)" :checked="isShownPreviewHeader" />
        <button id="btnMusic"
            class="absolute top-[46.5%] right-[2.25vmax] p-[.5vmax] bg-[#B98E30] glass rounded-full cursor-pointer hover:bg-secondary animate__animated animate__fadeInRight animate__slower z-30">
            <svg xmlns="http://www.w3.org/2000/svg" height="1.75vmax" width="1.75vmax" viewBox="0 0 20 20" fill="#f5f5f5">
                <path
                    d="M18 3a1 1 0 0 0-1.196-.98l-10 2A1 1 0 0 0 6 5v9.114A4.369 4.369 0 0 0 5 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0 0 15 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z">
                </path>
            </svg>
        </button>
        <nav id="topnav"
            :class="isShownPreviewHeader ? '' : '-translate-y-[10vmax]', isMobile ? 'py-[1vmax] px-[1vmax]' : 'py-[1vmax] px-[2vmax]'"
            class="fixed flex items-center right-0 left-0 ease-in-out mx-auto block w-full max-w-[90%] rounded-[.75vmax] border border-[.1vmax] border-white/80 bg-opacity-80 mt-[1vmax] text-primary-content shadow-md backdrop-blur-2xl backdrop-saturate-200 duration-300 z-50">
            <div :class="isMobile ? 'h-[3.75vmax] min-h-[4.75vmax]' : 'h-[2.75vmax] min-h-[2.75vmax]'"
                class="navbar-start flex items-center">
                <button
                    :class="isMobile ? 'px-[.75vmax] h-[3.75vmax] min-h-[3.75vmax] min-w-[12.25vmax] text-[1.25vmax]' : 'p-[.5vmax] h-[2.75vmax] min-h-[2.75vmax] text-[.85vmax]'"
                    class="btn btn-outline absolute rounded-[.75vmax] border-[.1vmax] btn-secondary font-['Inter'] leading-[normal]">
                    <svg :width="isMobile ? '2.5vmax' : '1.5vmax'" :height="isMobile ? '2.5vmax' : '1.5vmax'"
                        :class="isMobile ? 'mr-[1.25vmax]' : 'mr-[.5vmax]'" viewBox="0 0 24 24" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM13.92 16.13H9C8.59 16.13 8.25 15.79 8.25 15.38C8.25 14.97 8.59 14.63 9 14.63H13.92C15.2 14.63 16.25 13.59 16.25 12.3C16.25 11.01 15.21 9.97 13.92 9.97H8.85L9.11 10.23C9.4 10.53 9.4 11 9.1 11.3C8.95 11.45 8.76 11.52 8.57 11.52C8.38 11.52 8.19 11.45 8.04 11.3L6.47 9.72C6.18 9.43 6.18 8.95 6.47 8.66L8.04 7.09C8.33 6.8 8.81 6.8 9.1 7.09C9.39 7.38 9.39 7.86 9.1 8.15L8.77 8.48H13.92C16.03 8.48 17.75 10.2 17.75 12.31C17.75 14.42 16.03 16.13 13.92 16.13Z"
                            fill="currentColor" />
                    </svg>
                    Kembali
                </button>
            </div>
            <div class="navbar-center flex">
                <h1 :class="isMobile ? 'text-[2vmax]' : 'text-[1.25vmax]'"
                    class="font-['Inter'] font-semibold text-secondary">
                    Wedding Web
                </h1>
            </div>
            <div :class="isMobile ? 'h-[3.75vmax] min-h-[4.75vmax]' : 'h-[2.75vmax] min-h-[2.75vmax]'"
                class="navbar-end flex items-center">
                <label for="my-modal-4"
                    :class="isMobile ? 'px-[.75vmax] h-[3.75vmax] min-h-[3.75vmax] min-w-[12.25vmax] text-[1.25vmax]' : 'p-[.5vmax] h-[2.75vmax] min-h-[2.75vmax] text-[.85vmax]'"
                    class="btn absolute rounded-[.75vmax] border-[.1vmax] btn-secondary font-['Inter'] leading-[normal]">
                    <svg :width="isMobile ? '2.5vmax' : '1.5vmax'" :height="isMobile ? '2.5vmax' : '1.5vmax'"
                        :class="isMobile ? 'mr-[1.25vmax]' : 'mr-[.5vmax]'" viewBox="0 0 24 24" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16 12.75H12.75V16C12.75 16.41 12.41 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16V12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H11.25V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z"
                            fill="currentColor" />
                    </svg>
                    Gunakan
                </label>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

let isShownPreviewHeader = ref(useState('isShownPreviewHeader', () => true))
const isMobile = useState('isMobile')

onMounted(() => {
    // Scroll Listener
    /* var previousScroll = 0
    const header = document.querySelector('#topnav');
    const initScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (initScroll === 0) {
        header.classList.remove('max-w-[90%]', 'rounded-xl');
        header.classList.add('max-w-[100%]', '-translate-y-6', 'lg:backdrop-blur-none', 'lg:backdrop-filter-none', 'lg:shadow-none', 'lg:border-none');
    }
    window.addEventListener('scroll', function () {
        var scroll = window.scrollY;
        if (scroll > previousScroll) {
            header.classList.remove('translate-y-0', '-translate-y-6', 'max-w-[100%]');
            header.classList.add('-translate-y-[150%]', 'max-w-[90%]', 'rounded-xl');
        } else {
            header.classList.remove('-translate-y-[150%]');
            if (scroll === 0) {
                header.classList.remove('max-w-[90%]', 'rounded-xl');
                header.classList.add('max-w-[100%]', '-translate-y-6', 'lg:backdrop-blur-none', 'lg:backdrop-filter-none', 'lg:shadow-none', 'lg:border-none');
            } else {
                header.classList.remove('max-w-[100%]', 'translate-y-0', 'lg:backdrop-blur-none', 'lg:backdrop-filter-none', 'lg:shadow-none', 'lg:border-none');
                header.classList.add('rounded-xl', 'max-w-[90%]');
            }
        }
        previousScroll = scroll;
    }); */
})

const toggleHeaderPreview = (e) => {
    e.target.checked ? isShownPreviewHeader.value = true : isShownPreviewHeader.value = false
}
</script>

<style scoped>@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');</style>