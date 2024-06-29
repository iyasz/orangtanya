<template>
  <div class="navbar py-3 border-b-[#f5f6fb] fixed border-b-2 left-0 top-0 right-0 z-50  bg-white text-dark">
    <div class="lg:px-7 px-3 flex items-center">
        <div class="">
            <img src="@/assets/logo.png" width="180px" alt="">
        </div>
        <div class="ms-16 lg:block hidden">
            <RouterLink to="" class="text-slate-500 font-medium text-[15px] hover:text-[#6680ff] ">Home</RouterLink>
            <RouterLink to="" class="text-slate-500 font-medium text-[15px] hover:text-[#6680ff] ms-8">Group</RouterLink>
        </div>
        <div class="ms-auto relative lg:block hidden">
            <input type="text" name="search" autocomplete="off" id="search" class="block ease-in-out duration-200 focus:outline-0 w-[430px] rounded-full py-2 ps-7 pe-14 bg-[#f5f6fb] hover:bg-white focus:bg-white ring-1 ring-inset ring-[#f5f6fb] hover:ring-[#6680ff] focus:ring-[#6680ff] placeholder:text-gray-400 text-gray-400 text-sm" placeholder="Mau mencari apa?">
            <div class="absolute inset-y-0 right-0 flex items-center px-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="" fill="#a3a3a3" viewBox="0 0 24 24" ><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
            </div>
        </div>

        <div class="ms-auto items-center gap-5 lg:flex hidden">
            <div ref="postMenu" :class="showPostNav ? 'bg-[#f5f6fb]' : ''" class="relative p-1 rounded-full" 
            @mouseenter="showPostNav = true, showNotificationNav = false" @blur="showPostNav = false" >
                <div class="cursor-pointer">  
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.5 11.5V17C21.5 18.8856 21.5 19.8284 20.9142 20.4142C20.3284 21 19.3856 21 17.5 21H7.5C5.61438 21 4.67157 21 4.08579 20.4142C3.5 19.8284 3.5 18.8856 3.5 17V9C3.5 7.11438 3.5 6.17157 4.08579 5.58579C4.67157 5 5.61438 5 7.5 5H11" :stroke="showPostNav ? '#6690ff' : '#a3a3a3'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.356 12.963L20.4398 6.85791C21.2074 5.71027 20.8994 4.15762 19.7517 3.38996C18.6041 2.62231 17.0515 2.93034 16.2838 4.07798L12.2001 10.1831C11.0592 11.8886 10.4798 13.908 10.5428 15.959L10.5599 16.5153C10.5688 16.8041 10.8592 16.9984 11.1296 16.8964L11.6503 16.6998C13.57 15.975 15.2152 14.6686 16.356 12.963Z" :stroke="showPostNav ? '#6690ff' : '#a3a3a3'" stroke-width="2"/>
                    </svg>
                </div>

                <PostNAv v-if="showPostNav" @mouseleave="showPostNav = false"/>
            </div>

            <div ref="notificationMenu" :class="showNotificationNav ? 'bg-[#f5f6fb]' : ''" class="relative p-1 rounded-full" 
            @mouseenter="showNotificationNav = true, showPostNav = false" @blur="showNotificationNav = false">
                <div class="cursor-pointer">  
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3586 9C19.4524 9.49246 19.5 9.99496 19.5 10.5C19.5 11.9118 19.8059 12.2647 19.9528 12.2647C20.8441 13.1931 21.7304 14.5313 21.4458 15.7941C20.9488 18 18.9609 18 12.5 18C6.03913 18 4.05116 18 3.55417 15.7941C3.26965 14.5313 4.15585 13.1931 5.04718 12.2647C5.1941 12.2647 5.5 11.9118 5.5 10.5C5.5 9.51509 5.68106 8.53982 6.03284 7.62987C6.38463 6.71993 6.90024 5.89314 7.55025 5.1967C8.20026 4.50026 8.97194 3.94781 9.82122 3.5709C10.6705 3.19399 11.5807 3 12.5 3C13.4193 3 14.3295 3.19399 15.1788 3.5709C15.583 3.75028 15.9696 3.9694 16.3338 4.22489" :stroke="showNotificationNav ? '#6680ff' : '#a3a3a3'" stroke-width="2"/>
                        <path d="M16.5 18C16.5 18.394 16.3965 18.7841 16.1955 19.1481C15.9945 19.512 15.6999 19.8427 15.3284 20.1213C14.957 20.3999 14.516 20.6209 14.0307 20.7716C13.5454 20.9224 13.0253 21 12.5 21C11.9747 21 11.4546 20.9224 10.9693 20.7716C10.484 20.6209 10.043 20.3999 9.67157 20.1213C9.30014 19.8427 9.0055 19.512 8.80448 19.1481C8.60346 18.7841 8.5 18.394 8.5 18" :stroke="showNotificationNav ? '#6680ff' : '#a3a3a3'" stroke-width="2"/>
                        <circle cx="18.5" cy="6" r="3" :stroke="showNotificationNav ? '#6680ff' : '#a3a3a3'" stroke-width="2"/>
                    </svg>
                </div>

                <NotificationNav v-if="showNotificationNav" @mouseleave="showNotificationNav = false"/>
            </div>

            <div class="h-[18px] w-[1px] bg-slate-300"></div>
            
            <button @click="VisibleLoginDialog = true" class="cursor-pointer">
                <Avatar image="https://www.hoyolab.com/_nuxt/img/default_avatar.25aeebf.png" shape="circle" />
            </button>

            <LoginDialog v-model:visible="VisibleLoginDialog" />
        </div>

        <button class="lg:hidden block ms-auto" @click="VisibleSidebar = true">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 24 24" stroke="#a3a3a3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
        </button>
    </div>
  </div>

  <div class="lg:hidden block">
    <Sidebar v-model:visible="VisibleSidebar" >
        <template #container="{ closeCallback }">
            <div class="flex flex-column h-full">
                <div class="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                    <span class="inline-flex align-items-center gap-2">
                        <!-- <img src="@/assets/logo.png" width="180px" alt=""> -->
                    </span>
                    <span>
                        <Button type="button" @click="closeCallback" class="h-2rem w-2rem">
                            <i class="pi pi-times text-xl"></i>
                        </Button>
                    </span>
                </div>
                <div class="overflow-y-auto">
                    <ul class="list-none p-3 m-0">
                        <li>
                            <div v-ripple v-styleclass="{
                                    selector: '@next',
                                    enterClass: 'hidden',
                                    enterActiveClass: 'slidedown',
                                    leaveToClass: 'hidden',
                                    leaveActiveClass: 'slideup'
                                }"
                                class="p-3 flex align-items-center justify-content-between text-600 cursor-pointer p-ripple"
                            >
                                <span class="font-medium">APPLICATION</span>
                                <i class="pi pi-chevron-down"></i>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-folder mr-2"></i>
                                        <span class="font-medium">Projects</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-chart-bar mr-2"></i>
                                        <span class="font-medium">Performance</span>
                                    </a>
                                </li>
                                <li>
                                    <a v-ripple class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="mt-auto">
                    <hr class="mb-3 mx-3 border-top-1 border-none surface-border" />
                    <a v-ripple class="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                        <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
                        <span class="font-bold">Amy Elsner</span>
                    </a>
                </div>
            </div>
        </template>
    </Sidebar>
</div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import NotificationNav from './notification.vue';
import PostNAv from './PostNav.vue';
import LoginDialog from './login.vue';

import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/authStores'

const authStores = useAuthStore();

// Stste Pinia js 
const { VisibleLoginDialog } = storeToRefs(authStores)


// navbar 
const VisibleSidebar = ref(false);

const showNotificationNav = ref(false);
const notificationMenu = ref(null); 
const showPostNav = ref(false);
const postMenu = ref(null); 



const handleClickOutside = (event) => {
if (notificationMenu.value && !notificationMenu.value.contains(event.target)) {
    showNotificationNav.value = false;
}

if (postMenu.value && !postMenu.value.contains(event.target)) {
    showPostNav.value = false;
}
};

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

</script>



