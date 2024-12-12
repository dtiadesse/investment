<template>
  <div class="container mx-auto px-4">
    <div class="grid gap-4 grid-cols-2">
      <div class="box1">
        <h1 class="investmentScore">Hello Joanna!</h1>
      </div>
    </div>

    <div class="grid gap-4 grid-cols-2">
      <div
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <BarChart
          :dataValue="[65, 59, 80, 81, 56, 55, 40]"
          :labelDisplay="true"
          :labelName1="'Pre-Synergy Multiple'"
          :labelName2="'Post-Synergry Multiple'"
        />
      </div>
      <div
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <HorizontalBarChart
          :dataValue="[65, 59, 80, 81, 56, 55, 40]"
          :labelDisplay="true"
          :labelName1="'Pre-Synergy Multiple'"
          :labelName2="'Post-Synergry Multiple'"
        />
      </div>
    </div>

    <div class="container-fluid pt-5">
      <div
        class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div style="display: inline-block; width: 100%">
          <div class="investment float-left">My Investments</div>
          <div class="float-right">
            <button
              class="text-white flex bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <svg
                class="h-6 w-6 text-white-700"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <p class="text-base">Add Item</p>
            </button>
          </div>
        </div>

        <div class="relative overflow-x-auto sm:rounded-lg">
          <DataTable :data="tableData" :columns="tableColumns">


            <template #action="{ item }">
              <div class="action-buttons">
                <button @click="editItem(item)">
                  <i class="fas fa-edit"></i> Edit
                </button>
                <button @click="deleteItem(item)">
                  <i class="fas fa-trash"></i> Delete
                </button>
                <button @click="viewItem(item)">
                  <i class="fas fa-eye"></i> View
                </button>
              </div>
            </template>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
  padding: 5px 10px;
  cursor: pointer;
}
button.active {
  font-weight: bold;
  background-color: #ddd;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
.action-buttons {
  display: flex;
  gap: 8px;
}
.action-buttons button {
  display: flex;
  align-items: center;
  gap: 4px;
}

.flex-container {
  display: flex;
  gap: 16px;
}

.box1 {
  flex: 1;
  padding: 16px;
}

.box {
  flex: 1;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.edit-button {
  padding-right: 12px;
  display: inline-block;
}
</style>

<script setup>
import '@/assets/styles/global.css';
import BarChart from '~/components/BarChart.vue';
import HorizontalBarChart from '~/components/HorizontalBarChart.vue';

const viewItem = (item) => {

 alert(`Editing item: ${item.title}`);

}

const tableColumns  = [
    { label: 'ID', key: 'id',  sortable: true  },
    { label: 'Name', key: 'title',  sortable: true   },
    { label: 'Pre Synergy Multiple', key: 'preSynergyMultiple', sortable: true },
    { label: 'Post Synergy Multiple', key: 'postSynergyMultiple', sortable: false },
];

const tableData  = [
    { id: 120005, title: 'Progress Capital - Team - Recruiting', preSynergyMultiple: '3.36', postSynergyMultiple: '5.22' },
    { id: 120001, title: 'Cynthia Ng - Individual - Recruiting', preSynergyMultiple: '0', postSynergyMultiple: '0' },
    { id: 109890, title: 'jimo liu - Individual - Recruiting', preSynergyMultiple: '1.59', postSynergyMultiple: '3.03' },
    { id: 112345, title: 'Louay Alsadek - Team - Recruiting', preSynergyMultiple: '1.1', postSynergyMultiple: '1.91' },
    { id: 134009, title: 'Miami Industrial - Fernandez & Palazzo - Team - Recruiting', preSynergyMultiple: '3.44', postSynergyMultiple: '3.44' },
    { id: 100001, title: 'Moseley Watkins - Team - Recruiting', preSynergyMultiple: '1.23', postSynergyMultiple: '3.92' },
    { id: 120002, title: 'Troy Pollet - Individual - Recruiting', preSynergyMultiple: '3.67', postSynergyMultiple: '3.49' },
    { id: 100052, title: 'Errol Blumer - Individual - Recruiting', preSynergyMultiple: '5.37', postSynergyMultiple: '0' },
    { id: 100022, title: 'Mac Crowther Team - Team - Recruiting', preSynergyMultiple: '6.58', postSynergyMultiple: '3.5' },
    { id: 100045, title: 'Adam Gatto - Individual - Recruiting', preSynergyMultiple: '1.01', postSynergyMultiple: '1.36' },

];

definePageMeta({
    layout: "home",
})
</script>
