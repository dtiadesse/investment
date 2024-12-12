
<template>
<UContainer>
    <div class="flex-container">
        <div class="box1">
            <h1 class="investmentScore">Hello Joanna!</h1>
        </div>
        <div class="box1">
            <div class="float-right"><p class="py-1">Search for Investments</p>
           
                <UInput
                    icon="i-heroicons-magnifying-glass-20-solid"
                    size="sm"
                    color="white"
                    :trailing="false"
                    placeholder="Progress Capital"
                />
                 </div>
        </div>
    </div>
    <div class="flex-container">
       <div class="box">      
            <BarChart :dataValue="[65, 59, 80, 81, 56, 55, 40]" :labelDisplay="true" :labelName1="'Pre-Synergy Multiple'" :labelName2="'Post-Synergry Multiple'"/>     
      </div>
      <div class="box">
            <HorizontalBarChart :dataValue="[65, 59, 80, 81, 56, 55, 40]" :labelDisplay="true" :labelName1="'Pre-Synergy Multiple'" :labelName2="'Post-Synergry Multiple'"/>    
      </div>
    </div>
    <div class="container-fluid pt-5">
        <div class="box">
        <div style="display:inline-block;width:100%">
            <div class="investment float-left">
               My Investments
            </div>
            <div class="addButton float-right">
                <UButton
                    icon="i-heroicons-plus"
                    size="sm"
                    style="background-color: #00008b; color: white; border: none;"
                    variant="solid"
                    label="Add Item"
                    :trailing="false"
                />
            </div>
            </div>
            <UTable :rows="people" :columns="columns">
           
                <template #actions-data="{ row }">
                    <div class="button-container">
                        <div class="edit-button">
                            <UButton label="Edit" color="white">
                                <template #leading>
                                    <UIcon name="i-heroicons-pencil-solid" class="w-5 h-5" />
                                </template>
                            </UButton>
                        </div>
                        <UButton color="white">
                            <template #leading>
                                <UIcon name="i-heroicons-trash-solid" class="w-5 h-5 bg-red-700" />
                            </template>
                        </UButton>
                   </div>
                </template>
            </UTable>
        </div>
    </div>
 </UContainer>
</template>

<style scoped>
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
.edit-button{
    padding-right:12px;
    display:inline-block;
}
</style>

<script setup>
import '@/assets/styles/global.css';
import BarChart from '~/components/BarChart.vue';
import HorizontalBarChart from '~/components/HorizontalBarChart.vue';

const columns = [{
  key: 'title',
  label: 'Investment Title'
}, {
  key: 'total',
  label: 'Total Consideration'
}, {
  key: 'guaranteed',
  label: 'Guaranteed'
}, {
  key: 'atRisk',
  label: 'At-risk'
}, {
  key: 'actions'
}]

const people = [{
  title: 'Lindsay Walton',
  total: '10',
  guaranteed: '10',
  atRisk: '10',
}, {
  title: 'Lindsay Walton',
  total: '10',
  guaranteed: '10',
  atRisk: '10',
}, {
  title: 'Lindsay Walton',
  total: '10',
  guaranteed: '10',
  atRisk: '10',
}, {
  title: 'Lindsay Walton',
  total: '10',
  guaranteed: '10',
  atRisk: '10',
}, {
  title: 'Lindsay Walton',
  total: '10',
  guaranteed: '10',
  atRisk: '10',
}, {
  title: 'Lindsay Walton',
   total: '10',
  guaranteed: '10',
  atRisk: '10',
}]






</script>

