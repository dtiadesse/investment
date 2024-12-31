<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="max-w-3xl w-full bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Multi-Tabs Form</h2>

      <!-- Tabs -->
      <div class="border-b mb-6">
        <nav class="flex space-x-4" aria-label="Tabs">
          <button
            v-for="tab in tabs"
            :key="tab.name"
            :class="{
              'text-blue-600 border-blue-500': activeTab === tab.name,
              'text-gray-500 border-transparent': activeTab !== tab.name,
            }"
            @click="activeTab = tab.name"
            class="px-3 py-2 font-medium text-sm border-b-2 focus:outline-none"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <!-- Tab Content -->
      <div>
        <form @submit.prevent="handleSubmit">
          <div v-for="tab in tabs" :key="tab.name" v-if="activeTab === tab.name">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">{{ tab.name }}</h3>
            <!-- Dynamic Form Fields -->
            <div class="mb-4" v-for="(field, index) in tab.fields" :key="index">
              <label :for="field.id" class="block text-sm font-medium text-gray-700 mb-2">
                {{ field.label }}
              </label>
              <input
                v-if="field.type !== 'textarea'"
                :id="field.id"
                :type="field.type"
                v-model="formData[field.id]"
                class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                :placeholder="field.placeholder"
              />
              <textarea
                v-else
                :id="field.id"
                v-model="formData[field.id]"
                rows="4"
                class="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                :placeholder="field.placeholder"
              ></textarea>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between mt-6">
            <button
              type="button"
              @click="previousTab"
              :disabled="activeTabIndex === 0"
              class="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 disabled:bg-gray-200"
            >
              Previous
            </button>
            <button
              v-if="!isLastTab"
              type="button"
              @click="nextTab"
              class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Next
            </button>
            <button
              v-if="isLastTab"
              type="submit"
              class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "Personal Info", // Default active tab
      tabs: [
        {
          name: "Personal Info",
          fields: [
            { id: "name", label: "Name", type: "text", placeholder: "Your name" },
            { id: "email", label: "Email", type: "email", placeholder: "Your email" },
          ],
        },
        {
          name: "Address Info",
          fields: [
            { id: "address", label: "Address", type: "text", placeholder: "Your address" },
            { id: "city", label: "City", type: "text", placeholder: "Your city" },
          ],
        },
        {
          name: "Payment Info",
          fields: [
            { id: "cardNumber", label: "Card Number", type: "text", placeholder: "Card number" },
            { id: "expiryDate", label: "Expiry Date", type: "text", placeholder: "MM/YY" },
          ],
        },
      ],
      formData: {
        name: "",
        email: "",
        address: "",
        city: "",
        cardNumber: "",
        expiryDate: "",
      },
    };
  },
  computed: {
    activeTabIndex() {
      return this.tabs.findIndex((tab) => tab.name === this.activeTab);
    },
    isLastTab() {
      return this.activeTabIndex === this.tabs.length - 1;
    },
  },
  methods: {
    nextTab() {
      if (this.activeTabIndex < this.tabs.length - 1) {
        this.activeTab = this.tabs[this.activeTabIndex + 1].name;
      }
    },
    previousTab() {
      if (this.activeTabIndex > 0) {
        this.activeTab = this.tabs[this.activeTabIndex - 1].name;
      }
    },
    handleSubmit() {
      console.log("Form Submitted", this.formData);
      alert("Form Submitted! Check the console for details.");
    },
  },
};
</script>

<style>
/* Optional: Add custom styles here */
</style>
