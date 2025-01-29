<script setup>
const props = defineProps({
  breadCrumbItems: {
    type: Array,
    required: true,
  },
  bottomTitle: {
    type: String
  },
});
</script>

<template>
  <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 mb-3">
    <nav class="flex p-3 text-xl" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li v-for="(crumb, index) in props.breadCrumbItems" :key="index"
          :class="index == 0 ? 'inline-flex items-center' : ''">
          <div class="flex items-center">
            <svg class="w-3 h-3" v-if="crumb.text == 'Home'" fill="#000000" height="800px" width="800px" version="1.1"
              id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512" xml:space="preserve">
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path
                      d="M256,2.938l-256,256v48.427h62.061v201.697h155.152V384.941h77.576v124.121h155.151V307.365H512v-48.427L256,2.938z M403.394,260.82v201.697h-62.061V338.396H170.667v124.121h-62.061V260.82H63.943L256,68.762L448.057,260.82H403.394z" />
                  </g>
                </g>
              </g>
            </svg>
            <svg v-else class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 9 4-4-4-4" />
            </svg>
            <router-link :to="crumb.href" v-if="crumb.href != '#'"
              class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{{
                crumb.text }}</router-link>
            <span v-else class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
              :style="{ 'color': crumb.color }">{{ crumb.text }}</span>
          </div>
        </li>
      </ol>
    </nav>
    <div class="flex pt-3 justify-between ml-3 border-t border-gray-200 mb-3" v-if="bottomTitle">
      <div class="text-xl font-medium leading-none tracking-tight text-blue-900 md:text-xl dark:text-white"
        style="color:rgb(10 35 104)">{{ bottomTitle }}</div>
      <div class="mr-5 flex">
        <button class="mr-5 text-black flex items-center border border-gray-300 font-bold rounded text-sm px-2 py-1 me-2">
          <svg class="h-6 w-6 mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.7 5.2a1.024 1.024 0 0 1 0 1.448l-2.626 2.628-3.35-3.35L17.35 3.3a1.024 1.024 0 0 1 1.448 0zm-4.166 5.614-3.35-3.35-8.509 8.511L3 21l5.025-1.675z"/></svg>
          <p class="text-base">Edit</p>
        </button>
        <button class="mr-5 flex items-center border border-gray-300 font-bold rounded text-sm px-2 py-1 me-2">
          <svg class="h-6 w-6" fill="red" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20.5 4h-3.64l-.69-2.06a1.37 1.37 0 0 0-1.3-.94h-4.74a1.37 1.37 0 0 0-1.3.94L8.14 4H4.5a.5.5 0 0 0 0 1h.34l1 17.59A1.45 1.45 0 0 0 7.2 24h10.6a1.45 1.45 0 0 0 1.41-1.41L20.16 5h.34a.5.5 0 0 0 0-1zM9.77 2.26a.38.38 0 0 1 .36-.26h4.74a.38.38 0 0 1 .36.26L15.81 4H9.19zm8.44 20.27a.45.45 0 0 1-.41.47H7.2a.45.45 0 0 1-.41-.47L5.84 5h13.32z"/>
            <path d="M9.5 10a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5zM12.5 9a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 1 0v-9a.5.5 0 0 0-.5-.5zM15.5 10a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="css"></style>
