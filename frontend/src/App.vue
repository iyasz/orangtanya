

<template>

    <Navbar />

    
    <RouterView />
    <h1>tes api{{ message }}</h1>


</template>


<script setup>
import './assets/style.css'
import axios from 'axios';
import { RouterView, useRoute } from 'vue-router'
import { ref, onMounted, computed, watch } from 'vue';
import Navbar from './components/layouts/client/dev.main.vue'

const message = ref(null);
const showNavbar = ref(true);

const getMessage = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/");

    message.value = data.message;

    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getMessage();
})

// Gunakan useRoute untuk mendapatkan informasi tentang rute saat ini
const route = useRoute();

// Watch untuk memantau perubahan rute dan menentukan apakah Navbar harus ditampilkan
watch(
  () => route.path,
  (newPath) => {
    showNavbar.value = newPath !== '/auth/login';
  },
  { immediate: true }
);
</script>