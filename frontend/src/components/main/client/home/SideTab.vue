<template>
    <div v-if="!authStores.currentUser" class="bg-white rounded-[16px] mb-4 relative">
        <div  class="p-4">
            <h1>Login dulu ~</h1>
            <TitleLine/>
            <div class="text-center mt-3">
                <p class="text-xs text-gray-600 font-light tracking-wide mx-4">Masuk hanya membutuhkan waktu beberapa detik. Ini akan membuka seluruh fitur dan cari pertanyaan yang anda suka!</p>
                <button class="btn btn-primary bg-blue-100 text-[#6680ff] hover:bg-[#6680ff] hover:text-white font-medium px-20 py-3 rounded-full mt-4 text-sm">Masuk</button>
            </div>
        </div>
        <img src="@/assets/img/is_login_box.png" loading="lazy" class="absolute top-0" width="80px">
        <img src="@/assets/img/is_login_box_2.png" loading="lazy" class="absolute top-0 right-0" width="120px">
    </div>
    <div class="bg-white rounded-[16px] mb-4">
        <div class="p-4">
            <h1>Post Now ~</h1>
            <TitleLine/>
            <div class="flex">
                <div class="">
                    <h1>Post</h1>
                </div>
                <div class="">
                    <h1>Image</h1>
                </div>
                <div class="">
                    <h1>Video</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-white rounded-[16px]">
        <div class="p-4">
            <h1>Kategori</h1>
            <TitleLine/>
        </div>
    </div>
</template>

<script setup>

import { useAuthStore } from '@/stores/authStores'
import TitleLine from '@/components/atoms/title-line.vue'

// Stores
const authStores = useAuthStore();


</script>