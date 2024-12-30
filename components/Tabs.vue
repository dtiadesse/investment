<template>
  <div class="w-full">
    <!-- Tab Buttons -->
    <div class="flex space-x-4 border-b border-gray-300">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="activeTab = index"
        :class="[
          'py-2 px-4 focus:outline-none',
          activeTab === index ? 'border-b-2 border-blue-900 bg-gray-300 text-gray-900' : 'text-gray-500',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="mt-4">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="activeTab === index"
      >
        <slot :name="tab.name" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = ref([
  { label: "Main Details", name: "mainDetails" },
  { label: "Revenue", name: "revenue" },
  { label: "Total & Risk", name: "totalRisk" },
  { label: "Other", name: "other" },
  { label: "Financial Returns", name: "Financialreturns" },
  { label: "Financial Impact", name: "Financialimpact" },
]);
</script>

