<template>
    <Dialog modal>
        
        <template #container="{ closeCallback }">
            <div class="bg-white h-[550px] w-full md:w-[450px] rounded-xl md:rounded-[35px]">
                <div class="py-6 px-5 md:py-8 md:px-8">
                    <div class="header">
                        <div class="flex justify-center">
                            <div class="ms-auto">
                                <img src="@/assets/logo.png" alt="logo" width="200px">
                            </div>
                            <button @click="closeCallback" class="ms-auto">
                                <i class="pi pi-times"></i> 
                            </button>
                        </div>
                        <div class="text-center mt-6">
                            <p class="text-xs text-gray-400">Jelajahi dunia tanya jawab, kunci akses pengetahuan, <br> dan berbagi tentang informasi</p>
                        </div>
                    </div>
                    <div class="body mt-6">
                        <form @submit.prevent="HandleSubmitLogin">
                            <div class="mb-6">
                                <label for="email" class="text-gray-500 text-sm ">Email</label>
                                <input v-model="email" required autocomplete="off" type="email" placeholder="example@gmail.com" maxlength="50" id="email"class="block w-full mt-1 py-3 px-3 text-gray-500 border-gray-300 focus:border-[#6680ff] border-[1.4px] rounded-xl focus:outline-none">
                            </div>
                            <div class="mb-9">
                                <label for="password" class="text-gray-500 text-sm ">Password</label>
                                <input v-model="password" required autocomplete="off" type="password" placeholder="******" maxlength="30" id="password"class="block w-full mt-1 py-3 px-3 text-gray-500 border-gray-300 focus:border-[#6680ff] border-[1.4px] rounded-xl focus:outline-none">
                            </div>
                            <div>
                                <button class="w-full bg-[#6680ff] text-white py-3 rounded-lg font-medium tracking-wide">Masuk</button>
                            </div>
                        </form>
                        
                    </div>

                    <div class="footer">
                        <div class="mt-3 flex justify-between">
                            
                        </div>
                        <div class="text-center mt-5 flex justify-center items-center">
                            <div class="w-[100%] bg-gray-300 h-[1px]"></div>
                            <p class="text-xs text-gray-400 mx-2 whitespace-nowrap">Atau Masuk Dengan </p>
                            <div class="w-[100%] bg-gray-300 h-[1px]"></div>
                        </div>
                        <div class="mt-6 flex justify-center gap-8">
                            <RouterLink to="">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 48 48" class="LgbsSe-Bz112c"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                            </RouterLink>
                            <RouterLink to="">  
                                <i class="pi pi-facebook text-[#6680ff] text-3xl"></i>
                            </RouterLink>
                        </div>
                    </div>

                </div>
            </div>
        </template>
    </Dialog>
</template>

<script setup>
    import { ref } from 'vue';
    import axios from 'axios';

    const email = ref('');
    const password = ref('');

    const HandleSubmitLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
                email: email.value.toLowerCase(),
                password: password.value.toLowerCase()
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
</script>

<style scoped>
    .p-dialog {
        background: transparent
    }
</style>



