<template>
  <div>
    <CharttDetails :chart="foundItem" />
  </div>
</template>

<script setup>
  const { id } = useRoute().params
const charts = [
{id: 120005,title:'Progress Capital - Team - Recruiting',preSynergyMultiple:'3.36', postSynergyMultiple:'5.22'},
{id: 120001,title:'Cynthia Ng - Individual - Recruiting',preSynergyMultiple:'0',postSynergyMultiple:'0'},
{id: 109890,title:'jimo liu - Individual - Recruiting',preSynergyMultiple:'1.59',postSynergyMultiple:'3.03'},
{id: 112345,title:'Louay Alsadek - Team - Recruiting',preSynergyMultiple:'1.1',postSynergyMultiple:'1.91'},
{id: 134009,title:'Miami Industrial - Fernandez & Palazzo - Team - Recruiting',preSynergyMultiple:'3.44',postSynergyMultiple:'3.44'},
{id: 100001,title:'Moseley Watkins - Team - Recruiting',preSynergyMultiple:'1.23',postSynergyMultiple:'3.92'},
{id: 120002,title:'Troy Pollet - Individual - Recruiting',preSynergyMultiple:'3.67',postSynergyMultiple:'3.49'},
{id: 100052,title:'Errol Blumer - Individual - Recruiting',preSynergyMultiple:'5.37',postSynergyMultiple:'0'},
{id: 100022,title:'Mac Crowther Team - Team - Recruiting',preSynergyMultiple:'6.58',postSynergyMultiple:'3.5'},
{id: 100045,title:'Adam Gatto - Individual - Recruiting',preSynergyMultiple:'1.01',postSynergyMultiple:'1.36'},

];


// Finding a single item based on a condition (e.g., find item with id 3)
const foundItem = ref(items.value.find(item => item.id === id));


  definePageMeta({
    layout: "home",
  })
</script>