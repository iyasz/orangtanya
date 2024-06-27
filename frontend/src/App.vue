

<template>

    <Navbar />

    
    <RouterView />
    <h1>tes api{{ message }}</h1>


</template>


<script setup>
import './assets/style.css'
import { RouterView, useRoute } from 'vue-router'
import { ref, onMounted, computed, watch } from 'vue';
import Navbar from './components/layouts/client/dev.main.vue'
import axiosInstance from './restapi/api.js'

const message = ref(null);
const showNavbar = ref(true);

const getMessage = async () => {
  try {

    const res = await axiosInstance.get('/test');
    // const { data } = await axios.get("http://localhost:3000/");

    // message.value = data.message;

    console.log(res)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getMessage();
})


</script>