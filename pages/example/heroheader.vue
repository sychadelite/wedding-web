<template>
    <div class="min-h-screen text-white font-['Playfair_Display']">
        <div id="hero">
            <div class="layer-bg layer parallax" data-depth="0.10"></div>
            <div class="layer-1 layer parallax" data-depth="0.20"></div>
            <div class="layer-2 layer parallax" data-depth="0.50"></div>
            <div class="layer-3 layer parallax" data-depth="0.80"></div>
            <div class="layer-overlay layer parallax" data-depth="0.85"></div>
            <div class="layer-4 layer parallax" data-depth="1.00"></div>
        </div>

        <div class="min-h-screen bg-[#130d0a]">
            <div class="container mx-auto">
                <section class="relative flex flex-col justify-center py-14 pb-7 px-12">
                    <div class="w-full">
                        <div class="mx-auto text-center">
                            <h1 class="text-3xl mb-8 leading-[120%]">You cannot hide the soul. Through all his unearthly
                                tattooings, I thought I saw the traces
                                of a simple honest heart. {{ $myPlugin() }} . {{ $hello('barj') }}</h1>
                        </div>
                    </div>
                    <div class="relative flex flex-row flex-wrap gap-4 w-full text-[#ede0d5]">
                        <div class="md:w-5/12 mx-auto text-base leading-[150%]">
                            <p>And besides all this, there was a certain lofty bearing about the Pagan, which even his
                                uncouthness could not altogether maim. He looked like a man who had never cringed and never
                                had had a creditor. Whether it was, too, that his head being shaved, his forehead was drawn
                                out in freer and brighter relief, and looked more expansive than it otherwise would, this I
                                will not venture to decide; but certain it was his head was phrenologically an excellent
                                one.</p>
                            <p>It may seem ridiculous, but it reminded me of General Washington's head, as seen in the
                                popular busts of him. It had the same long regularly graded retreating slope from above the
                                brows, which were likewise very projecting, like two long promontories thickly wooded on
                                top. Queequeg was George Washington cannibalistically developed.</p>
                            <p>Whilst I was thus closely scanning him, half-pretending meanwhile to be looking out at the
                                storm from the casement, he never heeded my presence, never troubled himself with so much as
                                a single glance; but appeared wholly occupied with counting the pages of the marvellous
                                book. Considering how sociably we had been sleeping together the night previous, and
                                especially considering the affectionate arm I had found thrown over me upon waking in the
                                morning, I thought this indifference of his very strange. But savages are strange beings; at
                                times you do not know exactly how to take them.</p>
                        </div>
                        <div class="md:w-5/12 mx-auto text-base leading-[150%]">
                            <p>At first they are overawing; their calm self-collectedness of simplicity seems a Socratic
                                wisdom. I had noticed also that Queequeg never consorted at all, or but very little, with
                                the other seamen in the inn. He made no advances whatever; appeared to have no desire to
                                enlarge the circle of his acquaintances. All this struck me as mighty singular; yet, upon
                                second thoughts, there was something almost sublime in it. Here was a man some twenty
                                thousand miles from home, by the way of Cape Horn, that is—which was the only way he could
                                get there—thrown among people as strange to him as though he were in the planet Jupiter; and
                                yet he seemed entirely at his ease; preserving the utmost serenity; content with his own
                                companionship; always equal to himself.</p>
                            <p>Here was a man some twenty thousand miles from home, by the way of Cape Horn, that is—which
                                was the only way he could get there—thrown among people as strange to him as though he were
                                in the planet Jupiter; and yet he seemed entirely at his ease; preserving the utmost
                                serenity; content with his own companionship; always equal to himself. Surely this was a
                                touch of fine philosophy; though no doubt he had never heard there was such a thing as that.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

const { $myPlugin, $hello, $isMobile } = useNuxtApp()

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    })

    gsap.utils.toArray(".parallax").forEach(layer => {
        const depth = layer.dataset.depth
        const movement = -(layer.offsetHeight * depth)
        tl.to(layer, { y: movement, ease: "none" }, 0)
    })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');

#hero {
    height: 800px;
    overflow: hidden;
    position: relative;
    /* max-width: 1920px; */
    margin: 0 auto;
}

.layer {
    background-position: bottom center;
    background-size: auto;
    background-repeat: no-repeat;
    width: 100%;
    height: 800px;
    position: fixed;
    z-index: -1;
}

#hero-mobile {
    display: none;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/full_illustration.png") no-repeat center bottom / cover;
    height: 320px;
}

#hero,
.layer {
    min-height: 800px;
}

.layer-bg {
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_bg.jpg');
    background-size: cover;
}

.layer-1 {
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png');
    background-size: cover;
    background-position: left bottom;
}

.layer-2 {
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_02.png');
    background-size: cover;
}

.layer-3 {
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_man.png');
    background-position: right bottom;
}

.layer-4 {
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_01.png');
    background-size: cover;
}

.layer-overlay {
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_overlay.png');
    background-size: cover;
}

@media only screen and (max-width: 768px) {
    .layer-1 {
        background-position: 26% bottom;
    }

    .layer-3 {
        background-position: 35% bottom;
    }
}

@media only screen and (min-width: 1536px) {
    .layer-3 {
        background-position: 75% bottom;
    }
}
</style>