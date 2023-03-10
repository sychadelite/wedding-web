<template>
    <NuxtLayout name="tema-wedding-card">
        <div v-if="id === 'brownie'">
            <TemaBrownie :temaName="id"/>
        </div>
    </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import 'animate.css';

const { id } = useRoute().params
const isMobile = useState('isMobile').value

onMounted(() => {
    console.log('Slugged Theme: ', id, '\nisMobile: ', isMobile)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');

* {
    overflow: hidden;
}
</style>