<template>
  <transition name="modal-fade">
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white rounded-lg shadow-lg max-w-4xl p-6">
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        @click="close()"
      >
        &times;
      </button>
      <h2 class="text-xl font-bold mb-4 text-center  half-underline">Add New Investment</h2>
      <div>
        <Tabs>
          <template #mainDetails>
          
                <form @submit.prevent="handleSubmit">
            <div class="flex items-center justify-center">
              <div class="max-w-md w-full">
                  <!-- Title Field -->
                  <div class="mb-4">
                    <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      v-model="form.title"
                      class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Progress Capital - Team - Recruiting"
                    />
                  </div>

                  <!-- Type Field -->
                  <div class="mb-4">
                    <label for="type" class="block text-sm font-medium text-gray-700 mb-2">
                      Type
                    </label>
                    <select
                      id="type"
                      v-model="form.selectedType"
                      class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option disabled value="">Select an type</option>
                      <option v-for="(option, index) in options" :key="index" :value="option">
                        {{ option }}
                      </option>
                    </select>
                  </div>

                  <!-- Investment Details Field -->
                  <div class="mb-4">
                    <label for="investmentDetails" class="block text-sm font-medium text-gray-700 mb-2">
                      Investment Details
                    </label>
                    <select
                      id="investmentDetails"
                      v-model="form.investmentDetails"
                      class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option disabled value="">Select an Investment Details</option>
                      <option v-for="(option, index) in options" :key="index" :value="option">
                        {{ option }}
                      </option>
                    </select>
                  </div>
                  
                  <!-- Size Field -->
                  <div class="mb-4">
                    <label for="size" class="block text-sm font-medium text-gray-700 mb-2">
                      Size
                    </label>
                    <select
                      id="size"
                      v-model="form.size"
                      class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option disabled value="">Select an size</option>
                      <option v-for="(option, index) in options" :key="index" :value="option">
                        {{ option }}
                      </option>
                    </select>
                  </div>

                 
              </div>
            </div>
             <!-- Submit Button -->
             <div class="m-4 flex ">
                  <button
                    type="button"
                    @click="close()"
                    class="w-full  mr-4 px-4 py-2 border-2 border-gray-200 font-bold bg-inherit text-black rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-900"
                  >
                    Submit
                  </button>
                   </div>
                </form>
               
          </template>
          <template #revenue>
            <p>This is the content of Tab 2</p>
          </template>
          <template #totalRisk>
            <p>This is the content of Tab 3</p>
          </template>
          <template #other>
            <p>This is the content of Tab 3</p>
          </template>
          <template #Financialreturns>
            <p>This is the content of Tab 3</p>
          </template>
          <template #Financialimpact>
            <p>This is the content of Tab 3</p>
          </template>
        </Tabs>
      </div>
    </div>
    </div>
  </transition>
</template>

<script>
import Tabs from "~/components/Tabs.vue";
  export default {
    name: 'Modal',
    data() {
      return {
        form: {
          title: "",
          selectedType: "",
          investmentDetails:"",
          size:"",
        },
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      handleSubmit() {
        console.log("Form submitted:", this.form);
        // Reset the form
        form.title = "";
        form.selectedType = "";
        form.investmentDetails = "";
        form.size = "";
      },

    },
  };
</script>

<style scoped>
.bg-blue-900{
background-color:#0a2368
}
  .half-underline {
      position: relative;
    }

    .half-underline::after {
      content: '';
      position: absolute;
      bottom: -8px; /* Adjust underline position */
      left: 44%; /* Start the underline at 25% of the text width */
      width: 10%; /* Span 50% of the text width */
      height: 3px; /* Thickness of the underline */
      background-color: #dc2626;
       /* Use text color for the underline */
    }
</style>