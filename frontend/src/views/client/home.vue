<template>

    <div class="px-14 mt-20 mb-5">

        <!-- <div class="bg-white rounded-[22px] h-[500px]">
            <div class="wrapper"> -->
          
                <div class="flex flex-col md:flex-row gap-4">
                    <div class="w-full md:w-8/12 bg-white rounded-[16px] h-[1500px]">
                        <div class="p-4">
                            <h1>Postingan Terbaru</h1>
                        </div>
                        <hr>

                        <div class="p-5">
                            <Post/>
                            <Post/>
                            <Post/>
                        </div>
                        
                    </div>
                    <div class="w-full md:w-4/12 ">
                        <SideTab/>
                    </div>
                </div>


            <!-- </div>
        </div> -->

    </div>

</template>

<script setup>

    import Post from '@/components/main/client/home/Post.vue'
    import SideTab from '@/components/main/client/home/SideTab.vue'



</script>

