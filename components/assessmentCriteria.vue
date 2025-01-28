<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center">
      <div class="text-2xl font-bold p-4">Investment Assessment Criteria</div>
      <div class="flex items-center">
        <div v-if="!isEditing" class="px-4 py-2 mr-2 font-bold flex items-center border-2 text-black rounded"
          :class="overallStatusClass">
          <p class="pr-3">Overall Status</p>
          <p class="w-2 h-2 rounded-full mr-2" :class="overallStatusDot"></p>
          <p>{{ OverallStatus }}</p>
        </div>
        <div v-if="isEditing" class="px-4 py-2 mr-2">
          <label class="font-bold pr-3">Overall Status</label>
          <select v-model="OverallStatus"
            class="w-52 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option value="Active/Green">Active/Green</option>
            <option value="/Amber">Amber</option>
            <option value="High Risk / red">High Risk / Red</option>
            <option value="Neutral/Gray">Neutral/Gray</option>
          </select>
        </div>
        <button v-if="!isEditing" @click="editTable"
          class="text-black flex items-center border-2 border-gray-300 font-bold rounded text-sm px-4 py-2">
          <svg class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
          </svg>
          Edit Table
        </button>
        <div v-if="isEditing" class="flex items-center">
          <button @click="cancelEdit"
            class="text-black border-2 border-gray-300 font-bold rounded text-sm px-4 py-2 mr-2">
            Cancel
          </button>
          <button @click="saveEditTable"
            class="text-white bg-blue-400 border-2 border-blue-400 font-bold rounded text-sm px-4 py-2">
            Save Changes
          </button>
        </div>
      </div>
    </div>

    <div class="py-2 px-4 border-b" v-for="item in visibleItems" :key="item.BusinessIntegration">
      <div v-if="!isEditing" class="w-72 flex items-center mr-4">{{ item.BusinessIntegration }}</div>
      <div v-else class="w-72 flex items-center mr-4">
        <select v-model="item.BusinessIntegration"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="Leadership">Leadership</option>
          <option value="Risk /Return">Risk /Return</option>
          <option value="Financial Returns">Financial Returns</option>
          <option value="Financial Impact">Financial Impact</option>
          <option value="Functional Integration / Implementation">Functional Integration / Implementation</option>
          <option value="Business Integration / Implementation">Business Integration / Implementation</option>
        </select>
      </div>
      <div v-if="!isEditing" class="w-60 flex items-center mr-4">{{ item.InitialScore }}</div>
      <div v-else class="w-60 flex items-center mr-4">
        <input type="text" v-model="item.InitialScore"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div v-if="!isEditing" class="w-60 flex items-center mr-4">
        {{ item.CurrentScore }}
      </div>
      <div v-else class="w-60 flex items-center mr-4">
        <input type="text" v-model="item.CurrentScore"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div class="w-2/3 flex items-center">
        <textarea v-if="isEditing" v-model="item.Risks"
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
        <p v-else>{{ item.Risks }}</p>
      </div>
    </div>

    <div class="py-2 px-4 flex justify-end">
      <button @click="toggleExpand" class="text-blue-500 font-bold">
        Expand Full List of Risks {{ isExpanded ? '▲' : '▼' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      OverallStatus: 'Active/Green',
      items: this.tableData,
      isExpanded: false,
      isEditing: false,
    };
  },
  computed: {
    visibleItems() {
      return this.isExpanded ? this.items : this.items.slice(0, 3);
    },
    overallStatusClass() {
      return {
        'border-green-600 bg-green-50': this.OverallStatus === 'Active/Green',
        'border-yellow-600 bg-yellow-50': this.OverallStatus === '/Amber',
        'border-red-600 bg-red-50': this.OverallStatus === 'High Risk / red',
        'border-gray-600 bg-gray-50': this.OverallStatus === 'Neutral/Gray',
      };
    },
    overallStatusDot() {
      return {
        'bg-green-500': this.OverallStatus === 'Active/Green',
        'bg-yellow-500': this.OverallStatus === '/Amber',
        'bg-red-500': this.OverallStatus === 'High Risk / red',
        'bg-gray-500': this.OverallStatus === 'Neutral/Gray',
      };
    },
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    editTable() {
      this.isEditing = true;
    },
    cancelEdit() {
      this.isEditing = false;
    },
    saveEditTable() {
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
.buttonExpand {
  cursor: pointer;
  color: blue;
}

.w-screen {
  width: 40vw;
}
</style>
