<template>
    <div class="overflow-hidden">
        <!-- Slider main container -->
        <div :class="props.isMobile && props.width < 640 && props.height > 420 ? 'h-[5vmax]' : props.isMobile && props.height <= 420 ? 'h-[2.5vmax]' : 'h-[5vmax]'"
            class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div :class="props.isMobile && props.width < 640 && props.height > 420 ? 'h-[4vmax]' : props.isMobile && props.height <= 420 ? 'h-[1.5vmax]' : 'h-[4vmax]'"
                    class="swiper-slide backdrop-blur-sm shadow-md hover:shadow-inner" data-section="cover">
                    <svg class="h-[2vmax] w-[2vmax] min-h-[2vmax] min-w-[2vmax] pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span class="btm-nav-label text-[1.25vmax] ml-[1vmax] pointer-events-none">Cover</span>
                </div>
                <div :class="props.isMobile && props.width < 640 && props.height > 420 ? 'h-[4vmax]' : props.isMobile && props.height <= 420 ? 'h-[1.5vmax]' : 'h-[4vmax]'"
                    class="swiper-slide backdrop-blur-sm shadow-md hover:shadow-inner" data-section="opening">
                    <svg class="h-[2vmax] w-[2vmax] min-h-[2vmax] min-w-[2vmax] pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6V18C23 19.6523 21.6523 21 20 21H4C2.34772 21 1 19.6523 1 18V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6ZM3.10658 5.55395C3.27196 5.22692 3.61204 5 4 5H20C20.388 5 20.728 5.22692 20.8934 5.55395L12 11.7793L3.10658 5.55395ZM3 7.92066L10.8531 13.4178C11.5417 13.8999 12.4583 13.8999 13.1469 13.4178L21 7.92066V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V7.92066Z" fill="currentColor"/>
                    </svg>
                    <span class="btm-nav-label text-[1.25vmax] ml-[1vmax] pointer-events-none">Opening</span>
                </div>
                <div :class="props.isMobile && props.width < 640 && props.height > 420 ? 'h-[4vmax]' : props.isMobile && props.height <= 420 ? 'h-[1.5vmax]' : 'h-[4vmax]'"
                    class="swiper-slide backdrop-blur-sm shadow-md hover:shadow-inner" data-section="mempelai">
                    <svg class="h-[2vmax] w-[2vmax] min-h-[2vmax] min-w-[2vmax] pointer-events-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path id="heart-a" d="M7.64648437,1.19311523 C8.33056641,5.30135091 6.96142578,7.94555664 3.5390625,9.12573242 C0.116699219,10.3059082 -0.801757813,12.9492188 0.783691406,17.0556641 L3,19.2653809 L12.5229492,9.54785156 C13.5050456,6.41617839 12.8082682,3.82950846 10.4326172,1.7878418 C8.8577474,0.574951172 7.92903646,0.376708984 7.64648437,1.19311523 Z"/>
                            <path id="heart-c" d="M18.6707335,10.0469949 C20.4444204,8.20475335 20.4428931,5.22154308 18.6673208,3.38125356 C16.8917484,1.54096405 14.0134482,1.53938105 12.2359925,3.37771648 L10.9702069,4.68963823 L9.74663024,3.42106257 C7.97421677,1.58443498 5.10087015,1.58474944 3.32883095,3.42176494 C1.55679174,5.25878043 1.55709514,8.23685657 3.32950861,10.0734842 L10.9750473,18 L18.6707335,10.0469949 Z M9.53555048,19.3884699 L1.89036034,11.4623154 C-0.629744037,8.85090825 -0.630172509,4.64518565 1.88938959,2.03323745 C4.37655172,-0.545122756 8.39543397,-0.61732966 10.9687169,1.81730162 C13.5445576,-0.66312694 17.60123,-0.604129239 20.1066156,1.99257419 C22.6292352,4.60713978 22.6313904,8.81686087 20.1115002,11.434147 L12.4427074,19.3824584 C12.1544685,19.6812032 11.7964701,19.8704534 11.4198481,19.9502088 C10.7609371,20.0997637 10.0408904,19.9123813 9.53555048,19.3884699 Z"/>
                        </defs>
                        <g fill="none" fill-rule="evenodd" transform="translate(1 2)">
                            <g transform="translate(8)">
                            <mask id="heart-b" fill="#ffffff">
                                <use xlink:href="#heart-a"/>
                            </mask>
                            <use fill="currentColor" xlink:href="#heart-a"/>
                            <g fill="#FFA0A0" mask="url(#heart-b)">
                                <rect width="24" height="24" transform="translate(-9 -2)"/>
                            </g>
                            </g>
                            <mask id="heart-d" fill="#ffffff">
                            <use xlink:href="#heart-c"/>
                            </mask>
                            <use fill="#000000" fill-rule="nonzero" xlink:href="#heart-c"/>
                            <g fill="currentColor" mask="url(#heart-d)">
                            <rect width="24" height="24" transform="translate(-1 -2)"/>
                            </g>
                        </g>
                    </svg>
                    <span class="btm-nav-label text-[1.25vmax] ml-[1vmax] pointer-events-none">Mempelai</span>
                </div>
                <div :class="props.isMobile && props.width < 640 && props.height > 420 ? 'h-[4vmax]' : props.isMobile && props.height <= 420 ? 'h-[1.5vmax]' : 'h-[4vmax]'"
                    class="swiper-slide backdrop-blur-sm shadow-md hover:shadow-inner" data-section="acara">
                    <svg class="h-[2vmax] w-[2vmax] min-h-[2vmax] min-w-[2vmax] pointer-events-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path id="calendar-a" d="M0,0 L18,0 L18,2 L0,2 L0,0 Z M0,11 L18,11 L18,13 L0,13 L0,11 Z"/>
                            <path id="calendar-c" d="M2,7 L18,7 L18,4 L16,4 L16,2 L18,2 C19.1045695,2 20,2.8954305 20,4 L20,18 C20,19.1045695 19.1045695,20 18,20 L2,20 C0.8954305,20 0,19.1045695 0,18 L0,4 C0,2.8954305 0.8954305,2 2,2 L4,2 L4,4 L2,4 L2,7 Z M2,9 L2,18 L18,18 L18,9 L2,9 Z M7,4 C7,4.55228475 6.55228475,5 6,5 C5.44771525,5 5,4.55228475 5,4 L5,1 C5,0.44771525 5.44771525,0 6,0 C6.55228475,0 7,0.44771525 7,1 L7,4 Z M15,4 C15,4.55228475 14.5522847,5 14,5 C13.4477153,5 13,4.55228475 13,4 L13,1 C13,0.44771525 13.4477153,0 14,0 C14.5522847,0 15,0.44771525 15,1 L15,4 Z M8,2 L12,2 L12,4 L8,4 L8,2 Z M7,10 L9,10 L9,12 L7,12 L7,10 Z M11,10 L13,10 L13,12 L11,12 L11,10 Z M15,10 L17,10 L17,12 L15,12 L15,10 Z M3,14 L5,14 L5,16 L3,16 L3,14 Z M7,14 L9,14 L9,16 L7,16 L7,14 Z M11,14 L13,14 L13,16 L11,16 L11,14 Z M15,14 L17,14 L17,16 L15,16 L15,14 Z"/>
                        </defs>
                        <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
                            <g transform="translate(1 6)">
                            <mask id="calendar-b" fill="#ffffff">
                                <use xlink:href="#calendar-a"/>
                            </mask>
                            <use fill="#D8D8D8" xlink:href="#calendar-a"/>
                            <g fill="#FFA0A0" mask="url(#calendar-b)">
                                <rect width="24" height="24" transform="translate(-3 -8)"/>
                            </g>
                            </g>
                            <mask id="calendar-d" fill="#ffffff">
                            <use xlink:href="#calendar-c"/>
                            </mask>
                            <use fill="#000000" fill-rule="nonzero" xlink:href="#calendar-c"/>
                            <g fill="currentColor" mask="url(#calendar-d)">
                            <rect width="24" height="24" transform="translate(-2 -2)"/>
                            </g>
                        </g>
                    </svg>
                    <span class="btm-nav-label text-[1.25vmax] ml-[1vmax] pointer-events-none">Acara</span>
                </div>
                <div :class="props.isMobile && props.width < 640 && props.height > 420 ? 'h-[4vmax]' : props.isMobile && props.height <= 420 ? 'h-[1.5vmax]' : 'h-[4vmax]'"
                    class="swiper-slide backdrop-blur-sm shadow-md hover:shadow-inner" data-section="maps">
                    <svg class="h-[2vmax] w-[2vmax] min-h-[2vmax] min-w-[2vmax] pointer-events-none" viewBox="0 0 512 512" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
                        <polygon points="154.64,420.096 154.64,59.496 0,134 0,512 " fill="currentColor"/>
                        <polygon style="fill: #333;" points="309.288,146.464 309.288,504.472 154.64,420.096 154.64,59.496 "/>
                        <polygon points="463.928,50.152 309.288,146.464 309.288,504.472 463.928,415.68 " fill="currentColor"/>
                        <path style="fill:#E21B1B;" d="M414.512,281.656l-11.92-15.744c-8.8-11.472-85.6-113.984-85.6-165.048
                            C317.032,39.592,355.272,0,414.512,0S512,39.592,512,100.864c0,50.992-76.8,153.504-85.488,165.048L414.512,281.656z"/>
                        <circle style="fill:#FFFFFF;" cx="414.512" cy="101.536" r="31.568"/>
                    </svg>
                    <span class="btm-nav-label text-[1.25vmax] ml-[1vmax] pointer-events-none">Maps</span>
                </div>
                <div :class="props.isMobile && props.width < 640 && props.height > 420 ? 'h-[4vmax]' : props.isMobile && props.height <= 420 ? 'h-[1.5vmax]' : 'h-[4vmax]'"
                    class="swiper-slide backdrop-blur-sm shadow-md hover:shadow-inner" data-section="rsvp">
                    <svg class="h-[2vmax] w-[2vmax] min-h-[2vmax] min-w-[2vmax] pointer-events-none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <polygon id="comment-a" points="0 0 19 0 19 3 16.637 3 15.732 7.26 10.79 3 0 3"/>
                            <path id="comment-c" d="M3,2 C2.44771525,2 2,2.44771525 2,3 L2,13 C2,13.5522847 2.44771525,14 3,14 L13,14 L17,18 L17,14 L19,14 C19.5522847,14 20,13.5522847 20,13 L20,3 C20,2.44771525 19.5522847,2 19,2 L3,2 Z M19,16 L19,18 C19,19.7818097 16.8457162,20.6741433 15.5857864,19.4142136 L12.1715729,16 L3,16 C1.34314575,16 0,14.6568542 0,13 L0,3 C0,1.34314575 1.34314575,0 3,0 L19,0 C20.6568542,0 22,1.34314575 22,3 L22,13 C22,14.6568542 20.6568542,16 19,16 Z M5,7 L17,7 C17.5522847,7 18,6.55228475 18,6 C18,5.44771525 17.5522847,5 17,5 L5,5 C4.44771525,5 4,5.44771525 4,6 C4,6.55228475 4.44771525,7 5,7 Z M5,11 L12,11 C12.5522847,11 13,10.5522847 13,10 C13,9.44771525 12.5522847,9 12,9 L5,9 C4.44771525,9 4,9.44771525 4,10 C4,10.5522847 4.44771525,11 5,11 Z"/>
                        </defs>
                        <g fill="none" fill-rule="evenodd" transform="translate(1 3)">
                            <g transform="translate(2 12)">
                            <mask id="comment-b" fill="#ffffff">
                                <use xlink:href="#comment-a"/>
                            </mask>
                            <use fill="#D8D8D8" xlink:href="#comment-a"/>
                            <g fill="#FFA0A0" mask="url(#comment-b)">
                                <rect width="24" height="24" transform="translate(-3 -15)"/>
                            </g>
                            </g>
                            <mask id="comment-d" fill="#ffffff">
                            <use xlink:href="#comment-c"/>
                            </mask>
                            <use fill="#000000" fill-rule="nonzero" xlink:href="#comment-c"/>
                            <g fill="currentColor" mask="url(#comment-d)">
                            <rect width="24" height="24" transform="translate(-1 -3)"/>
                            </g>
                        </g>
                    </svg>
                    <span class="btm-nav-label text-[1.25vmax] ml-[1vmax] pointer-events-none">RSVP</span>
                </div>
                <div :class="props.isMobile && props.width < 640 && props.height > 420 ? 'h-[4vmax]' : props.isMobile && props.height <= 420 ? 'h-[1.5vmax]' : 'h-[4vmax]'"
                    class="swiper-slide backdrop-blur-sm shadow-md hover:shadow-inner" data-section="gift">
                    <svg class="h-[2vmax] w-[2vmax] min-h-[2vmax] min-w-[2vmax] pointer-events-none" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M884.4 389v101.6c0 16-13 29-29 29H570.2V360h285.1c16.1 0 29.1 13 29.1 29z" fill="#FE97AC" />
                        <path d="M793.6 731.9l-9 8.7 2.2 12.2-11-5.9-11 5.9 2.2-12.2-9-8.7 12.4-1.8 5.4-11.1 5.5 11.1z" fill="#EBBE3E" />
                        <path d="M578.2 756.8l15.1 14.7-3.6 20.8 18.7-9.8 18.7 9.8-3.5-20.8 15.1-14.7-20.9-3-9.4-18.9-9.3 18.9-20.9 3z m151.5 130l-3.6-20.8 15.1-14.7-20.9-3-9.3-18.9-9.4 18.9-20.9 3 15.1 14.7-3.5 20.8 18.7-9.9 18.7 9.9z m26.7-345.9l-9.3 18.9-20.9 3 15.1 14.7-3.6 20.8 18.7-9.9 18.7 9.9-3.5-20.8 15.1-14.7-20.9-3-9.4-18.9zM806 727.8l-20.9-3-9.3-18.9-9.3 18.9-20.9 3 15.1 14.7-3.6 20.8 18.7-9.8 18.7 9.8-3.6-20.8 15.1-14.7zM570.2 531.3h260v345.5c0 16-13 29-29 29h-231V531.3z m110.9 136.8l15.2-14.7-20.9-3-9.4-18.9-9.3 18.9-20.9 3 15.1 14.7-3.6 20.8L666 679l18.7 9.9-3.6-20.8z" fill="#DC0C55" />
                        <path d="M683 194.9c42.3 0 76.8 34.5 76.8 76.8 0 42.4-34.5 76.8-76.8 76.8H525.1l51.9-78.6c37.6-51.9 61.9-75 106-75z" fill="#FAF7A6" />
                        <path d="M806 727.8l-15.1 14.7 3.6 20.8-18.7-9.8-18.7 9.8 3.6-20.8-15.1-14.7 20.9-3 9.3-18.9 9.3 18.9 20.9 3z m-21.4 12.8l8.9-8.7-12.3-1.7-5.5-11.1-5.5 11.1-12.3 1.7 8.9 8.7-2.2 12.2 11-5.8 11 5.8-2-12.2z" fill="#EF4668" />
                        <path d="M751 565.1l5.4-11 5.6 11 12.2 1.9-8.8 8.5 2.1 12.2-11.1-5.7-10.9 5.7 2.1-12.2-8.9-8.5z" fill="#EBBE3E" />
                        <path d="M771.6 577.6l3.5 20.8-18.7-9.9-18.7 9.9 3.6-20.8-15.1-14.7 20.9-3 9.3-18.9 9.4 18.9 20.9 3-15.1 14.7z m-15.2-23.5l-5.5 11-12.3 1.9 8.9 8.6-2.1 12.2 10.9-5.7 11 5.7-2.1-12.2 8.8-8.6-12.2-1.9-5.4-11z" fill="#EF4668" />
                        <path d="M719.8 863.9l2.1 12.2-10.9-5.7-11 5.7 2.1-12.2-8.9-8.6 12.2-1.9 5.6-11.1 5.5 11.1 12.3 1.9z" fill="#EBBE3E" />
                        <path d="M726.1 866l3.6 20.8-18.7-9.9-18.7 9.9 3.5-20.8-15.1-14.7 20.9-3 9.4-18.9 9.3 18.9 20.9 3-15.1 14.7z m-4.2 10.1l-2.1-12.2 8.9-8.6-12.3-1.9-5.5-11.1-5.6 11.1-12.2 1.9 8.8 8.6-2.1 12.2 11-5.7 11.1 5.7z" fill="#EF4668" />
                        <path d="M674.9 666l2.1 12.3-11-5.8-11 5.8 2.1-12.3-8.9-8.6 12.3-1.8 5.5-11.1 5.4 11.1 12.3 1.8z" fill="#EBBE3E" />
                        <path d="M666 631.4l9.4 18.9 20.9 3-15.2 14.7 3.6 20.8L666 679l-18.7 9.9 3.6-20.8-15.1-14.7 20.9-3 9.3-19z m11 46.9l-2.1-12.3 8.8-8.6-12.3-1.9-5.5-11-5.5 11-12.3 1.9 8.9 8.6-2.1 12.3 10.9-5.8 11.2 5.8z" fill="#EF4668" />
                        <path d="M613.9 759.1l12.2 1.8-8.8 8.7 2.1 12.2-11-5.8-11 5.8 2.1-12.2-8.9-8.7 12.3-1.8 5.5-11.1z" fill="#EBBE3E" />
                        <path d="M613.9 759.1l-5.6-11.1-5.5 11.1-12.3 1.7 8.9 8.7-2.1 12.2 10.9-5.8 11 5.8-2.1-12.2 8.8-8.7-12-1.7z m9.7 12.5l3.5 20.8-18.7-9.8-18.7 9.8 3.6-20.8-15.1-14.7 20.9-3 9.3-18.9 9.4 18.9 20.9 3-15.1 14.7z" fill="#EF4668" />
                        <path d="M570.3 143.4c21.9 38.1 18.5 76.5-11.4 128.3l-45.8 67.7-77.7-115.3c-10.1-17.4-12.5-39.4-6.7-60.2 5.7-20.8 19.2-38.4 36.7-48.7 11.8-6.7 25-10.3 38.2-10.3 6.7 0 13.5 0.9 20.1 2.7 19.7 5.4 36.4 18.1 46.6 35.8zM558.5 591.3v314.5h-91.9V360H513l0.1 0.1 0.2-0.1h45.2V531.3zM451.4 269.6l52.1 78.8H345.6c-42.4 0-76.8-34.4-76.8-76.8 0-42.3 34.4-76.8 76.8-76.8 44 0.1 68.2 23.2 105.8 74.8z" fill="#FAF7A6" />
                        <path d="M455 360v159.7H173.1c-16 0-29-13-29-29V389c0-16 13-29 29-29H455z" fill="#FE97AC" />
                        <path d="M418 760.9l-8.8 8.7 2.1 12.2-11-5.8-11 5.8 2.1-12.2-8.9-8.7 12.3-1.8 5.5-11.1 5.5 11.1z" fill="#EBBE3E" />
                        <path d="M409.7 753.8l20.9 3-15.1 14.7 3.5 20.8-18.7-9.8-18.7 9.8 3.6-20.8-15.1-14.7 20.9-3 9.3-18.9 9.4 18.9z m-0.5 15.8l8.8-8.7-12.2-1.7-5.6-11.1-5.5 11.1-12.3 1.7 8.9 8.7-2.1 12.2 10.9-5.8 11 5.8-1.9-12.2z" fill="#EF4668" />
                        <path d="M351.6 666l2.1 12.3-10.9-5.8-11.1 5.8 2.1-12.3-8.8-8.6 12.2-1.8 5.6-11.1 5.4 11.1 12.2 1.8z" fill="#EBBE3E" />
                        <path d="M352.1 650.3l20.9 3-15.1 14.7 3.5 20.8-18.6-9.9-18.7 9.9 3.5-20.8-15.1-14.7 20.9-3 9.4-18.9 9.3 18.9z m1.6 28l-2.1-12.3 8.8-8.6-12.2-1.9-5.5-11-5.6 11-12.2 1.9 8.8 8.6-2.1 12.3 11-5.8 11.1 5.8z" fill="#EF4668" />
                        <path d="M315.5 855.3l-9 8.6 2.3 12.2-11.1-5.7-11 5.7 2.2-12.2-8.9-8.6 12.3-1.9 5.4-11.1 5.5 11.1z" fill="#EBBE3E" />
                        <path d="M297.7 829.3l9.3 18.9 20.9 3-15.1 14.8 3.6 20.8-18.7-9.9-18.7 9.9 3.6-20.8-15.1-14.7 20.9-3 9.3-19z m5.5 24.1l-5.5-11.1-5.5 11.1-12.3 1.9 8.9 8.6-2.2 12.2 11-5.7 11 5.7-2.2-12.2 8.9-8.6-12.1-1.9z" fill="#EF4668" />
                        <path d="M234.4 567l12.3-1.9 5.5-11 5.6 11L270 567l-8.9 8.5 2.1 12.2-11-5.7-10.9 5.7 2.1-12.2z" fill="#EBBE3E" />
                        <path d="M246.7 565.1l-12.3 1.9 8.9 8.6-2.1 12.2 10.9-5.7 11 5.7-2.1-12.2 8.8-8.6-12.2-1.9-5.6-11-5.3 11z m-9.6 12.5L222 562.9l20.9-3 9.3-18.9 9.4 18.9 20.9 3-15.1 14.7 3.5 20.8-18.7-9.9-18.7 9.9 3.6-20.8z" fill="#EF4668" />
                        <path d="M232.9 746.9l-11 5.9 2.1-12.2-8.8-8.7 12.2-1.8 5.5-11.1 5.5 11.1 12.3 1.8-8.9 8.7 2 12.2z" fill="#EBBE3E" />
                        <path d="M316.4 886.8l-3.6-20.8 15.1-14.7-20.9-3-9.3-18.9-9.3 18.9-20.9 3 15.1 14.7-3.6 20.8 18.7-9.9 18.7 9.9z m7.7-197.9l18.7-9.9 18.6 9.9-3.5-20.8 15.1-14.7-20.9-3-9.3-18.9-9.4 18.9-20.9 3 15.1 14.7-3.5 20.8z m106.5 67.9l-20.9-3-9.4-18.9-9.3 18.9-20.9 3 15.1 14.7-3.6 20.8 18.7-9.8 18.7 9.8-3.5-20.8 15.1-14.7z m-232.3 120V531.3H455v374.5H227.4c-16.1 0-29.1-13-29.1-29z m15.9-113.5l18.7-9.8 18.7 9.8-3.6-20.8 15.1-14.7-20.9-3-9.3-18.9-9.4 18.9-20.9 3 15.1 14.7-3.5 20.8z m19.3-164.9l18.7-9.9 18.7 9.9-3.5-20.8 15.1-14.7-20.9-3-9.4-18.9-9.3 18.9-20.9 3 15.1 14.7-3.6 20.8z" fill="#DC0C55" />
                        <path d="M238.4 730.1l-5.5-11.1-5.6 11.1-12.2 1.7 8.8 8.7-2.1 12.2 11-5.8 10.9 5.8-2.1-12.2 8.9-8.7-12.1-1.7z m-14.9-5.3l9.4-18.9 9.3 18.9 20.9 3-15.1 14.7 3.6 20.8-18.7-9.8-18.7 9.8 3.5-20.8-15.1-14.7 20.9-3z" fill="#EF4668" />
                        <path d="M345.6 348.4h157.9l-52.1-78.8c-37.5-51.6-61.8-74.7-105.8-74.7-42.4 0-76.8 34.5-76.8 76.8s34.4 76.7 76.8 76.7z m213.3-76.6c29.8-51.8 33.3-90.2 11.4-128.3-10.2-17.8-26.8-30.4-46.6-35.8-6.6-1.7-13.4-2.7-20.1-2.7-13.2 0-26.4 3.6-38.2 10.3-17.5 10.2-31 27.9-36.7 48.7-5.8 20.8-3.4 42.7 6.7 60.2l77.7 115.3 45.8-67.7z m-0.4 259.5V360h-45.2l-0.1 0.1-0.2-0.1h-46.4v545.8h92V531.3zM198.3 876.8c0 16 13 29 29 29H455V531.3H198.3v345.5z m-25.2-357.1H455V360H173.1c-16 0-29 13-29 29v101.6c0 16.1 13 29.1 29 29.1zM683 348.4c42.3 0 76.8-34.4 76.8-76.8 0-42.3-34.5-76.8-76.8-76.8-44.1 0-68.4 23.1-106 74.9l-51.9 78.6H683z m118.1 557.4c16 0 29-13 29-29V531.3h-260v374.5h231z m40.7-374.5v345.5c0 22.4-18.2 40.6-40.6 40.6H227.4c-22.4 0-40.6-18.2-40.6-40.6V531.3h-13.6c-22.4 0-40.6-18.2-40.6-40.6V389c0-22.4 18.2-40.6 40.6-40.6H302c-26.7-15.2-44.7-43.9-44.7-76.8 0-48.7 39.6-88.4 88.4-88.4 29.7 0 51.1 9.1 72.1 28.5-4.8-16.1-4.9-33.9-0.2-50.9 6.6-23.7 21.9-43.9 42.2-55.5 20.4-11.8 44.2-15 67-8.8 22.9 6 41.9 20.7 53.7 41.1 17.7 30.5 20.3 62 7.9 98.5 29.7-36.3 54.6-52.8 94.9-52.8 48.7 0 88.4 39.7 88.4 88.4 0 32.9-18.1 61.5-44.8 76.8h128.8c22.4 0 40.6 18.2 40.6 40.6v101.6c0 22.4-18.2 40.6-40.6 40.6h-13.9z m13.6-11.6c16 0 29-13 29-29V389c0-16-13-29-29-29H570.2v159.7h285.2z" fill="#EF4668" />
                    </svg>
                    <span class="btm-nav-label text-[1.25vmax] ml-[1vmax] pointer-events-none">Gift</span>
                </div>
                <div :class="props.isMobile && props.width < 640 && props.height > 420 ? 'h-[4vmax]' : props.isMobile && props.height <= 420 ? 'h-[1.5vmax]' : 'h-[4vmax]'"
                    class="swiper-slide backdrop-blur-sm shadow-md hover:shadow-inner" data-section="protokol">
                    <svg class="h-[2vmax] w-[2vmax] min-h-[2vmax] min-w-[2vmax] pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.39254 16.2614C2.64803 13.1941 1.66074 9.71783 1.51646 6.15051C1.50127 5.77507 1.70918 5.42812 2.04153 5.25282L11.5335 0.246091C11.8254 0.0920859 12.1746 0.0920859 12.4665 0.246091L21.9585 5.25282C22.2908 5.42812 22.4987 5.77507 22.4835 6.15051C22.3393 9.71783 21.352 13.1941 19.6075 16.2614C17.8618 19.3307 15.4169 21.8869 12.4986 23.7001C12.1931 23.8899 11.8069 23.8899 11.5014 23.7001C8.58313 21.8869 6.13817 19.3307 4.39254 16.2614Z" fill="currentColor"/>
                        <path d="M8.25 12.75L11.25 15L17.25 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="btm-nav-label text-[1.25vmax] ml-[1vmax] pointer-events-none">Protokol</span>
                </div>
                <div :class="props.isMobile && props.width < 640 && props.height > 420 ? 'h-[4vmax]' : props.isMobile && props.height <= 420 ? 'h-[1.5vmax]' : 'h-[4vmax]'"
                    class="swiper-slide backdrop-blur-sm shadow-md hover:shadow-inner" data-section="thanks">
                    <svg class="h-[2vmax] w-[2vmax] min-h-[2vmax] min-w-[2vmax] pointer-events-none" viewBox="0 0 512 512" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" fill="currentColor">
                        <g>
                            <path class="st0" d="M397.457,272.044c0.027-0.018,0.053-0.035,0.079-0.053l0.114-0.079L397.457,272.044z"/>
                            <path class="st0" d="M466.761,274.237v0.009c-4.228-4.615-9.386-8.186-15.124-10.588c-5.738-2.395-12.054-3.624-18.616-3.624
                                c-6.228,0.009-12.527,1.115-18.563,3.15c-6.009,2.044-11.764,5.009-16.922,8.808l-0.429,0.316l-0.14,0.087l-0.491,0.421
                                c-0.562,0.474-1.632,1.298-3.035,2.316c-4.913,3.641-14.001,9.913-24.774,17.23c-7.071,4.79-14.896,10.036-22.809,15.317
                                c0.018-0.386,0.035-0.773,0.035-1.158c0-12.852-5.246-24.564-13.685-32.994c-8.44-8.431-20.125-13.677-32.985-13.677H200.39
                                c-16.247,0-30.195,1.658-42.283,4.536c-18.159,4.298-32.178,11.369-43.494,19.352c-11.317,7.992-19.914,16.834-27.546,24.624
                                c-1.579,1.614-3.124,3.211-4.685,4.755l-38.67,33.792c-7.299,6.387-11.509,15.624-11.509,25.344v113.903
                                c0,10.133,5.93,19.326,15.124,23.52v-0.009c3.369,1.535,7.036,2.343,10.738,2.334c6.228-0.009,12.247-2.237,16.86-6.281
                                l72.058-61.768l113.377,20.597c3.14,0.58,6.316,0.861,9.474,0.861c11.018,0,21.668-3.369,30.599-9.686l-0.035,0.027
                                c7.754-5.395,45.687-31.775,83.111-58.014c18.72-13.106,37.283-26.177,51.934-36.564c7.299-5.21,13.632-9.728,18.492-13.272
                                c2.439-1.763,4.509-3.28,6.176-4.526c1.667-1.246,2.895-2.202,3.773-2.93v0.009l0.298-0.245l0.122-0.106l0.386-0.359
                                c4.738-4.342,8.457-9.43,11.054-14.993c2.562-5.57,3.982-11.614,4.053-17.808c0-0.184,0-0.377,0-0.562
                                C479.797,294.678,475.077,283.29,466.761,274.237z M449.829,323.574c-11.124,9.263-161.959,114.148-161.959,114.148
                                c-6.86,4.834-15.334,6.728-23.58,5.237l-118.166-21.484c-3.456-0.622-7.036,0.333-9.702,2.606l-75.83,65.013
                                c-1.14,1.009-2.772,1.228-4.158,0.596c-1.385-0.631-2.281-2.018-2.281-3.536V372.253c0-3.395,1.457-6.588,4.018-8.807
                                l39.231-34.275c21.633-21.624,41.196-47.362,102.989-47.362c61.777,0,86.462,0,98.832,0c13.65,0,24.721,11.062,24.721,24.712
                                c0,13.641-11.071,24.704-24.721,24.704c0,0-51.477,0-67.97,0l0.298,0.157c-4.843-0.157-8.913,3.65-9.106,8.5
                                c-0.14,4.86,3.685,8.931,8.527,9.088l0.281-0.14h92.252c0,0,75.9-49.88,87.006-59.136c12.141-8.992,30.318-11.246,40.073-0.622
                                C460.339,299.695,460.445,313.828,449.829,323.574z"/>
                            <path class="st0" d="M216.374,204.32c20.142,13.791,45.477,23.897,45.477,23.897c2.334,0.754,5.93,1.421,7.176,1.421
                                c1.245,0,4.842-0.667,7.193-1.421c0,0,25.318-10.106,45.477-23.897c30.669-20.905,80.41-61.952,80.41-119.789
                                c0-58.688-33.195-85.278-69.706-84.515c-27.845,0.518-44.302,16.966-55.338,33.187c-2.018,3-5.036,4.93-8.035,5.018
                                c-3-0.088-6.001-2.018-8.018-5.018c-11.054-16.221-27.493-32.669-55.338-33.187c-36.528-0.763-69.724,25.826-69.724,84.515
                                C135.947,142.368,185.706,183.415,216.374,204.32z M188.987,36.747c2.807-3.422,6.299-6.343,10.299-8.764
                                c3.965-2.395,9.106-1.132,11.492,2.825c2.386,3.947,1.123,9.097-2.825,11.474c-2.631,1.588-4.562,3.272-6,5.036
                                c-2.913,3.579-8.176,4.114-11.773,1.201C186.617,45.607,186.074,40.344,188.987,36.747z M169.389,90.005
                                c0-5.57,0.579-10.755,1.825-15.536c1.176-4.466,5.737-7.141,10.194-5.974c4.474,1.167,7.14,5.738,5.983,10.202
                                c-0.808,3.096-1.281,6.877-1.281,11.308c0,4.43,0.456,9.474,1.421,15.15c1.526,9.089,5.386,17.528,11.036,25.449
                                c2.702,3.764,1.824,8.983-1.948,11.659c-3.755,2.693-8.965,1.807-11.667-1.938c-6.807-9.563-11.878-20.396-13.913-32.389
                                C169.967,101.523,169.389,95.558,169.389,90.005z"/>
                        </g>
                    </svg>
                    <span class="btm-nav-label text-[1.25vmax] ml-[1vmax] pointer-events-none">Thanks</span>
                </div>
            </div>
            <!-- If we need navigation buttons -->
            <!-- <div class="swiper-button-prev m-0 p-0 w-[1vmax] h-[1vmax]" style="color: hsl(var(--s))"></div> -->
            <!-- <div class="swiper-button-next m-0 p-0 w-[1vmax] h-[1vmax]" style="color: hsl(var(--s))"></div> -->
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStates } from '~/composables/states'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps([
    'isMobile',
    'isTablet',
    'width',
    'height',
    'currentSection'
])

