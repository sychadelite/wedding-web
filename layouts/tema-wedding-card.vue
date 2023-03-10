<template>
    <div>
        <HeaderThePreview v-if="currentSection === 'overview'"/>
        <slot />
        <ModalTheUnlockAllFeatures />
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStates } from '~/composables/states'

const store = useStates()

const { $isMobile, $isTablet } = useNuxtApp()
let isMobile = useState('isMobile', () => $isMobile())
let isTablet = useState('isTablet', () => $isTablet())
let device = ref(useState('pageDevice', () => ''))
let currentSection = ref(store.section.current)

watch(store.page, (newState) => {
    if (newState.width > 0) {
        if (newState.width >= 1024) {
            if (device.value !== 'desktop') {
                device.value = 'desktop'
                store.setPageResolution(window.innerWidth, window.innerHeight)
                isMobile.value = $isMobile()
            }
        } else if (newState.width >= 640) {
            if (device.value !== 'tablet') {
                device.value = 'tablet'
                store.setPageResolution(window.innerWidth, window.innerHeight)
                isMobile.value = $isMobile()
            }
        } else {
            if (device.value !== 'mobile') {
                device.value = 'mobile'
                store.setPageResolution(window.innerWidth, window.innerHeight)
                isMobile.value = $isMobile()
            }
        }
    }
})

watch(store.section, (newState) => {
    currentSection.value = newState.current
})

onMounted(() => {
    console.log('Layouts: ', 'tema-wedding-card', '\nisMobile: ', isMobile.value)
    store.setPageResolution(window.innerWidth, window.innerHeight)
    device.value = window.innerWidth >= 1024 ? 'desktop' : window.innerWidth >= 640 ? 'tablet' : 'mobile'

    let tDo
    window.addEventListener('resize', (e) => {
        clearTimeout(tDo)
        tDo = setTimeout(() => {
            store.setPageResolution(e.target.innerWidth, e.target.innerHeight)
        }, 100)
    })
})
</script>