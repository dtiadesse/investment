<template>
  <nav class="relative">
    <ul class="flex items-center space-x-6 text-gray-700 font-medium">
            <li><a href="#" class="hover:text-gray-900">Home</a></li>
           
            <li class="relative group">
              <a href="#" @click="subMenuF()" class="hover:text-gray-900 flex items-center">
                My Investments
                <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            
              <div v-if="submenuOpen" class="width absolute left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200">
              <div class="space-x-4 flex">
               
                <div class="p-5 cursor-pointer">
                  <div class="flex items-center space-x-4">
                    <div class="w-10 h-10 p-2 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zM2 20.78A10 10 0 0 1 12 2a10 10 0 0 1 10 10.75v7.8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V18H8v2.55a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path></svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-800">Investments Dashboard</h3>
                      <h3 class="font-bold text-gray-800">[Sponsor]</h3>
                      <p class="text-sm text-gray-600">Summary of investments I sponsor</p>
                    </div>
                  </div>
                </div>
               
                <div class="p-5 cursor-pointer">
                  <div class="flex items-center space-x-4">
                    <div class="w-10 h-10 p-2 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zM2 20.78A10 10 0 0 1 12 2a10 10 0 0 1 10 10.75v7.8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V18H8v2.55a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path></svg>
                    </div>
                    <div>
                      <h3 class="font-bold text-gray-800">Investments Dashboard</h3>
                      <h3 class="font-bold text-gray-800">[Team Member]</h3>
                      <p class="text-sm text-gray-600">Summary of investments I manage</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <button class="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 font-medium">
                  Add New Investment
                </button>
              </div>
               </div>
            </li>
          </ul>
        </nav>
</template>

<script lang="ts" setup>

import { ref } from 'vue';

const submenuOpen = ref(false);

const subMenuF = () => {
  submenuOpen.value = !submenuOpen.value;
};

</script>

<style scoped>
.width{
  width:580px
}
</style>