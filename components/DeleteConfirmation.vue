<template>
<div v-if="isVisible" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h3 class="text-center text-lg font-bold mb-4 underline underline-offset-8 decoration-blue-500 decoration-4">Delete</h3>
      <h3 class="text-center text-lg text-gray-500 mb-4">You made changes to this page. Do you want to save them before leaving?</h3>
      <div class="flex justify-end space-x-4">
        <button 
          @click="onCancel"
          class="bg-white font-semibold border border-bg-500 text-black px-4 py-2 rounded-md focus:outline-none">
          Leave without Saving
        </button>
        <button 
          @click="onConfirm"
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
          Save Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script  lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['confirm', 'cancel']);

const onConfirm = () => {
  emit('confirm');
};

const onCancel = () => {
  emit('cancel');
};
</script>

