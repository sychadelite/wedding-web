<template>
    <div id="bg-grid-pixelated">
        <div id="content">
            <h1 class="title">smoothScroll() for ScrollTrigger</h1>
            <div class="box box-a">a</div>
            <div class="box box-b">b</div>
            <div class="box box-c">c</div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const { $scrollSmoother } = useNuxtApp()

onMounted(() => {
    $scrollSmoother("#content", "#bg-grid-pixelated", 2)

    // pin each box for 300px when they hit the top
    gsap.utils.toArray(".box").forEach(box => {
        ScrollTrigger.create({
            trigger: box,
            pin: true,
            start: "top top",
            end: "+=300"
        });
    });
})
</script>

<style scoped>
#bg-grid-pixelated {
    overflow: hidden;
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

#content {
    overflow: visible;
    width: 100%;
    /* set a height because the contents are position: absolute, thus natively there's no height */
    height: 2400px;

    background-image:
        linear-gradient(rgba(255, 255, 255, .07) 2px, transparent 2px),
        linear-gradient(90deg, rgba(255, 255, 255, .07) 2px, transparent 2px),
        linear-gradient(rgba(255, 255, 255, .06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, .06) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
}

.box {
    width: 100px;
    height: 100px;
    background-color: #28a92b;
    position: absolute;
    left: 300px;
    z-index: 100;
    line-height: 100px;
    font-size: 50px;
    text-align: center;
}

.box.active {
    background-color: red;
}

.box-a {
    top: 200px;
    background-color: #8d3dae;
}

.box-b {
    top: 600px;
}

.box-c {
    top: 1000px;
    background-color: #e26c16;
}

.line {
    visibility: hidden;
    width: 2px;
    height: 3000px;
    position: absolute;
    left: 400px;
    top: 0px;
    background-color: #777;
}

.title {
    position: absolute;
    width: 100%;
    text-align: center;
    color: white;
    font-weight: 400;
    font-size: 40px;
}
</style>