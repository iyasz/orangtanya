<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <!-- <RouterView /> -->

    <div class="container mx-auto px-8 mt-12">

        <div class="bg-white rounded-[22px] h-[500px]">
                <div class="wrapper">
                    <nav>
                        <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>
            </div>
        </div>

    </div>

</template>

