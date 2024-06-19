
<template>

    <div class=" mx-10 my-10">

        <div class="bg-white rounded-[22px] h-[700px]">
            <div class="wrapper">
             
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="w-full md:w-1/2">
                        <form method="post">
                            <div class="mb-4">
                                <label for="username" class="text-sm font-medium text-gray-900">Username</label>
                                <div class="relative mt-2 rounded-md shadow-sm">
                                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3">
                                        <span class="text-gray-500 sm:text-sm">+</span>
                                    </div>
                                    <input type="text" name="username" id="username" class="block focus:outline-0 w-full rounded-md border-0 py-1.5 ps-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="John Doe"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="w-full md:w-1/2 pt-20 pe-20">
                        <div class="mb-10">
                            <h1 class="text-3xl mb-2">Sign In</h1>
                            <p class="text-sm text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus officiis incidunt natus?</p>
                        </div>
                        <form @submit.prevent="handleSubmit">
                            <div class="mb-4">
                                <label for="email" class="text-sm text-slate-400 ">Email</label>
                                <input v-model="email" type="text" name="email" id="email" autocomplete="off" class="block mt-1 focus:outline-0 w-[400px] rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 text-sm " placeholder="example@gmail.com"/>
                            </div>
                            <div class="mb-5">
                                <label for="password" class="text-sm text-slate-400 ">Password</label>
                                <input v-model="password" type="password" name="password" id="password" autocomplete="off" class="block mt-1 focus:outline-0 w-[400px] rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 text-sm " placeholder="******"/>
                            </div>
                            <div class="mb-4">
                                <button class="bg-[#6680ff] text-white px-8 py-2 text-sm rounded-md">Masuk</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div>

    </div>

</template>

<script setup>

import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  try {
    const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
      email: email.value.toLowerCase(),
      password: password.value.toLowerCase()
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};


</script>


