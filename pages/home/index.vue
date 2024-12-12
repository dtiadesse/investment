<template>
    <div>
    
          <DataTable
      :data="tableData"
      :columns="tableColumns"
      
     
    >
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
</template>

<style>

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
</style>

<script setup>

const viewItem = (item) => {

 alert(`Editing item: ${item.title}`);
    
}

const tableColumns  = [
    { label: 'ID', key: 'id',  sortable: true },
    { label: 'Name', key: 'title',  sortable: true  },
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

