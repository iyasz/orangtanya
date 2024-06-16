<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <!-- <RouterView /> -->

    <div class="container mx-auto px-8 mt-20">

        <div class="bg-white rounded-[22px] h-[500px]">
            <div class="wrapper">
                <!-- <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav> -->
                <div class="flex justify-center">
                    <form method="post">
                        <div class="mb-4">
                            <label for="username" class="text-sm font-medium text-gray-900">Username</label>
                            <div class="relative mt-2 rounded-md shadow-sm">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3">
                                    <span class="text-gray-500 sm:text-sm">+</span>
                                </div>
                                <input type="text" name="price" id="price" class="block focus:outline-0 w-full rounded-md border-0 py-1.5 ps-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="John Doe">
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </div>

</template>

