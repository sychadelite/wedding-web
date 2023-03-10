import { defineStore } from 'pinia'

export const useStates = defineStore('stateStorage', () => {
    const count = ref(0)
    const name = ref('Eduardo')
    const doubleCount = computed(() => `${count.value * 2} ${name.value}`)

    const page = {
        width: ref(0),
        height: ref(0),
    }

    const section = {
        current: ref('overview')
    }

    const setPageResolution = (valueWidth: number, valueHeight: number) => {
        page.width.value = valueWidth
        page.height.value = valueHeight
    }

    const setSection = (value: string | any) => {
        section.current.value = value
    }    

    return { page, section, setPageResolution, setSection }
})