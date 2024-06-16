

<template>

    <Navbar/>

    
    <RouterView />
    <h1>tes api{{ message }}</h1>


</template>


<script setup>
import './assets/style.css'
import axios from 'axios';
import { RouterView } from 'vue-router'
import { ref, onMounted } from 'vue';
import Navbar from './components/layouts/main.vue'
import Home from './components/layouts/main.vue'

const message = ref(null);

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

</script>