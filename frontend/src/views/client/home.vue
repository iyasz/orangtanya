<template>

    <div class="px-14 mt-20">

        <!-- <div class="bg-white rounded-[22px] h-[500px]">
            <div class="wrapper"> -->
          
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="w-full md:w-8/12 bg-white rounded-[16px] h-[1500px]">
                        <div class="p-4">
                            <h1>All Questions</h1>
                        </div>
                        <hr>

                        <div class="p-5">
                            <div class="wrapper-post">
                                <div class="post">
                                    <div class="header flex items-center">
                                        <div class="profile relative h-[45px] w-[53px] flex justify-center">
                                            <img src="https://www.hoyolab.com/_nuxt/img/default_avatar.25aeebf.png" width="45px" />
                                            <img src="@/assets/img/border.gif" alt="border" class="absolute z-2 bottom-0 -top-1 left-0 right-0">
                                        </div>
                                        <div class="info ms-3">
                                            <RouterLink to="" class="text-sm font-medium hover:text-[#6680ff]">Yasz Avellia</RouterLink>
                                            <p class="text-[11px] text-gray-500 font-light tracking-wide">2d ago - Genshin Impact</p> 
                                        </div>
                                        <div class="ms-auto">
                                            <Button type="button" icon="pi pi-ellipsis-v" class="text-gray-400" @click="toggle" aria-haspopup="true" aria-controls="option_menu" />
                                            <Menu ref="menu" id="option_menu" :model="items" :popup="true" class="text-[13px]" />
                                        </div>  
                                    </div>
                                    <div class="body my-4">
                                        <p class="text-sm text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, tenetur. Quisquam dicta ipsa praesentium sed neque exercitationem rem, veritatis facilis vero, enim possimus ab asperiores eligendi placeat molestiae pariatur sint?</p>
                                        <div class="tag flex flex-wrap mt-5 gap-3">
                                            <RouterLink to="" class="flex items-center text-[11px] text-[#6680ff] bg-[#eff2ff] py-1 px-2 rounded-sm">
                                                <p>Keqing</p>
                                            </RouterLink>
                                            <RouterLink to="" class="flex items-center text-[11px] text-[#6680ff] bg-[#eff2ff] py-1 px-2 rounded-sm">
                                                <p>Arisu Sakayanagi</p>
                                            </RouterLink>
                                            <RouterLink to="" class="flex items-center text-[11px] text-[#6680ff] bg-[#eff2ff] py-1 px-2 rounded-sm">
                                                <p>ELaina</p>
                                            </RouterLink>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="footer my-3 flex gap-10 ms-5">
                                        <RouterLink to="" class="text-gray-400 hover:text-[#6680ff]">
                                            <i class="pi pi-thumbs-up"></i>
                                            <span class="ms-2 text-sm">1034</span>
                                        </RouterLink>
                                        <RouterLink to="" class="text-gray-400 hover:text-[#6680ff]">
                                            <i class="pi pi-comment "></i>
                                            <span class="ms-2 text-sm">4</span>
                                        </RouterLink>
                                        <RouterLink to="" class="text-gray-400 hover:text-[#6680ff] ms-auto me-5">
                                            <i class="pi pi-bookmark "></i>
                                        </RouterLink>
                                    </div>
                                    <hr>
                                </div>

                                <div class="random-comment flex ms-4 mt-4">
                                    <Avatar image="https://www.hoyolab.com/_nuxt/img/default_avatar.25aeebf.png" shape="circle"/>
                                    <div class="comment ms-3">
                                        <div class="rounded-xl bg-gray-100 px-4 py-3">
                                            <RouterLink to="" class="text-sm text-gray-700 font-medium">Yasz Avellia</RouterLink>
                                            <p class="text-xs text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus ad fugit?</p>
                                        </div>
                                        <div class="mt-1 ms-3 flex gap-6 text-gray-500 items-center">
                                            <p class="text-xs ">2 Jam </p>
                                            <RouterLink to="" class="">
                                                <i class="pi pi-clone text-[13px]"></i>
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr class="opacity-[50%]">
                        
                    </div>
                    <div class="w-full md:w-4/12 ">
                        <div v-if="!authStores.currentUser" class="bg-white rounded-[16px] mb-4">
                            <div class="p-4">
                                <h1>Login Dlu ~</h1>
                                <TitleLine/>
                            </div>
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

                    </div>
                </div>


            <!-- </div>
        </div> -->

    </div>

</template>

<script setup>
    import { ref } from "vue";
    import TitleLine from '../../components/atoms/title-line.vue'
    import { useAuthStore } from '@/stores/authStores'

    // Stores
    const authStores = useAuthStore();


    const menu = ref();
    const items = ref([
        {
            label: 'More',
            items: [
                {
                    label: 'Report',
                    icon: 'pi pi-ban'
                },
                {
                    label: 'Copy Link',
                    icon: 'pi pi-clipboard',
                }
            ]
        }
    ]);

    const toggle = (event) => {
        menu.value.toggle(event);
    };  

</script>