const store = useStates()

onMounted(() => {
    const mySwiper = new Swiper(".swiper-container", {
        // configure Swiper to use modules
        modules: [Navigation, Pagination],
        spaceBetween: 1,
        slidesPerView: 4,
        centeredSlides: true,
        slideToClickedSlide: true,
        roundLengths: true,
        loop: false,
        loopAdditionalSlides: 30,
        on: {
            slideChange: function () {
                const index_currentSlide = mySwiper.realIndex;
                const currentSlide = mySwiper.slides[index_currentSlide]
                const data = currentSlide.dataset.section
                store.setSection(data)
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    })
})
</script>

<style scoped>
.swiper-container {
    position: relative;
    width: 100%;
}

.swiper-container>.swiper-slide__content {
    position: absolute;
    top: 0;
}

.swiper-slide {
    display: flex;
    background: transparent;
    align-items: center;
    justify-content: center;
    transition: all 200ms linear;
    font-size: 1vmax;
    border-radius: 10vmax;
    transform: scale(0.8);
    cursor: pointer;
}

.swiper-slide.swiper-slide-active {
    transform: scale(1);
    background: hsl(var(--p));
    color: hsl(var(--pc));
}

.swiper-slide__content {
    height: 5vmax;
}

.swiper-button-next:after,
.swiper-button-prev:after {
    font-size: 1vmax;
}</style>