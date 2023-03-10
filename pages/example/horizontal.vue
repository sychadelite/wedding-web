<template>
    <div class="container">
        <section id="home" class="s-center panel">first</section>
        <section id="navi" class="s-center panel">second</section>
        <section id="photo" class="s-center panel">third</section>
        <section id="video" class="s-center panel">fourth</section>
        <section id="about" class="s-center panel">fifth</section>
        <section id="contact" class="s-center panel">sixth</section>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)


onMounted(() => {
    let container = document.querySelector(".container")
    let sections = gsap.utils.toArray(".panel")
    let scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            start: 'top top',
            //end: "6000",
            end: () => "+=" + (container.scrollWidth - container.clientWidth),
            pin: true,
            markers: true,
            scrub: 1,
            snap: {
                snapTo: 1 / (sections.length - 1),
                inertia: false,
                duration: { min: 0.2, max: 0.2 }
            },
        }
    })

    gsap.to("#navi", {
        scrollTrigger: {
            //should pin the animation to the timeline
            containerAnimation: scrollTween,
            trigger: "#navi",
            start: "center left",
            end: 'right left',
            markers: true,
            //toggleActions: "restart pause reverse pause",
            scrub: true,
        },
        backgroundColor: '#f00000',
        //duration: 3
    })
})
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

*,
*::after,
*::before {
    box-sizing: border-box;
}

body {
    overscroll-behavior: none;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
}

.container {
    overscroll-behavior: none;
    width: auto;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    background: black;
    /* overflow-x: hidden;   */
    overflow: hidden;
}

section {
    flex: 0 0 100vw;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    color: white;
}

section:nth-child(2n+0) {
    background: white;
    color: black;
}
</style>