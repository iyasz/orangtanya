<template>
    <Dialog modal>
        
        <template #container="{ closeCallback }">
            <div class="bg-white h-[570px] w-[450px] rounded-[35px]">
                <div class="p-8">
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
                        <form>
                            <div class="mb-6">
                                <label for="email" class="text-gray-500 text-sm ">Email</label>
                                <input type="email" placeholder="example@gmail.com" maxlength="50" id="email"class="block w-full mt-1 py-3 px-3 text-gray-500 border-gray-300 focus:border-[#6680ff] border-[1.4px] rounded-xl focus:outline-none">
                            </div>
                            <div class="mb-9">
                                <label for="password" class="text-gray-500 text-sm ">Password</label>
                                <input type="password" placeholder="******" maxlength="30" id="password"class="block w-full mt-1 py-3 px-3 text-gray-500 border-gray-300 focus:border-[#6680ff] border-[1.4px] rounded-xl focus:outline-none">
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
                            <p class="text-xs text-gray-400 mx-2 whitespace-nowrap">Atau masuk dengan </p>
                            <div class="w-[100%] bg-gray-300 h-[1px]"></div>
                        </div>
                    </div>

                </div>
            </div>
        </template>
    </Dialog>
</template>

<style scope>
    .p-dialog {
        background: transparent
    }
</style>



