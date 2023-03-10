<template>
    <div id="balloon-hills">
        <div id="parallax-bg-3" class="parallax-bg" data-speed=".75">
            <div id="bg-3-1"></div>
            <div id="bg-3-2"></div>
            <div id="bg-3-3"></div>
        </div>
        <div id="parallax-bg-2" class="parallax-bg" data-speed=".4">
            <div id="bg-2-1"></div>
            <div id="bg-2-2"></div>
            <div id="bg-2-3"></div>
            <div id="bg-2-4"></div>
            <div id="bg-2-5"></div>
            <div id="bg-2-6"></div>
        </div>
        <div id="parallax-bg-1" class="parallax-bg" data-speed=".25">
            <div id="bg-1-1"></div>
            <div id="bg-1-2"></div>
            <div id="bg-1-3"></div>
            <div id="bg-1-4"></div>
            <div id="bg-1-5"></div>
        </div>
        <div id="ground"></div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
    gsap.to(".parallax-bg", {
        scrollTrigger: {
            scrub: true
        },
        y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
        ease: "none"
    })
})
</script>

<style scoped>
#balloon-hills div#parallax-bg-1 {
    position: fixed;
    width: 1200px;
    top: 0;
    left: 50%;
    margin-left: -600px;
    z-index: 1;
}

/* background middle layer*/
#balloon-hills div#parallax-bg-2 {
    position: fixed;
    width: 1200px;
    top: 0;
    left: 50%;
    margin-left: -600px;
    z-index: 2;
}

/* background layer */
#balloon-hills div#parallax-bg-3 {
    position: fixed;
    width: 960px;
    top: 0;
    left: 50%;
    margin-left: -470px;
    z-index: 3;
}

/* foreground */
#balloon-hills div#parallax-bg-3 div {
    background-repeat: no-repeat;
    position: absolute;
    display: block;
    overflow: hidden;
}

#balloon-hills div#bg-3-1 {
    background: url("https://greensock.com/_img/codepen/balloon1.png");
    width: 529px;
    height: 757px;
    top: -100px;
    right: 100px;
}

#balloon-hills div#bg-3-2 {
    background: url("https://greensock.com/_img/codepen/balloon2.png");
    width: 603px;
    height: 583px;
    top: 1050px;
    left: 70px;
}

#balloon-hills div#bg-3-3 {
    background: url("https://greensock.com/_img/codepen/balloon1.png");
    width: 446px;
    height: 713px;
    top: 1800px;
    right: 140px;
}

#balloon-hills div#ground {
    background: url("https://greensock.com/_img/codepen/ground.png");
    width: 100%;
    height: 600px;
    top: 4200px;
    background-size: cover;
    position: relative;

}

/* middle layer clouds */
#balloon-hills div#parallax-bg-2 div {
    background: url("https://greensock.com/_img/codepen/clouds.png");
    background-repeat: no-repeat;
    position: absolute;
    display: block;
    width: 488px;
    height: 225px;
    overflow: hidden;
}

#balloon-hills div#bg-2-1 {
    top: 100px;
    left: -310px;
}

#balloon-hills div#bg-2-2 {
    top: 270px;
    right: -70px;
}

#balloon-hills div#bg-2-3 {
    top: 870px;
    left: -300px;
}

#balloon-hills div#bg-2-4 {
    top: 1120px;
    right: -130px;
}

#balloon-hills div#bg-2-5 {
    top: 1620px;
    left: 140px;
}

#balloon-hills div#bg-2-6 {
    top: 720px;
    left: 340px;
}

/*background layer clouds */
#balloon-hills div#parallax-bg-1 div {
    background-repeat: no-repeat;
    position: absolute;
    display: block;
    width: 488px;
    height: 225px;
    overflow: hidden;
}

#balloon-hills div#bg-1-1 {
    background: url("https://greensock.com/_img/codepen/clouds2.png");
    top: 200px;
    right: 450px;
}

#balloon-hills div#bg-1-2 {
    background: url("https://greensock.com/_img/codepen/clouds.png");
    top: 420px;
    left: 0px;
}

#balloon-hills div#bg-1-3 {
    background: url("https://greensock.com/_img/codepen/clouds2.png");
    top: 850px;
    right: -290px;
}

#balloon-hills div#bg-1-4 {
    background: url("https://greensock.com/_img/codepen/clouds.png");
    top: 1350px;
    left: 200px;
}

#balloon-hills div#bg-1-5 {
    background: url("https://greensock.com/_img/codepen/clouds2.png");
    top: 1200px;
    left: -200px;
}
</style>