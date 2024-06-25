<template>

    <div class="px-14 mt-20">

        <!-- <div class="bg-white rounded-[22px] h-[500px]">
            <div class="wrapper"> -->
          
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="w-full md:w-8/12 bg-white rounded-[16px] h-[500px]">
                        <div class="p-4">
                            <h1>All Questions</h1>
                        </div>
                        <hr>
                        <div class="header p-5 flex items-center">
                            <div class="profile relative h-[45px] w-[53px] flex justify-center">
                                <!-- <Avatar image="https://www.hoyolab.com/_nuxt/img/default_avatar.25aeebf.png" size="large" shape="circle" /> -->
                                <img src="https://www.hoyolab.com/_nuxt/img/default_avatar.25aeebf.png" width="45px" />
                                <img src="@/assets/img/border.gif" alt="border" class="absolute z-2 bottom-0 -top-1 left-0 right-0">
                            </div>
                            <div class="info ms-3">
                                <p class="text-sm font-medium">Yasz Avellia</p>
                                <p class="text-[11px] text-gray-500 font-light tracking-wide">2d ago - Genshin Impact</p> 
                            </div>
                            <div class="ms-auto">
                                <Button type="button" icon="pi pi-ellipsis-v" class="text-gray-400" @click="toggle" aria-haspopup="true" aria-controls="option_menu" />
                                <Menu ref="menu" id="option_menu" :model="items" :popup="true" class="text-[13px]" />
                            </div>  
                        </div>
                        
                    </div>
                    <div class="w-full md:w-4/12 ">
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

