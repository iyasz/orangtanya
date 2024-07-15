<template>
    <div class="absolute bg-white drop-shadow-lg right-[30px] w-[350px] rounded-xl top-[66px]">
        <div class="py-4 px-3">
            <div class="flex mx-1">
                <img src="https://www.hoyolab.com/_nuxt/img/default_avatar.25aeebf.png" alt="avatar" width="42px">
                <div class="ms-4">
                    <p v-if="user" class="text-sm text-gray-700">{{ user.name }}</p>
                    <p class="text-xs text-gray-400">Member</p>
                </div>
            </div>
            <div class="mt-3">
                <hr class="my-2">
                <RouterLink to="" class="block mb-1 w-full hover:text-[#6680ff] hover:bg-[#eff2ff] rounded-lg px-3 py-2 text-gray-500 text-sm font-medium flex items-center">
                    <svg width="21" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 11.8108V17C21.5 18.8856 21.5 19.8284 20.9142 20.4142C20.3284 21 19.3856 21 17.5 21H14.3947H7.5C5.61438 21 4.67157 21 4.08579 20.4142C3.5 19.8284 3.5 18.8856 3.5 17V13.2489C3.5 12.3161 3.5 11.8498 3.69301 11.4429C3.88602 11.036 4.24721 10.741 4.96958 10.151L9.8915 6.13067C11.1378 5.11263 11.761 4.60361 12.4908 4.61451C13.2206 4.6254 13.8283 5.1528 15.0437 6.20761L16.5329 7.5M21.5 11.8108L16.5329 7.5M21.5 11.8108V5C21.5 3.89543 20.6046 3 19.5 3V3V3C18.5826 3 18.1239 3 17.7619 3.14709C17.257 3.3522 16.8577 3.75442 16.6563 4.26075C16.5119 4.62385 16.5152 5.08254 16.5219 5.99992L16.5329 7.5" stroke="currentColor" stroke-width="2"/>
                        <path d="M10 21.5V16.5C10 15.3954 10.8954 14.5 12 14.5H12.5C13.6046 14.5 14.5 15.3954 14.5 16.5V20" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span class="ms-3">Homepage</span>
                </RouterLink>
                <RouterLink to="" class="block mb-1 w-full hover:text-[#6680ff] hover:bg-[#eff2ff] rounded-lg px-3 py-2 text-gray-500 text-sm font-medium flex items-center">
                    <svg width="21" height="22" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 7V17.6008C3.5 19.4781 5.02187 21 6.89919 21C8.1867 21 9.36372 20.2726 9.93951 19.121L11.0488 16.9024C11.3253 16.3493 11.8906 16 12.5089 16C13.1179 16 13.6763 16.339 13.9572 16.8793L15.1589 19.1901C15.7372 20.3022 16.8865 21 18.14 21C19.9957 21 21.5 19.4957 21.5 17.64V7C21.5 4.79086 19.7091 3 17.5 3H11.15H7.5C5.29086 3 3.5 4.79086 3.5 7Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span class="ms-3">Bookmarks</span>
                </RouterLink>
                <RouterLink to="" class="block w-full hover:text-[#6680ff] hover:bg-[#eff2ff] rounded-lg px-3 py-2 text-gray-500 text-sm font-medium flex items-center">
                    <svg width="22" height="23" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12.5" cy="12" r="9" stroke="currentColor" stroke-width="2"/>
                        <path d="M7.5 20V18.5C7.5 16.6144 7.5 15.6716 8.08579 15.0858C8.67157 14.5 9.61438 14.5 11.5 14.5H13.5C15.3856 14.5 16.3284 14.5 16.9142 15.0858C17.5 15.6716 17.5 16.6144 17.5 18.5V20" stroke="currentColor" stroke-width="2"/>
                        <circle cx="12.5" cy="10" r="2" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span class="ms-3">My Account</span>
                </RouterLink>
                <hr class="my-2">
                <button @click="handleLogout" class="block w-full hover:text-[#6680ff] hover:bg-[#eff2ff] rounded-lg px-3 py-2 text-gray-500 text-sm font-medium flex items-center">
                    <svg width="21" height="22" class="hover:stroke-current" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.50166 11.2379C9.08744 11.237 8.75092 11.572 8.75 11.9862C8.74909 12.4004 9.08413 12.737 9.49834 12.7379L9.50166 11.2379ZM20.995 12.5436C21.2885 12.2514 21.2896 11.7765 20.9973 11.483L16.2349 6.69945C15.9427 6.40591 15.4678 6.40486 15.1743 6.69711C14.8807 6.98936 14.8797 7.46423 15.1719 7.75777L19.4052 12.0098L15.1532 16.243C14.8596 16.5353 14.8586 17.0101 15.1508 17.3037C15.4431 17.5972 15.9179 17.5983 16.2115 17.306L20.995 12.5436ZM9.49834 12.7379L20.4642 12.7621L20.4675 11.2621L9.50166 11.2379L9.49834 12.7379Z" fill="currentColor"/>
                        <path d="M14.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V20.0526V20.0526C3.5 20.5758 3.92415 21 4.44737 21H14.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span class="ms-3">Logout</span>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useAuthStore } from '@/stores/authStores'
    import axiosInstance from '@/restapi/api';

    const user = ref(null)

    const getUser = async () => {
        const {data} = await axiosInstance.get('/auth/getUser')
        user.value = data.user
    }

    onMounted(() => {
        getUser()
    })

    // pinia 
    const authStores = useAuthStore();
    const {handleLogout} = authStores

</script>