<template>
    <div>
        <div class="relative w-full bg-white dark:bg-black z-50 border-b border-b-gray-300 dark:border-b-gray-700 workshop-banner">
            <div class="flex flex-wrap sm:flex-row justify-start sm:justify-center items-center gap-x-1.5 p-2">
                <p class="text-xs sm:text-sm text-left sm:text-center items-center text-black dark:text-white justify-center items-center pl-[10px] sm:pl-0 pr-10 sm:pr-0">
                    <span class="font-semibold"> 📣 Just Released! </span>
                    Our official workshop to level up from Nuxt 2 to Nuxt 3.
                </p>
                <a href="/support/workshop" class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-xs px-2.5 py-1.5 border border-transparent hover:underline focus:underline inline-flex items-center rounded-lg font-semibold"> Register now
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon flex-shrink-0 h-4 w-4 ml-1.5 -mr-0.5" style="" width="1em" height="1em" viewBox="0 0 24 24" data-v-668f7658="">
                        <path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"></path>
                    </svg>
                </a>
                <div class="flex flex-row justify-end absolute inset-y-0 right-4">
                    <button class="font-medium focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 focus:ring-offset-white dark:focus:ring-offset-black text-xs p-1.5 border border-transparent hover:underline focus:underline inline-flex items-center rounded-lg font-semibold" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon flex-shrink-0 h-4 w-4" style="" width="1em" height="1em" viewBox="0 0 32 32" data-v-668f7658="">
                            <path fill="currentColor" d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"></path>
                        </svg>
                        <span class=""></span>
                    </button>
                </div>
            </div>
        </div>
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label for="my-left-side-drawer" class="btn btn-ghost btn-circle drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>
                </div>
            </div>
            <div class="navbar-center">
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="navbar-end">
                <button class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span class="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>