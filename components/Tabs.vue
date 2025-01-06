<template>
  <div class="w-full">
    <!-- Tab Buttons -->
    <!-- @click="activeTab = index,props.currentTab = index" -->
    <div class="flex space-x-4 border-b border-gray-300">
      <button
        v-for="(tab, index) in props.tabs"
        :key="index"
        @click="activeTab = index,props.currentTab = index" 
        :class="[
          'py-2 px-4 focus:outline-none',
          (props.currentTab >0 ? props.currentTab == index: activeTab == index) ? 'border-b-2 border-blue-900 bg-gray-300 text-gray-900' : 'text-gray-500',
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="mt-4">
        <slot :activeTab="props.currentTab" :currentTab="props.currentTab"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  currentTab: {
    type: Number,
    required: true,
  },
  tabs: {
    type: Array,
    required: true,
  },
});

const activeTab = ref(0);


</script>

