<template>
    <transition name="fade">
        <div class="fade-animation absolute right-[50%] top-[50%] transform -translate-y-1/2 translate-x-1/2 bg-gray-700 text-sm px-3 py-2 whitespace-nowrap text-white rounded-xl z-5">
        {{ props.message }}
        </div>
    </transition>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const props = defineProps({
    message: {
      type: String,
      required: true,
    },
  });
  
  </script>
  
  <style scoped>
  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  .fade-animation {
    animation: fadeInOut 2.5s forwards;
  }
  </style>
  