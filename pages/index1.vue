
<template>
<UContainer>
    <div class="flex-container">
      <div class="box">
            <h1 class="investmentScore">Investment Scorecard</h1>
            <h2 class="italic font-bold">Strategic Alignment - Price Discovery</h2>
      </div> 
    </div>

    <div class="flex-container">
      <div class="box"> 
        <UTable id="table" :rows="items" :columns="columns">
          <template #name-data="{ row }">
              {{ row.name.value }}
            </template>
            <template #status-data="{ row }">
              {{ row.status.value }}
            </template>
            <template #biggestRisk-data="{ row }">
              {{ row.biggestRisk.value }}
            </template>
          </UTable>
      </div>

      <div class="box">
        <div class="chart1">
            <h3 class="text-center font-bold">Financial Impact</h3>            
            <div class="custom-divider"></div>
            <BarChart :dataValue="[10.5, 11.2, 12.3, 14, 14.5]" :labelDisplay="false"/>
        </div>
        <div class=""chart2>
            <BarChart :dataValue="[2, 2, 2.5, 2.6, 2.8]" :labelDisplay="true" :labelName1="'Actuals+Forecast'" :labelName2="'Underwriting'"/>
            <h3 class="text-center font-bold">Financial Returns</h3>
        </div>
        <div class="custom-divider"></div>
        <div class="reviseTable"> 
        <UTable id="table2" :rows="rowItems" :columns="columnsItem">
          <template #name-data="{ row }">
              {{ row.name.value }}
            </template>
            <template #initial-data="{ row }">
              {{ row.initial.value }}
            </template>
            <template #latestRevised-data="{ row }">
              {{ row.latestRevised.value }}
            </template>
            <template #delta-data="{ row }">
              {{ row.delta.value }}
            </template>
          </UTable>
          </div>
      </div>
    </div>
 </UContainer>
</template>

<style scoped>
.flex-container {
  display: flex;
  gap: 16px;
}
.box {
  flex: 1;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}
</style>

<script setup>
import '@/assets/styles/global.css';
import BarChart from '~/components/BarChart.vue';

const columnsItem = [{
  key: 'name',
}, {
  key: 'initial',
  label: 'Initial'
}, {
  key: 'latestRevised',
  label: 'Latest Revised'
}, {
  key: 'delta',
  label: 'Delta'
}]

const rowItems = [{  
  name: {value:'RR',class: 'font-bold'},
  initial: {value:'18.5%',class: 'font-bold'},
  latestRevised: {value:'15%',class: 'font-bold'},
  delta: {value:'-4%',class: 'bg-red-700 font-bold'},
},{  
  name: {value:'Payback',class: 'font-bold'},
  initial: {value:'3.7yrs',class: 'font-bold'},
  latestRevised: {value:'3.9yrs',class: 'font-bold'},
  delta: {value:'0.2yrs%',class: 'bg-green-700 font-bold'},
},{  
  name: {value:'Pre-EBITDAx',class: 'font-bold'},
  initial: {value:'5.7x',class: 'font-bold'},
  latestRevised: {value:'5.9x',class: 'font-bold'},
  delta: {value:'0.2x',class: 'bg-green-700 font-bold'},
},{  
  name: {value:'Pre-EBITDAx',class: 'font-bold'},
  initial: {value:'4.8x',class: 'font-bold'},
  latestRevised: {value:'5.1x',class: 'font-bold'},
  delta: {value:'0.3x',class: 'bg-green-700 font-bold'},
},{  
  name: {value:'CTA',class: 'font-bold'},
  initial: {value:'$8.0m',class: 'font-bold'},
  latestRevised: {value:'$8.5m',class: 'font-bold'},
  delta: {value:'$0.5m',class: 'bg-green-700 font-bold'},
}]

const columns = [{
  key: 'name',
}, {
  key: 'status',
  label: 'Status',
}, {
  key: 'biggestRisk',
  label: 'Biggest Risks'
}]

const items = [{  
  name: {value:'Business Integration/ Implementation',class: 'bg-gray-300'},
  status: {value:'',class: 'bg-green-700'},
  biggestRisk: {value:'[Insert]',class: 'bg-gray-200'},
}, {  
  name: {value:'Functional Integration/ Implementation',class: 'bg-gray-200'},
  status: {value:'',class: 'bg-yellow-500'},  
  biggestRisk: {value:'[Insert]',class: 'bg-gray-200'},
}, { 
  name: {value:'Financial Impact',class: 'bg-gray-300'},
  status: {value:'',class: 'bg-yellow-500'},
  biggestRisk: {value:'[Insert]',class: 'bg-gray-200'}
}, {  
  name: {value:'Financial Returns',class: 'bg-gray-200'},
  status: {value:'',class: 'bg-gray-800'},
  biggestRisk: {value:'[Insert]',class: 'bg-gray-200'}
}, {  
  name: {value:'Risk / Return',class: 'bg-gray-300'},
  status: {value:'',class: 'bg-green-700'},
  biggestRisk: {value:'[Insert]',class: 'bg-gray-200'}
}, {  
  name: {value:'Leadership',class: 'bg-gray-200'},
  status: {value:'',class: 'bg-red-700'},
  biggestRisk: {value:'[Insert]',class: 'bg-gray-200'}
}]
</script>

