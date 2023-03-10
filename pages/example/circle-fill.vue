<template>
    <div class="overflow-hidden">
        <div>
            <div class="full hero">
                <div class="dot"></div>
                <div class="inner"></div>
                <h1>Financial Planning</h1>
            </div>
        </div>
        <div class="full main">
            <h2>More Content</h2>
            <p>
                This was taught by Carl of Snorkl.tv and the manipulation was inspired by
                <a href="https://sofinnovapartners.com/">
                    Sofia Site
                </a>
                d tempor ante. Sed auctor augue feugiat ipsum
                placerat,
                sit amet porta leo aliquam. Integer maximus justo id placerat imperdiet. Aliquam vel libero a felis eleifend
                ullamcorper.
            </p>
            <p>
                In et vulputate erat. Sed vitae metus pellentesque, elementum tortor eu, facilisis libero. Integer finibus
                ipsum
                faucibus dolor tincidunt elementum. Morbi ultricies pharetra ultrices. Phasellus ac lacus at dui gravida
                tincidunt malesuada eu eros. Quisque eu purus vestibu
            </p>
            <p>
                In scelerisque, est sed dapibus ultrices, orci lectus tempor lectus, nec placerat enim neque at lacus. Nunc
                id
                sapien eget purus maximus hendrerit vitae pellentesque neque. Duis vitae eros euismod, pre.
            </p>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=2000px",
            scrub: true,
            pin: true,
            // markers: true
        },
    })

    //add animation code here
    tl
        .to('.dot', {
            y: "0",
        })
        .to('.inner', {
            y: "0"
        }, 0)
        .to('.dot', {
            scale: 0.5,
            duration: 2,
            ease: "power3.in"
        })
        .to('h1', {
            x: "0",
            duration: 2,
        }, "<")
        .to('.inner', {
            scale: 0
        }, "<")
        .set('body', {
            backgroundColor: '#f5f5f5'
        })
})
</script>

<style scoped>
* {
    position: relative;
    box-sizing: border-box;
}

body {
    margin: 0;
    overflow-x: hidden;
    background-color: #26528C;
    color: white;
}

h2 {
    font-size: clamp(24px, 5vw, 50px);
}

p {
    font-size: clamp(18px, 3vw, 30px);
    line-height: clamp(1.5em, 2vw, 3em);
}

.full {
    width: 100%;
    height: 100vh;
}

.hero {
    display: flex;
    align-items: center;
}

/* .dot {
  position: absolute;
  width:142vmax;
  height:142vmax;
  left:50%;
  top:50%;
  transform:translate(-50%, -50%) scale(0);
  border-radius: 50%;
  background-color:#113059;
} */

.dot {
    width: 283vmax;
    height: 283vmax;
    background-color: #113059;
    border-radius: 50%;
    position: absolute;
    left: 40px;
    transform: translate(-50%, -90%) scale(0.02);
}

.inner {
    width: 283vmax;
    height: 283vmax;
    background-color: yellow;
    border-radius: 50%;
    left: 40px;
    transform: translate(-50%, -90%) scale(0.01);
    position: absolute;
}

h1 {
    text-transform: capitalize;
    font-size: 8vmin;
    mix-blend-mode: difference;
    transform: translateX(150px)
}

/* h1 {
  font-size: 8vmin;
  font-weight: bold;
  margin:0;
  white-space:nowrap;
  position:absolute;
  left:100%;
  top:50%;
  transform:translateY(-50%);
} */

h1,
h2 {
    font-family: Prompt, sans-serif;
}

.main {
    color: #F2F2F2;
    padding: 5vw;
}
</style>